
import React from 'react';
import { PublicView } from '../App';

interface PublicFooterProps {
  setPublicView: (view: PublicView) => void;
}

const PublicFooter: React.FC<PublicFooterProps> = ({ setPublicView }) => {
  return (
    <footer className="bg-zenith-dark text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
          <div className="md:col-span-2">
            <h3 className="text-3xl font-serif mb-4">Zenith<span className="text-zenith-gold">Hotel</span></h3>
            <p className="text-gray-400 max-w-sm">Experience the pinnacle of luxury and comfort. Your unforgettable stay begins here.</p>
             <div className="flex justify-center md:justify-start space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-zenith-gold transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-zenith-gold transition-colors">
                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049 1.064.218 1.791.465 2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.345 2.525c.636-.247 1.363-.416 2.427-.465C9.795 2.013 10.148 2 12.315 2zm-1.113 4.868a4.015 4.015 0 100 8.03 4.015 4.015 0 000-8.03zM12 14.873a2.873 2.873 0 110-5.746 2.873 2.873 0 010 5.746zM20.205 5.25a1.397 1.397 0 11-2.793 0 1.397 1.397 0 012.793 0z" clipRule="evenodd" /></svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 tracking-wider uppercase">Links</h3>
            <ul className="space-y-3">
              <li><button onClick={() => setPublicView('home')} className="text-gray-400 hover:text-zenith-gold transition-colors">Home</button></li>
              <li><button onClick={() => setPublicView('rooms')} className="text-gray-400 hover:text-zenith-gold transition-colors">Rooms & Suites</button></li>
              <li><button onClick={() => setPublicView('amenities')} className="text-gray-400 hover:text-zenith-gold transition-colors">Amenities</button></li>
               <li><button onClick={() => setPublicView('contact')} className="text-gray-400 hover:text-zenith-gold transition-colors">Contact</button></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 tracking-wider uppercase">Contact</h3>
            <ul className="space-y-3 text-gray-400">
                <li>123 Luxury Lane, Metropolis, 10101</li>
                <li>contact@zenithhotel.com</li>
                <li>+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; 2023 Zenith Hotel Group. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default PublicFooter;