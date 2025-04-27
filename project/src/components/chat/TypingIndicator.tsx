import React, { useEffect, useState } from 'react';
import AvatarDisplay from './AvatarDisplay';

const TypingIndicator = () => {
  const [dots, setDots] = useState('');
  
  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => {
        if (prev.length >= 3) return '';
        return prev + '.';
      });
    }, 400);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-start mb-4 animate-fadeIn">
      <AvatarDisplay />
      
      <div className="px-4 py-3 bg-gray-100 text-gray-500 rounded-2xl rounded-tl-none max-w-[80%]">
        <div className="flex items-center space-x-1">
          <span>Typing</span>
          <span className="w-8">{dots}</span>
        </div>
      </div>
    </div>
  );
};

export default TypingIndicator;