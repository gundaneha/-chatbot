import React, { useState } from 'react';
import { Send, Mic, Paperclip } from 'lucide-react';

interface UserInputProps {
  onSendMessage: (message: string) => void;
}

const UserInput: React.FC<UserInputProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <div className="border-t border-gray-200 p-3 bg-white">
      <form onSubmit={handleSubmit} className="flex items-end gap-2">
        <button
          type="button"
          className="p-2 text-gray-500 hover:text-purple-600 transition-colors"
          aria-label="Attach file"
        >
          <Paperclip size={20} />
        </button>
        
        <div className="flex-1 bg-gray-100 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-purple-500 focus-within:bg-white transition-all">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="w-full bg-transparent border-none focus:outline-none resize-none max-h-32 text-sm sm:text-base"
            rows={1}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSubmit(e);
              }
            }}
          />
        </div>
        
        <button
          type="button"
          className="p-2 text-gray-500 hover:text-purple-600 transition-colors"
          aria-label="Voice input"
        >
          <Mic size={20} />
        </button>
        
        <button
          type="submit"
          className={`p-2 rounded-full ${
            message.trim()
              ? 'bg-purple-600 text-white hover:bg-purple-700'
              : 'bg-gray-200 text-gray-400'
          } transition-colors`}
          disabled={!message.trim()}
          aria-label="Send message"
        >
          <Send size={20} />
        </button>
      </form>
    </div>
  );
};

export default UserInput;