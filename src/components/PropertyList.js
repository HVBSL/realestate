import React, { useState, useEffect } from 'react';
import { MapPin, Bed, Bath, Square, Star, Filter, SortAsc, Eye, ChevronLeft, ChevronRight } from 'lucide-react';
import PropertyDetails from './PropertyDetails';

const PropertyList = () => {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [filters, setFilters] = useState({
    type: 'all',
    priceRange: 'all',
    facing: 'all',
    minSqft: '',
    maxSqft: '',
    location: ''
  });
  const [sortBy, setSortBy] = useState('newest');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0);

  // Sample property data
  const sampleProperties = [
    {
      id: 1,
      title: "Modern Luxury Apartment",
      type: "flats",
      price: 450000,
      location: "Downtown District",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      images: [
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2058&q=80",
        "https://images.unsplash.com/photo-1616486338812-3d3e3a7b8b8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      ],
      bedrooms: 3,
      bathrooms: 2,
      sqft: 1200,
      facing: "east",
      rating: 4.8,
      featured: true,
      description: "Beautiful modern apartment with stunning city views",
      features: ["City Views", "Modern Kitchen", "Balcony", "Gym Access", "Concierge"],
      agent: {
        name: "Sarah Johnson",
        phone: "+1 (234) 567-8901",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
      }
    },
    {
      id: 2,
      title: "Cozy Family House",
      type: "houses",
      price: 320000,
      location: "Suburban Area",
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      images: [
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80",
        "https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      ],
      bedrooms: 4,
      bathrooms: 3,
      sqft: 1800,
      facing: "north",
      rating: 4.6,
      featured: false,
      description: "Perfect family home with a large backyard",
      features: ["Large Backyard", "Garage", "Fireplace", "Hardwood Floors", "Updated Kitchen"],
      agent: {
        name: "Michael Chen",
        phone: "+1 (234) 567-8902",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
      }
    },
    {
      id: 3,
      title: "Executive Penthouse",
      type: "flats",
      price: 750000,
      location: "Business District",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      images: [
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2058&q=80",
        "https://images.unsplash.com/photo-1616486338812-3d3e3a7b8b8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      ],
      bedrooms: 3,
      bathrooms: 3,
      sqft: 2000,
      facing: "west",
      rating: 4.9,
      featured: true,
      description: "Luxurious penthouse with panoramic city views",
      features: ["Panoramic Views", "Private Elevator", "Rooftop Terrace", "Smart Home", "Concierge"],
      agent: {
        name: "David Wilson",
        phone: "+1 (234) 567-8903",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
      }
    },
    {
      id: 4,
      title: "Charming Villa",
      type: "houses",
      price: 580000,
      location: "Garden District",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      images: [
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80",
        "https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      ],
      bedrooms: 5,
      bathrooms: 4,
      sqft: 2500,
      facing: "south",
      rating: 4.7,
      featured: false,
      description: "Elegant villa with beautiful garden and pool",
      features: ["Swimming Pool", "Garden", "Garage", "Fireplace", "Updated Kitchen"],
      agent: {
        name: "Lisa Wang",
        phone: "+1 (234) 567-8904",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
      }
    },
    {
      id: 5,
      title: "Modern Studio Apartment",
      type: "rentals",
      price: 1200,
      location: "City Center",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      images: [
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2058&q=80",
        "https://images.unsplash.com/photo-1616486338812-3d3e3a7b8b8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      ],
      bedrooms: 1,
      bathrooms: 1,
      sqft: 600,
      facing: "east",
      rating: 4.5,
      featured: false,
      description: "Perfect for young professionals, fully furnished",
      features: ["Fully Furnished", "Modern Appliances", "Gym Access", "Laundry", "High-Speed Internet"],
      agent: {
        name: "Emily Rodriguez",
        phone: "+1 (234) 567-8905",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
      }
    },
    {
      id: 6,
      title: "Luxury Townhouse",
      type: "houses",
      price: 420000,
      location: "Uptown",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80",
      images: [
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80",
        "https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      ],
      bedrooms: 3,
      bathrooms: 2,
      sqft: 1600,
      facing: "north",
      rating: 4.4,
      featured: true,
      description: "Contemporary townhouse with modern amenities",
      features: ["Modern Design", "Garage", "Patio", "Hardwood Floors", "Updated Bathrooms"],
      agent: {
        name: "Robert Smith",
        phone: "+1 (234) 567-8906",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
      }
    }
  ];

  useEffect(() => {
    setProperties(sampleProperties);
    setFilteredProperties(sampleProperties);
  }, []);

  useEffect(() => {
    let filtered = [...properties];

    // Filter by type
    if (filters.type !== 'all') {
      filtered = filtered.filter(prop => prop.type === filters.type);
    }

    // Filter by price range
    if (filters.priceRange !== 'all') {
      const [min, max] = filters.priceRange.split('-').map(Number);
      filtered = filtered.filter(prop => {
        if (max) {
          return prop.price >= min && prop.price <= max;
        } else {
          return prop.price >= min;
        }
      });
    }

    // Filter by facing
    if (filters.facing !== 'all') {
      filtered = filtered.filter(prop => prop.facing === filters.facing);
    }

    // Filter by square footage
    if (filters.minSqft) {
      filtered = filtered.filter(prop => prop.sqft >= parseInt(filters.minSqft));
    }
    if (filters.maxSqft) {
      filtered = filtered.filter(prop => prop.sqft <= parseInt(filters.maxSqft));
    }

    // Filter by location
    if (filters.location) {
      filtered = filtered.filter(prop => 
        prop.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    // Sort properties
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
      default:
        filtered.sort((a, b) => b.id - a.id);
        break;
    }

    setFilteredProperties(filtered);
  }, [filters, sortBy, properties]);

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const clearFilters = () => {
    setFilters({
      type: 'all',
      priceRange: 'all',
      facing: 'all',
      minSqft: '',
      maxSqft: '',
      location: ''
    });
  };

  const nextCarousel = () => {
    setCurrentCarouselIndex((prev) => (prev + 1) % filteredProperties.length);
  };

  const prevCarousel = () => {
    setCurrentCarouselIndex((prev) => (prev - 1 + filteredProperties.length) % filteredProperties.length);
  };

  const goToCarousel = (index) => {
    setCurrentCarouselIndex(index);
  };

  const formatPrice = (price) => {
    if (price < 1000) {
      return `$${price}/month`;
    }
    return `$${price.toLocaleString()}`;
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Properties
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated selection of premium properties
          </p>
        </div>

        {/* Filters and Sort */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <Filter className="w-5 h-5" />
                <span>Filters</span>
              </button>
              
              <div className="flex items-center space-x-2">
                <SortAsc className="w-5 h-5 text-gray-500" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="newest">Newest First</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>

            <div className="text-sm text-gray-600">
              {filteredProperties.length} properties found
            </div>
          </div>

          {/* Filter Panel */}
          {showFilters && (
            <div className="bg-white rounded-lg shadow-lg p-6 mb-6 animate-slide-up">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Property Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
                  <select
                    value={filters.type}
                    onChange={(e) => handleFilterChange('type', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="all">All Types</option>
                    <option value="flats">Flats</option>
                    <option value="houses">Houses</option>
                    <option value="rentals">Rentals</option>
                  </select>
                </div>

                {/* Price Range */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                  <select
                    value={filters.priceRange}
                    onChange={(e) => handleFilterChange('priceRange', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="all">Any Price</option>
                    <option value="0-100000">Under $100K</option>
                    <option value="100000-300000">$100K - $300K</option>
                    <option value="300000-500000">$300K - $500K</option>
                    <option value="500000-1000000">$500K - $1M</option>
                    <option value="1000000+">$1M+</option>
                  </select>
                </div>

                {/* Facing */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Facing</label>
                  <select
                    value={filters.facing}
                    onChange={(e) => handleFilterChange('facing', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="all">Any Direction</option>
                    <option value="north">North</option>
                    <option value="south">South</option>
                    <option value="east">East</option>
                    <option value="west">West</option>
                  </select>
                </div>

                {/* Square Footage */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Min Sq Ft</label>
                  <input
                    type="number"
                    placeholder="e.g., 1000"
                    value={filters.minSqft}
                    onChange={(e) => handleFilterChange('minSqft', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Max Sq Ft</label>
                  <input
                    type="number"
                    placeholder="e.g., 2000"
                    value={filters.maxSqft}
                    onChange={(e) => handleFilterChange('maxSqft', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                {/* Location */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                  <input
                    type="text"
                    placeholder="Enter area name"
                    value={filters.location}
                    onChange={(e) => handleFilterChange('location', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="flex justify-end mt-4">
                <button
                  onClick={clearFilters}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800 font-medium"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Properties Grid - Desktop */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover-lift overflow-hidden group"
            >
              {/* Property Image */}
              <div className="relative overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {property.featured && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                )}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 group-hover:bg-white transition-colors">
                  <Eye className="w-5 h-5 text-gray-600" />
                </div>
              </div>

              {/* Property Details */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {property.title}
                  </h3>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-gray-600">{property.rating}</span>
                  </div>
                </div>

                <div className="flex items-center text-gray-600 mb-3">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{property.location}</span>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {property.description}
                </p>

                {/* Property Stats */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Bed className="w-4 h-4 mr-1" />
                      <span>{property.bedrooms}</span>
                    </div>
                    <div className="flex items-center">
                      <Bath className="w-4 h-4 mr-1" />
                      <span>{property.bathrooms}</span>
                    </div>
                    <div className="flex items-center">
                      <Square className="w-4 h-4 mr-1" />
                      <span>{property.sqft} sq ft</span>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500 capitalize">
                    {property.facing} facing
                  </div>
                </div>

                {/* Price and Action */}
                <div className="flex justify-between items-center">
                  <div className="text-2xl font-bold text-blue-600">
                    {formatPrice(property.price)}
                  </div>
                  <button 
                    onClick={() => setSelectedProperty(property)}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentCarouselIndex * 100}%)` }}
              >
                {filteredProperties.map((property) => (
                  <div key={property.id} className="w-full flex-shrink-0 px-2">
                    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover-lift overflow-hidden group">
                      {/* Property Image */}
                      <div className="relative overflow-hidden">
                        <img
                          src={property.image}
                          alt={property.title}
                          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        {property.featured && (
                          <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            Featured
                          </div>
                        )}
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 group-hover:bg-white transition-colors">
                          <Eye className="w-5 h-5 text-gray-600" />
                        </div>
                      </div>

                      {/* Property Details */}
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {property.title}
                          </h3>
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-sm font-medium text-gray-600">{property.rating}</span>
                          </div>
                        </div>

                        <div className="flex items-center text-gray-600 mb-3">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span className="text-sm">{property.location}</span>
                        </div>

                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                          {property.description}
                        </p>

                        {/* Property Stats */}
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex space-x-4 text-sm text-gray-600">
                            <div className="flex items-center">
                              <Bed className="w-4 h-4 mr-1" />
                              <span>{property.bedrooms}</span>
                            </div>
                            <div className="flex items-center">
                              <Bath className="w-4 h-4 mr-1" />
                              <span>{property.bathrooms}</span>
                            </div>
                            <div className="flex items-center">
                              <Square className="w-4 h-4 mr-1" />
                              <span>{property.sqft} sq ft</span>
                            </div>
                          </div>
                          <div className="text-sm text-gray-500 capitalize">
                            {property.facing} facing
                          </div>
                        </div>

                        {/* Price and Action */}
                        <div className="flex justify-between items-center">
                          <div className="text-2xl font-bold text-blue-600">
                            {formatPrice(property.price)}
                          </div>
                          <button 
                            onClick={() => setSelectedProperty(property)}
                            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
                          >
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Navigation */}
            <button
              onClick={prevCarousel}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            <button
              onClick={nextCarousel}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-4 space-x-2">
            {filteredProperties.map((_, index) => (
              <button
                key={index}
                onClick={() => goToCarousel(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentCarouselIndex
                    ? 'bg-blue-600 scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Load More Button */}
        {filteredProperties.length > 0 && (
          <div className="text-center mt-12">
            <button className="bg-white hover:bg-gray-50 text-blue-600 font-semibold py-3 px-8 rounded-lg border-2 border-blue-600 hover:border-blue-700 transition-all duration-300">
              Load More Properties
            </button>
          </div>
        )}

        {/* No Results */}
        {filteredProperties.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Square className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No properties found</h3>
            <p className="text-gray-500">Try adjusting your filters to see more results</p>
          </div>
        )}

        {/* Property Details Popup */}
        {selectedProperty && (
          <PropertyDetails
            property={selectedProperty}
            onClose={() => setSelectedProperty(null)}
          />
        )}
      </div>
    </section>
  );
};

export default PropertyList;
