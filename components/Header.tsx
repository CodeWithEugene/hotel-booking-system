
import React from 'react';

interface HeaderProps {
  title: string;
  setAppMode: (mode: 'public' | 'admin') => void;
}

const Header: React.FC<HeaderProps> = ({ title, setAppMode }) => {
  return (
    <header className="bg-brand-primary border-b border-brand-secondary p-4 flex justify-between items-center">
      <h1 className="text-2xl font-semibold text-brand-text">{title}</h1>
      <div className="flex items-center space-x-6">
        <button 
          onClick={() => setAppMode('public')}
          className="bg-brand-secondary text-brand-light px-4 py-2 rounded-lg hover:bg-brand-accent hover:text-white transition-colors duration-200 text-sm font-semibold flex items-center space-x-2"
        >
           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
          <span>View Public Site</span>
        </button>
        <div className="flex items-center space-x-4">
          <div className="relative cursor-pointer">
            <svg className="w-6 h-6 text-brand-light hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
            <span className="absolute -top-1 -right-1 block h-3 w-3 rounded-full bg-red-500 ring-2 ring-brand-primary"></span>
          </div>
          <div className="flex items-center">
            <img src="https://picsum.photos/seed/avatar/40" alt="User Avatar" className="w-10 h-10 rounded-full object-cover ring-2 ring-brand-secondary" />
            <div className="ml-3">
              <p className="text-white font-semibold text-sm">Admin User</p>
              <p className="text-brand-light text-xs">Hotel Manager</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;