
import React from 'react';
import { PublicView } from '../App';

interface PublicHeaderProps {
  setAppMode: (mode: 'public' | 'admin') => void;
  setPublicView: (view: PublicView) => void;
  currentView: PublicView;
}

const NavLink: React.FC<{
  viewName: PublicView;
  currentView: PublicView;
  setPublicView: (view: PublicView) => void;
  children: React.ReactNode;
}> = ({ viewName, currentView, setPublicView, children }) => {
  const isActive = viewName === currentView;
  return (
    <button
      onClick={() => setPublicView(viewName)}
      className={`relative group font-semibold transition-colors duration-300 ${
        isActive ? 'text-zenith-gold' : 'text-zenith-light-dark hover:text-zenith-dark'
      }`}
    >
      {children}
       <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-zenith-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out ${isActive ? 'scale-x-100' : ''}`}></span>
    </button>
  );
};

const PublicHeader: React.FC<PublicHeaderProps> = ({ setAppMode, setPublicView, currentView }) => {
  return (
    <header className="bg-zenith-cream/80 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-200/80">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <button onClick={() => setPublicView('home')} className="text-3xl font-serif text-zenith-dark font-bold">
          Zenith<span className="text-zenith-gold">Hotel</span>
        </button>
        <nav className="hidden md:flex items-center space-x-10">
          <NavLink viewName="home" currentView={currentView} setPublicView={setPublicView}>Home</NavLink>
          <NavLink viewName="rooms" currentView={currentView} setPublicView={setPublicView}>Rooms</NavLink>
          <NavLink viewName="amenities" currentView={currentView} setPublicView={setPublicView}>Amenities</NavLink>
          <NavLink viewName="contact" currentView={currentView} setPublicView={setPublicView}>Contact</NavLink>
        </nav>
        <div className="flex items-center space-x-4">
            <button onClick={() => setAppMode('admin')} className="hidden md:block text-sm text-zenith-light-dark hover:text-zenith-dark transition-colors font-semibold">
                Staff Login
            </button>
            <button onClick={() => setPublicView('rooms')} className="bg-zenith-gold text-white px-6 py-3 rounded-lg shadow-md hover:bg-zenith-gold-dark transition-all duration-300 font-bold transform hover:scale-105">
                Book Now
            </button>
        </div>
      </div>
    </header>
  );
};

export default PublicHeader;