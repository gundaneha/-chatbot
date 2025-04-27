import React from 'react';

interface QuickActionsProps {
  actions: string[];
  onSelectAction: (action: string) => void;
}

const QuickActions: React.FC<QuickActionsProps> = ({ actions, onSelectAction }) => {
  if (actions.length === 0) return null;

  return (
    <div className="py-3 px-4 border-t border-gray-200 flex flex-wrap gap-2 bg-gray-50">
      {actions.map((action, index) => (
        <button
          key={index}
          onClick={() => onSelectAction(action)}
          className="px-3 py-1.5 bg-white text-sm font-medium text-purple-700 border border-purple-200 rounded-full hover:bg-purple-50 transition-colors shadow-sm"
        >
          {action}
        </button>
      ))}
    </div>
  );
};

export default QuickActions;