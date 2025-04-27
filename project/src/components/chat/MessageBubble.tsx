import React from 'react';
import { MessageType } from '../../context/ChatContext';
import JobListingCard from '../cards/JobListingCard';
import EventCard from '../cards/EventCard';
import MentorshipCard from '../cards/MentorshipCard';
import AvatarDisplay from './AvatarDisplay';

interface MessageBubbleProps {
  message: MessageType;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const isUser = message.sender === 'user';
  
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4 animate-fadeIn`}>
      {!isUser && <AvatarDisplay />}
      
      <div className={`max-w-[80%] ${isUser ? 'order-1' : 'order-2'}`}>
        <div
          className={`px-4 py-3 rounded-2xl ${
            isUser
              ? 'bg-purple-600 text-white rounded-tr-none'
              : 'bg-gray-100 text-gray-800 rounded-tl-none'
          }`}
        >
          <p className="text-sm sm:text-base">{message.content}</p>
          
          {/* Render different card types based on message type */}
          {message.type === 'job' && message.data && (
            <div className="mt-3 space-y-3">
              {message.data.map((job: any) => (
                <JobListingCard key={job.id} job={job} />
              ))}
            </div>
          )}
          
          {message.type === 'event' && message.data && (
            <div className="mt-3 space-y-3">
              {message.data.map((event: any) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          )}
          
          {message.type === 'mentor' && message.data && (
            <div className="mt-3 space-y-3">
              {message.data.map((mentor: any) => (
                <MentorshipCard key={mentor.id} mentor={mentor} />
              ))}
            </div>
          )}
        </div>
        
        <div className={`text-xs text-gray-500 mt-1 ${isUser ? 'text-right' : 'text-left'}`}>
          {formatTime(message.timestamp)}
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;