import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import LoanCategories from './components/LoanCategories';
import EMICalculator from './components/EMICalculator';
import WhyFundRoot from './components/WhyFundRoot';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeProvider from './components/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900 transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <LoanCategories />
          <EMICalculator />
          <WhyFundRoot />
          <HowItWorks />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;