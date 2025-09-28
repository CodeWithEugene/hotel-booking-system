
import React, { useState } from 'react';
import { Room, Reservation, ReservationStatus } from '../types';

interface BookingModalProps {
  room: Room | null;
  bookingDetails: { checkIn: string; checkOut: string; guests: number };
  onClose: () => void;
  onAddReservation: (newReservation: Omit<Reservation, 'id'>) => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ room, bookingDetails, onClose, onAddReservation }) => {
  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [isBooked, setIsBooked] = useState(false);

  if (!room) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName || !guestEmail) {
      alert('Please fill in your name and email.');
      return;
    }

    const newReservation: Omit<Reservation, 'id'> = {
      guestName,
      checkIn: bookingDetails.checkIn,
      checkOut: bookingDetails.checkOut,
      roomType: room.type,
      roomNumber: room.number,
      status: ReservationStatus.Confirmed,
      channel: 'Web',
    };
    onAddReservation(newReservation);
    setIsBooked(true);
  };
  
  const nightCount = Math.max(1, (new Date(bookingDetails.checkOut).getTime() - new Date(bookingDetails.checkIn).getTime()) / (1000 * 3600 * 24));
  const totalCost = room.price * nightCount;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4 animate-fade-in" onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden transform transition-all duration-300 scale-95 animate-slide-up" onClick={(e) => e.stopPropagation()}>
        <div className="p-8">
          {isBooked ? (
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h2 className="text-2xl font-serif text-zenith-dark mt-4">Booking Confirmed!</h2>
              <p className="text-zenith-light-dark mt-2">Thank you, {guestName}. We've sent a confirmation to {guestEmail}. We look forward to welcoming you!</p>
              <button onClick={onClose} className="mt-6 bg-zenith-gold text-white px-8 py-3 rounded-lg hover:bg-zenith-gold-dark transition-colors font-semibold w-full">
                Close
              </button>
            </div>
          ) : (
            <>
              <h2 className="text-3xl font-serif text-zenith-dark mb-2">Confirm Your Booking</h2>
              <p className="text-zenith-light-dark mb-6">You are booking the <span className="font-bold text-zenith-dark">{room.type} Room</span>.</p>
              
              <div className="bg-zenith-gray p-4 rounded-lg mb-6 text-sm space-y-2">
                  <div className="flex justify-between">
                      <span className="font-semibold text-zenith-light-dark">Check-In:</span>
                      <span className="font-medium text-zenith-dark">{new Date(bookingDetails.checkIn).toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })}</span>
                  </div>
                  <div className="flex justify-between">
                      <span className="font-semibold text-zenith-light-dark">Check-Out:</span>
                      <span className="font-medium text-zenith-dark">{new Date(bookingDetails.checkOut).toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })}</span>
                  </div>
                  <div className="flex justify-between">
                      <span className="font-semibold text-zenith-light-dark">Guests:</span>
                      <span className="font-medium text-zenith-dark">{bookingDetails.guests}</span>
                  </div>
                   <div className="flex justify-between pt-3 border-t border-gray-300 mt-3">
                      <span className="font-bold text-zenith-dark text-base">Total Cost ({nightCount} {nightCount > 1 ? 'nights' : 'night'}):</span>
                      <span className="font-bold text-zenith-dark text-base">KSHS {totalCost.toLocaleString()}</span>
                  </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="guestName" className="block text-zenith-light-dark font-semibold mb-2 text-sm">Full Name</label>
                  <input type="text" id="guestName" value={guestName} onChange={e => setGuestName(e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zenith-gold focus:border-transparent transition-shadow" required placeholder="e.g. Jane Doe" />
                </div>
                <div>
                  <label htmlFor="guestEmail" className="block text-zenith-light-dark font-semibold mb-2 text-sm">Email Address</label>
                  <input type="email" id="guestEmail" value={guestEmail} onChange={e => setGuestEmail(e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zenith-gold focus:border-transparent transition-shadow" required placeholder="e.g. jane.doe@email.com" />
                </div>
                <div className="flex justify-end space-x-4 pt-4">
                  <button type="button" onClick={onClose} className="text-zenith-light-dark font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">Cancel</button>
                  <button type="submit" className="bg-zenith-gold text-white px-8 py-3 rounded-lg hover:bg-zenith-gold-dark transition-all duration-300 font-semibold shadow-md transform hover:scale-105">
                    Confirm & Book
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;