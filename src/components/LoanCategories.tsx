import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  User, 
  Car, 
  Home, 
  Factory,
  ArrowRight,
  TrendingUp,
  Clock,
  Shield
} from 'lucide-react';

const LoanCategories: React.FC = () => {
  const loanTypes = [
    {
      icon: Building2,
      title: 'Business Loans',
      description: 'Fuel your business growth with flexible financing options',
      interestRate: '9.5% onwards',
      maxLoan: '₹50 Lakhs',
      tenure: '5 Years',
      gradient: 'from-blue-500 to-indigo-600',
      bgGradient: 'from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20',
    },
    {
      icon: User,
      title: 'Personal Loans',
      description: 'Quick funds for your personal needs and emergencies',
      interestRate: '10.5% onwards',
      maxLoan: '₹25 Lakhs',
      tenure: '3 Years',
      gradient: 'from-purple-500 to-pink-600',
      bgGradient: 'from-purple-50 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20',
    },
    {
      icon: Car,
      title: 'Car Loans',
      description: 'Drive your dream car with competitive interest rates',
      interestRate: '8.5% onwards',
      maxLoan: '₹1 Crore',
      tenure: '7 Years',
      gradient: 'from-green-500 to-emerald-600',
      bgGradient: 'from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20',
    },
    {
      icon: Home,
      title: 'Home Loans',
      description: 'Make your dream home a reality with affordable EMIs',
      interestRate: '8.0% onwards',
      maxLoan: '₹5 Crores',
      tenure: '30 Years',
      gradient: 'from-orange-500 to-red-600',
      bgGradient: 'from-orange-50 to-red-100 dark:from-orange-900/20 dark:to-red-900/20',
    },
    {
      icon: Factory,
      title: 'MSME Loans',
      description: 'Empower your small business with tailored loan solutions',
      interestRate: '9.0% onwards',
      maxLoan: '₹2 Crores',
      tenure: '10 Years',
      gradient: 'from-teal-500 to-cyan-600',
      bgGradient: 'from-teal-50 to-cyan-100 dark:from-teal-900/20 dark:to-cyan-900/20',
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="loans" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            Choose Your
            <span className="bg-gradient-to-r from-primary-600 to-success-600 bg-clip-text text-transparent"> Loan Type</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Tailored financial solutions for every need. From business growth to personal dreams, 
            we've got you covered with competitive rates and fast approvals.
          </p>
        </motion.div>

        {/* Loan Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {loanTypes.map((loan, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${loan.bgGradient} rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300`} />
              
              {/* Main Card */}
              <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-white/50 dark:border-gray-700/50 rounded-3xl p-8 h-full shadow-xl group-hover:shadow-2xl transition-all duration-300">
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${loan.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <loan.icon className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                  {loan.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {loan.description}
                </p>

                {/* Loan Details */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-success-500" />
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Interest Rate</span>
                    </div>
                    <span className="font-bold text-success-600 dark:text-success-400">{loan.interestRate}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-primary-500" />
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Max Loan</span>
                    </div>
                    <span className="font-bold text-primary-600 dark:text-primary-400">{loan.maxLoan}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Max Tenure</span>
                    </div>
                    <span className="font-bold text-gray-700 dark:text-gray-300">{loan.tenure}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <motion.button
                  className={`w-full bg-gradient-to-r ${loan.gradient} text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 group-hover:shadow-lg transition-all duration-300`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Apply Now
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-500/10 to-success-500/10 dark:from-primary-500/5 dark:to-success-500/5 backdrop-blur-lg border border-primary-200/50 dark:border-primary-800/50 rounded-2xl p-8 inline-block">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Need a Custom Loan Solution?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Our experts will help you find the perfect loan for your unique requirements
            </p>
            <motion.button
              className="bg-gradient-to-r from-primary-500 to-success-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-primary-600 hover:to-success-600 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Speak to Expert
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LoanCategories;