import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PieChart, CreditCard, User, DollarSign, BarChart2, TrendingUp, Shield, CheckCircle, Star, Clock, ArrowRight } from 'lucide-react';

const defaultAmount = 5000000;
const defaultRate = 8.5;
const defaultTenure = 240;

const formatCurrency = (value: number) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(value);

const calculateEMI = (amount: number, rate: number, tenure: number) => {
  const monthlyRate = rate / 12 / 100;
  const emi = (amount * monthlyRate * Math.pow(1 + monthlyRate, tenure)) / (Math.pow(1 + monthlyRate, tenure) - 1);
  const totalPayment = emi * tenure;
  const totalInterest = totalPayment - amount;
  return {
    emi: Math.round(emi),
    totalInterest: Math.round(totalInterest),
    totalPayment: Math.round(totalPayment),
  };
};

const stats = [
  { icon: <DollarSign className="text-green-600 text-2xl" />, value: '₹5Cr', label: 'Max Loan', bgColor: 'from-green-500/10 to-emerald-500/10', borderColor: 'border-green-200 dark:border-green-800', textColor: 'text-green-700 dark:text-green-400' },
  { icon: <Clock className="text-blue-600 text-2xl" />, value: '7 Days', label: 'Avg. Disbursal', bgColor: 'from-blue-500/10 to-indigo-500/10', borderColor: 'border-blue-200 dark:border-blue-800', textColor: 'text-blue-700 dark:text-blue-400' },
  { icon: <Star className="text-yellow-600 text-2xl" />, value: '4.9★', label: 'Google Rating', bgColor: 'from-yellow-500/10 to-orange-500/10', borderColor: 'border-yellow-200 dark:border-yellow-800', textColor: 'text-yellow-700 dark:text-yellow-400' },
];

const features = [
  { icon: <DollarSign className="text-primary-600 text-2xl" />, title: '₹10 lakh to ₹5 crores', desc: 'Finance your dream home with wide range of loan amounts.' },
  { icon: <Clock className="text-primary-600 text-2xl" />, title: '5 to 30 years tenure', desc: 'Extended repayment periods for comfortable EMIs.' },
  { icon: <CheckCircle className="text-primary-600 text-2xl" />, title: 'Tax benefits', desc: 'Enjoy tax deductions under Section 24 and 80C.' },
  { icon: <Shield className="text-primary-600 text-2xl" />, title: 'Competitive rates', desc: 'Attractive interest rates starting from 8.5% p.a.' },
  { icon: <TrendingUp className="text-primary-600 text-2xl" />, title: 'Quick processing', desc: 'Fast approval and disbursal within 7 days.' },
  { icon: <User className="text-primary-600 text-2xl" />, title: 'Top-up loan', desc: 'Get additional funds when you need them.' },
];

