
import { RefObject } from "react";
import { Message } from "@/pages/ChatApp";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ChatMessagesProps {
  messages: Message[];
  messageEndRef: RefObject<HTMLDivElement>;
}

const ChatMessages = ({ messages, messageEndRef }: ChatMessagesProps) => {
  // Group messages by date
  const groupedMessages: { [key: string]: Message[] } = messages.reduce((groups, message) => {
    const date = message.timestamp.toDateString();
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(message);
    return groups;
  }, {} as { [key: string]: Message[] });

  const formatDate = (date: string) => {
    const messageDate = new Date(date);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    
    if (messageDate.toDateString() === today.toDateString()) {
      return "Today";
    } else if (messageDate.toDateString() === yesterday.toDateString()) {
      return "Yesterday";
    } else {
      return messageDate.toLocaleDateString(undefined, { 
        weekday: 'long', 
        month: 'long', 
        day: 'numeric' 
      });
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'sent':
        return '•';
      case 'delivered':
        return '••';
      case 'read':
        return '✓✓';
      default:
        return '';
    }
  };

  return (
    <ScrollArea className="flex-1 p-4 overflow-y-auto">
      {Object.keys(groupedMessages).map((date) => (
        <div key={date}>
          <div className="flex justify-center my-4">
            <span className="px-3 py-1 text-xs bg-muted text-muted-foreground rounded-full">
              {formatDate(date)}
            </span>
          </div>
          
          {groupedMessages[date].map((message) => (
            <div
              key={message.id}
              className={`flex mb-3 ${message.sender === 'user' ? 'justify-end' : 'justify-start'} ${
                message.isEmoji ? 'text-4xl' : ''
              }`}
            >
              <div
                className={`max-w-[75%] rounded-2xl px-4 py-2 animate-fade-in ${
                  message.sender === 'user'
                    ? 'bg-primary text-primary-foreground rounded-tr-none'
                    : 'bg-muted text-foreground rounded-tl-none'
                }`}
              >
                <div>{message.text}</div>
                <div className="flex justify-end items-center gap-1 mt-1">
                  <span className="text-xs opacity-70">
                    {formatTime(message.timestamp)}
                  </span>
                  {message.sender === 'user' && (
                    <span className="text-xs opacity-70 ml-1">{getStatusIcon(message.status)}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
      <div ref={messageEndRef} />
    </ScrollArea>
  );
};

export default ChatMessages;
