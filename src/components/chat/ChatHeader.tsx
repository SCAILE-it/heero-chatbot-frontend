// This component is a header for a chat interface, providing HEERO Motors branding and a call-to-action button for users to request information about electric vehicle solutions.

import { IconArrowUpRight } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";

const ChatHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-100 p-4 md:p-4 px-2 md:px-4 flex justify-between items-center background-[color:var(--transparent-10)] backdrop-blur-md">
      <div className="flex items-center">
        <a
          href="https://www.heero-motors.de/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex items-center gap-2">
            <div className="text-lg md:text-xl font-bold text-[color:var(--primary-blue)]">
              HEERO
            </div>
            <div className="text-sm md:text-base text-[color:var(--neutral-grey)] font-medium">
              Motors
            </div>
          </div>
        </a>
      </div>
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
    </header>
  );
};

export default ChatHeader;
