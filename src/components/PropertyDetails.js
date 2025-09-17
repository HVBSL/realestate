import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { X, ChevronLeft, ChevronRight, MapPin, Bed, Bath, Square, Star, Phone, Mail, Share2 } from 'lucide-react';

const PropertyDetails = ({ property, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const propertyImages = property.images || [
    property.image,
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80",
    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % propertyImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + propertyImages.length) % propertyImages.length);
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  const handleContactAgent = async (contactType) => {
    try {
      const serviceId = 'service_z9ye6ln';
      const templateId = 'template_vo452jp';
      const publicKey = 'YhmiD28JknS_5_7sS';
      
      const templateParams = {
        from_name: 'Property Enquiry',
        from_email: 'enquiry@dhenterprises.com',
        property_title: property.title,
        property_price: formatPrice(property.price),
        property_location: property.location,
        agent_name: property.agent?.name || 'Property Expert',
        contact_type: contactType,
        message: `I'm interested in this property: ${property.title} at ${property.location} for ${formatPrice(property.price)}`,
        to_name: property.agent?.name || 'Property Expert'
      };
      
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      alert(`${contactType} request sent successfully! Our agent will contact you soon.`);
    } catch (error) {
      console.error('Error sending contact request:', error);
      alert('There was an error sending your request. Please try again.');
    }
  };

  const formatPrice = (price) => {
    if (price < 1000) {
      return `$${price}/month`;
    }
    return `$${price.toLocaleString()}`;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[95vh] overflow-y-auto">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-t-2xl">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">{property.title}</h2>
              <div className="flex items-center text-blue-100">
                <MapPin className="w-5 h-5 mr-2" />
                <span>{property.location}</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold">{formatPrice(property.price)}</div>
              <div className="text-blue-100">Property Details</div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Image Gallery */}
            <div className="lg:col-span-2">
              <div className="relative">
                <img
                  src={propertyImages[currentImageIndex]}
                  alt={property.title}
                  className="w-full h-96 object-cover rounded-xl"
                />
                
                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-700" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
                >
                  <ChevronRight className="w-6 h-6 text-gray-700" />
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {propertyImages.length}
                </div>
              </div>

              {/* Thumbnail Gallery */}
              <div className="flex space-x-2 mt-4 overflow-x-auto">
                {propertyImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => goToImage(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                      index === currentImageIndex
                        ? 'border-blue-600 scale-105'
                        : 'border-gray-300 hover:border-blue-400'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${property.title} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Property Information */}
            <div className="space-y-6">
              {/* Basic Info */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Property Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Property Type:</span>
                    <span className="font-semibold capitalize">{property.type}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Price:</span>
                    <span className="font-semibold text-blue-600 text-lg">{formatPrice(property.price)}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Facing:</span>
                    <span className="font-semibold capitalize">{property.facing}</span>
                  </div>
                </div>
              </div>

              {/* Property Stats */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 mb-4">Property Details</h4>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <Bed className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <div className="text-xl font-bold text-gray-900">{property.bedrooms}</div>
                    <div className="text-sm text-gray-600">Bedrooms</div>
                  </div>
                  <div className="text-center">
                    <Bath className="w-6 h-6 text-green-600 mx-auto mb-2" />
                    <div className="text-xl font-bold text-gray-900">{property.bathrooms}</div>
                    <div className="text-sm text-gray-600">Bathrooms</div>
                  </div>
                  <div className="text-center">
                    <Square className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                    <div className="text-xl font-bold text-gray-900">{property.sqft}</div>
                    <div className="text-sm text-gray-600">Sq Ft</div>
                  </div>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-2">
                <div className="flex items-center">
                  {Array.from({ length: 5 }, (_, index) => (
                    <Star
                      key={index}
                      className={`w-5 h-5 ${
                        index < Math.floor(property.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-600">{property.rating} rating</span>
              </div>

              {/* Description */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Description</h4>
                <p className="text-gray-600 leading-relaxed">{property.description}</p>
              </div>

              {/* Features */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                <div className="flex flex-wrap gap-2">
                  {property.features?.map((feature, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contact Agent */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 mb-4">Contact Agent</h4>
                <div className="flex items-center space-x-3 mb-4">
                  <img
                    src={property.agent?.image || "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"}
                    alt="Agent"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{property.agent?.name || "Sarah Johnson"}</div>
                    <div className="text-sm text-gray-600">Property Expert</div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button 
                    onClick={() => handleContactAgent('Call')}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call</span>
                  </button>
                  <button 
                    onClick={() => handleContactAgent('Email')}
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Email</span>
                  </button>
                  <button 
                    onClick={() => handleContactAgent('Share')}
                    className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-lg transition-colors"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
              Schedule Viewing
            </button>
            <button className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
              Make Offer
            </button>
            <button className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300">
              Save Property
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
