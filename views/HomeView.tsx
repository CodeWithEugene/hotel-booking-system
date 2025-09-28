
import React, { useState, useMemo } from 'react';
import { Room, RoomStatus } from '../types';
import { WifiIcon, SwimmingIcon, GymIcon, SpaIcon, RestaurantIcon } from '../components/icons/IconComponents';

interface HomeViewProps {
  rooms: Room[];
  onSelectRoom: (room: Room) => void;
  onBookNow: (room: Room, details: { checkIn: string; checkOut: string; guests: number }) => void;
}

const today = new Date().toISOString().split('T')[0];
const tomorrowDate = new Date();
tomorrowDate.setDate(tomorrowDate.getDate() + 1);
const tomorrow = tomorrowDate.toISOString().split('T')[0];

const AmenityCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300">
        <div className="flex justify-center items-center mb-4">{icon}</div>
        <h3 className="text-xl font-serif text-zenith-dark mb-2">{title}</h3>
        <p className="text-zenith-light-dark text-sm">{description}</p>
    </div>
);

const HomeView: React.FC<HomeViewProps> = ({ rooms, onSelectRoom, onBookNow }) => {
    const [bookingDetails, setBookingDetails] = useState({
        checkIn: today,
        checkOut: tomorrow,
        guests: 2,
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setBookingDetails(prev => ({...prev, [e.target.name]: e.target.value}));
    };
    
    const handleSearchClick = () => {
        document.getElementById('rooms')?.scrollIntoView({ behavior: 'smooth' });
    };

    const availableRooms = useMemo(() => {
        return rooms.filter(room => room.status === RoomStatus.Ready && room.capacity >= bookingDetails.guests);
    }, [rooms, bookingDetails.guests]);
    
    return (
        <>
            {/* Hero Section */}
            <section className="relative h-[70vh] bg-cover bg-center" style={{backgroundImage: "url('https://picsum.photos/seed/hero/1920/1080')"}}>
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="relative h-full flex flex-col justify-center items-center text-center text-white px-6">
                    <h1 className="text-5xl md:text-7xl font-serif mb-4 animate-fade-in-down">Experience Unforgettable Luxury</h1>
                    <p className="text-lg md:text-xl max-w-2xl animate-fade-in-up">Discover a world of comfort, elegance, and impeccable service at the heart of the city.</p>
                </div>
            </section>
            
            {/* Booking Form Section */}
            <section id="booking-form" className="bg-zenith-gray pb-12">
                <div className="container mx-auto px-6">
                    <div className="bg-white p-8 rounded-xl shadow-lg -mt-24 relative z-10">
                        <h2 className="text-3xl font-serif text-center text-zenith-dark mb-6">Book Your Stay</h2>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
                            <div>
                                <label htmlFor="checkIn" className="block text-sm font-bold text-zenith-light-dark mb-2">Check-In</label>
                                <input type="date" name="checkIn" value={bookingDetails.checkIn} min={today} onChange={handleInputChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zenith-gold focus:border-transparent" />
                            </div>
                             <div>
                                <label htmlFor="checkOut" className="block text-sm font-bold text-zenith-light-dark mb-2">Check-Out</label>
                                <input type="date" name="checkOut" value={bookingDetails.checkOut} min={bookingDetails.checkIn} onChange={handleInputChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zenith-gold focus:border-transparent" />
                            </div>
                            <div>
                                <label htmlFor="guests" className="block text-sm font-bold text-zenith-light-dark mb-2">Guests</label>
                                <select name="guests" value={bookingDetails.guests} onChange={handleInputChange} className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-zenith-gold focus:border-transparent">
                                    {[1,2,3,4].map(n => <option key={n} value={n}>{n} Guest{n > 1 ? 's': ''}</option>)}
                                </select>
                            </div>
                            <button onClick={handleSearchClick} className="bg-zenith-gold text-white font-bold p-3 rounded-lg w-full md:col-span-1 shadow-md hover:bg-zenith-gold-dark transition-all duration-300 h-12 transform hover:scale-105">Search Rooms</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Rooms Section */}
            <section id="rooms" className="py-20 bg-zenith-cream">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-serif text-center text-zenith-dark mb-12">Our Featured Rooms</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {availableRooms.slice(0, 3).map(room => (
                            <div key={room.number} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                                <div className="overflow-hidden relative">
                                   <img src={room.imageUrl} alt={room.type} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"/>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-2xl font-serif text-zenith-dark">{room.type} Room</h3>
                                    <p className="text-zenith-light-dark mt-2 flex-grow text-sm">{room.description}</p>
                                    <div className="flex items-center justify-between mt-6">
                                        <p className="text-xl font-bold text-zenith-dark">KSHS {room.price.toLocaleString()}<span className="text-sm font-normal text-zenith-light-dark">/night</span></p>
                                        <button onClick={() => onSelectRoom(room)} className="bg-zenith-gold text-white px-6 py-2 rounded-lg font-bold hover:bg-zenith-gold-dark transition-colors transform group-hover:scale-105">View Details</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Amenities Section */}
            <section id="amenities" className="bg-zenith-gray py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-serif text-center text-zenith-dark mb-12">Hotel Amenities</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                       <AmenityCard icon={<WifiIcon />} title="High-Speed Wifi" description="Stay connected with complimentary high-speed internet access." />
                       <AmenityCard icon={<SwimmingIcon />} title="Infinity Pool" description="Relax and unwind in our stunning rooftop infinity pool." />
                       <AmenityCard icon={<GymIcon />} title="Fitness Center" description="Our state-of-the-art fitness center is open 24/7." />
                       <AmenityCard icon={<SpaIcon />} title="Luxury Spa" description="Indulge in a range of rejuvenating treatments at our serene spa." />
                       <AmenityCard icon={<RestaurantIcon />} title="Gourmet Dining" description="Experience exquisite cuisine at our award-winning restaurant." />
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomeView;