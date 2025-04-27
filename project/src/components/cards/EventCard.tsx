import React from 'react';
import { Calendar, Clock, Users, ExternalLink } from 'lucide-react';

interface EventProps {
  event: {
    id: string;
    title: string;
    date: string;
    time: string;
    type: string;
    speakers: string[];
    attendees?: number;
    image?: string;
  };
}

const EventCard: React.FC<EventProps> = ({ event }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-3 border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex gap-3">
        <div className="relative flex-shrink-0 w-16 h-16 rounded-md overflow-hidden bg-teal-100">
          {event.image ? (
            <img src={event.image} alt={event.title} className="absolute inset-0 w-full h-full object-cover" />
          ) : (
            <div className="flex items-center justify-center w-full h-full">
              <Calendar size={24} className="text-teal-600" />
            </div>
          )}
          <div className="absolute bottom-0 inset-x-0 bg-teal-700 text-white text-xs text-center py-0.5">
            {event.type}
          </div>
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="font-medium text-gray-900 line-clamp-2">{event.title}</h3>
          
          <div className="mt-1 flex flex-wrap gap-y-1 gap-x-3 text-xs text-gray-500">
            <div className="flex items-center">
              <Calendar size={12} className="mr-1" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center">
              <Clock size={12} className="mr-1" />
              <span>{event.time}</span>
            </div>
            {event.attendees && (
              <div className="flex items-center">
                <Users size={12} className="mr-1" />
                <span>{event.attendees} attendees</span>
              </div>
            )}
          </div>
          
          <div className="mt-2 flex flex-wrap gap-1">
            {event.speakers.map((speaker, index) => (
              <span key={index} className="px-2 py-0.5 bg-teal-50 text-teal-700 rounded-full text-xs">
                {speaker}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="mt-2 pt-2 border-t border-gray-100 flex justify-end gap-2">
        <button className="px-3 py-1 text-xs font-medium text-gray-600 hover:text-gray-900 transition-colors flex items-center">
          <ExternalLink size={12} className="mr-1" />
          Details
        </button>
        <button className="px-3 py-1 rounded-md bg-teal-600 text-xs font-medium text-white hover:bg-teal-700 transition-colors">
          Register
        </button>
      </div>
    </div>
  );
};

export default EventCard;