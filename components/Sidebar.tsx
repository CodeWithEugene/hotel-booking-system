
import React from 'react';
import { DashboardIcon, CalendarIcon, BedIcon, BroomIcon, UsersIcon } from './icons/IconComponents';

interface SidebarProps {
  currentView: string;
  setCurrentView: (view: string) => void;
}

const NavItem: React.FC<{
  icon: React.ReactNode;
  label: string;
  viewName: string;
  currentView: string;
  setCurrentView: (view: string) => void;
}> = ({ icon, label, viewName, currentView, setCurrentView }) => {
  const isActive = currentView === viewName;
  return (
    <li
      onClick={() => setCurrentView(viewName)}
      className={`flex items-center p-3 my-1 rounded-lg cursor-pointer transition-all duration-200 relative ${
        isActive
          ? 'bg-brand-secondary text-white font-bold'
          : 'text-brand-light hover:bg-brand-secondary hover:text-white'
      }`}
    >
      {isActive && <div className="absolute left-0 top-0 h-full w-1 bg-brand-accent rounded-r-full"></div>}
      {icon}
      <span className="ml-4">{label}</span>
    </li>
  );
};

const Sidebar: React.FC<SidebarProps> = ({ currentView, setCurrentView }) => {
  return (
    <aside className="w-64 bg-brand-primary text-brand-text flex flex-col p-4 border-r border-brand-secondary shadow-2xl">
      <div className="text-3xl font-serif mb-12 px-2 text-white">
        Zenith<span className="text-brand-light font-sans font-thin">Hotel</span>
      </div>
      <nav>
        <ul>
          <NavItem icon={<DashboardIcon />} label="Dashboard" viewName="dashboard" currentView={currentView} setCurrentView={setCurrentView} />
          <NavItem icon={<CalendarIcon />} label="Reservations" viewName="reservations" currentView={currentView} setCurrentView={setCurrentView} />
          <NavItem icon={<BedIcon />} label="Rooms" viewName="rooms" currentView={currentView} setCurrentView={setCurrentView} />
          <NavItem icon={<BroomIcon />} label="Housekeeping" viewName="housekeeping" currentView={currentView} setCurrentView={setCurrentView} />
          <NavItem icon={<UsersIcon />} label="Guests" viewName="guests" currentView={currentView} setCurrentView={setCurrentView} />
        </ul>
      </nav>
      <div className="mt-auto text-center text-brand-light text-xs opacity-50">
        <p>&copy; 2023 Zenith Hotel Group</p>
        <p>Version 1.0.0</p>
      </div>
    </aside>
  );
};

export default Sidebar;