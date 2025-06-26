import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calculator, CheckCircle, TrendingUp, Shield } from 'lucide-react';

const Hero: React.FC = () => {
  const floatingIcons = [
    { Icon: TrendingUp, delay: 0, position: 'top-20 left-10' },
    { Icon: Shield, delay: 0.5, position: 'top-32 right-16' },
    { Icon: CheckCircle, delay: 1, position: 'bottom-40 left-20' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900" />
      
      {/* Floating Background Icons */}
      {floatingIcons.map(({ Icon, delay, position }, index) => (
        <motion.div
          key={index}
          className={`absolute ${position} opacity-10 dark:opacity-5`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ delay, duration: 1 }}
        >
          <Icon className="h-24 w-24 text-primary-500 animate-float" />
        </motion.div>
      ))}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
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

            <motion.p
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mt-6 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Get instant loans for business growth, personal needs, or asset purchases. 
              <span className="font-semibold text-primary-600 dark:text-primary-400"> Fast approval, transparent process.</span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <motion.button
                className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg flex items-center justify-center gap-2 hover:from-primary-600 hover:to-primary-700 transition-all duration-300 animate-pulse-glow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Check Eligibility
                <ArrowRight className="h-5 w-5" />
              </motion.button>
              
              <motion.button
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-primary-200 dark:border-primary-800 text-primary-600 dark:text-primary-400 px-8 py-4 rounded-2xl font-semibold text-lg flex items-center justify-center gap-2 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Calculator className="h-5 w-5" />
                Calculate EMI
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-6 mt-12 lg:mt-16"
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
                  <div className="text-2xl md:text-3xl font-bold text-primary-600 dark:text-primary-400">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
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
            className="relative"
          >
            <div className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-lg border border-white/30 dark:border-gray-700/30 rounded-3xl p-8 shadow-2xl">
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                  Quick Loan Application
                </h3>
                
                <div className="space-y-4">
                  <div className="bg-white/40 dark:bg-gray-700/40 backdrop-blur-sm rounded-xl p-4 text-left">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Loan Amount
                    </label>
                    <input
                      type="text"
                      placeholder="₹5,00,000"
                      className="w-full bg-white/60 dark:bg-gray-800/60 border border-white/50 dark:border-gray-600/50 rounded-lg px-4 py-3 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  
                  <div className="bg-white/40 dark:bg-gray-700/40 backdrop-blur-sm rounded-xl p-4 text-left">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Purpose
                    </label>
                    <select className="w-full bg-white/60 dark:bg-gray-800/60 border border-white/50 dark:border-gray-600/50 rounded-lg px-4 py-3 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500">
                      <option>Business Expansion</option>
                      <option>Personal Needs</option>
                      <option>Home Purchase</option>
                      <option>Car Purchase</option>
                    </select>
                  </div>
                  
                  <motion.button
                    className="w-full bg-gradient-to-r from-success-500 to-success-600 text-white py-4 rounded-xl font-semibold text-lg hover:from-success-600 hover:to-success-700 transition-all duration-300"
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