// This component is a header for a chat interface, providing HEERO Motors branding and a call-to-action button for users to request information about electric vehicle solutions.

import { IconArrowUpRight } from "@tabler/icons-react";
import { RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

type ChatHeaderProps = {
  onResetChat?: () => void;
};

const ChatHeader = ({ onResetChat }: ChatHeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-100 p-4 md:p-4 px-2 md:px-4 flex justify-between items-center bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="flex items-center">
        <a
          href="https://www.heero-motors.de/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex items-center gap-2">
            <img
              src="/heero-label.png"
              alt="HEERO Motors"
              className="h-8 md:h-10 object-contain filter brightness-0 invert drop-shadow-lg"
            />
          </div>
        </a>
      </div>
      <div className="flex items-center gap-2">
        {/* Reset Chat Button */}
        {onResetChat && (
          <Button
            onClick={onResetChat}
            size="default"
            variant="ghost"
            className="text-xs px-3 py-1.5 md:text-sm md:px-4 md:py-2 bg-[color:var(--transparent-10)] hover:bg-[color:var(--transparent-20)] rounded-lg"
            type="button"
            aria-label="Chat zurücksetzen"
          >
            <RotateCcw
              size={18}
              className="text-[color:var(--primary-creme)]"
            />
            <span className="text-[color:var(--primary-creme)] text-sm">
              Chat zurücksetzen
            </span>
          </Button>
        )}
        
        {/* Probefahrt Button */}
        <Button
          asChild
          variant="default"
          className="text-xs px-3 py-1.5 md:text-sm md:px-4 md:py-2 bg-[color:var(--primary-blue)] hover:bg-[color:var(--primary-hover)] text-white"
        >
          <a
            href="https://www.heero-motors.de/probefahrt"
            target="_blank"
            rel="noopener noreferrer"
          >
            Probefahrt buchen
            <IconArrowUpRight size={14} stroke={2} className="ml-1" />
          </a>
        </Button>
      </div>
    </header>
  );
};

export default ChatHeader;
