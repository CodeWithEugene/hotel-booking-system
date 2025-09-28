
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardView from './views/DashboardView';
import ReservationsView from './views/ReservationsView';
import RoomsView from './views/RoomsView';
import HousekeepingView from './views/HousekeepingView';
import GuestsView from './views/GuestsView';
import HomeView from './views/HomeView';
import RoomsPageView from './views/RoomsPageView';
import AmenitiesPageView from './views/AmenitiesPageView';
import ContactPageView from './views/ContactPageView';
import RoomDetailView from './views/RoomDetailView';
import PublicHeader from './components/PublicHeader';
import PublicFooter from './components/PublicFooter';
import { GUESTS, ROOMS, RESERVATIONS, HOUSEKEEPING_TASKS } from './constants';
import { Reservation, Room, RoomStatus, HousekeepingTask, HousekeepingTaskStatus } from './types';
import RoomStatusModal from './components/RoomStatusModal';
import BookingModal from './components/BookingModal';

export type PublicView = 'home' | 'rooms' | 'amenities' | 'contact';

const App: React.FC = () => {
  const [appMode, setAppMode] = useState<'public' | 'admin'>('public');
  const [publicView, setPublicView] = useState<PublicView>('home');
  
  // Shared State
  const [reservations, setReservations] = useState(RESERVATIONS);
  const [rooms, setRooms] = useState(ROOMS);
  const [guests, setGuests] = useState(GUESTS);
  const [tasks, setTasks] = useState(HOUSEKEEPING_TASKS);

  // View-specific state
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isStatusModalOpen, setIsStatusModalOpen] = useState(false);
   const [bookingDetails, setBookingDetails] = useState({
      checkIn: new Date().toISOString().split('T')[0],
      checkOut: new Date(Date.now() + 86400000).toISOString().split('T')[0],
      guests: 2,
  });


  // --- State Handlers ---

  const handleAddReservation = (newReservation: Omit<Reservation, 'id'>) => {
    const reservationWithId = {
      ...newReservation,
      id: `r${reservations.length + 1}`
    };
    setReservations(prev => [...prev, reservationWithId]);
    if (newReservation.roomNumber) {
        handleUpdateRoomStatus(newReservation.roomNumber, RoomStatus.Occupied, true);
    }
  };

  const handleUpdateRoomStatus = (roomNumber: number, newStatus: RoomStatus, fromBooking: boolean = false) => {
    setRooms(prevRooms => prevRooms.map(room => 
        room.number === roomNumber ? { ...room, status: newStatus } : room
    ));
    if (!fromBooking && selectedRoom?.number === roomNumber) {
        setSelectedRoom(prev => prev ? { ...prev, status: newStatus } : null);
    }
    setIsStatusModalOpen(false);
  };

  const handleUpdateTaskStatus = (taskId: string, newStatus: HousekeepingTaskStatus) => {
    setTasks(prevTasks => prevTasks.map(task => 
        task.id === taskId ? { ...task, status: newStatus } : task
    ));
  };
  
  const handleSelectRoom = (room: Room) => {
    setSelectedRoom(room);
  }

  const handleBookNow = (room: Room, details: typeof bookingDetails) => {
    setSelectedRoom(room);
    setBookingDetails(details);
    setIsBookingModalOpen(true);
  };

  // --- Layout Components ---

  const AdminLayout: React.FC = () => {
    const [currentView, setCurrentView] = useState('dashboard');

    const renderView = () => {
      switch (currentView) {
        case 'dashboard': return <DashboardView />;
        case 'reservations': return <ReservationsView reservations={reservations} />;
        case 'rooms': return <RoomsView rooms={rooms} onSelectRoom={handleSelectRoom} />;
        case 'housekeeping': return <HousekeepingView tasks={tasks} onUpdateTaskStatus={handleUpdateTaskStatus} />;
        case 'guests': return <GuestsView />;
        default: return <DashboardView />;
      }
    };

    const getTitle = () => {
      switch (currentView) {
          case 'dashboard': return 'Dashboard';
          case 'reservations': return 'Reservation Management';
          case 'rooms': return 'Room Status';
          case 'housekeeping': return 'Housekeeping Schedule';
          case 'guests': return 'In-House Guests';
          default: return 'Dashboard';
      }
    }

    return (
      <div className="flex h-screen bg-brand-secondary font-sans">
        <Sidebar currentView={currentView} setCurrentView={setCurrentView} />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header title={getTitle()} setAppMode={setAppMode} />
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-brand-primary">
            <div className="container mx-auto">
              {renderView()}
            </div>
          </main>
        </div>
      </div>
    );
  };

  const PublicLayout: React.FC<{children: React.ReactNode}> = ({ children }) => (
    <div className="bg-zenith-cream font-sans text-zenith-dark">
        <PublicHeader setAppMode={setAppMode} setPublicView={setPublicView} currentView={publicView} />
        <main>{children}</main>
        <PublicFooter setPublicView={setPublicView} />
        {isBookingModalOpen && selectedRoom && (
            <BookingModal 
                room={selectedRoom}
                bookingDetails={bookingDetails}
                onClose={() => setIsBookingModalOpen(false)}
                onAddReservation={handleAddReservation}
            />
        )}
    </div>
  );

  // --- Main Render Logic ---

  if (appMode === 'admin') {
      if (selectedRoom) {
          return (
             <RoomDetailView 
                room={selectedRoom}
                onBack={() => setSelectedRoom(null)}
                onBookNow={() => {}} // Not used in admin
                onUpdateStatus={() => setIsStatusModalOpen(true)}
                mode="admin"
            >
              {isStatusModalOpen && (
                <RoomStatusModal 
                  room={selectedRoom}
                  onClose={() => setIsStatusModalOpen(false)}
                  onUpdateRoomStatus={handleUpdateRoomStatus}
                />
              )}
             </RoomDetailView>
          );
      }
      return <AdminLayout />;
  }

  // Public Mode
  if (selectedRoom) {
      return (
          <RoomDetailView 
              room={selectedRoom}
              onBack={() => setSelectedRoom(null)}
              onBookNow={() => handleBookNow(selectedRoom, bookingDetails)}
              onUpdateStatus={() => {}} // Not used in public
              mode="public"
          />
      );
  }

  const renderPublicView = () => {
    switch(publicView) {
      case 'home':
        return <HomeView rooms={rooms} onSelectRoom={handleSelectRoom} onBookNow={handleBookNow} />;
      case 'rooms':
        return <RoomsPageView rooms={rooms} onSelectRoom={handleSelectRoom} />;
      case 'amenities':
        return <AmenitiesPageView />;
      case 'contact':
        return <ContactPageView />;
      default:
        return <HomeView rooms={rooms} onSelectRoom={handleSelectRoom} onBookNow={handleBookNow} />;
    }
  }

  return (
    <PublicLayout>
      {renderPublicView()}
    </PublicLayout>
  );
};

export default App;