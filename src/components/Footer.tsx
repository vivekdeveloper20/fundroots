import React from 'react';
import { motion } from 'framer-motion';
import { 
  TreePine, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Youtube,
  ArrowRight,
  Gift
} from 'lucide-react';

const Footer: React.FC = () => {
  const footerLinks = {
    'Loan Products': [
      'Business Loans',
      'Personal Loans',
      'Home Loans',
      'Car Loans',
      'MSME Loans',
    ],
    'Quick Links': [
      'EMI Calculator',
      'Interest Rates',
      'Eligibility Checker',
      'Application Status',
      'Customer Support',
    ],
    'Resources': [
      'Loan Guide',
      'Financial Tips',
      'Credit Score',
      'Tax Benefits',
      'Blog',
    ],
    'Company': [
      'About Us',
      'Our Partners',
      'Careers',
      'Press Release',
      'Contact Us',
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Instagram, href: '#', name: 'Instagram' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' },
    { icon: Youtube, href: '#', name: 'YouTube' },
  ];

  const contactInfo = [
    { icon: Phone, text: '+91 98765 43210' },
    { icon: Mail, text: 'support@fundroot.in' },
    { icon: MapPin, text: 'Mumbai, Maharashtra' },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Refer and Earn Section - Trending Design */}
      <div className="max-w-4xl mx-auto -mt-12 sm:-mt-16 mb-6 sm:mb-10 relative z-10 px-4 sm:px-0">
        <div className="bg-gradient-to-r from-primary-600 via-success-500 to-purple-600 rounded-2xl sm:rounded-3xl shadow-2xl p-5 sm:p-6 lg:p-8 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 border-2 sm:border-4 border-white dark:border-gray-900">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="bg-white/20 p-3 sm:p-4 rounded-full flex items-center justify-center">
              <Gift className="h-7 w-7 sm:h-10 sm:w-10 text-white drop-shadow-lg animate-bounce" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white mb-1 tracking-tight drop-shadow">Refer & Earn</h2>
              <p className="text-sm sm:text-base md:text-lg text-white/90 font-medium drop-shadow-sm">Invite friends and earn exciting rewards on every successful loan disbursal!</p>
            </div>
          </div>
          <a href="#" className="w-full md:w-auto mt-4 md:mt-0 bg-white text-primary-700 font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl shadow-lg text-base sm:text-lg hover:bg-primary-50 transition-all duration-300 animate-pulse-glow text-center">Start Referring</a>
        </div>
      </div>
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto py-10 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-8">
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-2">
            <motion.div 
              className="flex items-center space-x-2 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-gradient-to-r from-primary-500 to-success-500 p-2 rounded-lg">
                <TreePine className="h-8 w-8 text-white" />
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-primary-400 to-success-400 bg-clip-text text-transparent">
                FundRoot
              </span>
            </motion.div>

            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Your trusted financial partner for all loan needs. We provide transparent, 
              fast, and secure lending solutions to help you achieve your dreams.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center gap-3">
                  <contact.icon className="h-5 w-5 text-primary-400" />
                  <span className="text-gray-300">{contact.text}</span>
                </div>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-r from-primary-500/10 to-success-500/10 backdrop-blur-sm border border-primary-500/20 rounded-xl sm:rounded-2xl p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Stay Updated</h3>
              <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4">Get the latest financial tips and loan updates</p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 sm:px-4 py-2 text-sm sm:text-base text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <motion.button
                  className="bg-gradient-to-r from-primary-500 to-success-500 px-4 py-2 rounded-lg hover:from-primary-600 hover:to-success-600 transition-all duration-300 flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                </motion.button>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-xl font-semibold mb-6 text-white">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                      whileHover={{ x: 4 }}
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Media & Additional Info */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Social Links */}
            <div className="flex items-center gap-2">
              <span className="text-gray-300 mr-4">Follow us:</span>
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className="bg-gradient-to-r from-gray-800 to-gray-700 p-3 rounded-full hover:from-primary-500 hover:to-success-500 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>

            {/* Awards & Certifications */}
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-2 rounded-lg mb-2 inline-block">
                  <span className="text-white font-bold text-sm">4.9★</span>
                </div>
                <p className="text-xs text-gray-400">Google Rating</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-2 rounded-lg mb-2 inline-block">
                  <span className="text-white font-bold text-sm">RBI</span>
                </div>
                <p className="text-xs text-gray-400">Compliant</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-2 rounded-lg mb-2 inline-block">
                  <span className="text-white font-bold text-sm">SSL</span>
                </div>
                <p className="text-xs text-gray-400">Secured</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-black/50">
        <div className="max-w-7xl mx-auto py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="flex flex-col lg:flex-row items-center gap-4 text-sm text-gray-400">
              <p>&copy; 2024 FundRoot. All rights reserved.</p>
              <div className="flex gap-4">
                <a href="#" className="hover:text-primary-400 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-primary-400 transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-primary-400 transition-colors">Cookie Policy</a>
              </div>
            </div>
            
            {/* RBI Disclaimer */}
            <div className="text-xs text-gray-500 max-w-md text-center lg:text-right">
              <p>
                We are a loan aggregator platform working with RBI-registered NBFCs and banks. 
                Loan approval is subject to eligibility and documentation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <motion.div
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
      >
        <motion.button
          className="bg-green-500 hover:bg-green-600 text-white p-3 sm:p-4 rounded-full shadow-2xl flex items-center gap-2 sm:gap-3 group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
          <span className="hidden sm:block group-hover:block animate-slide-up text-sm sm:text-base">Chat with us</span>
        </motion.button>
      </motion.div>
    </footer>
  );
};

export default Footer;