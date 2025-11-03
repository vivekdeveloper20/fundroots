import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Shield, Award, Users, TrendingUp, CheckCircle, Star, Globe, Phone, Mail, MapPin } from 'lucide-react';

const partnerBanks = [
  {
    id: 1,
    name: 'State Bank of India',
    logo: 'https://logos-world.net/wp-content/uploads/2021/02/SBI-Logo.png',
    type: 'Public Sector Bank',
    established: '1955',
    branches: '22,000+',
    rating: '4.8',
    features: ['Low Interest Rates', 'Wide Network', 'Government Backed', 'Quick Processing'],
    description: 'India\'s largest public sector bank with extensive reach and trusted services.',
    website: 'https://sbi.co.in',
    phone: '1800 1234',
    email: 'support@sbi.co.in'
  },
  {
    id: 2,
    name: 'HDFC Bank',
    logo: 'https://logos-world.net/wp-content/uploads/2021/02/HDFC-Bank-Logo.png',
    type: 'Private Sector Bank',
    established: '1994',
    branches: '6,000+',
    rating: '4.9',
    features: ['Digital Banking', 'Premium Services', 'Fast Approval', '24/7 Support'],
    description: 'Leading private sector bank known for innovation and customer service.',
    website: 'https://hdfcbank.com',
    phone: '1800 202 6161',
    email: 'support@hdfcbank.com'
  },
  {
    id: 3,
    name: 'ICICI Bank',
    logo: 'https://logos-world.net/wp-content/uploads/2021/02/ICICI-Bank-Logo.png',
    type: 'Private Sector Bank',
    established: '1994',
    branches: '5,000+',
    rating: '4.7',
    features: ['Online Services', 'Competitive Rates', 'Quick Disbursal', 'Mobile Banking'],
    description: 'Premier private sector bank with strong digital presence and customer focus.',
    website: 'https://icicibank.com',
    phone: '1800 210 0109',
    email: 'support@icicibank.com'
  },
  {
    id: 4,
    name: 'Axis Bank',
    logo: 'https://logos-world.net/wp-content/uploads/2021/02/Axis-Bank-Logo.png',
    type: 'Private Sector Bank',
    established: '1993',
    branches: '4,500+',
    rating: '4.6',
    features: ['Flexible Terms', 'Easy Documentation', 'Quick Processing', 'Customer Care'],
    description: 'Third largest private sector bank with innovative financial solutions.',
    website: 'https://axisbank.com',
    phone: '1800 419 5555',
    email: 'support@axisbank.com'
  },
  {
    id: 5,
    name: 'Kotak Mahindra Bank',
    logo: 'https://logos-world.net/wp-content/uploads/2021/02/Kotak-Mahindra-Bank-Logo.png',
    type: 'Private Sector Bank',
    established: '2003',
    branches: '1,600+',
    rating: '4.8',
    features: ['Premium Banking', 'Wealth Management', 'Digital Solutions', 'Personalized Service'],
    description: 'Leading private sector bank focused on premium banking and wealth management.',
    website: 'https://kotak.com',
    phone: '1800 266 2666',
    email: 'support@kotak.com'
  },
  {
    id: 6,
    name: 'Punjab National Bank',
    logo: 'https://logos-world.net/wp-content/uploads/2021/02/PNB-Logo.png',
    type: 'Public Sector Bank',
    established: '1894',
    branches: '10,000+',
    rating: '4.5',
    features: ['Government Support', 'Rural Banking', 'Affordable Rates', 'Wide Coverage'],
    description: 'Second largest public sector bank with strong rural and urban presence.',
    website: 'https://pnb.co.in',
    phone: '1800 180 2222',
    email: 'support@pnb.co.in'
  }
];

const nbfcPartners = [
  {
    id: 1,
    name: 'Bajaj Finserv',
    logo: 'https://logos-world.net/wp-content/uploads/2021/02/Bajaj-Finserv-Logo.png',
    type: 'NBFC',
    established: '2007',
    rating: '4.7',
    features: ['Quick Processing', 'Flexible EMI', 'No Hidden Charges', 'Online Application'],
    description: 'Leading NBFC offering diverse financial products with quick processing.'
  },
  {
    id: 2,
    name: 'Tata Capital',
    logo: 'https://logos-world.net/wp-content/uploads/2021/02/Tata-Capital-Logo.png',
    type: 'NBFC',
    established: '2007',
    rating: '4.6',
    features: ['Trusted Brand', 'Competitive Rates', 'Easy Documentation', 'Quick Approval'],
    description: 'Tata Group\'s financial services arm with strong brand trust and reliability.'
  },
  {
    id: 3,
    name: 'Mahindra Finance',
    logo: 'https://logos-world.net/wp-content/uploads/2021/02/Mahindra-Finance-Logo.png',
    type: 'NBFC',
    established: '1991',
    rating: '4.5',
    features: ['Rural Focus', 'Flexible Terms', 'Quick Disbursal', 'Customer Support'],
    description: 'Leading NBFC with strong presence in rural and semi-urban markets.'
  }
];

const benefits = [
  {
    icon: Shield,
    title: 'Trusted Partners',
    description: 'All our banking partners are RBI approved and highly rated institutions.'
  },
  {
    icon: TrendingUp,
    title: 'Best Interest Rates',
    description: 'We negotiate the best rates with our partners to save you money.'
  },
  {
    icon: CheckCircle,
    title: 'Quick Processing',
    description: 'Streamlined processes ensure faster loan approval and disbursal.'
  },
  {
    icon: Users,
    title: 'Expert Support',
    description: 'Our team helps you choose the right lender for your specific needs.'
  }
];

