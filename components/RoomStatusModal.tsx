
import React, { useState } from 'react';
import { Room, RoomStatus } from '../types';

interface RoomStatusModalProps {
    room: Room;
    onClose: () => void;
    onUpdateRoomStatus: (roomNumber: number, newStatus: RoomStatus) => void;
}

const RoomStatusModal: React.FC<RoomStatusModalProps> = ({ room, onClose, onUpdateRoomStatus }) => {
    const [newStatus, setNewStatus] = useState<RoomStatus>(room.status);

    const handleUpdate = () => {
        onUpdateRoomStatus(room.number, newStatus);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50" onClick={onClose}>
            <div className="bg-brand-secondary rounded-xl shadow-2xl w-full max-w-sm p-8" onClick={(e) => e.stopPropagation()}>
                <h2 className="text-2xl font-bold text-white mb-6">Update Room {room.number}</h2>
                <div className="space-y-6">
                    <div>
                        <label htmlFor="status" className="block text-brand-light font-semibold mb-2">Room Status</label>
                        <select 
                            id="status" 
                            value={newStatus}
                            onChange={(e) => setNewStatus(e.target.value as RoomStatus)}
                            className="w-full px-4 py-3 bg-brand-primary border border-brand-secondary text-white rounded-lg focus:ring-2 focus:ring-brand-accent transition-shadow"
                        >
                            {Object.values(RoomStatus).map(status => (
                                <option key={status} value={status}>{status}</option>
                            ))}
                        </select>
                    </div>
                    <div className="flex justify-end space-x-3 pt-4">
                        <button onClick={onClose} className="text-brand-light font-semibold px-4 py-2 rounded-lg hover:bg-brand-primary transition-colors">Cancel</button>
                        <button onClick={handleUpdate} className="bg-status-blue text-white font-semibold px-6 py-2 rounded-lg hover:opacity-90 transition-opacity shadow-md">
                            Update
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RoomStatusModal;