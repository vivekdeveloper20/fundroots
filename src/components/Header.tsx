import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Sun, Moon, TreePine, Calculator, Home, Car, Briefcase, FileText } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { Link, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update navItems to use correct routes for SPA navigation
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Loan Types', href: '#loans' },
    { name: 'EMI Tools', href: '#emi-tools' },
    { name: 'Guide', href: '#guide' },
    { name: 'About', href: '#about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const loanTypes = [
    { name: 'Personal Loan', href: '/personal-loan' },
    { name: 'Home Loan', href: '/home-loan' },
    { name: 'Business Loan', href: '/business-loan' },
    { name: 'Car Loan', href: '/car-loan' },
  ];

  const emiTools = [
    { name: 'Personal Loan EMI Calculator', href: '/personal-loan-emi', icon: '💰' },
    { name: 'Home Loan EMI Calculator', href: '/home-loan-emi', icon: '🏠' },
    { name: 'Car Loan EMI Calculator', href: '/car-loan-emi', icon: '🚗' },
    { name: 'Business Loan EMI Calculator', href: '/business-loan-emi', icon: '💼' },
    { name: 'Foreclosure Calculator', href: '/foreclosure-calculator', icon: '🧾' },
  ];

  const guideMenu = [
    { name: 'How It Works', href: '/how-it-works', icon: '🧭' },
    { name: 'Check Eligibility', href: '/check-eligibility', icon: '✅' },
    { name: 'Documents Required', href: '/documents-required', icon: '📄' },
  ];

  const aboutMenu = [
    { name: 'About Us / Company', href: '/about', icon: '🏢' },
    { name: 'Our Team', href: '/our-team', icon: '👥' },
    { name: 'Partner Banks & Lenders', href: '/partner-banks', icon: '🤝' },
    { name: 'Careers / Join Us', href: '/careers', icon: '💼' },
    { name: 'Testimonials', href: '/testimonials', icon: '📢' },
  ];

  const [loanDropdownOpen, setLoanDropdownOpen] = useState(false);
  const [mobileLoanDropdownOpen, setMobileLoanDropdownOpen] = useState(false);
  const [emiDropdownOpen, setEmiDropdownOpen] = useState(false);
  const [guideDropdownOpen, setGuideDropdownOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-primary-500 to-success-500 p-2 rounded-lg">
              <TreePine className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-primary-600 to-success-600 bg-clip-text text-transparent">
              FundRoot
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => {
              if (item.name === 'Loan Types') {
                return (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setLoanDropdownOpen(true)}
                    onMouseLeave={() => setLoanDropdownOpen(false)}
                  >
                    <motion.a
                      href={item.href}
                      className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors flex items-center gap-1 cursor-pointer gradient-underline"
                      whileHover={{ y: -2 }}
                    >
                      {item.name}
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                    </motion.a>
                    {loanDropdownOpen && (
                      <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-50">
                        {loanTypes.map((loan) => (
                          <Link
                            key={loan.name}
                            to={loan.href}
                            className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-600 dark:hover:text-primary-400 transition-colors gradient-underline"
                          >
                            {loan.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              if (item.name === 'EMI Tools') {
                return (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setEmiDropdownOpen(true)}
                    onMouseLeave={() => setEmiDropdownOpen(false)}
                  >
                    <motion.a
                      href={item.href}
                      className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors flex items-center gap-1 cursor-pointer gradient-underline"
                      whileHover={{ y: -2 }}
                    >
                      EMI Tools <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                    </motion.a>
                    {emiDropdownOpen && (
                      <div className="absolute left-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-50">
                        {emiTools.map((tool) => (
                          tool.href.startsWith('/') ? (
                            <Link
                              key={tool.name}
                              to={tool.href}
                              className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-600 dark:hover:text-primary-400 transition-colors gradient-underline"
                            >
                              <span className="mr-2 text-lg">{tool.icon}</span> {tool.name}
                            </Link>
                          ) : (
                            <a
                              key={tool.name}
                              href={tool.href}
                              className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-600 dark:hover:text-primary-400 transition-colors gradient-underline"
                            >
                              <span className="mr-2 text-lg">{tool.icon}</span> {tool.name}
                            </a>
                          )
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              if (item.name === 'Guide') {
                return (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setGuideDropdownOpen(true)}
                    onMouseLeave={() => setGuideDropdownOpen(false)}
                  >
                    <motion.a
                      href={item.href}
                      className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors flex items-center gap-1 cursor-pointer gradient-underline"
                      whileHover={{ y: -2 }}
                    >
                      Guide <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                    </motion.a>
                    {guideDropdownOpen && (
                      <div className="absolute left-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-50">
                        {guideMenu.map((guide) => (
                          <a
                            key={guide.name}
                            href={guide.href}
                            className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-600 dark:hover:text-primary-400 transition-colors gradient-underline"
                          >
                            <span className="mr-2 text-lg">{guide.icon}</span> {guide.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              if (item.name === 'About') {
                return (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setAboutDropdownOpen(true)}
                    onMouseLeave={() => setAboutDropdownOpen(false)}
                  >
                    <motion.a
                      href={item.href}
                      className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors flex items-center gap-1 cursor-pointer gradient-underline"
                      whileHover={{ y: -2 }}
                    >
                      About <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                    </motion.a>
                    {aboutDropdownOpen && (
                      <div className="absolute left-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-50">
                        {aboutMenu.map((about) => (
                          about.href.startsWith('/') ? (
                            <Link
                              key={about.name}
                              to={about.href}
                              className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-600 dark:hover:text-primary-400 transition-colors gradient-underline"
                            >
                              <span className="mr-2 text-lg">{about.icon}</span> {about.name}
                            </Link>
                          ) : (
                            <a
                              key={about.name}
                              href={about.href}
                              className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-600 dark:hover:text-primary-400 transition-colors gradient-underline"
                            >
                              <span className="mr-2 text-lg">{about.icon}</span> {about.name}
                            </a>
                          )
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              if (item.name === 'Blog') {
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors gradient-underline"
                  >
                    Blog
                  </Link>
                );
              }
              if (item.href.startsWith('/')) {
                return (
                  <Link key={item.name} to={item.href} className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors gradient-underline" >
                    {item.name}
                  </Link>
                );
              } else {
                return (
                  <a key={item.name} href={item.href} className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors gradient-underline" >
                    {item.name}
                  </a>
                );
              }
            })}
          </nav>

          {/* Desktop CTA & Theme Toggle */}
          <div className="hidden lg:flex items-center space-x-4">
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </motion.button>
            <motion.button
              className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-primary-600 hover:to-primary-700 transition-all duration-300 animate-pulse-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/apply')}
            >
              Apply Now
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
              whileTap={{ scale: 0.95 }}
            >
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </motion.button>
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMenuOpen ? 1 : 0,
            height: isMenuOpen ? 'auto' : 0,
          }}
          className="lg:hidden overflow-hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg rounded-b-2xl"
        >
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => {
              if (item.name === 'Loan Types') {
                return (
                  <div key={item.name}>
                    <button
                      className="w-full flex justify-between items-center text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium py-2 focus:outline-none gradient-underline"
                      onClick={() => setMobileLoanDropdownOpen((open) => !open)}
                    >
                      {item.name}
                      <svg className={`w-4 h-4 ml-1 transform transition-transform ${mobileLoanDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                    </button>
                    {mobileLoanDropdownOpen && (
                      <div className="pl-4 mt-1 space-y-1">
                        {loanTypes.map((loan) => (
                          <Link
                            key={loan.name}
                            to={loan.href}
                            className="block text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 py-1 gradient-underline"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {loan.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              if (item.name === 'EMI Tools') {
                return (
                  <div key={item.name}>
                    <button
                      className="w-full flex justify-between items-center text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium py-2 focus:outline-none gradient-underline"
                      onClick={() => setEmiDropdownOpen((open) => !open)}
                    >
                      EMI Tools <svg className={`w-4 h-4 ml-1 transform transition-transform ${emiDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                    </button>
                    {emiDropdownOpen && (
                      <div className="pl-4 mt-1 space-y-1">
                        {emiTools.map((tool) => (
                          tool.href.startsWith('/') ? (
                            <Link
                              key={tool.name}
                              to={tool.href}
                              className="flex items-center text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 py-1 gradient-underline"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              <span className="mr-2 text-lg">{tool.icon}</span> {tool.name}
                            </Link>
                          ) : (
                            <a
                              key={tool.name}
                              href={tool.href}
                              className="flex items-center text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 py-1 gradient-underline"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              <span className="mr-2 text-lg">{tool.icon}</span> {tool.name}
                            </a>
                          )
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              if (item.name === 'Guide') {
                return (
                  <div key={item.name}>
                    <button
                      className="w-full flex justify-between items-center text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium py-2 focus:outline-none gradient-underline"
                      onClick={() => setGuideDropdownOpen((open) => !open)}
                    >
                      Guide <svg className={`w-4 h-4 ml-1 transform transition-transform ${guideDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                    </button>
                    {guideDropdownOpen && (
                      <div className="pl-4 mt-1 space-y-1">
                        {guideMenu.map((guide) => (
                          <a
                            key={guide.name}
                            href={guide.href}
                            className="flex items-center text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 py-1 gradient-underline"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <span className="mr-2 text-lg">{guide.icon}</span> {guide.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              if (item.name === 'About') {
                return (
                  <div key={item.name}>
                    <button
                      className="w-full flex justify-between items-center text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium py-2 focus:outline-none gradient-underline"
                      onClick={() => setAboutDropdownOpen((open) => !open)}
                    >
                      About <svg className={`w-4 h-4 ml-1 transform transition-transform ${aboutDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                    </button>
                    {aboutDropdownOpen && (
                      <div className="pl-4 mt-1 space-y-1">
                        {aboutMenu.map((about) => (
                          about.href.startsWith('/') ? (
                            <Link
                              key={about.name}
                              to={about.href}
                              className="flex items-center text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 py-1 gradient-underline"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              <span className="mr-2 text-lg">{about.icon}</span> {about.name}
                            </Link>
                          ) : (
                            <a
                              key={about.name}
                              href={about.href}
                              className="flex items-center text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 py-1 gradient-underline"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              <span className="mr-2 text-lg">{about.icon}</span> {about.name}
                            </a>
                          )
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              if (item.name === 'Blog') {
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium py-2 gradient-underline"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Blog
                  </Link>
                );
              }
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium py-2 gradient-underline"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              );
            })}
            <motion.button
              className="w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-primary-600 hover:to-primary-700 transition-all duration-300"
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(false) || navigate('/apply')}
            >
              Apply Now
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;