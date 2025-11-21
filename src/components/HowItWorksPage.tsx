import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  FileText, 
  CreditCard, 
  CheckCircle, 
  Clock, 
  Shield, 
  Users, 
  TrendingUp, 
  ArrowRight, 
  Download, 
  Upload, 
  Phone, 
  Mail, 
  MapPin,
  Star,
  Award,
  Zap,
  Target,
  Heart,
  Globe,
  Building2,
  Car,
  Briefcase,
  Home,
  Calculator,
  Percent,
  Calendar,
  DollarSign,
  ThumbsUp,
  MessageCircle,
  HelpCircle
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const steps = [
  {
    id: 1,
    title: 'Apply Online',
    description: 'Fill out our simple online application form with your basic details and loan requirements.',
    icon: Search,
    details: [
      'Choose your loan type (Personal, Home, Business, Car)',
      'Enter loan amount and tenure',
      'Provide basic personal information',
      'Submit your application in minutes'
    ],
    time: '5 minutes',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    borderColor: 'border-blue-200 dark:border-blue-800'
  },
  {
    id: 2,
    title: 'Document Upload',
    description: 'Upload your documents securely through our encrypted platform.',
    icon: Upload,
    details: [
      'Identity proof (Aadhaar, PAN, Driving License)',
      'Address proof (Utility bills, Rent agreement)',
      'Income proof (Salary slips, Bank statements)',
      'Employment verification documents'
    ],
    time: '10 minutes',
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50 dark:bg-green-900/20',
    borderColor: 'border-green-200 dark:border-green-800'
  },
  {
    id: 3,
    title: 'Verification',
    description: 'Our team verifies your documents and conducts background checks.',
    icon: Shield,
    details: [
      'Document authenticity verification',
      'Credit score and history check',
      'Income and employment verification',
      'Background and identity verification'
    ],
    time: '24-48 hours',
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50 dark:bg-purple-900/20',
    borderColor: 'border-purple-200 dark:border-purple-800'
  },
  {
    id: 4,
    title: 'Bank Matching',
    description: 'We match you with the best bank offering the most competitive rates.',
    icon: Target,
    details: [
      'Compare rates from 15+ partner banks',
      'Find the best deal for your profile',
      'Negotiate better terms on your behalf',
      'Present you with the best options'
    ],
    time: '2-4 hours',
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50 dark:bg-orange-900/20',
    borderColor: 'border-orange-200 dark:border-orange-800'
  },
  {
    id: 5,
    title: 'Approval',
    description: 'Get your loan approved with competitive interest rates.',
    icon: CheckCircle,
    details: [
      'Receive loan approval notification',
      'Review terms and conditions',
      'Accept the loan offer',
      'Sign digital loan agreement'
    ],
    time: '1-2 days',
    color: 'from-teal-500 to-teal-600',
    bgColor: 'bg-teal-50 dark:bg-teal-900/20',
    borderColor: 'border-teal-200 dark:border-teal-800'
  },
  {
    id: 6,
    title: 'Disbursement',
    description: 'Receive your loan amount directly in your bank account.',
    icon: CreditCard,
    details: [
      'Funds transferred to your account',
      'Receive confirmation notification',
      'Start your EMI payments',
      'Access to customer support'
    ],
    time: 'Same day',
    color: 'from-pink-500 to-pink-600',
    bgColor: 'bg-pink-50 dark:bg-pink-900/20',
    borderColor: 'border-pink-200 dark:border-pink-800'
  }
];

const loanTypes = [
  {
    name: 'Personal Loan',
    icon: Users,
    amount: '₹50,000 - ₹50,00,000',
    tenure: '1-5 years',
    rate: '8.5% - 24%',
    features: ['Quick approval', 'No collateral', 'Flexible tenure', 'Competitive rates'],
    process: '3-5 days',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    description: 'Perfect for personal expenses, medical emergencies, or debt consolidation.'
  },
  {
    name: 'Home Loan',
    icon: Home,
    amount: '₹5,00,000 - ₹10,00,00,000',
    tenure: '5-30 years',
    rate: '6.5% - 9.5%',
    features: ['Low interest rates', 'Long tenure', 'Tax benefits', 'Property insurance'],
    process: '7-15 days',
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50 dark:bg-green-900/20',
    description: 'Realize your dream of owning a home with our competitive home loan rates.'
  },
  {
    name: 'Business Loan',
    icon: Briefcase,
    amount: '₹1,00,000 - ₹1,00,00,000',
    tenure: '1-7 years',
    rate: '9% - 18%',
    features: ['Business growth', 'Working capital', 'Equipment financing', 'Quick disbursal'],
    process: '5-10 days',
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50 dark:bg-purple-900/20',
    description: 'Fuel your business growth with flexible business loan options.'
  },
  {
    name: 'Car Loan',
    icon: Car,
    amount: '₹1,00,000 - ₹50,00,000',
    tenure: '1-7 years',
    rate: '7% - 15%',
    features: ['Low EMI', 'Quick processing', 'Easy documentation', 'Insurance included'],
    process: '2-5 days',
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50 dark:bg-orange-900/20',
    description: 'Drive your dream car home with our hassle-free car loan process.'
  }
];

const benefits = [
  {
    icon: Clock,
    title: 'Quick Processing',
    description: 'Get your loan approved in as little as 24 hours with our streamlined process.',
    stat: '24 Hours'
  },
  {
    icon: Shield,
    title: 'Secure & Safe',
    description: 'Your data is protected with bank-level security and encryption.',
    stat: '100% Secure'
  },
  {
    icon: Target,
    title: 'Best Rates',
    description: 'We negotiate the best interest rates from our partner banks.',
    stat: 'Lowest Rates'
  },
  {
    icon: Users,
    title: 'Expert Support',
    description: 'Our dedicated team guides you through every step of the process.',
    stat: '24/7 Support'
  },
  {
    icon: CheckCircle,
    title: 'No Hidden Charges',
    description: 'Transparent pricing with no hidden fees or surprise charges.',
    stat: 'Zero Hidden Fees'
  },
  {
    icon: Award,
    title: 'High Approval Rate',
    description: '99% approval rate with our extensive network of partner banks.',
    stat: '99% Approval'
  }
];

const faqs = [
  {
    question: 'How long does it take to get a loan approved?',
    answer: 'Most loans are approved within 24-48 hours. Personal and car loans can be approved even faster, while home loans may take 7-15 days due to property verification.'
  },
  {
    question: 'What documents do I need to apply?',
    answer: 'You need identity proof (Aadhaar/PAN), address proof, income proof (salary slips or bank statements), and employment verification documents.'
  },
  {
    question: 'Do you charge any processing fees?',
    answer: 'We are completely transparent about all charges. Processing fees vary by bank and loan type, but we ensure you get the best deal with no hidden charges.'
  },
  {
    question: 'Can I apply for multiple loans?',
    answer: 'Yes, you can apply for different types of loans, but approval depends on your creditworthiness and existing loan obligations.'
  },
  {
    question: 'What is the minimum credit score required?',
    answer: 'Most banks require a credit score of 650+, but some may approve loans for scores as low as 600. We help you find the right lender for your profile.'
  },
  {
    question: 'Can I prepay my loan?',
    answer: 'Yes, most loans allow prepayment with minimal charges. We can help you understand the prepayment terms for your specific loan.'
  }
];

const HowItWorksPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedLoanType, setSelectedLoanType] = useState(loanTypes[0]);
  const [activeStep, setActiveStep] = useState(1);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-16 text-center relative overflow-visible">
          <div aria-hidden="true" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-3xl h-40 md:h-56 blur-2xl opacity-60 pointer-events-none z-0 animate-pulse-glow"
            style={{ background: 'radial-gradient(circle at 60% 40%, #38B00055 0%, #0047AB33 60%, transparent 100%)' }}
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10 text-primary-700 dark:text-primary-300 drop-shadow-lg text-center">
            How It <span className="bg-gradient-to-r from-primary-600 via-purple-600 to-success-600 bg-clip-text text-transparent">Works</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto relative z-10">
            Getting a loan with FundRoot is simple, fast, and transparent. 
            Follow our step-by-step process to secure the best loan for your needs.
          </p>
        </header>

        {/* Process Overview */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
              <span className="bg-gradient-to-r from-primary-600 to-success-600 bg-clip-text text-transparent">
                Our Simple 6-Step Process
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              From application to disbursement, we make the entire loan process hassle-free.
            </p>
          </div>

          {/* Steps Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-purple-500 to-success-500 transform -translate-y-1/2 z-0" />
            
            {/* Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.id}
                  className={`relative ${step.bgColor} backdrop-blur-lg rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border-2 ${step.borderColor} ${
                    activeStep === step.id ? 'ring-2 ring-primary-500 shadow-2xl' : ''
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setActiveStep(step.id)}
                >
                  {/* Step Number */}
                  <div className="absolute -top-4 left-6">
                    <div className={`w-8 h-8 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                      {step.id}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    <step.icon className="h-8 w-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 text-center">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm text-center mb-4">{step.description}</p>
                  
                  {/* Time */}
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <Clock className="h-4 w-4" />
                    <span className="font-semibold">{step.time}</span>
                  </div>

                  {/* Details */}
                  <div className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                        <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Step View */}
        <section className="mb-16">
          <motion.div 
            className={`${steps[activeStep - 1]?.bgColor} backdrop-blur-lg rounded-3xl shadow-xl p-8 border-2 ${steps[activeStep - 1]?.borderColor}`}
            key={activeStep}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-16 h-16 bg-gradient-to-r ${steps[activeStep - 1]?.color} rounded-full flex items-center justify-center shadow-lg`}>
                {steps[activeStep - 1]?.icon && React.createElement(steps[activeStep - 1].icon, { className: "h-8 w-8 text-white" })}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Step {activeStep}: {steps[activeStep - 1]?.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {steps[activeStep - 1]?.description}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  What You Need to Do:
                </h4>
                <ul className="space-y-3">
                  {steps[activeStep - 1]?.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <ArrowRight className="h-4 w-4 text-primary-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-700 dark:text-gray-300">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary-500" />
                  Time Required:
                </h4>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${steps[activeStep - 1]?.color} rounded-full flex items-center justify-center`}>
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                    {steps[activeStep - 1]?.time}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  This step typically takes {steps[activeStep - 1]?.time.toLowerCase()} to complete, depending on your preparation and document availability.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Loan Types Comparison */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
              <span className="bg-gradient-to-r from-primary-600 to-success-600 bg-clip-text text-transparent">
                Choose Your Loan Type
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Different loan types have different processes and requirements. Select the one that fits your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {loanTypes.map((loan, index) => (
              <motion.div
                key={loan.name}
                className={`${loan.bgColor} backdrop-blur-lg rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border-2 ${loan.borderColor} ${
                  selectedLoanType.name === loan.name ? 'ring-2 ring-primary-500 shadow-2xl' : ''
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedLoanType(loan)}
              >
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${loan.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <loan.icon className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 text-center">{loan.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm text-center mb-4">{loan.description}</p>
                
                {/* Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Amount:</span>
                    <span className="font-semibold text-primary-600 dark:text-primary-400">{loan.amount}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Tenure:</span>
                    <span className="font-semibold text-success-600 dark:text-success-400">{loan.tenure}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Rate:</span>
                    <span className="font-semibold text-purple-600 dark:text-purple-400">{loan.rate}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Process:</span>
                    <span className="font-semibold text-orange-600 dark:text-orange-400">{loan.process}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-1">
                  {loan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                      <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
              <span className="bg-gradient-to-r from-primary-600 to-success-600 bg-clip-text text-transparent">
                Why Choose FundRoot?
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We make the loan process simple, fast, and transparent for all our customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-success-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{benefit.title}</h3>
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-3">{benefit.stat}</div>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
              <span className="bg-gradient-to-r from-primary-600 to-success-600 bg-clip-text text-transparent">
                Frequently Asked Questions
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Got questions? We've got answers. Here are the most common questions about our loan process.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <button
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white pr-4">{faq.question}</h3>
                  <div className={`transform transition-transform duration-200 ${openFaq === index ? 'rotate-180' : ''}`}>
                    <ArrowRight className="h-5 w-5 text-primary-500" />
                  </div>
                </button>
                <motion.div
                  className="overflow-hidden"
                  initial={false}
                  animate={{ height: openFaq === index ? 'auto' : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="inline-block bg-gradient-to-r from-primary-500/10 to-success-500/10 dark:from-primary-500/5 dark:to-success-500/5 backdrop-blur-lg border border-primary-200/50 dark:border-primary-800/50 rounded-2xl p-10 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="mb-6 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Now that you know how it works, let's get your loan application started. 
              Our team is ready to guide you through every step.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-gradient-to-r from-primary-500 to-success-500 text-white font-semibold px-8 py-4 rounded-xl shadow hover:from-primary-600 hover:to-success-600 transition-all duration-200 text-lg flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/apply')}
              >
                <Search className="h-5 w-5" />
                Apply for Loan
              </motion.button>
              <motion.button
                className="border-2 border-primary-500 text-primary-600 dark:text-primary-400 font-semibold px-8 py-4 rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-200 text-lg flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/check-eligibility')}
              >
                <Calculator className="h-5 w-5" />
                Check Eligibility
              </motion.button>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default HowItWorksPage;
