import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, ThumbsUp, Award } from 'lucide-react';

const ClientFeedbacks = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Home Buyer",
      location: "Downtown",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      rating: 5,
      comment: "RealEstate Pro made our home buying process incredibly smooth. Their team was professional, knowledgeable, and always available to answer our questions. We found our dream home within a month!",
      property: "3BR Apartment in Downtown",
      date: "March 2024"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Property Investor",
      location: "Business District",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      rating: 5,
      comment: "As a property investor, I've worked with many real estate agencies. RealEstate Pro stands out for their market insights and negotiation skills. They helped me secure a great commercial property at an excellent price.",
      property: "Commercial Office Space",
      date: "February 2024"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "First-time Buyer",
      location: "Suburban Area",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      rating: 5,
      comment: "Being a first-time buyer, I was nervous about the process. The team at RealEstate Pro guided me through every step, explaining everything clearly. They made what seemed complicated, simple and stress-free.",
      property: "2BR House in Suburbs",
      date: "January 2024"
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Luxury Home Buyer",
      location: "Waterfront",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      rating: 5,
      comment: "The attention to detail and personalized service exceeded my expectations. They understood exactly what I was looking for and found properties that matched my criteria perfectly. Highly recommended!",
      property: "Luxury Penthouse",
      date: "December 2023"
    },
    {
      id: 5,
      name: "Lisa Wang",
      role: "Rental Client",
      location: "City Center",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      rating: 5,
      comment: "I needed to find a rental property quickly for my new job. RealEstate Pro had several great options ready and helped me secure the perfect apartment within a week. Their efficiency is impressive!",
      property: "1BR Apartment Rental",
      date: "November 2023"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say 
              about their experience with DH Enterprises.
            </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="relative mb-12">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <Quote className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <div className="flex justify-center mb-4">
                {renderStars(testimonials[currentTestimonial].rating)}
              </div>
              <p className="text-lg md:text-xl text-gray-700 italic leading-relaxed max-w-4xl mx-auto">
                "{testimonials[currentTestimonial].comment}"
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-xl font-semibold text-gray-900">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-blue-600 font-medium">
                    {testimonials[currentTestimonial].role}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {testimonials[currentTestimonial].location} • {testimonials[currentTestimonial].date}
                  </p>
                </div>
              </div>
              <div className="text-center md:text-right">
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <p className="text-sm text-gray-600 mb-1">Property Purchased</p>
                  <p className="font-semibold text-gray-900">
                    {testimonials[currentTestimonial].property}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Testimonial Thumbnails */}
        <div className="flex justify-center space-x-3 mb-12">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => goToTestimonial(index)}
              className={`w-12 h-12 rounded-full overflow-hidden border-2 transition-all duration-300 ${
                index === currentTestimonial
                  ? 'border-blue-600 scale-110'
                  : 'border-gray-300 hover:border-blue-400'
              }`}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <ThumbsUp className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">98% Satisfaction Rate</h3>
            <p className="text-gray-600">
              Our clients consistently rate us highly for our service quality and results.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Award-Winning Service</h3>
            <p className="text-gray-600">
              Recognized by industry leaders for excellence in real estate services.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">4.9/5 Average Rating</h3>
            <p className="text-gray-600">
              Based on hundreds of verified reviews from our satisfied clients.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Experience Our Service?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have found their perfect property with DH Enterprises.
            </p>
            <button className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientFeedbacks;
