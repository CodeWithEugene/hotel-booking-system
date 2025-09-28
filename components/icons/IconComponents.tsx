
import React from 'react';

const iconProps = {
    className: "w-6 h-6",
    strokeWidth: 1.5,
};

const amenityIconProps = {
    className: "w-12 h-12 text-zenith-gold",
    strokeWidth: 1.5,
}

export const DashboardIcon: React.FC = () => (
  <svg {...iconProps} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
  </svg>
);

export const CalendarIcon: React.FC = () => (
  <svg {...iconProps} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0h18M-4.5 12h22.5" />
  </svg>
);

export const BedIcon: React.FC = () => (
  <svg {...iconProps} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
  </svg>
);

export const BroomIcon: React.FC = () => (
  <svg {...iconProps} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.563C9.252 15 9 14.748 9 14.437V9.564z" />
  </svg>
);

export const UsersIcon: React.FC = () => (
  <svg {...iconProps} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-4.663M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0z" />
  </svg>
);

export const UserGroupIcon: React.FC = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);


// Amenity Icons
export const WifiIcon: React.FC<{className?: string}> = ({className}) => (
    <svg {...amenityIconProps} className={className || amenityIconProps.className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038C8.586 14.73 9.049 14.5 9.552 14.5c.504 0 .966.23 1.264.538m4.9 0c.298-.308.76-.538 1.264-.538.503 0 .966.23 1.264.538M12 18.528l.002.002M12 4.472C6.477 4.472 2 8.95 2 14.472c0 2.114.838 4.06 2.222 5.528M22 14.472c0-5.522-4.477-10-10-10C6.477 4.472 2 8.95 2 14.472" />
    </svg>
);

export const SwimmingIcon: React.FC = () => (
    <svg {...amenityIconProps} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10.5c2.21 2.21 2.21 5.79 0 8s-5.79 2.21-8 0" transform="translate(13 1.5)"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10.5c2.21 2.21 2.21 5.79 0 8s-5.79 2.21-8 0" transform="translate(5 1.5)"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 5.5a2 2 0 100-4 2 2 0 000 4z"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.5 13.5L12 7l6.5 6.5"/>
    </svg>
);

export const GymIcon: React.FC = () => (
    <svg {...amenityIconProps} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 13l-2.5-2.5M11 13l2.5-2.5m-5 5L6 13l2.5-2.5m5 5L16 13l-2.5-2.5M4 8h16v12a2 2 0 01-2 2H6a2 2 0 01-2-2V8zM4 8V6a2 2 0 012-2h12a2 2 0 012 2v2"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 4V2M16 4V2"/>
    </svg>
);

export const SpaIcon: React.FC = () => (
    <svg {...amenityIconProps} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 009-9h-9v9z"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.22 12.78a9 9 0 009.56 9.56"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3a9 9 0 019 9h-9V3z"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.22 11.22A9 9 0 0112 3v8.22"/>
    </svg>
);

export const RestaurantIcon: React.FC = () => (
    <svg {...amenityIconProps} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" clipRule="evenodd" opacity="0"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 21V3h2.4a3.6 3.6 0 013.6 3.6V21H5zM17 3v18h2V3h-2z"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 21V7.8c0-1.77 1.34-3.2 3-3.2s3 1.43 3 3.2V21h-6z"/>
    </svg>
);