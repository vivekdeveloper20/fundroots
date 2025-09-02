import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaRupeeSign, FaRegClock, FaCheckCircle, FaUserShield, FaBolt, FaMobileAlt, FaCalculator, FaFileAlt, FaUserTie, FaPercentage, FaCalendarAlt, FaWallet, FaUserCheck, FaIdCard, FaHome, FaFileInvoiceDollar, FaUniversity, FaRegImage, FaBriefcase, FaStar } from 'react-icons/fa';
import { TrendingUp, Shield, Users, Star, Clock, ArrowRight, Calculator, CheckCircle } from 'lucide-react';

const stats = [
  { icon: <FaRupeeSign className="text-green-600 dark:text-green-400 text-2xl" />, value: '₹100Cr+', label: 'Loans Processed' },
  { icon: <Users className="text-blue-600 dark:text-blue-400 text-2xl" />, value: '25K+', label: 'Happy Clients' },
  { icon: <Star className="text-yellow-600 dark:text-yellow-400 text-2xl" />, value: '4.9★', label: 'Google Rating' },
  { icon: <Clock className="text-purple-600 dark:text-purple-400 text-2xl" />, value: '24 Hrs', label: 'Avg. Disbursal' },
];

const features = [
  { icon: <FaRupeeSign className="text-white text-3xl" />, title: '₹50,000 to ₹25 lakh', desc: 'Wide range of loan amounts for every need.' },
  { icon: <FaRegClock className="text-white text-3xl" />, title: '1 to 5 years tenure', desc: 'Flexible repayment periods.' },
  { icon: <FaCheckCircle className="text-white text-3xl" />, title: 'No collateral', desc: 'Completely unsecured, no security needed.' },
  { icon: <FaUserShield className="text-white text-3xl" />, title: '100% digital', desc: 'Apply and track online, paperless process.' },
  { icon: <FaBolt className="text-white text-3xl" />, title: 'Quick approval', desc: 'Get funds in as little as 24 hours.' },
  { icon: <FaMobileAlt className="text-white text-3xl" />, title: 'Flexible repayment', desc: 'Choose EMI as per your comfort.' },
];

const faqs = [
  {
    question: 'Personal loan lene ke liye minimum salary kitni honi chahiye?',
    answer: 'Generally, minimum monthly salary ₹15,000-₹20,000 honi chahiye, lekin yeh bank/lender par depend karta hai.'
  },
  {
    question: 'Personal loan lene me kitna time lagta hai?',
    answer: 'Agar documents sahi hain toh 24-48 hours me approval aur disbursal ho sakta hai.'
  },
  {
    question: 'Kya collateral ya guarantor chahiye?',
    answer: 'Personal loan usually collateral-free hota hai, kisi security ki zarurat nahi.'
  },
  {
    question: 'Kya main apna loan online apply kar sakta hoon?',
    answer: 'Haan, aap pura process online kar sakte hain.'
  },
];

const PersonalLoanPage: React.FC = () => {
  // EMI Calculator State
  const [amount, setAmount] = useState(100000);
  const [rate, setRate] = useState(12);
  const [tenure, setTenure] = useState(24);
  const [emi, setEmi] = useState('');

  const calculateEmi = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const principal = amount;
    const monthlyRate = rate / 12 / 100;
    const n = tenure;
    if (principal <= 0 || rate <= 0 || n <= 0) {
      setEmi('Please enter valid values.');
      return;
    }
    const emiVal = (principal * monthlyRate * Math.pow(1 + monthlyRate, n)) / (Math.pow(1 + monthlyRate, n) - 1);
    setEmi(`₹${emiVal.toLocaleString(undefined, { maximumFractionDigits: 0 })} per month`);
  };

  React.useEffect(() => {
    calculateEmi();
    // eslint-disable-next-line
  }, [amount, rate, tenure]);

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 min-h-screen">
      {/* Personal Loan Landing Hero Section - Home Page Style */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-20 pb-10">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900" />
        {/* Floating Background Icons */}
        {[{ Icon: TrendingUp, delay: 0, position: 'top-20 left-10' }, { Icon: Shield, delay: 0.5, position: 'top-32 right-16' }, { Icon: CheckCircle, delay: 1, position: 'bottom-40 left-20' }].map(({ Icon, delay, position }, index) => (
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
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
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
                <span className="bg-gradient-to-r from-primary-700 via-success-600 to-primary-400 bg-clip-text text-transparent">
                  Quick, Hassle-Free Personal Loans
                </span>
                <br />
                <span className="text-gray-800 dark:text-white">
                  That Fit Your Needs
                </span>
              </motion.h1>
              <motion.p
                className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mt-6 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Get instant funds for emergencies, expenses, or dreams. <span className="font-semibold text-primary-600 dark:text-primary-400">Fast approval, 100% digital, no collateral.</span>
              </motion.p>
              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <motion.button
                  className="bg-gradient-to-r from-primary-600 to-success-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg flex items-center justify-center gap-2 hover:from-primary-700 hover:to-success-700 transition-all duration-300 animate-pulse-glow"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Loan Now
                  <ArrowRight className="h-5 w-5" />
                </motion.button>
                <motion.button
                  className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-primary-200 dark:border-primary-800 text-primary-700 dark:text-primary-400 px-8 py-4 rounded-2xl font-semibold text-lg flex items-center justify-center gap-2 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Calculator className="h-5 w-5" />
                  Check Eligibility
                </motion.button>
              </motion.div>
              {/* Enhanced Stats */}
              <motion.div
                className="grid grid-cols-3 gap-4 mt-12 lg:mt-16"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                {[
                  { 
                    value: '₹25L', 
                    label: 'Max Loan', 
                    icon: <FaRupeeSign className="text-green-500" />,
                    bgColor: 'from-green-500/10 to-emerald-500/10',
                    borderColor: 'border-green-200 dark:border-green-800',
                    textColor: 'text-green-700 dark:text-green-400'
                  },
                  { 
                    value: '24 Hrs', 
                    label: 'Avg. Disbursal', 
                    icon: <FaRegClock className="text-blue-500" />,
                    bgColor: 'from-blue-500/10 to-indigo-500/10',
                    borderColor: 'border-blue-200 dark:border-blue-800',
                    textColor: 'text-blue-700 dark:text-blue-400'
                  },
                  { 
                    value: '4.9★', 
                    label: 'Google Rating', 
                    icon: <FaStar className="text-yellow-500" />,
                    bgColor: 'from-yellow-500/10 to-orange-500/10',
                    borderColor: 'border-yellow-200 dark:border-yellow-800',
                    textColor: 'text-yellow-700 dark:text-yellow-400'
                  },
                ].map((stat, index) => (
                  <motion.div 
                    key={index} 
                    className={`relative group bg-gradient-to-br ${stat.bgColor} backdrop-blur-sm border ${stat.borderColor} rounded-2xl p-4 text-center hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer`}
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + (index * 0.1), duration: 0.5 }}
                  >
                    {/* Glow effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.bgColor} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300`}></div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon */}
                      <div className="flex justify-center mb-2">
                        <div className="w-10 h-10 rounded-full bg-white/80 dark:bg-gray-800/80 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          {stat.icon}
                        </div>
                      </div>
                      
                      {/* Value */}
                      <div className={`text-2xl md:text-3xl font-extrabold ${stat.textColor} mb-1 group-hover:scale-110 transition-transform duration-300`}>
                        {stat.value}
                      </div>
                      
                      {/* Label */}
                      <div className="text-xs md:text-sm font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wide">
                        {stat.label}
                      </div>
                      
                      {/* Animated underline */}
                      <div className={`w-0 group-hover:w-full h-0.5 bg-gradient-to-r ${stat.bgColor.replace('/10', '/50')} transition-all duration-300 mx-auto mt-2`}></div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            {/* Right Content - Phone Mockup Card (restored) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex justify-center items-center"
            >
              <div className="relative bg-white dark:bg-gray-900 rounded-[2.5rem] shadow-2xl p-6 w-[340px] h-[620px] flex flex-col items-center border border-gray-100 dark:border-gray-800 animate-fade-in">
                {/* Logo and Tag */}
                <div className="flex flex-col items-center mb-4">
                  <div className="flex items-center gap-2 text-2xl font-extrabold text-primary-700 tracking-tight">
                    <span className="inline-block w-8 h-8 rounded-full bg-gradient-to-br from-primary-600 to-success-500 flex items-center justify-center text-white font-bold">F</span>
                    FundRoot
                  </div>
                  <div className="mt-2 px-4 py-1 rounded-full bg-primary-50 text-primary-700 font-semibold text-sm shadow">Personal Loan</div>
                </div>
                {/* Image */}
                <div className="w-full h-36 rounded-xl overflow-hidden mb-4 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                  <img src="https://images.unsplash.com/photo-1515168833906-d2a3b82b3029?auto=format&fit=crop&w=400&q=80" alt="Business handshake" className="object-cover w-full h-full" />
                </div>
                {/* Feature Grid */}
                <div className="grid grid-cols-2 gap-4 w-full mt-2">
                  <div className="flex flex-col items-center bg-blue-50 dark:bg-primary-900/10 rounded-xl p-4 shadow-sm">
                    <FaRegClock className="text-primary-600 text-2xl mb-1" />
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">Quick Approval</span>
                  </div>
                  <div className="flex flex-col items-center bg-green-50 dark:bg-success-900/10 rounded-xl p-4 shadow-sm">
                    <FaCheckCircle className="text-success-600 text-2xl mb-1" />
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">Instant Disbursal</span>
                  </div>
                  <div className="flex flex-col items-center bg-blue-50 dark:bg-primary-900/10 rounded-xl p-4 shadow-sm">
                    <FaUserShield className="text-blue-600 text-2xl mb-1" />
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">Trusted & Secure</span>
                  </div>
                  <div className="flex flex-col items-center bg-blue-50 dark:bg-primary-900/10 rounded-xl p-4 shadow-sm">
                    <FaUserTie className="text-primary-700 text-2xl mb-1" />
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">Expert Support</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partner Bank Logos Section - Ultra Modern, Unique Glassmorphism */}
      <section className="relative w-full py-16 bg-gradient-to-b from-white via-blue-50 to-green-50 dark:from-gray-900 dark:via-blue-900/10 dark:to-green-900/10 overflow-hidden">
        {/* Animated Gradient/Particles BG */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute left-1/3 top-0 w-96 h-96 bg-gradient-to-br from-primary-200 via-success-100 to-blue-100 rounded-full blur-3xl opacity-40 animate-pulse-glow" />
          <div className="absolute right-0 bottom-0 w-80 h-80 bg-gradient-to-tr from-success-200 via-primary-100 to-green-100 rounded-full blur-2xl opacity-30 animate-pulse-glow" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <div className="mb-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-success-500 text-white text-2xl shadow-lg"><svg width='24' height='24' fill='none' viewBox='0 0 24 24'><path d='M17 8.5V7A5 5 0 0 0 7 7v1.5M12 15v2m-7-2.5c0 2.485 2.239 4.5 5 4.5h4c2.761 0 5-2.015 5-4.5V12a5 5 0 0 0-10 0v.5' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round'/></svg></span>
              <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-primary-600 to-success-600 bg-clip-text text-transparent tracking-tight">Our Trusted Partners</h2>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">We’re partnered with India’s leading banks and NBFCs for your trust and convenience.</p>
          </div>
          <div className="glass-card mx-auto px-2 py-6 rounded-3xl shadow-2xl backdrop-blur-md bg-white/60 dark:bg-gray-900/60 border border-white/30 dark:border-gray-800/30 overflow-hidden">
            {/* Infinite Scroll Container */}
            <div className="relative">
              {/* First row - scrolling left */}
              <div className="flex gap-8 md:gap-10 py-2 animate-scroll-left">
                {/* HDFC */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="relative w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center ring-4 ring-gradient-hdfc group hover:shadow-2xl hover:ring-8 transition-all duration-300">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0c/HDFC_Bank_Logo.svg" alt="HDFC Bank" className="h-10 w-10 object-contain group-hover:drop-shadow-glow" />
                  </div>
                  <span className="mt-2 text-xs text-gray-500 font-semibold">HDFC</span>
                </div>
                {/* ICICI */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="relative w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center ring-4 ring-gradient-icici group hover:shadow-2xl hover:ring-8 transition-all duration-300">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/ICICI_Bank_Logo.svg" alt="ICICI Bank" className="h-10 w-10 object-contain group-hover:drop-shadow-glow" />
                  </div>
                  <span className="mt-2 text-xs text-gray-500 font-semibold">ICICI</span>
                </div>
                {/* Axis */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="relative w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center ring-4 ring-gradient-axis group hover:shadow-2xl hover:ring-8 transition-all duration-300">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Axis_Bank_logo.svg" alt="Axis Bank" className="h-10 w-10 object-contain group-hover:drop-shadow-glow" />
                  </div>
                  <span className="mt-2 text-xs text-gray-500 font-semibold">Axis</span>
                </div>
                {/* SBI */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="relative w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center ring-4 ring-gradient-sbi group hover:shadow-2xl hover:ring-8 transition-all duration-300">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/5c/State_Bank_of_India_logo.svg" alt="SBI" className="h-10 w-10 object-contain group-hover:drop-shadow-glow" />
                  </div>
                  <span className="mt-2 text-xs text-gray-500 font-semibold">SBI</span>
                </div>
                {/* Kotak */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="relative w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center ring-4 ring-gradient-kotak group hover:shadow-2xl hover:ring-8 transition-all duration-300">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Kotak_Mahindra_Bank_Logo.svg" alt="Kotak" className="h-10 w-10 object-contain group-hover:drop-shadow-glow" />
                  </div>
                  <span className="mt-2 text-xs text-gray-500 font-semibold">Kotak</span>
                </div>
                {/* Bajaj Finserv */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="relative w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center ring-4 ring-gradient-bajaj group hover:shadow-2xl hover:ring-8 transition-all duration-300">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Bajaj_Finserv_logo.svg" alt="Bajaj Finserv" className="h-10 w-10 object-contain group-hover:drop-shadow-glow" />
                  </div>
                  <span className="mt-2 text-xs text-gray-500 font-semibold">Bajaj</span>
                </div>
                {/* Duplicate logos for seamless loop */}
                {/* HDFC */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="relative w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center ring-4 ring-gradient-hdfc group hover:shadow-2xl hover:ring-8 transition-all duration-300">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0c/HDFC_Bank_Logo.svg" alt="HDFC Bank" className="h-10 w-10 object-contain group-hover:drop-shadow-glow" />
                  </div>
                  <span className="mt-2 text-xs text-gray-500 font-semibold">HDFC</span>
                </div>
                {/* ICICI */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="relative w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center ring-4 ring-gradient-icici group hover:shadow-2xl hover:ring-8 transition-all duration-300">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/ICICI_Bank_Logo.svg" alt="ICICI Bank" className="h-10 w-10 object-contain group-hover:drop-shadow-glow" />
                  </div>
                  <span className="mt-2 text-xs text-gray-500 font-semibold">ICICI</span>
                </div>
                {/* Axis */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="relative w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center ring-4 ring-gradient-axis group hover:shadow-2xl hover:ring-8 transition-all duration-300">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Axis_Bank_logo.svg" alt="Axis Bank" className="h-10 w-10 object-contain group-hover:drop-shadow-glow" />
                  </div>
                  <span className="mt-2 text-xs text-gray-500 font-semibold">Axis</span>
                </div>
                {/* SBI */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="relative w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center ring-4 ring-gradient-sbi group hover:shadow-2xl hover:ring-8 transition-all duration-300">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/5c/State_Bank_of_India_logo.svg" alt="SBI" className="h-10 w-10 object-contain group-hover:drop-shadow-glow" />
                  </div>
                  <span className="mt-2 text-xs text-gray-500 font-semibold">SBI</span>
                </div>
                {/* Kotak */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="relative w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center ring-4 ring-gradient-kotak group-hover:shadow-2xl hover:ring-8 transition-all duration-300">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Kotak_Mahindra_Bank_Logo.svg" alt="Kotak" className="h-10 w-10 object-contain group-hover:drop-shadow-glow" />
                  </div>
                  <span className="mt-2 text-xs text-gray-500 font-semibold">Kotak</span>
                </div>
                {/* Bajaj Finserv */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="relative w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center ring-4 ring-gradient-bajaj group hover:shadow-2xl hover:ring-8 transition-all duration-300">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Bajaj_Finserv_logo.svg" alt="Bajaj Finserv" className="h-10 w-10 object-contain group-hover:drop-shadow-glow" />
                  </div>
                  <span className="mt-2 text-xs text-gray-500 font-semibold">Bajaj</span>
                </div>
              </div>
            </div>
          </div>
          <style>{`
            .ring-gradient-hdfc { background: linear-gradient(135deg, #2563eb33, #22c55e33); }
            .ring-gradient-icici { background: linear-gradient(135deg, #ff6f0033, #ffb30033); }
            .ring-gradient-axis { background: linear-gradient(135deg, #d946ef33, #6366f133); }
            .ring-gradient-sbi { background: linear-gradient(135deg, #38bdf833, #2563eb33); }
            .ring-gradient-kotak { background: linear-gradient(135deg, #ef444433, #f59e4233); }
            .ring-gradient-bajaj { background: linear-gradient(135deg, #06b6d433, #818cf833); }
            .drop-shadow-glow { filter: drop-shadow(0 0 8px #38bdf8aa); }
            .glass-card { box-shadow: 0 8px 40px 0 rgba(16,30,54,0.10); }
            
            /* Infinite Scroll Animation */
            @keyframes scroll-left {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            
            .animate-scroll-left {
              animation: scroll-left 8s linear infinite;
            }
            
            .animate-scroll-left:hover {
              animation-play-state: paused;
            }
            
            @media (max-width: 768px) {
              .glass-card { padding-left: 0.5rem; padding-right: 0.5rem; }
              .animate-scroll-left {
                animation-duration: 6s;
              }
            }
          `}</style>
        </div>
      </section>

      {/* How Personal Loans Work - Modern with Icons/Graphics */}
      <section className="w-full py-14 bg-gradient-to-b from-white via-green-50 to-blue-50 dark:from-gray-900 dark:via-green-900/10 dark:to-blue-900/10">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-14 bg-gradient-to-r from-primary-600 to-success-600 bg-clip-text text-transparent tracking-tight">How Personal Loans Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6 items-start">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mb-3 shadow-lg">
                <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><rect x="7" y="10" width="26" height="20" rx="3" fill="#2563eb" fillOpacity="0.12"/><rect x="11" y="14" width="18" height="12" rx="2" fill="#2563eb"/><rect x="15" y="18" width="10" height="4" rx="1" fill="#fff"/></svg>
              </div>
              <div className="font-extrabold text-lg md:text-xl text-blue-900 mb-2">Apply Online</div>
              <div className="text-gray-500 text-base font-medium">Fill a simple form with your details and loan requirement.</div>
            </div>
            {/* Step 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-3 shadow-lg">
                <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><circle cx="20" cy="20" r="16" fill="#22c55e" fillOpacity="0.12"/><path d="M14 21l4 4 8-8" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div className="font-extrabold text-lg md:text-xl text-green-900 mb-2">Get Approval</div>
              <div className="text-gray-500 text-base font-medium">Your application is reviewed and approved in minutes.</div>
            </div>
            {/* Step 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mb-3 shadow-lg">
                <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><rect x="10" y="12" width="20" height="16" rx="3" fill="#2563eb" fillOpacity="0.12"/><rect x="14" y="16" width="12" height="8" rx="2" fill="#2563eb"/><path d="M20 20v4" stroke="#fff" strokeWidth="2" strokeLinecap="round"/><path d="M18 22h4" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
              </div>
              <div className="font-extrabold text-lg md:text-xl text-blue-900 mb-2">Upload Documents</div>
              <div className="text-gray-500 text-base font-medium">Submit KYC and income documents securely online.</div>
            </div>
            {/* Step 4 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-3 shadow-lg">
                <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><rect x="10" y="12" width="20" height="16" rx="3" fill="#22c55e" fillOpacity="0.12"/><path d="M20 24v-6" stroke="#22c55e" strokeWidth="2" strokeLinecap="round"/><circle cx="20" cy="26" r="2" fill="#22c55e"/><rect x="16" y="18" width="8" height="2" rx="1" fill="#22c55e"/></svg>
              </div>
              <div className="font-extrabold text-lg md:text-xl text-green-900 mb-2">Get Funds</div>
              <div className="text-gray-500 text-base font-medium">Loan amount is credited to your bank account instantly.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Personal Loan? Section */}
      <section className="py-16 bg-gradient-to-b from-primary-50 to-white dark:from-primary-900/10 dark:to-gray-900/10 w-full px-4 md:px-8">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-10 bg-gradient-to-r from-primary-600 to-success-600 bg-clip-text text-transparent tracking-tight">Why Choose Our Personal Loan?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-white/50 dark:border-gray-700/50 rounded-3xl p-8 h-full shadow-xl flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-primary-600 hover:ring-2 hover:ring-primary-300 dark:hover:ring-primary-800"
              style={{ boxShadow: '0 4px 24px 0 rgba(139,92,246,0.08)' }}
            >
              <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-[#17607d] to-[#2e9b1e] mb-6 group-hover:scale-110 group-hover:shadow-2xl transition-transform duration-300 shadow-lg">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What is Personal Loan Section - Modern, Informative, Creative */}
      <section className="relative w-full px-4 md:px-8 mb-16">
        {/* Subtle radial background accent */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0">
          <div className="w-[700px] h-[300px] bg-gradient-to-br from-primary-50 via-white to-green-50 rounded-full blur-3xl opacity-50"></div>
        </div>
        <div className="max-w-5xl mx-auto relative z-10">
          {/* Heading with brand gradient */}
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-primary-600 to-success-600 bg-clip-text text-transparent">What is Personal Loan?</h2>
          <div className="text-lg md:text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">Need extra funds for personal expenses like a wedding, medical emergency, or a dream vacation?</div>
          <div className="text-gray-700 dark:text-gray-300 text-lg mb-2">Don’t worry, you can apply for a Personal Loan and get the financial support you need quickly and hassle-free.</div>
          <div className="text-gray-700 dark:text-gray-300 text-lg mb-2">Whether it’s managing unexpected expenses, consolidating debt, or funding your next big goal, get instant access to funds.</div>
          <div className="text-gray-700 dark:text-gray-300 text-lg mb-6">Take control of your finances without compromise!</div>

          <div className="mt-8 mb-2 text-2xl font-bold">
            <span className="text-primary-600">Interest Rates</span> <span className="text-gray-900 dark:text-white">in India</span>
          </div>
          <div className="text-gray-700 dark:text-gray-300 text-lg mb-8">Personal loans are available at attractive interest rates starting from <span className="font-semibold text-primary-700">14% p.a.</span> (final rate depends on your eligibility).</div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {/* Card 1 */}
            <div className="group flex flex-col items-center bg-primary-50 dark:bg-primary-900/20 rounded-xl p-6 shadow transition-all duration-200 hover:shadow-xl hover:-translate-y-1 cursor-pointer">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-3 mb-3 shadow group-hover:ring-4 group-hover:ring-primary-100 group-hover:scale-110 transition-all duration-200">
                <FaPercentage className="text-primary-600 text-2xl group-hover:drop-shadow-glow" />
              </div>
              <div className="font-extrabold text-lg text-primary-700 mb-1">Up to 4%</div>
              <div className="w-8 h-1 rounded-full bg-gradient-to-r from-primary-400 to-success-400 opacity-30 mb-2"></div>
              <div className="text-primary-500 text-sm">Processing Fee</div>
            </div>
            {/* Card 2 */}
            <div className="group flex flex-col items-center bg-primary-50 dark:bg-primary-900/20 rounded-xl p-6 shadow transition-all duration-200 hover:shadow-xl hover:-translate-y-1 cursor-pointer">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-3 mb-3 shadow group-hover:ring-4 group-hover:ring-primary-100 group-hover:scale-110 transition-all duration-200">
                <FaRupeeSign className="text-primary-600 text-2xl group-hover:drop-shadow-glow" />
              </div>
              <div className="font-extrabold text-lg text-primary-700 mb-1">Up to ₹2 lakhs</div>
              <div className="w-8 h-1 rounded-full bg-gradient-to-r from-primary-400 to-success-400 opacity-30 mb-2"></div>
              <div className="text-primary-500 text-sm">Loan Amount</div>
            </div>
            {/* Card 3 */}
            <div className="group flex flex-col items-center bg-primary-50 dark:bg-primary-900/20 rounded-xl p-6 shadow transition-all duration-200 hover:shadow-xl hover:-translate-y-1 cursor-pointer">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-3 mb-3 shadow group-hover:ring-4 group-hover:ring-primary-100 group-hover:scale-110 transition-all duration-200">
                <FaCalendarAlt className="text-primary-600 text-2xl group-hover:drop-shadow-glow" />
              </div>
              <div className="font-extrabold text-lg text-primary-700 mb-1">Up to 36 Months</div>
              <div className="w-8 h-1 rounded-full bg-gradient-to-r from-primary-400 to-success-400 opacity-30 mb-2"></div>
              <div className="text-primary-500 text-sm">Loan Tenure</div>
            </div>
            {/* Card 4 */}
            <div className="group flex flex-col items-center bg-primary-50 dark:bg-primary-900/20 rounded-xl p-6 shadow transition-all duration-200 hover:shadow-xl hover:-translate-y-1 cursor-pointer">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-3 mb-3 shadow group-hover:ring-4 group-hover:ring-primary-100 group-hover:scale-110 transition-all duration-200">
                <FaWallet className="text-primary-600 text-2xl group-hover:drop-shadow-glow" />
              </div>
              <div className="font-extrabold text-lg text-primary-700 mb-1">Flexible Usage</div>
              <div className="w-8 h-1 rounded-full bg-gradient-to-r from-primary-400 to-success-400 opacity-30 mb-2"></div>
              <div className="text-primary-500 text-sm">Use funds for any purpose</div>
            </div>
          </div>

          {/* Did you know tip */}
          <div className="mt-4 bg-green-50 dark:bg-green-900/20 rounded-lg p-4 flex items-center gap-3">
            <span className="text-green-600 text-xl">💡</span>
            <span className="text-gray-800 dark:text-gray-100 text-base">Did you know? Personal loans don’t require collateral and can be approved in as little as <span className="font-semibold text-green-700">24 hours</span>!</span>
          </div>
        </div>
      </section>

      {/* Eligibility & Documents - Modern Side-by-Side Cards */}
      <section className="w-full px-4 md:px-8 mb-12 bg-gradient-to-br from-primary-50 via-white to-success-50 dark:from-primary-900 dark:via-gray-900 dark:to-success-900 rounded-3xl shadow-lg py-12">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8">
          {/* Eligibility Criteria Card (now left) */}
          <div className="flex-1 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg rounded-3xl shadow-xl flex flex-col md:flex-row items-center gap-8 p-10 border border-primary-100 dark:border-primary-900">
            <div className="flex-shrink-0 flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-primary-500 to-success-400 shadow-lg">
              <FaUserCheck className="text-white text-4xl" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold text-primary-700 mb-2 flex items-center gap-2">Eligibility Criteria</h2>
              <div className="text-primary-600 font-medium mb-4">Check if you qualify for a personal loan in seconds!</div>
              <ul className="space-y-3 text-gray-800 dark:text-gray-100 text-lg mb-3">
                <li className="flex items-center gap-2"><FaUserTie className="text-primary-600" /> Indian resident, age 21–60 years</li>
                <li className="flex items-center gap-2"><FaBriefcase className="text-primary-600" /> Salaried or self-employed</li>
                <li className="flex items-center gap-2"><FaRupeeSign className="text-primary-600" /> Minimum monthly income as per lender policy</li>
                <li className="flex items-center gap-2"><FaStar className="text-primary-600" /> Good credit history preferred</li>
                <li className="flex items-center gap-2"><FaUniversity className="text-primary-600" /> Valid bank account</li>
              </ul>
              <div className="mt-2 text-sm text-primary-700 bg-primary-50 dark:bg-primary-900/30 rounded-lg px-4 py-2 inline-block mb-4">
                <span className="font-semibold">Tip:</span> Meeting these criteria increases your chances of instant approval!
              </div>
              <a href="#emi" className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-600 to-success-600 text-white font-semibold px-6 py-3 rounded-xl shadow hover:from-primary-700 hover:to-success-700 transition-all duration-200 text-lg mt-2 group">
                Check Your Eligibility Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
          {/* Documents Required Card (now right) */}
          <div className="flex-1 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg rounded-3xl shadow-xl flex flex-col md:flex-row items-center gap-8 p-10 border border-success-100 dark:border-success-900">
            <div className="flex-shrink-0 flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-success-500 to-primary-400 shadow-lg">
              <FaFileAlt className="text-white text-4xl" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold text-success-700 mb-2 flex items-center gap-2">Documents Required</h2>
              <div className="text-success-600 font-medium mb-4">Keep these documents handy for a smooth application!</div>
              <ul className="space-y-3 text-gray-800 dark:text-gray-100 text-lg mb-3">
                <li className="flex items-center gap-2"><FaIdCard className="text-success-600" /> PAN & Aadhaar Card</li>
                <li className="flex items-center gap-2"><FaHome className="text-success-600" /> Address Proof (utility bill, etc.)</li>
                <li className="flex items-center gap-2"><FaFileInvoiceDollar className="text-success-600" /> Income Proof (salary slip/ITR)</li>
                <li className="flex items-center gap-2"><FaUniversity className="text-success-600" /> Last 6 months’ bank statements</li>
                <li className="flex items-center gap-2"><FaRegImage className="text-success-600" /> Passport-size photo</li>
              </ul>
              <div className="mt-2 text-sm text-success-700 bg-success-50 dark:bg-success-900/30 rounded-lg px-4 py-2 inline-block mb-4">
                <span className="font-semibold">Tip:</span> Having all documents ready speeds up your approval!
              </div>
              <a href="#documents" className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-600 to-success-600 text-white font-semibold px-6 py-3 rounded-xl shadow hover:from-primary-700 hover:to-success-700 transition-all duration-200 text-lg mt-2 group">
                View Document Checklist
                <FaFileAlt className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* EMI Calculator - Modern Brand Style */}
      <section id="emi" className="w-full mb-20 relative overflow-hidden">
        {/* Background Icons */}
        <FaRupeeSign className="hidden md:block absolute left-10 top-24 text-primary-100 dark:text-primary-900 opacity-20 text-[120px] blur-sm pointer-events-none z-0" />
        <FaCalculator className="hidden md:block absolute right-16 top-40 text-success-100 dark:text-success-900 opacity-20 text-[100px] blur-sm pointer-events-none z-0" />
        <FaWallet className="hidden md:block absolute left-1/2 -translate-x-1/2 bottom-10 text-primary-200 dark:text-primary-800 opacity-10 text-[180px] blur-md pointer-events-none z-0" />
        <FaPercentage className="hidden md:block absolute right-24 bottom-32 text-orange-100 dark:text-orange-900 opacity-20 text-[90px] blur-sm pointer-events-none z-0" />
        <div className="w-full bg-gradient-to-br from-primary-50 via-white to-success-50 dark:from-primary-900 dark:via-gray-900 dark:to-success-900 rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 flex flex-col gap-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-primary-600 to-success-600 bg-clip-text text-transparent flex items-center gap-2">
                <FaCalculator className="text-primary-600" /> Personal Loan EMI Calculator
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl">Calculate your monthly EMI, total interest, and total payment for your personal loan. Adjust the sliders or enter values to see instant results!</p>
            </div>
            <div className="flex gap-2 mt-4 md:mt-0">
              <button className="px-5 py-2 rounded-xl font-semibold bg-gradient-to-r from-primary-600 to-success-600 text-white shadow hover:from-primary-700 hover:to-success-700 transition-all duration-200 focus:outline-none">EMI Calculation</button>
              <button className="px-5 py-2 rounded-xl font-semibold bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 shadow hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-200 focus:outline-none">Repayment Details</button>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left: Inputs */}
            <div className="flex-1 bg-gradient-to-br from-primary-50 via-white to-success-50 dark:from-primary-900 dark:via-gray-900 dark:to-success-900 rounded-2xl p-6 flex flex-col gap-8 shadow-md">
              {/* Loan Amount */}
              <div className="flex flex-col gap-1 mb-2">
                <label className="block text-gray-700 dark:text-gray-200 font-semibold mb-1">Loan Amount (₹)</label>
                <div className="flex items-center gap-4">
                  <input type="range" min="10000" max="2500000" step="10000" value={amount} onChange={e => setAmount(Number(e.target.value))} className="w-full accent-primary-600 h-3 md:h-4" style={{ accentColor: '#17607d' }} />
                  <input type="number" min="10000" max="2500000" step="10000" value={amount} onChange={e => setAmount(Number(e.target.value))} className="w-32 rounded border px-3 py-2 dark:bg-gray-900 dark:border-gray-700 text-right font-semibold" />
                </div>
                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-3 px-1">
                  <span>₹10K</span>
                  <span className="font-semibold text-primary-700 dark:text-primary-300">₹{(10000 + (2500000-10000)/2).toLocaleString()}</span>
                  <span>₹25L</span>
                </div>
                <div className="text-center mt-2 mb-1">
                  <span className="text-2xl md:text-3xl font-bold text-primary-700 dark:text-primary-300">{amount.toLocaleString()}</span>
                </div>
              </div>
              {/* Interest Rate */}
              <div className="flex flex-col gap-1 mb-2">
                <label className="block text-gray-700 dark:text-gray-200 font-semibold mb-1">Interest Rate (% p.a.)</label>
                <div className="flex items-center gap-4">
                  <input type="range" min="8" max="36" step="0.1" value={rate} onChange={e => setRate(Number(e.target.value))} className="w-full accent-success-600 h-3 md:h-4" style={{ accentColor: '#22c55e' }} />
                  <input type="number" min="8" max="36" step="0.1" value={rate} onChange={e => setRate(Number(e.target.value))} className="w-20 rounded border px-3 py-2 dark:bg-gray-900 dark:border-gray-700 text-right font-semibold" />
                </div>
                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-3 px-1">
                  <span>8%</span>
                  <span className="font-semibold text-success-700 dark:text-success-300">{((8+36)/2).toFixed(1)}%</span>
                  <span>36%</span>
                </div>
                <div className="text-center mt-2 mb-1">
                  <span className="text-2xl md:text-3xl font-bold text-success-700 dark:text-success-300">{rate}</span>
                </div>
              </div>
              {/* Tenure */}
              <div className="flex flex-col gap-1">
                <label className="block text-gray-700 dark:text-gray-200 font-semibold mb-1">Tenure (months)</label>
                <div className="flex items-center gap-4">
                  <input type="range" min="6" max="60" step="1" value={tenure} onChange={e => setTenure(Number(e.target.value))} className="w-full accent-primary-600 h-3 md:h-4" style={{ accentColor: '#17607d' }} />
                  <input type="number" min="6" max="60" step="1" value={tenure} onChange={e => setTenure(Number(e.target.value))} className="w-20 rounded border px-3 py-2 dark:bg-gray-900 dark:border-gray-700 text-right font-semibold" />
                </div>
                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-3 px-1">
                  <span>6</span>
                  <span className="font-semibold text-primary-700 dark:text-primary-300">{Math.round((6+60)/2)}</span>
                  <span>60</span>
                </div>
                <div className="text-center mt-2 mb-1">
                  <span className="text-2xl md:text-3xl font-bold text-primary-700 dark:text-primary-300">{tenure}</span>
                </div>
              </div>
            </div>
            {/* Right: Results & Chart */}
            <div className="flex-1 flex flex-col items-center justify-center gap-6">
              <div className="w-full bg-gradient-to-r from-primary-600 to-success-600 rounded-2xl p-6 flex flex-col items-center shadow-lg">
                <div className="text-3xl md:text-4xl font-extrabold text-white mb-2">{emi.replace('per month', '')}</div>
                <div className="flex gap-8 text-white text-lg font-semibold mb-2">
                  <div><span className="block text-base font-normal">Total Interest</span> ₹{((emi && emi !== 'Please enter valid values.') ? ((emiVal, principal, n) => ((emiVal * n) - principal))(Number(emi.replace(/[^\d]/g, '')), amount, tenure) : '--')}</div>
                  <div><span className="block text-base font-normal">Total Payment</span> ₹{((emi && emi !== 'Please enter valid values.') ? ((emiVal, n) => (emiVal * n))(Number(emi.replace(/[^\d]/g, '')), tenure) : '--')}</div>
                </div>
              </div>
              {/* Donut Chart (SVG) */}
              <div className="w-48 h-48 flex items-center justify-center">
                {/* Simple SVG Donut Chart */}
                {emi && emi !== 'Please enter valid values.' ? (() => {
                  const emiVal = Number(emi.replace(/[^\d]/g, ''));
                  const totalPayment = emiVal * tenure;
                  const principal = amount;
                  const interest = totalPayment - principal;
                  const percentPrincipal = (principal / totalPayment) * 100;
                  const percentInterest = 100 - percentPrincipal;
                  const r = 70, c = 80, stroke = 16;
                  const circ = 2 * Math.PI * r;
                  return (
                    <svg width="160" height="160" viewBox="0 0 160 160">
                      <circle cx={c} cy={c} r={r} fill="none" stroke="#e5e7eb" strokeWidth={stroke} />
                      <circle cx={c} cy={c} r={r} fill="none" stroke="#22c55e" strokeWidth={stroke} strokeDasharray={`${circ * percentInterest / 100} ${circ}`} strokeDashoffset={circ * (1 - percentPrincipal / 100)} />
                      <circle cx={c} cy={c} r={r} fill="none" stroke="#2563eb" strokeWidth={stroke} strokeDasharray={`${circ * percentPrincipal / 100} ${circ}`} strokeDashoffset={0} />
                    </svg>
                  );
                })() : null}
              </div>
              {/* Payment Breakdown */}
              <div className="w-full flex flex-col gap-2 text-gray-700 dark:text-gray-200 text-base">
                <div className="flex items-center justify-between gap-2">
                  <span className="flex items-center gap-2"><FaCalculator className="text-primary-600" /> Monthly EMI</span>
                  <span>{emi.replace('per month', '')}</span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span className="flex items-center gap-2"><FaRupeeSign className="text-success-600" /> Principal Amount</span>
                  <span>₹{amount.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span className="flex items-center gap-2"><FaPercentage className="text-orange-500" /> Total Interest</span>
                  <span>{emi && emi !== 'Please enter valid values.' ? `₹${((emiVal, principal, n) => ((emiVal * n) - principal))(Number(emi.replace(/[^\d]/g, '')), amount, tenure).toLocaleString()}` : '--'}</span>
                </div>
                <div className="flex items-center justify-between gap-2 font-semibold">
                  <span className="flex items-center gap-2"><FaWallet className="text-primary-700" /> Total Payment</span>
                  <span>{emi && emi !== 'Please enter valid values.' ? `₹${((emiVal, n) => (emiVal * n))(Number(emi.replace(/[^\d]/g, '')), tenure).toLocaleString()}` : '--'}</span>
                </div>
              </div>
              {/* Share Button */}
              <button className="mt-4 inline-flex items-center gap-2 bg-gradient-to-r from-primary-600 to-success-600 text-white font-semibold px-6 py-3 rounded-xl shadow hover:from-primary-700 hover:to-success-700 transition-all duration-200 text-lg">
                <ArrowRight className="w-5 h-5" /> Share EMI Details
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section className="w-full py-12 bg-gradient-to-b from-white via-primary-50 to-success-50 dark:from-gray-900 dark:via-primary-900/10 dark:to-success-900/10">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-10 bg-gradient-to-r from-primary-600 to-success-600 bg-clip-text text-transparent tracking-tight">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Customer" className="w-16 h-16 rounded-full mb-4 border-4 border-primary-100 object-cover" />
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>
              <div className="font-bold text-lg text-primary-700 mb-1">Amit Sharma</div>
              <div className="text-gray-600 dark:text-gray-300 text-base mb-2">“FundRoot made my loan process super easy and fast. Got money in my account within a day!”</div>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center">
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Customer" className="w-16 h-16 rounded-full mb-4 border-4 border-success-100 object-cover" />
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>
              <div className="font-bold text-lg text-success-700 mb-1">Priya Verma</div>
              <div className="text-gray-600 dark:text-gray-300 text-base mb-2">“Very professional and transparent. The EMI calculator helped me plan my finances perfectly.”</div>
            </div>
            {/* Testimonial 3 */}
            <div className="bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center">
              <img src="https://randomuser.me/api/portraits/men/65.jpg" alt="Customer" className="w-16 h-16 rounded-full mb-4 border-4 border-primary-100 object-cover" />
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>
              <div className="font-bold text-lg text-primary-700 mb-1">Rahul Singh</div>
              <div className="text-gray-600 dark:text-gray-300 text-base mb-2">“Best rates and quick approval. Highly recommend FundRoot for personal loans!”</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="apply" className="text-center mb-20 w-full px-4 md:px-8">
        <div className="inline-block bg-gradient-to-r from-primary-500/10 to-success-500/10 dark:from-primary-500/5 dark:to-success-500/5 backdrop-blur-lg border border-primary-200/50 dark:border-primary-800/50 rounded-2xl p-10 shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-2">Ready to get started?</h2>
          <p className="mb-6 text-gray-600 dark:text-gray-300">Apply now or contact our team for any queries. We’re here to help you every step of the way!</p>
          <a href="/contact" className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg text-lg transition-colors">Apply Now</a>
    </div>
      </section>

      {/* FAQ Section - At the bottom */}
      <section className="w-full mb-20 px-4 md:px-8">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-10 bg-gradient-to-r from-primary-600 to-success-600 bg-clip-text text-transparent tracking-tight">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <details key={idx} className="bg-white/80 dark:bg-gray-900/80 rounded-xl p-5 shadow">
              <summary className="font-medium cursor-pointer text-lg text-primary-700 dark:text-primary-300">{faq.question}</summary>
              <div className="mt-2 text-gray-700 dark:text-gray-200">{faq.answer}</div>
            </details>
          ))}
        </div>
      </section>
    </section>
  );
};

export default PersonalLoanPage; 