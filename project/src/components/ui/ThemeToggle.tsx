import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex h-9 w-16 items-center rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
      aria-label="Toggle theme"
    >
      <span className="sr-only">Toggle theme</span>
      <span
        className={`${
          theme === 'dark' ? 'translate-x-8' : 'translate-x-1'
        } inline-block h-7 w-7 transform rounded-full bg-white dark:bg-gray-800 shadow-lg ring-0 transition-transform duration-300 ease-in-out`}
      >
        {theme === 'light' ? (
          <Sun size={16} className="h-full w-full p-1 text-amber-500" />
        ) : (
          <Moon size={16} className="h-full w-full p-1 text-purple-400" />
        )}
      </span>
    </button>
  );
};

export default ThemeToggle;