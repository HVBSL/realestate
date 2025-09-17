import React from 'react';
import { Award, Users, Clock, Shield, Target, Heart } from 'lucide-react';

const AboutUs = () => {
  const stats = [
    { icon: Users, value: '1000+', label: 'Happy Clients' },
    { icon: Award, value: '500+', label: 'Properties Sold' },
    { icon: Clock, value: '10+', label: 'Years Experience' },
    { icon: Shield, value: '100%', label: 'Satisfaction Rate' }
  ];

  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To help every family find their perfect home by providing exceptional service and expert guidance throughout their real estate journey.'
    },
    {
      icon: Heart,
      title: 'Our Vision',
      description: 'To be the most trusted and innovative real estate platform that transforms the way people buy, sell, and rent properties.'
    },
    {
      icon: Shield,
      title: 'Our Values',
      description: 'Integrity, transparency, and client satisfaction are at the core of everything we do. We believe in building lasting relationships.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About DH Enterprises
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We are a leading real estate company dedicated to helping you find the perfect property. 
            With over a decade of experience, we've built a reputation for excellence and trust.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Your Trusted Real Estate Partner
            </h3>
            <div className="space-y-4 text-gray-600">
              <p>
                Founded in 2013, DH Enterprises has been at the forefront of the real estate industry, 
                helping thousands of families find their dream homes. Our team of experienced professionals 
                combines local market knowledge with cutting-edge technology to deliver exceptional results.
              </p>
              <p>
                We understand that buying or selling a property is one of life's most important decisions. 
                That's why we're committed to providing personalized service, transparent communication, 
                and expert guidance every step of the way.
              </p>
              <p>
                Our comprehensive approach includes market analysis, property valuation, negotiation support, 
                and post-transaction assistance to ensure your complete satisfaction.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <div className="text-center">
                <h4 className="text-2xl font-bold mb-4">Why Choose Us?</h4>
                <ul className="space-y-3 text-left">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                    Expert market knowledge and insights
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                    Personalized service tailored to your needs
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                    Advanced technology for better property matching
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                    24/7 customer support and assistance
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                    Transparent pricing with no hidden fees
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <value.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h4>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Meet Our Expert Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">JS</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">John Smith</h4>
              <p className="text-blue-600 font-medium mb-2">CEO & Founder</p>
              <p className="text-gray-600 text-sm">
                15+ years in real estate with expertise in luxury properties and commercial investments.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="w-24 h-24 bg-gradient-to-r from-green-600 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">MJ</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Maria Johnson</h4>
              <p className="text-blue-600 font-medium mb-2">Head of Sales</p>
              <p className="text-gray-600 text-sm">
                Specialized in residential properties with a track record of 200+ successful transactions.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">DW</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">David Wilson</h4>
              <p className="text-blue-600 font-medium mb-2">Property Consultant</p>
              <p className="text-gray-600 text-sm">
                Expert in market analysis and property valuation with 10+ years of experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
