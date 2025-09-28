
import React, { useState } from 'react';
// FIX: Import `RoomStatus` enum to use it for checking room status.
import { Room, RoomStatus } from '../types';
import { WifiIcon, UserGroupIcon } from '../components/icons/IconComponents';

interface RoomDetailViewProps {
    room: Room;
    onBack: () => void;
    onBookNow: () => void;
    onUpdateStatus: () => void;
    mode: 'public' | 'admin';
    children?: React.ReactNode; // For modals
}

const AmenityItem: React.FC<{ icon: React.ReactNode; text: string; mode: 'public' | 'admin' }> = ({ icon, text, mode }) => (
    <div className="flex items-center space-x-3">
        <div className={mode === 'public' ? "text-zenith-gold" : "text-brand-accent"}>{icon}</div>
        <span className={mode === 'public' ? "text-zenith-light-dark" : "text-brand-light"}>{text}</span>
    </div>
);

const RoomDetailView: React.FC<RoomDetailViewProps> = ({ room, onBack, onBookNow, onUpdateStatus, mode, children }) => {
    const gallery = room.gallery && room.gallery.length > 0 ? room.gallery : [room.imageUrl];
    const [mainImage, setMainImage] = useState(gallery[0]);

    const getAmenityIcon = (amenity: string) => {
        const iconClass = "w-6 h-6";
        // This could be expanded into a larger mapping
        if (amenity.toLowerCase().includes('wifi')) return <WifiIcon className={iconClass} />;
        if (amenity.toLowerCase().includes('bed')) return <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" /></svg>;
        return <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>;
    };

    const theme = {
        bg: mode === 'public' ? 'bg-zenith-gray' : 'bg-brand-primary',
        textPrimary: mode === 'public' ? 'text-zenith-dark' : 'text-white',
        textSecondary: mode === 'public' ? 'text-zenith-light-dark' : 'text-brand-light',
        buttonPrimary: mode === 'public' ? 'bg-zenith-gold text-white hover:bg-zenith-gold-dark' : 'bg-status-blue text-white hover:opacity-90',
        cardBg: mode === 'public' ? 'bg-white' : 'bg-brand-secondary',
    };

    return (
        <div className={`min-h-screen ${theme.bg} font-sans`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <button onClick={onBack} className={`flex items-center space-x-2 font-semibold mb-8 transition-colors ${mode === 'public' ? 'text-zenith-gold hover:text-zenith-gold-dark' : 'text-brand-accent hover:text-blue-400'}`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                    <span>{mode === 'public' ? 'Back to Rooms' : 'Back to Dashboard'}</span>
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
                    {/* Image Gallery */}
                    <div className="lg:col-span-3">
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-3">
                            <img src={mainImage} alt="Main room view" className="w-full h-[500px] object-cover" />
                        </div>
                        <div className="grid grid-cols-5 gap-3">
                            {gallery.map((img, index) => (
                                <img 
                                    key={index}
                                    src={img}
                                    alt={`Room thumbnail ${index + 1}`}
                                    onClick={() => setMainImage(img)}
                                    className={`w-full h-28 object-cover rounded-lg cursor-pointer transition-all duration-200 ${mainImage === img ? 'ring-4 ring-offset-2 ring-zenith-gold' : 'opacity-70 hover:opacity-100'}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Room Details */}
                    <div className="lg:col-span-2">
                        <div className={`p-8 rounded-xl shadow-lg ${theme.cardBg}`}>
                            <h1 className={`text-4xl font-serif mb-2 ${theme.textPrimary}`}>{room.type} Room</h1>
                            <p className={`text-2xl font-bold mb-6 ${theme.textPrimary}`}>
                                KSHS {room.price.toLocaleString()}<span className={`text-base font-normal ${theme.textSecondary}`}>/night</span>
                            </p>
                            <p className={`mb-6 ${theme.textSecondary}`}>{room.description}</p>
                            
                            <div className="border-t border-b py-6 mb-6 border-gray-200 dark:border-gray-700">
                                <h3 className={`text-xl font-semibold mb-4 ${theme.textPrimary}`}>Key Details</h3>
                                <div className="space-y-4">
                                    <AmenityItem icon={<UserGroupIcon />} text={`${room.capacity} Guest${room.capacity > 1 ? 's' : ''} maximum`} mode={mode} />
                                    {room.amenities.slice(0, 3).map(amenity => (
                                        <AmenityItem key={amenity} icon={getAmenityIcon(amenity)} text={amenity} mode={mode} />
                                    ))}
                                </div>
                            </div>

                            {mode === 'public' ? (
                                <button onClick={onBookNow} className={`w-full text-lg font-bold py-4 rounded-lg transition-all duration-300 shadow-md transform hover:scale-105 ${theme.buttonPrimary}`}>
                                    Book Now
                                </button>
                            ) : (
                                <div className="space-y-3">
                                    <div className={`p-3 rounded-lg text-center font-semibold text-sm ${room.status === RoomStatus.Ready ? 'bg-green-500/20 text-green-300' : room.status === RoomStatus.Occupied ? 'bg-red-500/20 text-red-300' : 'bg-yellow-500/20 text-yellow-300'}`}>
                                        Status: {room.status}
                                    </div>
                                    <button onClick={onUpdateStatus} className={`w-full text-lg font-bold py-3 rounded-lg transition-opacity ${theme.buttonPrimary}`}>
                                        Update Status
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
             {/* Modal container */}
            {children}
        </div>
    );
};

export default RoomDetailView;
