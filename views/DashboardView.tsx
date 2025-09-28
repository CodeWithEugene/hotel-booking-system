
import React from 'react';
import { ROOMS, RESERVATIONS, GUESTS, ANALYTICS_DATA } from '../constants';
import { RoomStatus } from '../types';
import OccupancyChart from '../components/OccupancyChart';

const DashboardCard: React.FC<{ title: string; value: string | number; icon: React.ReactNode }> = ({ title, value, icon }) => (
    <div className="bg-brand-secondary p-6 rounded-xl shadow-lg flex items-center space-x-4">
        <div className="bg-brand-primary p-4 rounded-lg">
            {icon}
        </div>
        <div>
            <p className="text-brand-light text-sm font-medium">{title}</p>
            <p className="text-2xl font-bold text-white">{value}</p>
        </div>
    </div>
);

const DashboardView: React.FC = () => {
    const occupiedRooms = ROOMS.filter(r => r.status === RoomStatus.Occupied).length;
    const totalRooms = ROOMS.length;
    const occupancyRate = ((occupiedRooms / totalRooms) * 100).toFixed(1);
    const arrivalsToday = RESERVATIONS.filter(r => r.checkIn === '2023-10-29').length;
    const departuresToday = GUESTS.filter(r => r.checkOutDate === '2023-10-29').length;
    const availableRooms = ROOMS.filter(r => r.status === RoomStatus.Ready).length;

    return (
        <div className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <DashboardCard title="Occupancy Rate" value={`${occupancyRate}%`} icon={<svg className="w-8 h-8 text-status-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>} />
                <DashboardCard title="Arrivals Today" value={arrivalsToday} icon={<svg className="w-8 h-8 text-status-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" /></svg>} />
                <DashboardCard title="Departures Today" value={departuresToday} icon={<svg className="w-8 h-8 text-status-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" /></svg>} />
                <DashboardCard title="Available Rooms" value={availableRooms} icon={<svg className="w-8 h-8 text-status-red" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0v4M5 9h14l1 12H4L5 9z" /></svg>} />
            </div>
            
            <OccupancyChart data={ANALYTICS_DATA} />
        </div>
    );
};

export default DashboardView;