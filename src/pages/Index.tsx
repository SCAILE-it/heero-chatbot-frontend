// This is the main chat page component
// It initializes the chat state and renders the chat interface

import { useRef } from "react";

import { useChatState } from "@/hooks/useChatState";
import ChatContainer from "@/components/chat/ChatContainer";
import ChatFooter from "@/components/chat/ChatFooter";
import ChatHeader from "@/components/chat/ChatHeader";
import ChatInput from "@/components/chat/ChatInput";
import FileUploadBar from "@/components/chat/FileUploadBar";
import PillBar from "@/components/chat/PillBar";

const Index = () => {
  // Function to get the sessionId from URL parameters
  const getSessionId = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("sessionId") || "";
  };

  // Function to get the variant from URL parameters, defaulting to "emobility"
  const getVariant = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("variant") || "emobility";
  };

  const {
    messages,
    isTyping,
    files,
    pills,
    inputValue,
    setInputValue,
    sendMessage,
    handleFilesAdded,
    handleFileRemove,
    clearFiles,
    resetChat,
  } = useChatState({
    variant: getVariant(),
    apiUrl: import.meta.env.VITE_API_URL, // API URL from environment variables
  });

  const fileInputRef = useRef<HTMLInputElement>(null); // Reference to the hidden file input

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* HEERO Minibus background image - optimized WebP format */}
      <div
        className="fixed inset-0 z-0 w-screen h-screen bg-gradient-to-br from-blue-900 to-blue-600 transition-opacity duration-1000"
        style={{
          backgroundImage: `
            url('/uploads/heero-fridgebox.webp'),
            url('/uploads/heero-minibus-background.jpg')
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        onError={(e) => console.log('Background image fallback used:', e)}
      />
      
      {/* Blue overlay for brand consistency and readability */}
      <div
        className="fixed inset-0 z-1 w-screen h-screen"
        style={{
          background: `
            linear-gradient(135deg, rgba(30, 64, 175, 0.5) 0%, rgba(59, 130, 246, 0.4) 50%, rgba(219, 234, 254, 0.3) 100%)
          `,
        }}
      />
      
      {/* Subtle geometric pattern overlay for texture */}
      <div
        className="fixed inset-0 z-2 w-screen h-screen opacity-15"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.3) 1px, transparent 1px),
            radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px, 150px 150px',
          backgroundPosition: '0 0, 50px 50px',
        }}
      />

      {/* Content overlay */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <ChatHeader onResetChat={resetChat} />

        {/* Main chat area */}
        <main
          className="flex flex-col px-2 md:px-4 overflow-y-auto"
          style={{
            paddingTop: "64px",
            height: "100vh",
          }}
        >
          {/* Chat messages container */}
          <div className="flex-1 overflow-hidden pb-[70px] md:pb-[160px]">
            <ChatContainer
              messages={messages}
              isTyping={isTyping}
              files={files}
            />
          </div>
        </main>

        {/* Chat input + pills (fixed) */}
        <div className="fixed bottom-12 left-0 right-0 z-20 px-4">
          <div className="max-w-4xl mx-auto">
            {pills.length > 0 && (
              <div className="mb-4">
                <PillBar pills={pills} onPillClick={setInputValue} />
              </div>
            )}
            <ChatInput
              value={inputValue}
              onChange={setInputValue}
              onSendMessage={(message) => {
                sendMessage(message, files);
                clearFiles();
              }}
              onFileButtonClick={() => fileInputRef.current?.click()}
              hasFiles={files.length > 0}
              disabled={isTyping}
              fileBubbles={
                <FileUploadBar
                  files={files}
                  onFilesAdded={handleFilesAdded}
                  onFileRemove={handleFileRemove}
                  uploadInputRef={fileInputRef}
                />
              }
            />
            {/* Hidden file input */}
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              multiple
              accept=".pdf,.png,.jpg,.jpeg,.doc,.docx"
              onChange={(e) => {
                if (e.target.files?.length) {
                  handleFilesAdded(Array.from(e.target.files));
                  e.target.value = "";
                }
              }}
            />
          </div>
        </div>
        <ChatFooter />
      </div>
    </div>
  );
};

export default Index;
