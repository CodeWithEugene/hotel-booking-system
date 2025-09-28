
import React from 'react';
import { GUESTS } from '../constants';
import { Guest } from '../types';

const GuestsView: React.FC = () => {
    return (
        <div className="p-6">
            <div className="bg-brand-secondary shadow-lg rounded-xl overflow-hidden">
                <table className="min-w-full text-left text-sm font-light text-brand-text">
                    <thead className="border-b border-brand-primary font-semibold text-brand-light">
                        <tr>
                            <th scope="col" className="px-6 py-4">Guest Name</th>
                            <th scope="col" className="px-6 py-4 text-center">Room</th>
                            <th scope="col" className="px-6 py-4">Email</th>
                            <th scope="col" className="px-6 py-4">Phone</th>
                            <th scope="col" className="px-6 py-4">Check-Out Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {GUESTS.map((guest: Guest) => (
                            <tr key={guest.id} className="border-b border-brand-primary transition duration-300 ease-in-out hover:bg-brand-primary">
                                <td className="whitespace-nowrap px-6 py-4 font-medium text-white">{guest.name}</td>
                                <td className="whitespace-nowrap px-6 py-4 text-center">{guest.roomNumber}</td>
                                <td className="whitespace-nowrap px-6 py-4">{guest.email}</td>
                                <td className="whitespace-nowrap px-6 py-4">{guest.phone}</td>
                                <td className="whitespace-nowrap px-6 py-4">{guest.checkOutDate}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default GuestsView;