const HomeLoanEMICalculator: React.FC = () => {
  const [amount, setAmount] = useState(defaultAmount);
  const [rate, setRate] = useState(defaultRate);
  const [tenure, setTenure] = useState(defaultTenure);
  const [showResult, setShowResult] = useState(false);
  const [activeTab, setActiveTab] = useState<'emi' | 'repayment'>('emi');

  const { emi, totalInterest, totalPayment } = calculateEMI(amount, rate, tenure);
  const principalPercent = Math.round((amount / totalPayment) * 100);
  const interestPercent = 100 - principalPercent;

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-0 flex flex-col items-center justify-center relative overflow-x-hidden">
      {/* Animated Gradient Background & Floating Icons */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 z-0" />
      {[{ Icon: TrendingUp, delay: 0, position: 'top-20 left-10' }, { Icon: Shield, delay: 0.5, position: 'top-32 right-16' }, { Icon: CheckCircle, delay: 1, position: 'bottom-40 left-20' }].map(({ Icon, delay, position }, index) => (
        <motion.div
          key={index}
          className={`absolute ${position} opacity-10 dark:opacity-5 z-0`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ delay, duration: 1 }}
        >
          <Icon className="h-24 w-24 text-primary-500 animate-float" />
        </motion.div>
      ))}

      {/* Hero Section */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 pt-20 pb-10 flex flex-col md:flex-row items-center gap-10 md:gap-0">
        {/* Left: Text Content */}
        <div className="flex-1 flex flex-col items-start justify-center md:pr-12">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-4 bg-gradient-to-r from-primary-600 to-success-600 bg-clip-text text-transparent"
          >
            Home Loan EMI Calculator
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-lg"
          >
            Calculate your monthly EMI, total interest, and total payment for your home loan. Plan your home purchase better with our powerful calculator!
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="bg-gradient-to-r from-primary-600 to-success-600 hover:from-primary-700 hover:to-success-700 text-white font-bold px-8 py-3 rounded-2xl shadow-lg mb-6 transition-all duration-300 text-lg flex items-center gap-2"
          >
            Apply Now <ArrowRight className="h-5 w-5" />
          </motion.button>
          <div className="flex flex-wrap gap-4 mb-4">
            <div className="flex items-center gap-2 bg-green-50 dark:bg-green-900/20 px-4 py-2 rounded-xl text-green-700 dark:text-green-300 text-sm font-medium shadow">
              <DollarSign className="h-4 w-4 text-green-500" />
              From 8.5% Low Interest
            </div>
            <div className="flex items-center gap-2 bg-yellow-50 dark:bg-yellow-900/20 px-4 py-2 rounded-xl text-yellow-700 dark:text-yellow-300 text-sm font-medium shadow">
              <Clock className="h-4 w-4 text-yellow-500" />
              7 Days Disbursal
            </div>
          </div>
        </div>
        {/* Right: Phone/Card Illustration */}
        <div className="flex-1 flex items-center justify-center relative w-full md:w-auto">
          {/* Decorative Graphics - Top Left */}
          <div className="absolute -left-10 top-8 z-20 hidden md:block">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-yellow-200 via-yellow-400 to-orange-300 flex items-center justify-center shadow-lg animate-float-slow">
              <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
                <circle cx="16" cy="16" r="16" fill="#f59e42" />
                <text x="16" y="22" textAnchor="middle" fontSize="18" fill="#fff" fontWeight="bold">₹</text>
              </svg>
            </div>
          </div>
          {/* Decorative Graphics - Bottom Right */}
          <div className="absolute -right-10 bottom-8 z-20 hidden md:block">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-200 via-blue-300 to-success-200 flex items-center justify-center shadow-lg animate-float-slow-rev">
              <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
                <rect x="6" y="6" width="20" height="20" rx="6" fill="#6366f1"/>
                <rect x="10" y="10" width="12" height="2" rx="1" fill="#fff"/>
                <rect x="10" y="14" width="4" height="2" rx="1" fill="#fff"/>
                <rect x="16" y="14" width="6" height="2" rx="1" fill="#fff"/>
              </svg>
            </div>
          </div>
          {/* Decorative Graphics - Top Right */}
          <div className="absolute -right-10 top-8 z-20 hidden md:block">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-200 via-indigo-300 to-purple-200 flex items-center justify-center shadow-lg animate-float-slow">
              <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
                <rect x="4" y="4" width="24" height="24" rx="6" fill="#6366f1"/>
                <rect x="8" y="8" width="16" height="4" rx="2" fill="#fff"/>
                <rect x="8" y="14" width="4" height="4" rx="2" fill="#fff"/>
                <rect x="14" y="14" width="4" height="4" rx="2" fill="#fff"/>
                <rect x="20" y="14" width="4" height="4" rx="2" fill="#fff"/>
                <rect x="8" y="20" width="4" height="4" rx="2" fill="#fff"/>
                <rect x="14" y="20" width="4" height="4" rx="2" fill="#fff"/>
                <rect x="20" y="20" width="4" height="4" rx="2" fill="#fff"/>
              </svg>
            </div>
          </div>
          {/* Decorative Graphics - Bottom Left */}
          <div className="absolute -left-10 bottom-8 z-20 hidden md:block">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-pink-200 via-pink-300 to-orange-200 flex items-center justify-center shadow-lg animate-float-slow-rev">
              <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
                <rect x="6" y="6" width="20" height="20" rx="6" fill="#f59e42"/>
                <rect x="10" y="10" width="12" height="2" rx="1" fill="#fff"/>
                <rect x="10" y="14" width="4" height="2" rx="1" fill="#fff"/>
                <rect x="16" y="14" width="6" height="2" rx="1" fill="#fff"/>
                <rect x="10" y="18" width="4" height="2" rx="1" fill="#fff"/>
                <rect x="16" y="18" width="6" height="2" rx="1" fill="#fff"/>
              </svg>
            </div>
          </div>
          {/* Decorative Graphics - Top Center: Math Signs */}
          <div className="absolute left-1/2 -translate-x-1/2 -top-8 z-20 hidden md:block">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-200 via-success-200 to-blue-200 flex items-center justify-center shadow-lg animate-float-slow">
              <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
                <text x="8" y="16" fontSize="16" fill="#6366f1" fontWeight="bold">+</text>
                <text x="16" y="28" fontSize="16" fill="#22c55e" fontWeight="bold">−</text>
                <text x="20" y="16" fontSize="16" fill="#f59e42" fontWeight="bold">×</text>
                <text x="8" y="28" fontSize="16" fill="#2563eb" fontWeight="bold">÷</text>
              </svg>
            </div>
          </div>
          {/* Decorative Graphics - Bottom Center: Bar Graph */}
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-8 z-20 hidden md:block">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-200 via-blue-200 to-primary-200 flex items-center justify-center shadow-lg animate-float-slow-rev">
              <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
                <rect x="6" y="18" width="4" height="8" rx="2" fill="#22c55e"/>
                <rect x="14" y="12" width="4" height="14" rx="2" fill="#6366f1"/>
                <rect x="22" y="8" width="4" height="18" rx="2" fill="#f59e42"/>
              </svg>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative bg-white dark:bg-gray-900 rounded-[2.5rem] shadow-2xl border border-gray-100 dark:border-gray-800 p-6 w-[340px] h-[620px] flex flex-col items-center"
          >
            {/* Logo and Tag */}
            <div className="flex flex-col items-center mb-4">
              <div className="flex items-center gap-2 text-2xl font-extrabold text-primary-700 tracking-tight">
                <span className="inline-block w-8 h-8 rounded-full bg-gradient-to-br from-primary-600 to-success-500 flex items-center justify-center text-white font-bold">F</span>
                FundRoot
              </div>
              <div className="mt-2 px-4 py-1 rounded-full bg-primary-50 text-primary-700 font-semibold text-sm shadow">Home Loan</div>
            </div>
            {/* Images/Icons Section */}
            <div className="w-full flex flex-col items-center gap-4 mb-4 mt-2">
              <div className="flex items-center justify-center gap-4">
                {/* Calculator Icon */}
                <div className="bg-gradient-to-br from-primary-100 to-success-100 dark:from-primary-900 dark:to-success-900 rounded-2xl p-4 shadow-lg flex items-center justify-center">
                  <svg width="40" height="40" fill="none" viewBox="0 0 24 24"><rect x="4" y="2" width="16" height="20" rx="4" fill="#6366f1"/><rect x="7" y="6" width="10" height="2" rx="1" fill="#fff"/><rect x="7" y="10" width="2" height="2" rx="1" fill="#fff"/><rect x="11" y="10" width="2" height="2" rx="1" fill="#fff"/><rect x="15" y="10" width="2" height="2" rx="1" fill="#fff"/><rect x="7" y="14" width="2" height="2" rx="1" fill="#fff"/><rect x="11" y="14" width="2" height="2" rx="1" fill="#fff"/><rect x="15" y="14" width="2" height="2" rx="1" fill="#fff"/></svg>
                </div>
                {/* Calculator Board Icon */}
                <div className="bg-gradient-to-br from-orange-100 to-yellow-100 dark:from-orange-900 dark:to-yellow-900 rounded-2xl p-4 shadow-lg flex items-center justify-center">
                  <svg width="40" height="40" fill="none" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="3" fill="#f59e42"/><rect x="6" y="8" width="12" height="2" rx="1" fill="#fff"/><rect x="6" y="12" width="4" height="2" rx="1" fill="#fff"/><rect x="12" y="12" width="6" height="2" rx="1" fill="#fff"/></svg>
                </div>
                {/* Money/Paisa Icon */}
                <div className="bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-900 dark:to-blue-900 rounded-2xl p-4 shadow-lg flex items-center justify-center">
                  <svg width="40" height="40" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#22c55e"/><text x="12" y="17" textAnchor="middle" fontSize="14" fill="#fff" fontWeight="bold">₹</text></svg>
                </div>
              </div>
            </div>
            {/* Feature Grid */}
            <div className="w-full grid grid-cols-2 gap-2 mb-4">
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 text-sm">
                <User className="h-4 w-4 text-primary-400" /> Profile
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 text-sm">
                <CreditCard className="h-4 w-4 text-primary-400" /> Card Center
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 text-sm">
                <DollarSign className="h-4 w-4 text-primary-400" /> Payments
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 text-sm">
                <BarChart2 className="h-4 w-4 text-primary-400" /> Finance
              </div>
            </div>
            {/* Card Bottom: Transactions */}
            <div className="w-full flex flex-col gap-2 mt-auto">
              <div className="flex justify-between text-xs text-gray-500">
                <span>Income</span>
                <span className="text-green-600 font-bold">₹50,000</span>
              </div>
              <div className="flex justify-between text-xs text-gray-500">
                <span>Expense</span>
                <span className="text-red-500 font-bold">₹18,700</span>
              </div>
              <div className="flex justify-between text-xs text-gray-500">
                <span>August</span>
                <span className="text-primary-600 font-bold">₹15,100</span>
              </div>
            </div>
            {/* Unique Centerpiece in Phone */}
            <div className="flex flex-col items-center justify-center my-4">
              <div className="relative flex items-center justify-center">
                {/* Circular gradient badge with rupee */}
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-400 via-success-300 to-blue-400 flex items-center justify-center shadow-lg border-4 border-white dark:border-gray-900">
                  <span className="text-4xl font-extrabold text-white drop-shadow">₹</span>
                </div>
                {/* Animated sparkles */}
                <svg className="absolute -top-2 -right-2 animate-pulse" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="2" fill="#f59e42" />
                  <circle cx="18" cy="6" r="1.2" fill="#22c55e" />
                  <circle cx="6" cy="18" r="1" fill="#6366f1" />
                </svg>
              </div>
              <span className="mt-2 text-xs font-semibold text-primary-700 dark:text-primary-300 bg-primary-50 dark:bg-primary-900/30 px-3 py-1 rounded-full shadow">Instant EMI Calculation</span>
              {/* Progress Bar */}
              <div className="w-36 mt-6 mb-2">
                <div className="text-xs text-gray-500 mb-1 text-center">Loan Approval Progress</div>
                <div className="relative w-full h-4 rounded-full bg-gradient-to-r from-primary-100 via-success-100 to-blue-100 overflow-hidden shadow-inner">
                  <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-r from-primary-500 via-success-400 to-blue-400 animate-progress-stripes opacity-80" style={{backgroundSize:'40px 40px', backgroundImage:'repeating-linear-gradient(135deg,rgba(255,255,255,0.2) 0 10px,transparent 10px 20px)'}}></div>
                  <div className="absolute left-0 top-0 h-full w-11/12 bg-gradient-to-r from-primary-500 via-success-400 to-blue-400 rounded-full transition-all duration-700"></div>
                </div>
              </div>
              {/* Success Tick */}
              <div className="flex flex-col items-center mt-2">
                <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center shadow">
                  <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#22c55e"/><path d="M6 10.5l2.5 2.5L14 8.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <span className="text-xs text-green-700 font-semibold mt-1">Approved Instantly</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="relative z-10 w-full max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12 px-4">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className={`relative group bg-gradient-to-br ${stat.bgColor} backdrop-blur-sm border ${stat.borderColor} rounded-2xl p-6 text-center hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer`}
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 + (index * 0.1), duration: 0.5 }}
          >
            <div className="flex justify-center mb-2">
              <div className="w-10 h-10 rounded-full bg-white/80 dark:bg-gray-800/80 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
            </div>
            <div className={`text-2xl md:text-3xl font-extrabold ${stat.textColor} mb-1 group-hover:scale-110 transition-transform duration-300`}>{stat.value}</div>
            <div className="text-xs md:text-sm font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wide">{stat.label}</div>
            <div className={`w-0 group-hover:w-full h-0.5 bg-gradient-to-r ${stat.bgColor.replace('/10', '/50')} transition-all duration-300 mx-auto mt-2`}></div>
          </motion.div>
        ))}
      </div>

      {/* Why Choose Our Home Loan? */}
      <section className="relative w-full py-16 bg-gradient-to-b from-primary-50 to-white dark:from-primary-900/10 dark:to-gray-900/10 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-10 bg-gradient-to-r from-primary-600 to-success-600 bg-clip-text text-transparent tracking-tight">Why Choose Our Home Loan?</h2>
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
        </div>
      </section>

      {/* EMI Calculator Section */}
      <section className="w-full py-14 bg-gradient-to-b from-white via-green-50 to-blue-50 dark:from-gray-900 dark:via-green-900/10 dark:to-blue-900/10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="mb-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-success-500 text-white text-2xl shadow-lg"><PieChart /></span>
              <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-primary-600 to-success-600 bg-clip-text text-transparent tracking-tight">Home Loan EMI Calculator</h2>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">Calculate your monthly EMI, total interest, and total payment for your home loan. Adjust the sliders or enter values to see instant results!</p>
          </div>
          <div className="flex gap-2 mt-4 md:mt-0 justify-center mb-8">
            <button onClick={() => setActiveTab('emi')} className={`px-5 py-2 rounded-xl font-semibold ${activeTab === 'emi' ? 'bg-gradient-to-r from-primary-600 to-success-600 text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300'} shadow hover:from-primary-700 hover:to-success-700 transition-all duration-200 focus:outline-none`}>EMI Calculation</button>
            <button onClick={() => setActiveTab('repayment')} className={`px-5 py-2 rounded-xl font-semibold ${activeTab === 'repayment' ? 'bg-gradient-to-r from-primary-600 to-success-600 text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300'} shadow hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-200 focus:outline-none`}>Repayment Details</button>
          </div>
          {activeTab === 'emi' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="w-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-white/50 dark:border-gray-700/50 rounded-3xl shadow-xl p-6 md:p-10 mb-8"
            >
              <form
                className="grid gap-6 md:gap-8"
                onSubmit={e => {
                  e.preventDefault();
                  setShowResult(true);
                }}
              >
                {/* Loan Amount */}
                <div>
                  <label className="block text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Loan Amount (₹)
                  </label>
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      min={1000000}
                      max={50000000}
                      step={100000}
                      value={amount}
                      onChange={e => setAmount(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
                    />
                    <input
                      type="number"
                      min={1000000}
                      max={50000000}
                      step={100000}
                      value={amount}
                      onChange={e => setAmount(Number(e.target.value))}
                      className="w-32 px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-white shadow-sm focus:ring-2 focus:ring-primary-400 focus:outline-none"
                    />
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                    <span>₹10L</span>
                    <span>₹5Cr</span>
                  </div>
                </div>

                {/* Interest Rate */}
                <div>
                  <label className="block text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Interest Rate (% p.a.)
                  </label>
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      min={8.5}
                      max={15}
                      step={0.1}
                      value={rate}
                      onChange={e => setRate(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
                    />
                    <input
                      type="number"
                      min={8.5}
                      max={15}
                      step={0.1}
                      value={rate}
                      onChange={e => setRate(Number(e.target.value))}
                      className="w-24 px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-white shadow-sm focus:ring-2 focus:ring-primary-400 focus:outline-none"
                    />
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                    <span>8.5%</span>
                    <span>15%</span>
                  </div>
                </div>

                {/* Tenure */}
                <div>
                  <label className="block text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Loan Tenure (Months)
                  </label>
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      min={60}
                      max={360}
                      step={12}
                      value={tenure}
                      onChange={e => setTenure(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
                    />
                    <input
                      type="number"
                      min={60}
                      max={360}
                      step={12}
                      value={tenure}
                      onChange={e => setTenure(Number(e.target.value))}
                      className="w-24 px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-white shadow-sm focus:ring-2 focus:ring-primary-400 focus:outline-none"
                    />
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                    <span>5 yr</span>
                    <span>30 yr</span>
                  </div>
                </div>

                {/* Calculate Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 mt-2 rounded-2xl bg-gradient-to-r from-primary-600 to-success-600 text-white font-bold text-lg shadow-lg transition-all duration-300 hover:from-primary-700 hover:to-success-700 focus:outline-none focus:ring-2 focus:ring-primary-400"
                >
                  Calculate EMI
                </motion.button>
              </form>
              {/* Result Section */}
              {showResult && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  className="w-full grid md:grid-cols-3 gap-6 mb-8 mt-8"
                >
                  {/* EMI Card */}
                  <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl p-6 text-white shadow-xl flex flex-col items-center justify-center">
                    <div className="text-lg font-semibold mb-2 opacity-90">Monthly EMI</div>
                    <div className="text-3xl md:text-4xl font-bold mb-2">{formatCurrency(emi)}</div>
                  </div>
                  {/* Interest Card */}
                  <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-white/50 dark:border-gray-700/50 rounded-2xl p-6 shadow-lg flex flex-col items-center justify-center">
                    <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Total Interest</div>
                    <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">{formatCurrency(totalInterest)}</div>
                  </div>
                  {/* Total Payment Card */}
                  <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-white/50 dark:border-gray-700/50 rounded-2xl p-6 shadow-lg flex flex-col items-center justify-center">
                    <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Total Payment</div>
                    <div className="text-2xl font-bold text-success-600 dark:text-success-400">{formatCurrency(totalPayment)}</div>
                  </div>
                </motion.div>
              )}
              {/* Pie Chart */}
              {showResult && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="w-full max-w-md mb-8 mx-auto"
                >
                  <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-white/50 dark:border-gray-700/50 rounded-2xl shadow-lg p-6 flex flex-col items-center">
                    <div className="flex items-center gap-2 mb-4">
                      <PieChart className="h-5 w-5 text-primary-500" />
                      <span className="text-lg font-semibold text-gray-800 dark:text-white">Payment Breakdown</span>
                    </div>
                    <div className="relative w-40 h-40 flex items-center justify-center">
                      <svg width="160" height="160" viewBox="0 0 32 32">
                        <circle r="16" cx="16" cy="16" fill="#f3f4f6" />
                        <circle
                          r="16"
                          cx="16"
                          cy="16"
                          fill="transparent"
                          stroke="#22c55e"
                          strokeWidth="4"
                          strokeDasharray={`${principalPercent} ${100 - principalPercent}`}
                          strokeDashoffset="25"
                        />
                        <circle
                          r="16"
                          cx="16"
                          cy="16"
                          fill="transparent"
                          stroke="#f59e42"
                          strokeWidth="4"
                          strokeDasharray={`${interestPercent} ${100 - interestPercent}`}
                          strokeDashoffset={25 + principalPercent}
                        />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-xl font-bold text-primary-700 dark:text-primary-300">{principalPercent}%</span>
                        <span className="text-xs text-gray-500">Principal</span>
                        <span className="text-xl font-bold text-orange-500 mt-2">{interestPercent}%</span>
                        <span className="text-xs text-gray-500">Interest</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              {/* Formula Explanation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="w-full max-w-2xl mx-auto"
              >
                <details className="bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800 rounded-2xl shadow p-5 cursor-pointer group">
                  <summary className="font-semibold text-primary-700 dark:text-primary-300 text-lg flex items-center gap-2 cursor-pointer group-open:mb-3">
                    <span>How is EMI calculated?</span>
                    <span className="ml-2 text-base text-primary-400">(Show Formula)</span>
                  </summary>
                  <div className="mt-2 text-gray-700 dark:text-gray-200 text-base">
                    <div className="mb-2">EMI (Equated Monthly Installment) is calculated using the formula:</div>
                    <div className="bg-white dark:bg-gray-900 rounded-xl p-3 mb-2 text-center shadow border border-gray-100 dark:border-gray-800">
                      <span className="font-mono text-primary-700 dark:text-primary-300">EMI = [P × r × (1 + r)<sup>n</sup>] / [(1 + r)<sup>n</sup> – 1]</span>
                    </div>
                    <ul className="list-disc pl-6">
                      <li><b>P</b> = Principal loan amount</li>
                      <li><b>r</b> = Monthly interest rate (annual rate / 12 / 100)</li>
                      <li><b>n</b> = Loan tenure in months</li>
                    </ul>
                  </div>
                </details>
              </motion.div>
            </motion.div>
          )}
          {activeTab === 'repayment' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="w-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-white/50 dark:border-gray-700/50 rounded-3xl shadow-xl p-6 md:p-10 mb-8"
            >
              <div className="text-center text-lg text-primary-700 dark:text-primary-300 font-semibold mb-4">Repayment Details (Coming Soon)</div>
              <div className="text-gray-500 dark:text-gray-400 text-center">You'll soon be able to see a detailed repayment schedule here.</div>
            </motion.div>
          )}
        </div>
      </section>

      {/* What is Home Loan Section */}
      <section className="relative w-full py-16 bg-gradient-to-b from-primary-50 via-white to-green-50 dark:from-primary-900 dark:via-white/10 dark:to-green-900/10 overflow-hidden">
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0">
          <div className="w-[700px] h-[300px] bg-gradient-to-br from-primary-50 via-white to-green-50 rounded-full blur-3xl opacity-50"></div>
        </div>
        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-primary-600 to-success-600 bg-clip-text text-transparent">What is Home Loan?</h2>
          <div className="text-lg md:text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">Apna ghar banana hai? Home loan se sapne puriye!</div>
          <div className="text-gray-700 dark:text-gray-300 text-lg mb-2">Home loan se aap apne sapno ka ghar easily khareed sakte hain – property ko collateral rakhte hue, hassle-free process ke saath.</div>
          <div className="text-gray-700 dark:text-gray-300 text-lg mb-2">New home, plot, renovation, ya extension – sab ke liye home loan available hai.</div>
          <div className="text-gray-700 dark:text-gray-300 text-lg mb-6">Apply karein, ghar khareedein, FundRoot ke saath!</div>

          <div className="mt-8 mb-2 text-2xl font-bold">
            <span className="text-primary-600">Interest Rates</span> <span className="text-gray-900 dark:text-white">in India</span>
          </div>
          <div className="text-gray-700 dark:text-gray-300 text-lg mb-8">Home loans available at attractive interest rates starting from <span className="font-semibold text-primary-700">8.5% p.a.</span> (final rate depends on your eligibility and property).</div>
        </div>
      </section>
    </section>
  );
};

export default HomeLoanEMICalculator;
