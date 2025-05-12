import React from 'react';
import { Mountain, Instagram, Twitter, Facebook, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <img src="/logo.png" alt="UpwayTravels logo" className="h-8 w-8 object-contain mr-2" />
              <span className="text-xl font-bold">UpwayTravels</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Unlock the wonders of Skardu with our expertly crafted travel experiences. From majestic mountains to pristine lakes, we bring the beauty of Pakistan's north to life.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/upwaytravels?igsh=cGZlNDJ6eDh3em9s" className="text-gray-400 hover:text-blue-400 transition-colors" target="_blank" rel="noopener noreferrer">
                <Instagram size={20} />
              </a>
              <a href="https://www.tiktok.com/@upwaytravels?_t=ZS-8wIEK4CFnUt&_r=1" className="text-gray-400 hover:text-blue-400 transition-colors" target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12.75 2h2.25v14.25a2.25 2.25 0 1 1-2.25-2.25V2zm6.75 0h2.25v7.5a6.75 6.75 0 0 1-6.75-6.75V2h2.25v7.5a4.5 4.5 0 0 0 4.5 4.5V2zm-13.5 0h2.25v18a4.5 4.5 0 1 0 4.5-4.5V2h2.25v18a6.75 6.75 0 1 1-6.75-6.75V2z"/></svg>
              </a>
              <a href="https://www.facebook.com/share/1E24ysa2dS/?mibextid=wwXIfr" className="text-gray-400 hover:text-blue-400 transition-colors" target="_blank" rel="noopener noreferrer">
                <Facebook size={20} />
              </a>
              <a href="https://www.youtube.com/@Upway-travels" className="text-gray-400 hover:text-blue-400 transition-colors" target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.112C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.386.574A2.994 2.994 0 0 0 .502 6.186C0 8.072 0 12 0 12s0 3.928.502 5.814a2.994 2.994 0 0 0 2.112 2.112C4.5 20.5 12 20.5 12 20.5s7.5 0 9.386-.574a2.994 2.994 0 0 0 2.112-2.112C24 15.928 24 12 24 12s0-3.928-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#destinations" className="text-gray-400 hover:text-white transition-colors">Destinations</a>
              </li>
              <li>
                <a href="#experiences" className="text-gray-400 hover:text-white transition-colors">Experiences</a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-white transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Contact Us</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">
                <span className="block font-medium text-white">Phone:</span>
                03148445023, 03137777614
              </li>
              <li className="text-gray-400">
                <span className="block font-medium text-white">Email:</span>
                Iamayaz.marketing@gmail.com
              </li>
              <li className="text-gray-400">
                <span className="block font-medium text-white">Address:</span>
                Skardu, Gilgit-Baltistan, Pakistan
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} UpwayTravels. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;