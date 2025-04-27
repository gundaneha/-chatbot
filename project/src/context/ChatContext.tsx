import React, { createContext, useContext, useState, useEffect } from 'react';
import { sampleJobs } from '../data/sampleJobs';
import { sampleEvents } from '../data/sampleEvents';
import { sampleMentors } from '../data/sampleMentors';

export type MessageType = {
  id: string;
  content: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
  type?: 'text' | 'job' | 'event' | 'mentor' | 'suggestion';
  data?: any;
};

interface ChatContextType {
  messages: MessageType[];
  isTyping: boolean;
  sendMessage: (content: string) => void;
  suggestedActions: string[];
  selectSuggestedAction: (action: string) => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const useChatContext = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChatContext must be used within a ChatProvider');
  }
  return context;
};

export const ChatProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [suggestedActions, setSuggestedActions] = useState<string[]>([
    'Find a job',
    'Connect with a mentor',
    'Upcoming events',
    'Success stories'
  ]);
  
  // Initialize chat with a welcome message
  useEffect(() => {
    const welcomeMessage: MessageType = {
      id: 'welcome-msg',
      content: "Hello! I'm Asha, your AI career assistant from JobsForHer. I'm here to help you discover job opportunities, connect with mentors, and find events to boost your career. How can I assist you today?",
      sender: 'assistant',
      timestamp: new Date(),
    };
    
    setMessages([welcomeMessage]);
  }, []);

  const processMessage = (content: string) => {
    // Simple keyword-based response logic
    const lowerContent = content.toLowerCase();
    setIsTyping(true);
    
    // Simulate typing delay
    setTimeout(() => {
      let responseMessage: MessageType;
      
      if (lowerContent.includes('job') || lowerContent.includes('career') || lowerContent.includes('work')) {
        responseMessage = {
          id: Date.now().toString(),
          content: "I found some job opportunities that might interest you. Here are the top matches:",
          sender: 'assistant',
          timestamp: new Date(),
          type: 'job',
          data: sampleJobs.slice(0, 3)
        };
        
        setSuggestedActions(['See more jobs', 'Filter by remote', 'Filter by experience', 'Save these jobs']);
      }
      else if (lowerContent.includes('mentor') || lowerContent.includes('guide') || lowerContent.includes('advice')) {
        responseMessage = {
          id: Date.now().toString(),
          content: "Connecting with the right mentor can accelerate your career growth. Here are some mentors available for sessions:",
          sender: 'assistant',
          timestamp: new Date(),
          type: 'mentor',
          data: sampleMentors.slice(0, 2)
        };
        
        setSuggestedActions(['Schedule a session', 'View all mentors', 'Leadership mentors', 'Tech mentors']);
      }
      else if (lowerContent.includes('event') || lowerContent.includes('webinar') || lowerContent.includes('workshop')) {
        responseMessage = {
          id: Date.now().toString(),
          content: "There are several upcoming events that can help you network and learn new skills:",
          sender: 'assistant',
          timestamp: new Date(),
          type: 'event',
          data: sampleEvents.slice(0, 2)
        };
        
        setSuggestedActions(['Register for events', 'Virtual events', 'This week', 'Networking events']);
      }
      else if (lowerContent.includes('success') || lowerContent.includes('inspire') || lowerContent.includes('story')) {
        responseMessage = {
          id: Date.now().toString(),
          content: "It's always inspiring to hear success stories! Priya Shah transitioned from a 4-year career break to a Senior Product Manager role after connecting with a mentor through JobsForHer. Her mentor helped her rebuild confidence and update her skills with the latest industry trends.",
          sender: 'assistant',
          timestamp: new Date()
        };
        
        setSuggestedActions(['More success stories', 'Find a mentor', 'Resume tips', 'Career break advice']);
      }
      else {
        responseMessage = {
          id: Date.now().toString(),
          content: "I'm here to help you with job opportunities, mentorship connections, upcoming events, and career guidance. Would you like me to help you with any of these areas?",
          sender: 'assistant',
          timestamp: new Date()
        };
        
        setSuggestedActions(['Find a job', 'Connect with a mentor', 'Upcoming events', 'Success stories']);
      }
      
      setMessages(prevMessages => [...prevMessages, responseMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const sendMessage = (content: string) => {
    if (!content.trim()) return;
    
    const userMessage: MessageType = {
      id: Date.now().toString(),
      content,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prevMessages => [...prevMessages, userMessage]);
    processMessage(content);
  };

  const selectSuggestedAction = (action: string) => {
    sendMessage(action);
  };

  return (
    <ChatContext.Provider value={{ 
      messages, 
      isTyping, 
      sendMessage, 
      suggestedActions, 
      selectSuggestedAction 
    }}>
      {children}
    </ChatContext.Provider>
  );
};