
import React from 'react';
import { Room, RoomStatus } from '../types';

const getStatusClasses = (status: RoomStatus) => {
    switch (status) {
        case RoomStatus.Ready: return { bg: 'bg-status-green/10', border: 'border-status-green' };
        case RoomStatus.Occupied: return { bg: 'bg-status-red/10', border: 'border-status-red' };
        case RoomStatus.Dirty: return { bg: 'bg-status-yellow/10', border: 'border-status-yellow' };
        case RoomStatus.Cleaning: return { bg: 'bg-status-blue/10', border: 'border-status-blue' };
        case RoomStatus.OutOfOrder: return { bg: 'bg-status-gray/10', border: 'border-status-gray' };
        default: return { bg: 'bg-brand-primary', border: 'border-brand-accent' };
    }
}

const RoomCard: React.FC<{ room: Room, onClick: () => void }> = ({ room, onClick }) => {
    const statusClasses = getStatusClasses(room.status);
    return (
        <div 
            onClick={onClick}
            className={`rounded-xl shadow-lg p-4 flex flex-col justify-between border-l-4 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 cursor-pointer ${statusClasses.bg} ${statusClasses.border}`}
        >
            <div>
                <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold text-white">Room {room.number}</h3>
                    <span className="text-xs font-semibold px-2 py-1 rounded-full bg-black/30 text-white">{room.status}</span>
                </div>
                <p className="text-brand-light mt-1">{room.type}</p>
            </div>
            <div className="mt-4 text-xs text-brand-light">
                {room.guestId ? `Guest ID: ${room.guestId}` : 'Vacant'}
            </div>
        </div>
    );
};

interface RoomsViewProps {
    rooms: Room[];
    onSelectRoom: (room: Room) => void;
}

const RoomsView: React.FC<RoomsViewProps> = ({ rooms, onSelectRoom }) => {
    return (
        <div className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                {rooms.sort((a,b) => a.number - b.number).map((room) => (
                    <RoomCard key={room.number} room={room} onClick={() => onSelectRoom(room)} />
                ))}
            </div>
        </div>
    );
};

export default RoomsView;