
import { useState, useRef } from "react";
import { Smile, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { toast } from "@/components/ui/sonner";

const emojiOptions = ["😊", "❤️", "👍", "😂", "😍", "🎉", "🔥", "👏", "🙏", "💯"];

interface ChatInputProps {
  onSendMessage: (text: string, isEmoji?: boolean) => void;
}

const ChatInput = ({ onSendMessage }: ChatInputProps) => {
  const [message, setMessage] = useState("");
  const [showEmojis, setShowEmojis] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSendMessage = () => {
    if (message.trim()) {
      onSendMessage(message.trim());
      setMessage("");
      setShowEmojis(false);
      inputRef.current?.focus();
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleEmojiClick = (emoji: string) => {
    if (message.length === 0) {
      onSendMessage(emoji, true);
      toast.success("Emoji sent!");
    } else {
      setMessage(prev => prev + emoji);
      inputRef.current?.focus();
    }
  };

  return (
    <div className="p-4 border-t border-border bg-background">
      {showEmojis && (
        <div className="bg-background border border-border rounded-lg p-2 mb-2 animate-scale-in">
          <ToggleGroup type="multiple" className="flex flex-wrap justify-center">
            {emojiOptions.map((emoji) => (
              <ToggleGroupItem
                key={emoji}
                value={emoji}
                aria-label={`Emoji ${emoji}`}
                className="text-2xl p-2 hover:bg-muted"
                onClick={() => handleEmojiClick(emoji)}
              >
                {emoji}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>
      )}

      <div className="flex items-center gap-2">
        <Button
          variant="ghost" 
          size="icon"
          onClick={() => setShowEmojis(!showEmojis)}
          className="flex-shrink-0"
        >
          <Smile size={20} />
        </Button>
        
        <Input
          ref={inputRef}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Type a message..."
          className="flex-grow"
          autoComplete="off"
        />
        
        <Button 
          onClick={handleSendMessage}
          disabled={!message.trim()} 
          size="icon"
          className="flex-shrink-0"
        >
          <Send size={20} />
        </Button>
      </div>
    </div>
  );
};

export default ChatInput;
