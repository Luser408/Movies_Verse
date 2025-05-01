
import { useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";
import { Conversation } from "@/pages/ChatApp";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ChatSidebarProps {
  conversations: Conversation[];
  activeId: string;
  onSelectConversation: (id: string) => void;
  isMobileOpen: boolean;
  onCloseMobile: () => void;
}

const ChatSidebar = ({
  conversations,
  activeId,
  onSelectConversation,
  isMobileOpen,
  onCloseMobile
}: ChatSidebarProps) => {
  const { theme, toggleTheme } = useTheme();
  
  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const sidebar = document.getElementById('chat-sidebar');
      if (sidebar && !sidebar.contains(e.target as Node) && isMobileOpen) {
        onCloseMobile();
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileOpen, onCloseMobile]);

  const formatTime = (date: Date) => {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    
    if (date.toDateString() === today.toDateString()) {
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } else if (date.toDateString() === yesterday.toDateString()) {
      return 'Yesterday';
    } else {
      return date.toLocaleDateString([], { month: 'short', day: 'numeric' });
    }
  };

  const getLastMessage = (conversation: Conversation) => {
    const messages = conversation.messages;
    return messages.length > 0 ? messages[messages.length - 1] : null;
  };

  return (
    <div
      id="chat-sidebar"
      className={`w-80 border-r border-border bg-background flex flex-col transition-all duration-300 z-20 ${
        isMobileOpen ? 'fixed inset-y-0 left-0 block' : 'hidden md:flex'
      }`}
    >
      <div className="p-4 border-b border-border flex items-center justify-between">
        <h2 className="font-semibold text-lg">Messages</h2>
        <Button variant="ghost" size="icon" onClick={toggleTheme} className="ml-auto">
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </Button>
      </div>

      <ScrollArea className="flex-1">
        <div className="py-2">
          {conversations.map((conversation) => {
            const lastMessage = getLastMessage(conversation);
            const { contact } = conversation;
            
            return (
              <div
                key={conversation.id}
                className={`p-3 mx-2 my-1 rounded-lg flex items-center gap-3 cursor-pointer transition-colors ${
                  activeId === conversation.id
                    ? 'bg-accent text-accent-foreground'
                    : 'hover:bg-muted'
                }`}
                onClick={() => onSelectConversation(conversation.id)}
              >
                <div className="relative flex-shrink-0">
                  <img
                    src={contact.avatar}
                    alt={contact.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <span className={`absolute right-0 bottom-0 w-3 h-3 rounded-full border-2 border-background ${
                    contact.status === 'online' ? 'bg-green-500' :
                    contact.status === 'away' ? 'bg-yellow-500' : 'bg-gray-400'
                  }`}></span>
                </div>
                <div className="flex-1 overflow-hidden">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium truncate">{contact.name}</h3>
                    {lastMessage && (
                      <span className="text-xs text-muted-foreground">
                        {formatTime(lastMessage.timestamp)}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-1">
                    {lastMessage && (
                      <p className={`text-sm truncate ${
                        conversation.unreadCount > 0 ? 'font-medium' : 'text-muted-foreground'
                      }`}>
                        {lastMessage.sender === 'user' && '• '}
                        {lastMessage.text}
                      </p>
                    )}
                  </div>
                </div>
                {conversation.unreadCount > 0 && (
                  <span className="bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {conversation.unreadCount}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </ScrollArea>
    </div>
  );
};

export default ChatSidebar;
