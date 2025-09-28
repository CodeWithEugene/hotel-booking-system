
import React from 'react';
import { Room } from '../types';

interface RoomsPageViewProps {
  rooms: Room[];
  onSelectRoom: (room: Room) => void;
}

const RoomCard: React.FC<{ room: Room; onSelect: () => void }> = ({ room, onSelect }) => (
    <div onClick={onSelect} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
        <div className="overflow-hidden">
            <img src={room.imageUrl} alt={room.type} className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"/>
        </div>
        <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-2xl font-serif text-zenith-dark">{room.type} Room</h3>
            <p className="text-zenith-light-dark mt-2 flex-grow text-sm">{room.description}</p>
            <div className="flex items-center justify-between mt-6">
                <p className="text-xl font-bold text-zenith-dark">KSHS {room.price.toLocaleString()}<span className="text-sm font-normal text-zenith-light-dark">/night</span></p>
                <span className="text-zenith-gold font-bold group-hover:underline">View Details</span>
            </div>
        </div>
    </div>
);

const RoomsPageView: React.FC<RoomsPageViewProps> = ({ rooms, onSelectRoom }) => {
  return (
    <div className="bg-zenith-gray">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
            <h1 className="text-5xl font-serif text-zenith-dark mb-4">Our Rooms & Suites</h1>
            <p className="text-lg text-zenith-light-dark max-w-2xl mx-auto">Choose from our exquisite collection of rooms and suites, each designed for your utmost comfort and relaxation.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {rooms.sort((a,b) => a.price - b.price).map(room => (
            <RoomCard key={room.number} room={room} onSelect={() => onSelectRoom(room)} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoomsPageView;