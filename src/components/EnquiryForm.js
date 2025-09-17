import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { 
  User, 
  Mail, 
  Phone, 
  Home, 
  DollarSign, 
  MapPin, 
  MessageSquare, 
  Send,
  CheckCircle,
  Building,
  Calendar
} from 'lucide-react';

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: '',
    budget: '',
    location: '',
    message: '',
    preferredContact: 'email',
    timeline: '',
    propertySize: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // EmailJS configuration
      const serviceId = 'service_z9ye6ln';
      const templateId = 'template_vo452jp';
      const publicKey = 'YhmiD28JknS_5_7sS';
      
      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        property_type: formData.propertyType,
        budget: formData.budget,
        location: formData.location,
        message: formData.message,
        preferred_contact: formData.preferredContact,
        timeline: formData.timeline,
        property_size: formData.propertySize,
        to_name: 'DH Enterprises Team'
      };
      
      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setIsSubmitted(true);
      setIsSubmitting(false);
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          propertyType: '',
          budget: '',
          location: '',
          message: '',
          preferredContact: 'email',
          timeline: '',
          propertySize: ''
        });
      }, 5000);
      
    } catch (error) {
      console.error('Error sending email:', error);
      setIsSubmitting(false);
      alert('There was an error sending your enquiry. Please try again or contact us directly.');
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-20 bg-gray-50 min-h-screen flex items-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl shadow-2xl p-12">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Thank You for Your Enquiry!
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Your enquiry has been successfully sent! Our team will get back to you within 24 hours 
              with personalized property recommendations.
            </p>
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="font-semibold text-blue-900 mb-2">What happens next?</h3>
              <ul className="text-left text-blue-800 space-y-2">
                <li>• Our expert will review your requirements</li>
                <li>• We'll search our database for matching properties</li>
                <li>• You'll receive a personalized property list</li>
                <li>• We'll schedule property viewings at your convenience</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to find your dream property? Fill out the form below and our expert team 
            will help you find the perfect match.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us?</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 rounded-full p-3">
                    <Building className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Expert Knowledge</h3>
                    <p className="text-gray-600">
                      Our team has deep local market knowledge and years of experience in real estate.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 rounded-full p-3">
                    <Calendar className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Personalized Service</h3>
                    <p className="text-gray-600">
                      We tailor our approach to your specific needs and preferences.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 rounded-full p-3">
                    <Phone className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">24/7 Support</h3>
                    <p className="text-gray-600">
                      Our team is always available to answer your questions and provide assistance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5" />
                  <span>+1 (234) 567-8900</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5" />
                  <span>info@realestatepro.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5" />
                  <span>123 Business District, Downtown</span>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-white/20">
                <p className="text-blue-100">
                  <strong>Office Hours:</strong><br />
                  Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday: 10:00 AM - 4:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Enquiry Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Property Enquiry Form</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              {/* Property Preferences */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Property Type *
                  </label>
                  <div className="relative">
                    <Home className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <select
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                    >
                      <option value="">Select property type</option>
                      <option value="flats">Flats & Apartments</option>
                      <option value="houses">Houses & Villas</option>
                      <option value="commercial">Commercial Properties</option>
                      <option value="rentals">Rental Properties</option>
                      <option value="luxury">Luxury Homes</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Budget Range
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                    >
                      <option value="">Select budget range</option>
                      <option value="0-100000">Under $100K</option>
                      <option value="100000-300000">$100K - $300K</option>
                      <option value="300000-500000">$300K - $500K</option>
                      <option value="500000-1000000">$500K - $1M</option>
                      <option value="1000000+">$1M+</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Location
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter preferred area"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Property Size
                  </label>
                  <select
                    name="propertySize"
                    value={formData.propertySize}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                  >
                    <option value="">Select size range</option>
                    <option value="0-1000">Under 1000 sq ft</option>
                    <option value="1000-1500">1000 - 1500 sq ft</option>
                    <option value="1500-2000">1500 - 2000 sq ft</option>
                    <option value="2000-3000">2000 - 3000 sq ft</option>
                    <option value="3000+">3000+ sq ft</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Timeline
                </label>
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                >
                  <option value="">Select timeline</option>
                  <option value="immediate">Immediately</option>
                  <option value="1month">Within 1 month</option>
                  <option value="3months">Within 3 months</option>
                  <option value="6months">Within 6 months</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Contact Method
                </label>
                <div className="flex space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="preferredContact"
                      value="email"
                      checked={formData.preferredContact === 'email'}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    Email
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="preferredContact"
                      value="phone"
                      checked={formData.preferredContact === 'phone'}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    Phone
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="preferredContact"
                      value="both"
                      checked={formData.preferredContact === 'both'}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    Both
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Message
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Tell us more about your requirements..."
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Submit Enquiry</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnquiryForm;
