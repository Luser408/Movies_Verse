
import { useState, useEffect, useRef } from "react";
import { ThemeProvider } from "@/components/ThemeProvider";
import ChatSidebar from "@/components/chat/ChatSidebar";
import ChatHeader from "@/components/chat/ChatHeader";
import ChatMessages from "@/components/chat/ChatMessages";
import ChatInput from "@/components/chat/ChatInput";
import { generateMessage } from "@/utils/chatUtils";

export interface Message {
  id: string;
  text: string;
  sender: "user" | "other";
  timestamp: Date;
  status: "sent" | "delivered" | "read";
  isEmoji?: boolean;
}

export interface Conversation {
  id: string;
  contact: {
    id: string;
    name: string;
    avatar: string;
    status: "online" | "offline" | "away";
    lastSeen?: Date;
  };
  messages: Message[];
  unreadCount: number;
}

const initialConversations: Conversation[] = [
  {
    id: "1",
    contact: {
      id: "c1",
      name: "Sarah Johnson",
      avatar: "https://i.pravatar.cc/150?img=32",
      status: "online"
    },
    messages: [
      {
        id: "m1",
        text: "Hey there! How's your project coming along?",
        sender: "other",
        timestamp: new Date(Date.now() - 3600000),
        status: "read"
      },
      {
        id: "m2",
        text: "Pretty good! I'm working on the chat interface now",
        sender: "user",
        timestamp: new Date(Date.now() - 3500000),
        status: "read"
      },
      {
        id: "m3",
        text: "That's awesome! Can't wait to see it",
        sender: "other",
        timestamp: new Date(Date.now() - 3400000),
        status: "read"
      }
    ],
    unreadCount: 0
  },
  {
    id: "2",
    contact: {
      id: "c2",
      name: "Alex Chen",
      avatar: "https://i.pravatar.cc/150?img=11",
      status: "offline",
      lastSeen: new Date(Date.now() - 7200000)
    },
    messages: [
      {
        id: "m4",
        text: "Are we still meeting tomorrow?",
        sender: "other",
        timestamp: new Date(Date.now() - 86400000),
        status: "read"
      }
    ],
    unreadCount: 0
  },
  {
    id: "3",
    contact: {
      id: "c3",
      name: "Michael Rodriguez",
      avatar: "https://i.pravatar.cc/150?img=53",
      status: "away"
    },
    messages: [
      {
        id: "m5",
        text: "I sent you the design files",
        sender: "other",
        timestamp: new Date(Date.now() - 172800000),
        status: "read"
      },
      {
        id: "m6",
        text: "Got them, thanks!",
        sender: "user",
        timestamp: new Date(Date.now() - 172700000),
        status: "delivered"
      }
    ],
    unreadCount: 0
  }
];

const ChatApp = () => {
  const [conversations, setConversations] = useState<Conversation[]>(initialConversations);
  const [activeConversationId, setActiveConversationId] = useState<string>("1");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const messageEndRef = useRef<HTMLDivElement>(null);

  // Effect for simulated "typing" from the other person
  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * conversations.length);
      const randomConversation = conversations[randomIndex];
      
      if (Math.random() > 0.7) {  // 30% chance of getting a new message
        const newMessage = generateMessage(randomConversation.contact.name);
        
        setConversations(prevConversations => 
          prevConversations.map(conv => {
            if (conv.id === randomConversation.id) {
              return {
                ...conv,
                messages: [...conv.messages, {
                  id: `m${Date.now()}`,
                  text: newMessage,
                  sender: "other",
                  timestamp: new Date(),
                  status: activeConversationId === conv.id ? "read" : "delivered"
                }],
                unreadCount: activeConversationId === conv.id ? 0 : conv.unreadCount + 1
              };
            }
            return conv;
          })
        );
      }
    }, 15000);  // Every 15 seconds

    return () => clearInterval(interval);
  }, [conversations, activeConversationId]);

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [conversations]);

  const activeConversation = conversations.find(conv => conv.id === activeConversationId) || conversations[0];

  const handleSendMessage = (text: string, isEmoji: boolean = false) => {
    const newMessage: Message = {
      id: `m${Date.now()}`,
      text,
      sender: "user",
      timestamp: new Date(),
      status: "sent",
      isEmoji
    };

    setConversations(prevConversations => 
      prevConversations.map(conv => {
        if (conv.id === activeConversationId) {
          return {
            ...conv,
            messages: [...conv.messages, newMessage]
          };
        }
        return conv;
      })
    );

    // Simulate message being delivered after a short delay
    setTimeout(() => {
      setConversations(prevConversations => 
        prevConversations.map(conv => {
          if (conv.id === activeConversationId) {
            return {
              ...conv,
              messages: conv.messages.map(msg => {
                if (msg.id === newMessage.id) {
                  return { ...msg, status: "delivered" };
                }
                return msg;
              })
            };
          }
          return conv;
        })
      );
    }, 1000);

    // Simulate message being read after another delay
    setTimeout(() => {
      setConversations(prevConversations => 
        prevConversations.map(conv => {
          if (conv.id === activeConversationId) {
            return {
              ...conv,
              messages: conv.messages.map(msg => {
                if (msg.id === newMessage.id) {
                  return { ...msg, status: "read" };
                }
                return msg;
              })
            };
          }
          return conv;
        })
      );
    }, 2500);
  };

  const handleConversationSelect = (id: string) => {
    setActiveConversationId(id);
    setIsMobileMenuOpen(false);
    
    // Mark messages as read when conversation is selected
    setConversations(prevConversations => 
      prevConversations.map(conv => {
        if (conv.id === id) {
          return {
            ...conv,
            unreadCount: 0,
            messages: conv.messages.map(msg => {
              if (msg.sender === "other" && msg.status !== "read") {
                return { ...msg, status: "read" };
              }
              return msg;
            })
          };
        }
        return conv;
      })
    );
  };

  return (
    <ThemeProvider>
      <div className="h-screen flex flex-col bg-background text-foreground">
        <div className="flex flex-1 h-full overflow-hidden">
          <ChatSidebar 
            conversations={conversations} 
            activeId={activeConversationId}
            onSelectConversation={handleConversationSelect}
            isMobileOpen={isMobileMenuOpen}
            onCloseMobile={() => setIsMobileMenuOpen(false)}
          />
          
          <div className="flex-1 flex flex-col h-full">
            <ChatHeader 
              contact={activeConversation.contact} 
              onMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            />
            
            <ChatMessages 
              messages={activeConversation.messages} 
              messageEndRef={messageEndRef} 
            />
            
            <ChatInput onSendMessage={handleSendMessage} />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default ChatApp;
