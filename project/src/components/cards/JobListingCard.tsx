import React from 'react';
import { Briefcase, Building, MapPin, Clock } from 'lucide-react';

interface JobProps {
  job: {
    id: string;
    title: string;
    company: string;
    location: string;
    type: string;
    postedAt: string;
    logo?: string;
    matchPercentage?: number;
    skills?: string[];
  };
}

const JobListingCard: React.FC<JobProps> = ({ job }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-3 border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 bg-purple-100 rounded-md flex items-center justify-center flex-shrink-0">
          {job.logo ? (
            <img src={job.logo} alt={job.company} className="w-6 h-6" />
          ) : (
            <Briefcase size={18} className="text-purple-600" />
          )}
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="font-medium text-gray-900 truncate">{job.title}</h3>
          <div className="flex items-center text-sm text-gray-600">
            <Building size={14} className="mr-1" />
            <span className="truncate">{job.company}</span>
          </div>
          
          <div className="mt-2 flex flex-wrap gap-y-1 gap-x-3 text-xs text-gray-500">
            <div className="flex items-center">
              <MapPin size={12} className="mr-1" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center">
              <Clock size={12} className="mr-1" />
              <span>{job.type}</span>
            </div>
          </div>
          
          {job.skills && (
            <div className="mt-2 flex flex-wrap gap-1">
              {job.skills.map((skill, index) => (
                <span key={index} className="px-2 py-0.5 bg-purple-50 text-purple-700 rounded-full text-xs">
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>
        
        {job.matchPercentage && (
          <div className="ml-2 flex-shrink-0">
            <div className="inline-flex items-center px-2 py-1 rounded-full bg-green-50 text-green-700 text-xs font-medium">
              {job.matchPercentage}% match
            </div>
          </div>
        )}
      </div>
      
      <div className="mt-2 pt-2 border-t border-gray-100 flex justify-end gap-2">
        <button className="px-3 py-1 text-xs font-medium text-gray-600 hover:text-gray-900 transition-colors">
          Save
        </button>
        <button className="px-3 py-1 rounded-md bg-purple-600 text-xs font-medium text-white hover:bg-purple-700 transition-colors">
          Apply
        </button>
      </div>
    </div>
  );
};

export default JobListingCard;