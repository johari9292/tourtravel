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
              <Mountain className="text-blue-400 mr-2" size={28} />
              <span className="text-xl font-bold">Discover Skardu</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Unlock the wonders of Skardu with our expertly crafted travel experiences. From majestic mountains to pristine lakes, we bring the beauty of Pakistan's north to life.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Mail size={20} />
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
                +92 345 678 9012
              </li>
              <li className="text-gray-400">
                <span className="block font-medium text-white">Email:</span>
                info@discoverskardu.com
              </li>
              <li className="text-gray-400">
                <span className="block font-medium text-white">Address:</span>
                Skardu, Gilgit-Baltistan, Pakistan
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Discover Skardu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;