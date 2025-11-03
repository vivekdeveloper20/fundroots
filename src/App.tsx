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
import HomeLoanEMICalculator from './components/HomeLoanEMICalculator';
import CarLoanEMICalculator from './components/CarLoanEMICalculator';
import BusinessLoanEMICalculator from './components/BusinessLoanEMICalculator';
import ForeclosureCalculator from './components/ForeclosureCalculator';
import OurTeamPage from './components/OurTeamPage';
import PartnerBanksPage from './components/PartnerBanksPage';
import CareersPage from './components/CareersPage';
import TestimonialsPage from './components/TestimonialsPage';
import HowItWorksPage from './components/HowItWorksPage';
import CheckEligibilityPage from './components/CheckEligibilityPage';
import DocumentsRequiredPage from './components/DocumentsRequiredPage';
import ApplyNowPage from './components/ApplyNowPage';

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
              <Route path="/our-team" element={<OurTeamPage />} />
              <Route path="/partner-banks" element={<PartnerBanksPage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/testimonials" element={<TestimonialsPage />} />
              <Route path="/how-it-works" element={<HowItWorksPage />} />
              <Route path="/check-eligibility" element={<CheckEligibilityPage />} />
              <Route path="/documents-required" element={<DocumentsRequiredPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/personal-loan-emi" element={<PersonalLoanEMICalculator />} />
              <Route path="/home-loan-emi" element={<HomeLoanEMICalculator />} />
              <Route path="/car-loan-emi" element={<CarLoanEMICalculator />} />
              <Route path="/business-loan-emi" element={<BusinessLoanEMICalculator />} />
              <Route path="/foreclosure-calculator" element={<ForeclosureCalculator />} />
              <Route path="/apply" element={<ApplyNowPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;