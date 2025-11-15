import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Eye, 
  Shield, 
  DollarSign,
  Clock,
  Users,
  Star,
  Award
} from 'lucide-react';

const WhyFundRoot: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast Disbursal',
      description: 'Get your loan approved and funds transferred within 24 hours of document verification.',
      gradient: 'from-yellow-500 to-orange-500',
      bgGradient: 'from-yellow-50 to-orange-100 dark:from-yellow-900/20 dark:to-orange-900/20',
    },
    {
      icon: Eye,
      title: 'Transparent Process',
      description: 'No hidden charges, no surprises. Complete transparency in our loan process and fees.',
      gradient: 'from-blue-500 to-indigo-500',
      bgGradient: 'from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20',
    },
    {
      icon: Shield,
      title: 'RBI-Registered Partners',
      description: 'We work exclusively with RBI-registered NBFCs and banks for your security.',
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20',
    },
    {
      icon: DollarSign,
      title: 'Competitive Rates',
      description: 'Get the best interest rates in the market with flexible repayment options.',
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20',
    },
  ];

  const stats = [
    {
      icon: DollarSign,
      value: '₹100Cr+',
      label: 'Loans Processed',
      color: 'text-green-600 dark:text-green-400',
    },
    {
      icon: Users,
      value: '25K+',
      label: 'Happy Clients',
      color: 'text-blue-600 dark:text-blue-400',
    },
    {
      icon: Star,
      value: '4.9⭐',
      label: 'Average Rating',
      color: 'text-yellow-600 dark:text-yellow-400',
    },
    {
      icon: Clock,
      value: '24 Hrs',
      label: 'Avg. Disbursal Time',
      color: 'text-purple-600 dark:text-purple-400',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4 sm:mb-6">
            Why Choose
            <span className="bg-gradient-to-r from-primary-600 to-success-600 bg-clip-text text-transparent"> FundRoot?</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4 sm:px-0">
            We're not just another lending platform. We're your trusted financial partner, 
            committed to making your loan journey smooth and transparent.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300`} />
              
              {/* Main Card */}
              <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-white/50 dark:border-gray-700/50 rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 h-full shadow-xl group-hover:shadow-2xl transition-all duration-300">
                {/* Icon */}
                <div className={`inline-flex p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-r ${feature.gradient} mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white mb-3 sm:mb-4">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Counter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-gradient-to-r from-primary-500/10 to-success-500/10 dark:from-primary-500/5 dark:to-success-500/5 backdrop-blur-lg border border-primary-200/50 dark:border-primary-800/50 rounded-3xl p-8 lg:p-12"
        >
          <div className="text-center mb-12">
            <motion.div
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-success-500 text-white px-6 py-3 rounded-full text-lg font-semibold mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Award className="h-5 w-5" />
              Trusted by Thousands
            </motion.div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              Our Numbers Speak for Themselves
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Join thousands of satisfied customers who chose FundRoot for their financial needs
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 group-hover:shadow-lg transition-shadow duration-300">
                  <div className={`inline-flex p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className={`h-5 w-5 sm:h-6 sm:w-6 ${stat.color}`} />
                  </div>
                  <div className={`text-2xl sm:text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6">
            Ready to Experience the FundRoot Difference?
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-300 animate-pulse-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Apply for Loan
            </motion.button>
            <motion.button
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-primary-200 dark:border-primary-800 text-primary-600 dark:text-primary-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Talk to Expert
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyFundRoot;