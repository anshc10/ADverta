import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background-secondary/50 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link to="/" className="text-xl font-bold">ADverta</Link>
          </div>
          
          {/* Social Links */}
          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            <a 
              href="https://www.instagram.com/adverta.ai/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent-purple transition-colors flex items-center space-x-2"
            >
              <Instagram className="w-5 h-5" />
              <span>Follow us on Instagram</span>
            </a>
          </div>

          <div className="text-sm text-gray-400">
            © 2025 ADverta. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;