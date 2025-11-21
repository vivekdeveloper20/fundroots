import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calculator, CheckCircle, TrendingUp, Shield } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  const handleCalculateEmiClick = () => {
    const calculatorSection = document.getElementById('calculator');
    if (calculatorSection) {
      calculatorSection.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    navigate('/personal-loan-emi');
  };

  const floatingIcons = [
    { Icon: TrendingUp, delay: 0, position: 'top-20 left-10' },
    { Icon: Shield, delay: 0.5, position: 'top-32 right-16' },
    { Icon: CheckCircle, delay: 1, position: 'bottom-40 left-20' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900" />
      
      {/* Floating Background Icons */}
      {floatingIcons.map(({ Icon, delay, position }, index) => (
        <motion.div
          key={index}
          className={`absolute ${position} opacity-10 dark:opacity-5 hidden sm:block`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ delay, duration: 1 }}
        >
          <Icon className="h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 text-primary-500 animate-float" />
        </motion.div>
      ))}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="bg-gradient-to-r from-primary-600 via-purple-600 to-success-600 bg-clip-text text-transparent">
                Fund Your Dreams
              </span>
              <br />
              <span className="text-gray-800 dark:text-white">
                with FundRoot
              </span>
            </motion.h1>

            {/* Typing Effect */}
            <div className="mt-3 sm:mt-4 mb-2">
              <span className="bg-gradient-to-r from-primary-600 to-success-600 bg-clip-text text-transparent font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                <Typewriter
                  words={['Personal Loan', 'Home Loan', 'Business Loan', 'Car Loan']}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1200}
                />
              </span>
            </div>

            <motion.p
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mt-4 sm:mt-6 leading-relaxed px-2 sm:px-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Get instant loans for business growth, personal needs, or asset purchases. 
              <span className="font-semibold text-primary-600 dark:text-primary-400"> Fast approval, transparent process.</span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8 justify-center lg:justify-start px-2 sm:px-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <motion.button
                className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg flex items-center justify-center gap-2 hover:from-primary-600 hover:to-primary-700 transition-all duration-300 animate-pulse-glow w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/check-eligibility')}
              >
                Check Eligibility
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </motion.button>
              
              <motion.button
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-primary-200 dark:border-primary-800 text-primary-600 dark:text-primary-400 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg flex items-center justify-center gap-2 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300 w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCalculateEmiClick}
              >
                <Calculator className="h-4 w-4 sm:h-5 sm:w-5" />
                Calculate EMI
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 mt-8 sm:mt-12 lg:mt-16 px-2 sm:px-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              {[
                { value: '₹100Cr+', label: 'Loans Processed' },
                { value: '25K+', label: 'Happy Clients' },
                { value: '4.9⭐', label: 'Google Rating' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-primary-600 dark:text-primary-400">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Glassmorphism Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mt-8 lg:mt-0"
          >
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-white/50 dark:border-gray-700/50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl">
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
                  <span className="bg-gradient-to-r from-primary-600 to-success-600 bg-clip-text text-transparent">
                    Quick Loan Application
                  </span>
                </h3>
                
                <div className="space-y-3 sm:space-y-4">
                  <div className="bg-white/40 dark:bg-gray-700/40 backdrop-blur-sm rounded-xl p-3 sm:p-4 text-left">
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Loan Amount
                    </label>
                    <input
                      type="text"
                      placeholder="₹5,00,000"
                      className="w-full bg-white/60 dark:bg-gray-800/60 border border-white/50 dark:border-gray-600/50 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  {/* Mobile Number Field */}
                  <div className="bg-white/40 dark:bg-gray-700/40 backdrop-blur-sm rounded-xl p-3 sm:p-4 text-left">
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      placeholder="Enter your mobile number"
                      maxLength={10}
                      pattern="[0-9]{10}"
                      className="w-full bg-white/60 dark:bg-gray-800/60 border border-white/50 dark:border-gray-600/50 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  
                  <div className="bg-white/40 dark:bg-gray-700/40 backdrop-blur-sm rounded-xl p-3 sm:p-4 text-left">
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Purpose
                    </label>
                    <select className="w-full bg-white/60 dark:bg-gray-800/60 border border-white/50 dark:border-gray-600/50 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500">
                      <option>Business Expansion</option>
                      <option>Personal Needs</option>
                      <option>Home Purchase</option>
                      <option>Car Purchase</option>
                      <option>Others</option>
                    </select>
                  </div>
                  
                  <motion.button
                    className="w-full bg-gradient-to-r from-success-500 to-success-600 text-white py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:from-success-600 hover:to-success-700 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Instant Quote
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;