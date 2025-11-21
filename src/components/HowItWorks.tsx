import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Upload, 
  CheckCircle, 
  Banknote,
  ArrowRight,
  Clock,
  Shield,
  Smartphone
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HowItWorks: React.FC = () => {
  const navigate = useNavigate();

  const steps = [
    {
      icon: FileText,
      title: 'Apply Online',
      description: 'Fill out our simple online application form with your basic details and loan requirements.',
      details: ['Personal & Financial Info', 'Loan Amount & Purpose', 'Employment Details'],
      gradient: 'from-blue-500 to-indigo-600',
      bgGradient: 'from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20',
      time: '5 mins',
    },
    {
      icon: Upload,
      title: 'Upload Documents',
      description: 'Securely upload your KYC documents, income proof, and other required documents.',
      details: ['PAN & Aadhaar Card', 'Income Documents', 'Bank Statements'],
      gradient: 'from-purple-500 to-pink-600',
      bgGradient: 'from-purple-50 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20',
      time: '10 mins',
    },
    {
      icon: CheckCircle,
      title: 'Instant Approval',
      description: 'Our AI-powered system processes your application and provides instant pre-approval.',
      details: ['Credit Assessment', 'Document Verification', 'Loan Approval'],
      gradient: 'from-green-500 to-emerald-600',
      bgGradient: 'from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20',
      time: '2 hours',
    },
    {
      icon: Banknote,
      title: 'Get Funds',
      description: 'Once approved, funds are directly transferred to your registered bank account.',
      details: ['Final Verification', 'Loan Agreement', 'Fund Transfer'],
      gradient: 'from-orange-500 to-red-600',
      bgGradient: 'from-orange-50 to-red-100 dark:from-orange-900/20 dark:to-red-900/20',
      time: '24 hours',
    },
  ];

  const benefits = [
    {
      icon: Smartphone,
      title: '100% Digital Process',
      description: 'Complete your loan application from anywhere, anytime',
    },
    {
      icon: Clock,
      title: 'Quick Processing',
      description: 'Get approved in hours, not days or weeks',
    },
    {
      icon: Shield,
      title: 'Secure & Safe',
      description: 'Bank-grade security for all your documents and data',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="process" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
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
            How It
            <span className="bg-gradient-to-r from-primary-600 to-success-600 bg-clip-text text-transparent"> Works</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4 sm:px-0">
            Get your loan in 4 simple steps. Our streamlined process ensures you get 
            the funds you need quickly and hassle-free.
          </p>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-purple-200 via-green-200 to-orange-200 dark:from-blue-800 dark:via-purple-800 dark:via-green-800 dark:to-orange-800 transform -translate-y-1/2 z-0" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={stepVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${step.bgGradient} rounded-2xl sm:rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300`} />
                
                {/* Main Card */}
                <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg border border-white/50 dark:border-gray-700/50 rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 h-full shadow-xl group-hover:shadow-2xl transition-all duration-300">
                  {/* Step Number */}
                  <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-primary-500 to-success-500 rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg shadow-lg">
                    {index + 1}
                  </div>

                  {/* Time Badge */}
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                    {step.time}
                  </div>

                  {/* Icon */}
                  <div className={`inline-flex p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-r ${step.gradient} mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-3 sm:mb-4">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Details List */}
                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-primary-500 to-success-500 rounded-full" />
                        {detail}
                      </li>
                    ))}
                  </ul>

                  {/* Arrow for desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                      <ArrowRight className="h-6 w-6 text-gray-400 dark:text-gray-600" />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-primary-500/10 to-success-500/10 dark:from-primary-500/5 dark:to-success-500/5 backdrop-blur-lg border border-primary-200/50 dark:border-primary-800/50 rounded-3xl p-8 lg:p-12">
            <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
              Why Our Process is Better
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 group-hover:shadow-lg transition-all duration-300">
                    <div className="bg-gradient-to-r from-primary-500 to-success-500 p-4 rounded-2xl inline-flex mb-6 group-hover:scale-110 transition-transform duration-300">
                      <benefit.icon className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                      {benefit.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6">
            Ready to Start Your Loan Journey?
          </h3>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Join thousands who have already experienced our seamless loan process
          </p>
          <motion.button
            className="bg-gradient-to-r from-primary-500 to-success-500 text-white px-10 py-5 rounded-2xl font-semibold text-xl hover:from-primary-600 hover:to-success-600 transition-all duration-300 animate-pulse-glow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/apply')}
          >
            Start Application Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;