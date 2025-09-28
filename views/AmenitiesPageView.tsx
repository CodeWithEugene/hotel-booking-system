
import React from 'react';
import { WifiIcon, SwimmingIcon, GymIcon, SpaIcon, RestaurantIcon } from '../components/icons/IconComponents';

const AmenityCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow transform hover:-translate-y-2 duration-300 flex flex-col items-center">
        <div className="flex-shrink-0 bg-zenith-gold/10 p-5 rounded-full mb-5">{icon}</div>
        <h3 className="text-2xl font-serif text-zenith-dark mb-3">{title}</h3>
        <p className="text-zenith-light-dark leading-relaxed">{description}</p>
    </div>
);

const AmenitiesPageView: React.FC = () => {
    return (
        <div className="bg-zenith-gray">
            <div className="container mx-auto px-6 py-20">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-serif text-zenith-dark mb-4">World-Class Amenities</h1>
                    <p className="text-lg text-zenith-light-dark max-w-3xl mx-auto">
                        At Zenith Hotel, we provide an array of premium amenities designed to make your stay exceptionally comfortable and memorable.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                   <AmenityCard icon={<WifiIcon />} title="High-Speed Wifi" description="Stay connected with complimentary high-speed internet access in all rooms and public areas." />
                   <AmenityCard icon={<SwimmingIcon />} title="Rooftop Infinity Pool" description="Relax and unwind in our stunning rooftop infinity pool, offering panoramic city views and poolside service." />
                   <AmenityCard icon={<GymIcon />} title="24/7 Fitness Center" description="Our state-of-the-art fitness center is equipped with the latest machines and is open 24/7 for your workout needs." />
                   <AmenityCard icon={<SpaIcon />} title="Serenity Wellness Spa" description="Indulge in a range of rejuvenating massages, facials, and body treatments at our serene wellness spa." />
                   <AmenityCard icon={<RestaurantIcon />} title="Gourmet Dining" description="Experience exquisite international and local cuisine at our award-winning on-site restaurant and bar." />
                   <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow transform hover:-translate-y-2 duration-300 flex flex-col items-center">
                        <div className="flex-shrink-0 bg-zenith-gold/10 p-5 rounded-full mb-5">
                            <svg className="w-12 h-12 text-zenith-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M24 21H0V9h24v12zM21 9V6a2 2 0 00-2-2h-3M3 6v3m0-3h3m11 6h-3m-4 0H7m10 4H7"></path></svg>
                        </div>
                        <h3 className="text-2xl font-serif text-zenith-dark mb-3">Concierge Service</h3>
                        <p className="text-zenith-light-dark leading-relaxed">Our dedicated concierge team is available around the clock to assist with bookings, recommendations, and any special requests.</p>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default AmenitiesPageView;