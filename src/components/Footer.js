import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Clock,
  ArrowRight
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Properties', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' }
  ];

  const propertyTypes = [
    'Flats & Apartments',
    'Houses & Villas',
    'Commercial Properties',
    'Rental Properties',
    'Luxury Homes'
  ];

  const services = [
    'Property Search',
    'Property Valuation',
    'Investment Consulting',
    'Legal Assistance',
    'Property Management'
  ];

  const officeLocations = [
    {
      name: 'Main Office',
      address: '123 Business District, Downtown',
      phone: '+1 (234) 567-8900',
      email: 'main@realestatepro.com'
    },
    {
      name: 'Branch Office',
      address: '456 Suburban Plaza, Uptown',
      phone: '+1 (234) 567-8901',
      email: 'branch@realestatepro.com'
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Home className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">DH Enterprises</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted partner in finding the perfect property. We combine local expertise 
              with cutting-edge technology to deliver exceptional real estate services.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">+1 (234) 567-8900</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">info@realestatepro.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">123 Business District, Downtown</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Property Types */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Property Types</h3>
            <ul className="space-y-3">
              {propertyTypes.map((type, index) => (
                <li key={index}>
                  <span className="text-gray-300 hover:text-blue-400 transition-colors duration-300 cursor-pointer">
                    {type}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Services & Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3 mb-8">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-300 hover:text-blue-400 transition-colors duration-300 cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>

            {/* Office Hours */}
            <div className="bg-gray-800 rounded-lg p-4">
              <h4 className="font-semibold mb-3 flex items-center">
                <Clock className="w-5 h-5 mr-2 text-blue-400" />
                Office Hours
              </h4>
              <div className="text-sm text-gray-300 space-y-1">
                <div>Monday - Friday: 9:00 AM - 6:00 PM</div>
                <div>Saturday: 10:00 AM - 4:00 PM</div>
                <div>Sunday: Closed</div>
              </div>
            </div>
          </div>
        </div>

        {/* Office Locations */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <h3 className="text-xl font-semibold mb-6 text-center">Our Office Locations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {officeLocations.map((office, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6">
                <h4 className="font-semibold text-lg mb-3 text-blue-400">{office.name}</h4>
                <div className="space-y-2 text-gray-300">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 mt-0.5 text-blue-400" />
                    <span>{office.address}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-400" />
                    <span>{office.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-400" />
                    <span>{office.email}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Social Media & Newsletter */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Social Media */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <p className="text-gray-300 mb-6">
                Stay updated with our latest properties and real estate news.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg transition-colors duration-300"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="bg-blue-400 hover:bg-blue-500 text-white p-3 rounded-lg transition-colors duration-300"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="bg-pink-600 hover:bg-pink-700 text-white p-3 rounded-lg transition-colors duration-300"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="bg-blue-700 hover:bg-blue-800 text-white p-3 rounded-lg transition-colors duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
              <p className="text-gray-300 mb-6">
                Subscribe to get the latest property updates and market insights.
              </p>
              <div className="flex flex-col sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg sm:rounded-l-lg sm:rounded-r-none bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2 sm:mb-0"
                />
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg sm:rounded-l-none sm:rounded-r-lg font-semibold transition-all duration-300 w-full sm:w-auto">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-800 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} DH Enterprises. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
