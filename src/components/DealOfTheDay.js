import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { X, Star, MapPin, Bed, Bath, Square, Clock, Flame, ArrowRight } from 'lucide-react';

const DealOfTheDay = ({ onClose }) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  const dealProperty = {
    id: 'deal-1',
    title: "Luxury Penthouse with City Views",
    price: 850000,
    originalPrice: 950000,
    discount: 100000,
    location: "Downtown Financial District",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    bedrooms: 3,
    bathrooms: 3,
    sqft: 2200,
    rating: 4.9,
    features: ["City Views", "Private Elevator", "Rooftop Terrace", "Smart Home", "Concierge"],
    description: "Stunning penthouse with panoramic city views, modern amenities, and premium finishes throughout.",
      agent: {
        name: "Sarah Johnson",
        phone: "+1 (234) 567-8901",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
      },
      images: [
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2058&q=80",
        "https://images.unsplash.com/photo-1616486338812-3d3e3a7b8b8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      ]
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          return { hours: 0, minutes: 0, seconds: 0 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatPrice = (price) => {
    return `$${price.toLocaleString()}`;
  };

  const formatTime = (time) => {
    return time.toString().padStart(2, '0');
  };

  const handleDealAction = async (actionType) => {
    try {
      const serviceId = 'service_z9ye6ln';
      const templateId = 'template_vo452jp';
      const publicKey = 'YhmiD28JknS_5_7sS';
      
      const templateParams = {
        from_name: 'Deal of the Day Enquiry',
        from_email: 'enquiry@dhenterprises.com',
        property_title: dealProperty.title,
        property_price: formatPrice(dealProperty.price),
        property_location: dealProperty.location,
        action_type: actionType,
        message: `I'm interested in the Deal of the Day: ${dealProperty.title} at ${dealProperty.location} for ${formatPrice(dealProperty.price)}. Action: ${actionType}`,
        to_name: 'DH Enterprises Team'
      };
      
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      alert(`${actionType} request sent successfully! Our team will contact you soon.`);
    } catch (error) {
      console.error('Error sending deal request:', error);
      alert('There was an error sending your request. Please try again.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-red-600 to-orange-600 text-white p-6 rounded-t-2xl">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-white/20 rounded-full p-2">
              <Flame className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Deal of the Day</h2>
              <p className="text-red-100">Limited time offer - Don't miss out!</p>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="flex items-center space-x-4">
            <Clock className="w-5 h-5" />
            <span className="text-sm">Offer expires in:</span>
            <div className="flex space-x-2">
              <div className="bg-white/20 rounded-lg px-3 py-1">
                <span className="font-bold text-lg">{formatTime(timeLeft.hours)}</span>
                <span className="text-sm ml-1">H</span>
              </div>
              <div className="bg-white/20 rounded-lg px-3 py-1">
                <span className="font-bold text-lg">{formatTime(timeLeft.minutes)}</span>
                <span className="text-sm ml-1">M</span>
              </div>
              <div className="bg-white/20 rounded-lg px-3 py-1">
                <span className="font-bold text-lg">{formatTime(timeLeft.seconds)}</span>
                <span className="text-sm ml-1">S</span>
              </div>
            </div>
          </div>
        </div>

        {/* Property Details */}
        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Property Image */}
            <div className="relative">
              <img
                src={dealProperty.image}
                alt={dealProperty.title}
                className="w-full h-80 object-cover rounded-xl"
              />
              <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Save ${dealProperty.discount.toLocaleString()}
              </div>
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-semibold text-gray-700">
                    {dealProperty.rating}
                  </span>
                </div>
              </div>
            </div>

            {/* Property Information */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {dealProperty.title}
                </h3>
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>{dealProperty.location}</span>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {dealProperty.description}
                </p>
              </div>

              {/* Price Section */}
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-baseline space-x-3 mb-2">
                  <span className="text-3xl font-bold text-green-600">
                    {formatPrice(dealProperty.price)}
                  </span>
                  <span className="text-xl text-gray-500 line-through">
                    {formatPrice(dealProperty.originalPrice)}
                  </span>
                </div>
                <div className="text-green-600 font-semibold mb-4">
                  You save ${dealProperty.discount.toLocaleString()} (10.5% off)
                </div>
                <div className="text-sm text-gray-600">
                  *Price valid for today only. Subject to availability.
                </div>
              </div>

              {/* Property Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center bg-blue-50 rounded-lg p-4">
                  <Bed className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <div className="text-xl font-bold text-gray-900">{dealProperty.bedrooms}</div>
                  <div className="text-sm text-gray-600">Bedrooms</div>
                </div>
                <div className="text-center bg-green-50 rounded-lg p-4">
                  <Bath className="w-6 h-6 text-green-600 mx-auto mb-2" />
                  <div className="text-xl font-bold text-gray-900">{dealProperty.bathrooms}</div>
                  <div className="text-sm text-gray-600">Bathrooms</div>
                </div>
                <div className="text-center bg-purple-50 rounded-lg p-4">
                  <Square className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                  <div className="text-xl font-bold text-gray-900">{dealProperty.sqft}</div>
                  <div className="text-sm text-gray-600">Sq Ft</div>
                </div>
              </div>

              {/* Features */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                <div className="flex flex-wrap gap-2">
                  {dealProperty.features.map((feature, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Agent Info */}
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center space-x-3">
                  <img
                    src={dealProperty.agent.image}
                    alt={dealProperty.agent.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{dealProperty.agent.name}</div>
                    <div className="text-sm text-gray-600">Your Property Expert</div>
                    <div className="text-sm text-blue-600">{dealProperty.agent.phone}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => handleDealAction('View Property Details')}
              className="flex-1 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>View Property Details</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              onClick={() => handleDealAction('Schedule Viewing')}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Schedule Viewing
            </button>
            <button 
              onClick={() => handleDealAction('Contact Agent')}
              className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300"
            >
              Contact Agent
            </button>
          </div>

          {/* Terms and Conditions */}
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500">
              *This offer is valid for 24 hours only. Prices are subject to change without notice. 
              Property availability is limited. Terms and conditions apply.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealOfTheDay;
