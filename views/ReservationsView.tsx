
import React from 'react';
import { Reservation, ReservationStatus } from '../types';

const getStatusClasses = (status: ReservationStatus) => {
    switch (status) {
        case ReservationStatus.Confirmed: return 'bg-blue-500/20 text-blue-300';
        case ReservationStatus.CheckedIn: return 'bg-green-500/20 text-green-300';
        case ReservationStatus.CheckedOut: return 'bg-gray-500/20 text-gray-300';
        case ReservationStatus.Cancelled: return 'bg-red-500/20 text-red-300';
        default: return 'bg-gray-500/20 text-gray-300';
    }
}

interface ReservationsViewProps {
    reservations: Reservation[];
}

const ReservationsView: React.FC<ReservationsViewProps> = ({ reservations }) => {
    return (
        <div className="p-6">
            <div className="bg-brand-secondary shadow-lg rounded-xl overflow-hidden">
                <table className="min-w-full text-left text-sm font-light text-brand-text">
                    <thead className="border-b border-brand-primary font-semibold text-brand-light">
                        <tr>
                            <th scope="col" className="px-6 py-4">Guest Name</th>
                            <th scope="col" className="px-6 py-4">Check-In</th>
                            <th scope="col" className="px-6 py-4">Check-Out</th>
                            <th scope="col" className="px-6 py-4">Room Type</th>
                            <th scope="col" className="px-6 py-4">Channel</th>
                            <th scope="col" className="px-6 py-4 text-center">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reservations.map((reservation: Reservation) => (
                            <tr key={reservation.id} className="border-b border-brand-primary transition duration-300 ease-in-out hover:bg-brand-primary">
                                <td className="whitespace-nowrap px-6 py-4 font-medium text-white">{reservation.guestName}</td>
                                <td className="whitespace-nowrap px-6 py-4">{reservation.checkIn}</td>
                                <td className="whitespace-nowrap px-6 py-4">{reservation.checkOut}</td>
                                <td className="whitespace-nowrap px-6 py-4">{reservation.roomType}</td>
                                <td className="whitespace-nowrap px-6 py-4">{reservation.channel}</td>
                                <td className="whitespace-nowrap px-6 py-4 text-center">
                                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getStatusClasses(reservation.status)}`}>
                                        {reservation.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ReservationsView;