const PartnerBanksPage: React.FC = () => (
  <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 min-h-screen">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <header className="mb-16 text-center relative overflow-visible">
        <div aria-hidden="true" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-3xl h-40 md:h-56 blur-2xl opacity-60 pointer-events-none z-0 animate-pulse-glow"
          style={{ background: 'radial-gradient(circle at 60% 40%, #38B00055 0%, #0047AB33 60%, transparent 100%)' }}
        />
        <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10 text-primary-700 dark:text-primary-300 drop-shadow-lg text-center">
          Our <span className="bg-gradient-to-r from-primary-600 via-purple-600 to-success-600 bg-clip-text text-transparent">Banking Partners</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto relative z-10">
          We partner with India's most trusted banks and NBFCs to bring you the best loan options. 
          Choose from our network of premium lenders for competitive rates and excellent service.
        </p>
      </header>

      {/* Partnership Stats */}
      <section className="mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">15+</div>
            <div className="text-gray-600 dark:text-gray-300">Partner Banks</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-success-600 mb-2">50+</div>
            <div className="text-gray-600 dark:text-gray-300">NBFC Partners</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">₹500Cr+</div>
            <div className="text-gray-600 dark:text-gray-300">Loans Processed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">99%</div>
            <div className="text-gray-600 dark:text-gray-300">Approval Rate</div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            <span className="bg-gradient-to-r from-primary-600 to-success-600 bg-clip-text text-transparent">
              Why Choose Our Partners?
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We've carefully selected our banking partners based on their reputation, rates, and service quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-success-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{benefit.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Partner Banks Section */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            <span className="bg-gradient-to-r from-primary-600 to-success-600 bg-clip-text text-transparent">
              Partner Banks
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Leading banks in India offering competitive rates and excellent service.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } }}
        >
          {partnerBanks.map((bank) => (
            <motion.div
              key={bank.id}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl shadow-xl border-2 border-transparent group px-6 py-8 overflow-visible transition-all duration-300 hover:shadow-2xl hover:border-gradient"
              whileHover={{ y: -8, scale: 1.02 }}
              variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
            >
              {/* Bank Logo */}
              <div className="flex justify-center mb-6">
                <div className="w-24 h-24 bg-white dark:bg-gray-700 rounded-2xl shadow-lg flex items-center justify-center p-4">
                  <img src={bank.logo} alt={bank.name} className="max-w-full max-h-full object-contain" />
                </div>
              </div>

              {/* Bank Info */}
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{bank.name}</h3>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-primary-100 to-success-100 dark:from-primary-900 dark:to-success-900 text-primary-700 dark:text-primary-200 shadow-sm border border-primary-200 dark:border-primary-700 mb-3">
                  {bank.type}
                </span>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{bank.description}</p>
                
                {/* Bank Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">Established</div>
                    <div className="text-sm font-semibold text-primary-600 dark:text-primary-400">{bank.established}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">Branches</div>
                    <div className="text-sm font-semibold text-success-600 dark:text-success-400">{bank.branches}</div>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center justify-center gap-1 mb-4">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{bank.rating}</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">/5.0</span>
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Key Features:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {bank.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                      <CheckCircle className="h-3 w-3 text-success-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <div className="flex items-center justify-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                  <a href={bank.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                    <Globe className="h-3 w-3" />
                    Website
                  </a>
                  <a href={`tel:${bank.phone}`} className="flex items-center gap-1 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                    <Phone className="h-3 w-3" />
                    Call
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* NBFC Partners Section */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            <span className="bg-gradient-to-r from-primary-600 to-success-600 bg-clip-text text-transparent">
              NBFC Partners
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Leading Non-Banking Financial Companies offering flexible loan solutions.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } }}
        >
          {nbfcPartners.map((nbfc) => (
            <motion.div
              key={nbfc.id}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl shadow-xl border-2 border-transparent group px-6 py-8 overflow-visible transition-all duration-300 hover:shadow-2xl hover:border-gradient"
              whileHover={{ y: -8, scale: 1.02 }}
              variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
            >
              {/* NBFC Logo */}
              <div className="flex justify-center mb-6">
                <div className="w-24 h-24 bg-white dark:bg-gray-700 rounded-2xl shadow-lg flex items-center justify-center p-4">
                  <img src={nbfc.logo} alt={nbfc.name} className="max-w-full max-h-full object-contain" />
                </div>
              </div>

              {/* NBFC Info */}
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{nbfc.name}</h3>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900 dark:to-blue-900 text-purple-700 dark:text-purple-200 shadow-sm border border-purple-200 dark:border-purple-700 mb-3">
                  {nbfc.type}
                </span>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{nbfc.description}</p>
                
                {/* NBFC Stats */}
                <div className="text-center mb-4">
                  <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">Established</div>
                  <div className="text-sm font-semibold text-purple-600 dark:text-purple-400">{nbfc.established}</div>
                </div>

                {/* Rating */}
                <div className="flex items-center justify-center gap-1 mb-4">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{nbfc.rating}</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">/5.0</span>
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Key Features:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {nbfc.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                      <CheckCircle className="h-3 w-3 text-success-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="text-center">
        <div className="inline-block bg-gradient-to-r from-primary-500/10 to-success-500/10 dark:from-primary-500/5 dark:to-success-500/5 backdrop-blur-lg border border-primary-200/50 dark:border-primary-800/50 rounded-2xl p-10 shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Ready to Apply for a Loan?
          </h2>
          <p className="mb-6 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Let us help you find the best loan option from our trusted banking partners. 
            Get competitive rates and quick approval with our expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="bg-gradient-to-r from-primary-500 to-success-500 text-white font-semibold px-8 py-4 rounded-xl shadow hover:from-primary-600 hover:to-success-600 transition-all duration-200 text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Apply for Loan
            </motion.button>
            <motion.button
              className="border-2 border-primary-500 text-primary-600 dark:text-primary-400 font-semibold px-8 py-4 rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-200 text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Compare Rates
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  </section>
);

export default PartnerBanksPage;
