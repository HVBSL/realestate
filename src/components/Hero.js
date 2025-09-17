import React, { useState } from 'react';
import { Search, MapPin, DollarSign, Home, Building, Calendar } from 'lucide-react';

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [propertyType, setPropertyType] = useState('all');
  const [priceRange, setPriceRange] = useState('all');

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search logic here
    console.log('Search:', { searchQuery, propertyType, priceRange });
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full float-animation"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-full float-animation" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full float-animation" style={{ animationDelay: '2s' }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Find Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
              Dream Home
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto animate-slide-up">
            Discover the perfect property with our comprehensive listings and expert guidance
          </p>
        </div>

        {/* Search Form */}
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSearch} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              {/* Location Search */}
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Enter location..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                />
              </div>

              {/* Property Type */}
              <div className="relative">
                <Home className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 appearance-none bg-white"
                >
                  <option value="all">All Properties</option>
                  <option value="flats">Flats</option>
                  <option value="houses">Houses</option>
                  <option value="rentals">Rentals</option>
                </select>
              </div>

              {/* Price Range */}
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 appearance-none bg-white"
                >
                  <option value="all">Any Price</option>
                  <option value="0-100000">Under $100K</option>
                  <option value="100000-300000">$100K - $300K</option>
                  <option value="300000-500000">$300K - $500K</option>
                  <option value="500000+">$500K+</option>
                </select>
              </div>

              {/* Search Button */}
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Search className="w-5 h-5" />
                <span>Search</span>
              </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="bg-white/10 rounded-lg p-4">
                <Building className="w-8 h-8 mx-auto mb-2 text-yellow-400" />
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm text-blue-100">Properties</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <Calendar className="w-8 h-8 mx-auto mb-2 text-green-400" />
                <div className="text-2xl font-bold">10+</div>
                <div className="text-sm text-blue-100">Years Experience</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <Home className="w-8 h-8 mx-auto mb-2 text-purple-400" />
                <div className="text-2xl font-bold">1000+</div>
                <div className="text-sm text-blue-100">Happy Clients</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <DollarSign className="w-8 h-8 mx-auto mb-2 text-red-400" />
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm text-blue-100">Support</div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;



