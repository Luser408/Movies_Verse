
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Contact {
  id: string;
  name: string;
  avatar: string;
  status: "online" | "offline" | "away";
  lastSeen?: Date;
}

interface ChatHeaderProps {
  contact: Contact;
  onMenuToggle: () => void;
}

const ChatHeader = ({ contact, onMenuToggle }: ChatHeaderProps) => {
  return (
    <header className="h-16 border-b border-border flex items-center px-4 bg-background sticky top-0 z-10">
      <Button 
        variant="ghost" 
        size="icon" 
        className="md:hidden mr-2" 
        onClick={onMenuToggle}
      >
        <Menu size={20} />
      </Button>
      
      <div className="flex items-center gap-3">
        <div className="relative">
          <img
            src={contact.avatar}
            alt={contact.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className={`absolute right-0 bottom-0 w-2.5 h-2.5 rounded-full border-2 border-background ${
            contact.status === 'online' ? 'bg-green-500' :
            contact.status === 'away' ? 'bg-yellow-500' : 'bg-gray-400'
          }`}></span>
        </div>
        <div>
          <h3 className="font-medium">{contact.name}</h3>
          <p className="text-xs text-muted-foreground">
            {contact.status === 'online'
              ? 'Online'
              : contact.status === 'away'
              ? 'Away'
              : contact.lastSeen
              ? `Last seen ${new Date(contact.lastSeen).toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit'
                })}`
              : 'Offline'}
          </p>
        </div>
      </div>
      
      <div className="ml-auto flex items-center gap-2">
        {/* Additional buttons could go here (video call, audio call, etc.) */}
      </div>
    </header>
  );
};

export default ChatHeader;
