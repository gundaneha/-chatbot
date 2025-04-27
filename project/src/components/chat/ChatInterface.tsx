import React, { useRef, useEffect } from 'react';
import { useChatContext } from '../../context/ChatContext';
import MessageBubble from './MessageBubble';
import UserInput from './UserInput';
import QuickActions from './QuickActions';
import TypingIndicator from './TypingIndicator';

const ChatInterface = () => {
  const { messages, isTyping, sendMessage, suggestedActions, selectSuggestedAction } = useChatContext();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  return (
    <div className="flex flex-col h-full max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      {/* Messages area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <MessageBubble key={message.id} message={message} />
        ))}
        
        {isTyping && <TypingIndicator />}
        
        <div ref={messagesEndRef} />
      </div>
      
      {/* Quick action suggestions */}
      <QuickActions 
        actions={suggestedActions} 
        onSelectAction={selectSuggestedAction} 
      />
      
      {/* User input area */}
      <UserInput onSendMessage={sendMessage} />
    </div>
  );
};

export default ChatInterface;