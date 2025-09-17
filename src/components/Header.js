import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Home, Building, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Home className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold gradient-text">DH Enterprises</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              About Us
            </Link>
            <Link to="/projects" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Projects
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Contact
            </Link>
            <div className="flex items-center space-x-4">
              <a href="tel:+1234567890" className="flex items-center space-x-1 text-blue-600 hover:text-blue-700">
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">+1 (234) 567-890</span>
              </a>
              <a href="mailto:info@realestatepro.com" className="flex items-center space-x-1 text-blue-600 hover:text-blue-700">
                <Mail className="w-4 h-4" />
                <span className="text-sm font-medium">Email Us</span>
              </a>
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 rounded-lg mb-4">
              <Link
                to="/"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/projects"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="px-3 py-2 space-y-2">
                <a href="tel:+1234567890" className="flex items-center space-x-2 text-blue-600">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm font-medium">+1 (234) 567-890</span>
                </a>
                <a href="mailto:info@realestatepro.com" className="flex items-center space-x-2 text-blue-600">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm font-medium">info@realestatepro.com</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
