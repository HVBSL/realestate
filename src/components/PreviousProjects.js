import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, MapPin, Calendar, Users, Star } from 'lucide-react';

const PreviousProjects = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      id: 1,
      name: "Sunset Residences",
      location: "Downtown District",
      type: "Luxury Apartments",
      completionDate: "2023",
      units: 150,
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "A premium residential complex featuring modern amenities and stunning city views.",
      features: ["Swimming Pool", "Gym & Spa", "Rooftop Garden", "24/7 Security", "Parking"],
      rating: 4.9,
      status: "Completed"
    },
    {
      id: 2,
      name: "Garden Villas",
      location: "Suburban Area",
      type: "Family Houses",
      completionDate: "2022",
      units: 75,
      image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Spacious family homes with private gardens and modern interiors.",
      features: ["Private Garden", "Garage", "Modern Kitchen", "Home Office", "Play Area"],
      rating: 4.8,
      status: "Completed"
    },
    {
      id: 3,
      name: "Business Plaza",
      location: "Financial District",
      type: "Commercial Complex",
      completionDate: "2024",
      units: 200,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "State-of-the-art commercial complex with modern office spaces and retail units.",
      features: ["Modern Offices", "Retail Spaces", "Conference Rooms", "Cafeteria", "Parking"],
      rating: 4.7,
      status: "In Progress"
    },
    {
      id: 4,
      name: "Riverside Apartments",
      location: "Waterfront",
      type: "Luxury Apartments",
      completionDate: "2021",
      units: 120,
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Elegant apartments with panoramic river views and premium amenities.",
      features: ["River Views", "Balcony", "Premium Finishes", "Concierge", "Fitness Center"],
      rating: 4.9,
      status: "Completed"
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToProject = (index) => {
    setCurrentProject(index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Previous Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Take a look at some of our successful projects that have transformed communities 
            and created beautiful living spaces for our clients.
          </p>
        </div>

        {/* Project Carousel */}
        <div className="relative">
          {/* Main Project Display */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Project Image */}
              <div className="relative h-96 lg:h-auto">
                <img
                  src={projects[currentProject].image}
                  alt={projects[currentProject].name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    projects[currentProject].status === 'Completed' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {projects[currentProject].status}
                  </span>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-semibold text-gray-700">
                      {projects[currentProject].rating}
                    </span>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-8 lg:p-12">
                <div className="mb-6">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    {projects[currentProject].name}
                  </h3>
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span>{projects[currentProject].location}</span>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {projects[currentProject].description}
                  </p>
                </div>

                {/* Project Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <Calendar className="w-5 h-5 text-blue-600 mr-2" />
                      <span className="text-sm font-medium text-gray-600">Completion</span>
                    </div>
                    <div className="text-2xl font-bold text-gray-900">
                      {projects[currentProject].completionDate}
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <Users className="w-5 h-5 text-green-600 mr-2" />
                      <span className="text-sm font-medium text-gray-600">Units</span>
                    </div>
                    <div className="text-2xl font-bold text-gray-900">
                      {projects[currentProject].units}
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h4>
                  <div className="flex flex-wrap gap-2">
                    {projects[currentProject].features.map((feature, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-between items-center">
                  <button
                    onClick={prevProject}
                    className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <ArrowLeft className="w-5 h-5" />
                    <span>Previous</span>
                  </button>
                  <button
                    onClick={nextProject}
                    className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <span>Next</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Project Thumbnails */}
          <div className="flex justify-center mt-8 space-x-4">
            {projects.map((project, index) => (
              <button
                key={project.id}
                onClick={() => goToProject(index)}
                className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                  index === currentProject
                    ? 'border-blue-600 scale-110'
                    : 'border-gray-300 hover:border-blue-400'
                }`}
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Project Statistics */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">2000+</div>
            <div className="text-gray-600">Units Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">15+</div>
            <div className="text-gray-600">Awards Won</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-600 mb-2">98%</div>
            <div className="text-gray-600">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreviousProjects;



