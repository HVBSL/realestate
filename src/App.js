import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import PropertyList from './components/PropertyList';
import AboutUs from './components/AboutUs';
import PreviousProjects from './components/PreviousProjects';
import ClientFeedbacks from './components/ClientFeedbacks';
import Footer from './components/Footer';
import DealOfTheDay from './components/DealOfTheDay';
import EnquiryForm from './components/EnquiryForm';

function App() {
  const [showDealPopup, setShowDealPopup] = useState(false);

  useEffect(() => {
    // Show deal popup after 3 seconds
    const timer = setTimeout(() => {
      setShowDealPopup(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <PropertyList />
              <AboutUs />
              <PreviousProjects />
              <ClientFeedbacks />
            </>
          } />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/projects" element={<PreviousProjects />} />
          <Route path="/contact" element={<EnquiryForm />} />
        </Routes>
        <Footer />
        
        {/* Deal of the Day Popup */}
        {showDealPopup && (
          <DealOfTheDay onClose={() => setShowDealPopup(false)} />
        )}
      </div>
    </Router>
  );
}

export default App;



