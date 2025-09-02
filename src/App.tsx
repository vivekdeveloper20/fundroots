import React from 'react';
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
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoanDetail from './components/LoanDetail';
import ScrollToTop from './components/ScrollToTop';
import ContactPage from './components/ContactPage';
import BlogList from './components/BlogList';
import AboutPage from './components/AboutPage';
import PersonalLoanPage from './components/PersonalLoanPage';
import HomeLoanPage from './components/HomeLoanPage';
import BusinessLoanPage from './components/BusinessLoanPage';
import CarLoanPage from './components/CarLoanPage';
import PersonalLoanEMICalculator from './components/PersonalLoanEMICalculator';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900 transition-colors duration-300">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={
                <>
                  <Hero />
                  <LoanCategories />
                  <EMICalculator />
                  <WhyFundRoot />
                  <HowItWorks />
                  <Testimonials />
                  <Contact />
                </>
              } />
              <Route path="/personal-loan" element={<PersonalLoanPage />} />
              <Route path="/home-loan" element={<HomeLoanPage />} />
              <Route path="/business-loan" element={<BusinessLoanPage />} />
              <Route path="/car-loan" element={<CarLoanPage />} />
              <Route path="/blog" element={<BlogList />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/personal-loan-emi" element={<PersonalLoanEMICalculator />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;