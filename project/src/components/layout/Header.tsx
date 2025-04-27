import React from 'react';
import { BookHeart, Briefcase as BriefcaseBusiness, Calendar, Languages, ArrowLeft, ArrowRight } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import ThemeToggle from '../ui/ThemeToggle';

const Header = () => {
  const { theme } = useTheme();
  
  const handleNavigation = (direction: 'back' | 'forward') => {
    if (direction === 'back') {
      window.history.back();
    } else {
      window.history.forward();
    }
  };

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md transition-colors duration-200">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex space-x-2">
            <button
              onClick={() => handleNavigation('back')}
              className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
              aria-label="Go back"
            >
              <ArrowLeft size={20} />
            </button>
            
            <button
              onClick={() => handleNavigation('forward')}
              className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
              aria-label="Go forward"
            >
              <ArrowRight size={20} />
            </button>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <div>
              <h1 className="font-bold text-xl text-purple-800 dark:text-purple-300">Asha</h1>
              <p className="text-xs text-gray-500 dark:text-gray-400">by JobsForHer Foundation</p>
            </div>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-3">
          <NavButton
            icon={<BriefcaseBusiness size={18} />}
            label="Jobs"
            href="https://jobsforher.com/jobs"
          />
          <NavButton
            icon={<BookHeart size={18} />}
            label="Mentorship"
            href="https://jobsforher.com/mentorship"
          />
          <NavButton
            icon={<Calendar size={18} />}
            label="Events"
            href="https://jobsforher.com/events"
          />
          <NavButton
            icon={<Languages size={18} />}
            label="Language"
            href="https://jobsforher.com/language"
          />
          
          <div className="ml-2 pl-3 border-l border-gray-200 dark:border-gray-600">
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
};

const NavButton = ({ icon, label, href }: { icon: React.ReactNode; label: string; href: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/30 text-gray-700 dark:text-gray-300 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
  >
    {icon}
    <span className="text-sm font-medium">{label}</span>
  </a>
);

export default Header;