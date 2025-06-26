import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Send, 
  Upload,
  User,
  DollarSign,
  Calendar,
  FileText
} from 'lucide-react';

const Contact: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    loanType: '',
    amount: '',
    purpose: '',
    income: '',
    employment: '',
    message: '',
  });

  const loanTypes = [
    'Business Loan',
    'Personal Loan',
    'Home Loan',
    'Car Loan',
    'MSME Loan',
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+91 98765 43210', '+91 87654 32109'],
      description: 'Mon-Sat, 9 AM - 7 PM',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['support@fundroot.in', 'loans@fundroot.in'],
      description: 'We respond within 2 hours',
      gradient: 'from-blue-500 to-indigo-500',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['Bandra Kurla Complex', 'Mumbai, Maharashtra'],
      description: 'Office Hours: 9 AM - 6 PM',
      gradient: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
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
            Get In
            <span className="bg-gradient-to-r from-primary-600 to-success-600 bg-clip-text text-transparent"> Touch</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ready to start your loan journey? Contact our experts or apply online. 
            We're here to help you achieve your financial goals.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
              Let's Connect
            </h3>

            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-white/50 dark:border-gray-700/50 rounded-2xl p-6 shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className={`bg-gradient-to-r ${info.gradient} p-3 rounded-xl`}>
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                        {info.title}
                      </h4>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-600 dark:text-gray-300 font-medium">
                          {detail}
                        </p>
                      ))}
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        {info.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-6 text-white"
            >
              <div className="flex items-center gap-4">
                <MessageCircle className="h-8 w-8" />
                <div>
                  <h4 className="text-xl font-semibold mb-1">WhatsApp Support</h4>
                  <p className="opacity-90">Get instant help on WhatsApp</p>
                </div>
                <motion.button
                  className="ml-auto bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Chat Now
                </motion.button>
              </div>
            </motion.div>
          </motion.div>

          {/* Multi-Step Application Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-white/50 dark:border-gray-700/50 rounded-3xl p-8 shadow-xl">
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                    Quick Application
                  </h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Step {currentStep} of 3
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-primary-500 to-success-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(currentStep / 3) * 100}%` }}
                  />
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Step 1: Personal Information */}
                {currentStep === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <User className="h-6 w-6 text-primary-500" />
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                        Personal Information
                      </h4>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full bg-white/60 dark:bg-gray-700/60 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full bg-white/60 dark:bg-gray-700/60 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                          placeholder="+91 98765 43210"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-white/60 dark:bg-gray-700/60 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Loan Details */}
                {currentStep === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <DollarSign className="h-6 w-6 text-success-500" />
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                        Loan Requirements
                      </h4>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Loan Type *
                        </label>
                        <select
                          name="loanType"
                          value={formData.loanType}
                          onChange={handleInputChange}
                          className="w-full bg-white/60 dark:bg-gray-700/60 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                          required
                        >
                          <option value="">Select loan type</option>
                          {loanTypes.map((type) => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Loan Amount *
                        </label>
                        <input
                          type="text"
                          name="amount"
                          value={formData.amount}
                          onChange={handleInputChange}
                          className="w-full bg-white/60 dark:bg-gray-700/60 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                          placeholder="₹5,00,000"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Purpose of Loan
                      </label>
                      <textarea
                        name="purpose"
                        value={formData.purpose}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full bg-white/60 dark:bg-gray-700/60 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                        placeholder="Briefly describe the purpose of your loan"
                      />
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Additional Details */}
                {currentStep === 3 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <FileText className="h-6 w-6 text-purple-500" />
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                        Additional Details
                      </h4>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Monthly Income
                        </label>
                        <input
                          type="text"
                          name="income"
                          value={formData.income}
                          onChange={handleInputChange}
                          className="w-full bg-white/60 dark:bg-gray-700/60 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                          placeholder="₹50,000"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Employment Type
                        </label>
                        <select
                          name="employment"
                          value={formData.employment}
                          onChange={handleInputChange}
                          className="w-full bg-white/60 dark:bg-gray-700/60 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                        >
                          <option value="">Select employment type</option>
                          <option value="salaried">Salaried</option>
                          <option value="self-employed">Self Employed</option>
                          <option value="business">Business Owner</option>
                          <option value="professional">Professional</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Additional Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full bg-white/60 dark:bg-gray-700/60 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                        placeholder="Any additional information you'd like to share..."
                      />
                    </div>

                    {/* Document Upload */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Upload Documents (Optional)
                      </label>
                      <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center hover:border-primary-500 transition-colors">
                        <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Drag & drop files here or click to browse
                        </p>
                        <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                          PDF, JPG, PNG up to 10MB
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-6">
                  {currentStep > 1 && (
                    <motion.button
                      type="button"
                      onClick={prevStep}
                      className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-xl font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Previous
                    </motion.button>
                  )}

                  {currentStep < 3 ? (
                    <motion.button
                      type="button"
                      onClick={nextStep}
                      className="ml-auto bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-primary-600 hover:to-primary-700 transition-all duration-300 flex items-center gap-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Next Step
                    </motion.button>
                  ) : (
                    <motion.button
                      type="submit"
                      className="ml-auto bg-gradient-to-r from-success-500 to-success-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-success-600 hover:to-success-700 transition-all duration-300 flex items-center gap-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Send className="h-5 w-5" />
                      Submit Application
                    </motion.button>
                  )}
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;