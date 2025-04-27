import React from 'react';
import { BookOpen, Briefcase, Award, Calendar } from 'lucide-react';

interface MentorProps {
  mentor: {
    id: string;
    name: string;
    role: string;
    company: string;
    expertise: string[];
    availability: string;
    rating?: number;
    image?: string;
  };
}

const MentorshipCard: React.FC<MentorProps> = ({ mentor }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-3 border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex gap-3">
        <div className="relative flex-shrink-0 w-14 h-14 rounded-full overflow-hidden border-2 border-coral-100 bg-coral-50">
          {mentor.image ? (
            <img src={mentor.image} alt={mentor.name} className="absolute inset-0 w-full h-full object-cover" />
          ) : (
            <div className="flex items-center justify-center w-full h-full bg-coral-100 text-coral-600 font-medium text-lg">
              {mentor.name.charAt(0)}
            </div>
          )}
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="font-medium text-gray-900">{mentor.name}</h3>
          <div className="text-sm text-gray-600 flex flex-wrap items-center gap-x-2">
            <span className="truncate">{mentor.role}</span>
            <span className="text-gray-400 text-xs">•</span>
            <span className="truncate">{mentor.company}</span>
          </div>
          
          <div className="mt-2 flex flex-wrap gap-1">
            {mentor.expertise.map((skill, index) => (
              <span key={index} className="px-2 py-0.5 bg-coral-50 text-coral-700 rounded-full text-xs flex items-center">
                <Award size={10} className="mr-1" />
                {skill}
              </span>
            ))}
          </div>
          
          <div className="mt-2 flex items-center text-xs text-gray-500">
            <Calendar size={12} className="mr-1" />
            <span>{mentor.availability}</span>
          </div>
        </div>
      </div>
      
      <div className="mt-2 pt-2 border-t border-gray-100 flex justify-end gap-2">
        <button className="px-3 py-1 text-xs font-medium text-gray-600 hover:text-gray-900 transition-colors flex items-center">
          <BookOpen size={12} className="mr-1" />
          View Profile
        </button>
        <button className="px-3 py-1 rounded-md bg-coral-600 text-xs font-medium text-white hover:bg-coral-700 transition-colors">
          Book Session
        </button>
      </div>
    </div>
  );
};

export default MentorshipCard;