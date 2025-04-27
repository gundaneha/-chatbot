import React from 'react';
import ChatInterface from './components/chat/ChatInterface';
import Header from './components/layout/Header';
import { ChatProvider } from './context/ChatContext';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <ChatProvider>
        <div className="flex flex-col h-screen bg-gradient-to-br from-purple-50 to-teal-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-200">
          <Header />
          <main className="flex-1 container mx-auto px-4 py-6 overflow-hidden">
            <ChatInterface />
          </main>
        </div>
      </ChatProvider>
    </ThemeProvider>
  );
}

export default App;