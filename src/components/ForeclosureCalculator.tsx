import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PieChart, CreditCard, User, DollarSign, BarChart2, TrendingUp, Shield, CheckCircle, Star, Clock, ArrowRight, Calculator, TrendingDown, Zap, Info, AlertCircle } from 'lucide-react';

const defaultLoanAmount = 2000000;
const defaultRate = 12;
const defaultPaidMonths = 12;
const defaultTotalMonths = 240;
const defaultPrepaymentAmount = 500000;

const formatCurrency = (value: number) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(value);

const calculateOutstandingPrincipal = (loanAmount: number, rate: number, paidMonths: number, totalMonths: number) => {
  const monthlyRate = rate / 12 / 100;
  const emi = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / (Math.pow(1 + monthlyRate, totalMonths) - 1);
  let outstanding = loanAmount;
  for (let i = 0; i < paidMonths; i++) {
    const interestComponent = outstanding * monthlyRate;
    const principalComponent = emi - interestComponent;
    outstanding -= principalComponent;
  }
  return Math.max(0, Math.round(outstanding));
};

const calculateForeclosureSavings = (loanAmount: number, rate: number, paidMonths: number, totalMonths: number, prepaymentAmount: number) => {
  const monthlyRate = rate / 12 / 100;
  const emi = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / (Math.pow(1 + monthlyRate, totalMonths) - 1);
  
  // Outstanding principal without prepayment
  const outstandingBeforePrepayment = calculateOutstandingPrincipal(loanAmount, rate, paidMonths, totalMonths);
  const remainingMonths = totalMonths - paidMonths;
  
  // Total interest if continued without prepayment
  const totalInterestWithoutPrepayment = (emi * remainingMonths) - outstandingBeforePrepayment;
  
  // Outstanding principal with prepayment
  const outstandingAfterPrepayment = outstandingBeforePrepayment - prepaymentAmount;
  
  // New EMI after prepayment
  const newEmi = (outstandingAfterPrepayment * monthlyRate * Math.pow(1 + monthlyRate, remainingMonths)) / (Math.pow(1 + monthlyRate, remainingMonths) - 1);
  
  // Total interest with prepayment
  const totalInterestWithPrepayment = (newEmi * remainingMonths) - outstandingAfterPrepayment;
  
  // Savings
  const interestSavings = totalInterestWithoutPrepayment - totalInterestWithPrepayment;
  const totalSavings = interestSavings + prepaymentAmount;
  const newMonths = remainingMonths;
  
  return {
    outstandingBeforePrepayment: Math.round(outstandingBeforePrepayment),
    outstandingAfterPrepayment: Math.round(outstandingAfterPrepayment),
    currentEmi: Math.round(emi),
    newEmi: Math.round(newEmi),
    interestSavings: Math.round(interestSavings),
    totalSavings: Math.round(totalSavings),
    newMonths: Math.max(1, newMonths),
    emiReduction: Math.round(emi - newEmi),
  };
};

const stats = [
  { icon: <DollarSign className="text-green-600 text-2xl" />, value: 'Smart Saving', label: 'Strategy', bgColor: 'from-green-500/10 to-emerald-500/10', borderColor: 'border-green-200 dark:border-green-800', textColor: 'text-green-700 dark:text-green-400' },
  { icon: <Clock className="text-blue-600 text-2xl" />, value: 'Quick Results', label: 'Calculation', bgColor: 'from-blue-500/10 to-indigo-500/10', borderColor: 'border-blue-200 dark:border-blue-800', textColor: 'text-blue-700 dark:text-blue-400' },
  { icon: <Star className="text-yellow-600 text-2xl" />, value: '4.9★', label: 'Google Rating', bgColor: 'from-yellow-500/10 to-orange-500/10', borderColor: 'border-yellow-200 dark:border-yellow-800', textColor: 'text-yellow-700 dark:text-yellow-400' },
  { icon: <TrendingUp className="text-purple-600 text-2xl" />, value: 'Max Savings', label: 'Goal', bgColor: 'from-purple-500/10 to-pink-500/10', borderColor: 'border-purple-200 dark:border-purple-800', textColor: 'text-purple-700 dark:text-purple-400' },
];

const benefits = [
  'Reduce total interest burden significantly',
  'Get loan-free sooner with smarter planning',
  'Improve credit score by clearing debt faster',
  'Available for all loan types',
  'No prepayment charges on most loans',
  'Flexible prepayment options throughout tenure',
];

const tips = [
  'Prepay during the early years to save maximum interest',
  'Consider prepaying when you have surplus funds',
  'Calculate ROI before prepaying - check if investment returns are higher',
  'Some banks offer zero foreclosure charges for floating rate loans',
  'Partial prepayment reduces tenure, full foreclosure closes the loan',
  'Budget your prepayment to maintain emergency fund',
];

const ForeclosureCalculator: React.FC = () => {
  const [loanAmount, setLoanAmount] = useState(defaultLoanAmount);
  const [rate, setRate] = useState(defaultRate);
  const [paidMonths, setPaidMonths] = useState(defaultPaidMonths);
  const [totalMonths, setTotalMonths] = useState(defaultTotalMonths);
  const [prepaymentAmount, setPrepaymentAmount] = useState(defaultPrepaymentAmount);
  const [showResult, setShowResult] = useState(false);

  const outstanding = calculateOutstandingPrincipal(loanAmount, rate, paidMonths, totalMonths);
  const maxPrepayment = Math.min(prepaymentAmount, outstanding);
  const savings = calculateForeclosureSavings(loanAmount, rate, paidMonths, totalMonths, maxPrepayment);

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-0 flex flex-col items-center justify-center relative overflow-x-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 z-0" />
      {[{ Icon: TrendingUp, delay: 0, position: 'top-20 left-10' }, { Icon: TrendingDown, delay: 0.5, position: 'top-32 right-16' }, { Icon: CheckCircle, delay: 1, position: 'bottom-40 left-20' }].map(({ Icon, delay, position }, index) => (
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
        <div className="flex-1 flex flex-col items-start justify-center md:pr-12">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-4 bg-gradient-to-r from-primary-600 to-success-600 bg-clip-text text-transparent"
          >
            Loan Foreclosure Calculator
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-lg"
          >
            Calculate your potential savings by prepaying your loan. See how much interest you can save and plan your foreclosure wisely!
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="bg-gradient-to-r from-primary-600 to-success-600 hover:from-primary-700 hover:to-success-700 text-white font-bold px-8 py-3 rounded-2xl shadow-lg mb-6 transition-all duration-300 text-lg flex items-center gap-2"
          >
            Calculate Savings <ArrowRight className="h-5 w-5" />
          </motion.button>
          <div className="flex flex-wrap gap-4 mb-4">
            <div className="flex items-center gap-2 bg-green-50 dark:bg-green-900/20 px-4 py-2 rounded-xl text-green-700 dark:text-green-300 text-sm font-medium shadow">
              <DollarSign className="h-4 w-4 text-green-500" />
              Smart Savings
            </div>
            <div className="flex items-center gap-2 bg-yellow-50 dark:bg-yellow-900/20 px-4 py-2 rounded-xl text-yellow-700 dark:text-yellow-300 text-sm font-medium shadow">
              <Zap className="h-4 w-4 text-yellow-500" />
              Zero Charges
            </div>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center relative w-full md:w-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative bg-white dark:bg-gray-900 rounded-[2.5rem] shadow-2xl border border-gray-100 dark:border-gray-800 p-6 w-[340px] h-[620px] flex flex-col items-center"
          >
            <div className="flex flex-col items-center mb-4">
              <div className="flex items-center gap-2 text-2xl font-extrabold text-primary-700 tracking-tight">
                <span className="inline-block w-8 h-8 rounded-full bg-gradient-to-br from-primary-600 to-success-500 flex items-center justify-center text-white font-bold">F</span>
                FundRoot
              </div>
              <div className="mt-2 px-4 py-1 rounded-full bg-primary-50 text-primary-700 font-semibold text-sm shadow">Foreclosure Calculator</div>
            </div>
            <div className="w-full flex flex-col items-center gap-4 mb-4 mt-2">
              <div className="flex items-center justify-center gap-4">
                <div className="bg-gradient-to-br from-primary-100 to-success-100 dark:from-primary-900 dark:to-success-900 rounded-2xl p-4 shadow-lg flex items-center justify-center">
                  <Calculator className="h-8 w-8 text-primary-600" />
                </div>
                <div className="bg-gradient-to-br from-orange-100 to-yellow-100 dark:from-orange-900 dark:to-yellow-900 rounded-2xl p-4 shadow-lg flex items-center justify-center">
                  <TrendingDown className="h-8 w-8 text-orange-600" />
                </div>
                <div className="bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-900 dark:to-blue-900 rounded-2xl p-4 shadow-lg flex items-center justify-center">
                  <DollarSign className="h-8 w-8 text-green-600" />
                </div>
              </div>
            </div>
            <div className="w-full grid grid-cols-2 gap-2 mb-4">
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 text-sm">
                <Calculator className="h-4 w-4 text-primary-400" /> Calculator
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 text-sm">
                <TrendingDown className="h-4 w-4 text-primary-400" /> Savings
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 text-sm">
                <DollarSign className="h-4 w-4 text-primary-400" /> Interest
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 text-sm">
                <BarChart2 className="h-4 w-4 text-primary-400" /> Report
              </div>
            </div>
            <div className="w-full flex flex-col gap-2 mt-auto mb-4">
              <div className="flex justify-between text-xs text-gray-500">
                <span>Loan Amount</span>
                <span className="text-primary-600 font-bold">₹20L</span>
              </div>
              <div className="flex justify-between text-xs text-gray-500">
                <span>Saved Interest</span>
                <span className="text-green-600 font-bold">₹2.5L</span>
              </div>
              <div className="flex justify-between text-xs text-gray-500">
                <span>Reduced EMI</span>
                <span className="text-green-600 font-bold">₹1,500</span>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center my-4">
              <div className="relative flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-400 via-success-300 to-blue-400 flex items-center justify-center shadow-lg border-4 border-white dark:border-gray-900">
                  <TrendingDown className="h-10 w-10 text-white" />
                </div>
                <svg className="absolute -top-2 -right-2 animate-pulse" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="2" fill="#f59e42" />
                  <circle cx="18" cy="6" r="1.2" fill="#22c55e" />
                  <circle cx="6" cy="18" r="1" fill="#6366f1" />
                </svg>
              </div>
              <span className="mt-2 text-xs font-semibold text-primary-700 dark:text-primary-300 bg-primary-50 dark:bg-primary-900/30 px-3 py-1 rounded-full shadow">Smart Savings Calculator</span>
              <div className="w-36 mt-6 mb-2">
                <div className="text-xs text-gray-500 mb-1 text-center">Savings Progress</div>
                <div className="relative w-full h-4 rounded-full bg-gradient-to-r from-primary-100 via-success-100 to-blue-100 overflow-hidden shadow-inner">
                  <div className="absolute left-0 top-0 h-full w-11/12 bg-gradient-to-r from-primary-500 via-success-400 to-blue-400 rounded-full transition-all duration-700"></div>
                </div>
              </div>
              <div className="flex flex-col items-center mt-2">
                <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center shadow">
                  <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#22c55e"/><path d="M6 10.5l2.5 2.5L14 8.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <span className="text-xs text-green-700 font-semibold mt-1">Maximum Savings</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="relative z-10 w-full max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12 px-4">
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

      {/* Benefits Section */}
      <section className="relative w-full py-16 bg-gradient-to-b from-primary-50 to-white dark:from-primary-900/10 dark:to-gray-900/10 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-primary-600 to-success-600 bg-clip-text text-transparent tracking-tight">Benefits of Loan Prepayment</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3 bg-white dark:bg-gray-800 rounded-xl p-5 shadow-lg border border-gray-100 dark:border-gray-700 hover:border-primary-500 transition-all duration-300"
              >
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <p className="text-gray-700 dark:text-gray-300 font-medium">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="w-full py-14 bg-gradient-to-b from-white via-green-50 to-blue-50 dark:from-gray-900 dark:via-green-900/10 dark:to-blue-900/10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="mb-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-success-500 text-white text-2xl shadow-lg"><Calculator /></span>
              <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-primary-600 to-success-600 bg-clip-text text-transparent tracking-tight">Foreclosure Calculator</h2>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">Enter your loan details and prepayment amount to see potential savings!</p>
          </div>
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
                  Original Loan Amount (₹)
                </label>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min={100000}
                    max={10000000}
                    step={50000}
                    value={loanAmount}
                    onChange={e => setLoanAmount(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
                  />
                  <input
                    type="number"
                    min={100000}
                    max={10000000}
                    step={50000}
                    value={loanAmount}
                    onChange={e => setLoanAmount(Number(e.target.value))}
                    className="w-32 px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-white shadow-sm focus:ring-2 focus:ring-primary-400 focus:outline-none"
                  />
                </div>
                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                  <span>₹1L</span>
                  <span>₹1Cr</span>
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
                    min={6}
                    max={30}
                    step={0.5}
                    value={rate}
                    onChange={e => setRate(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
                  />
                  <input
                    type="number"
                    min={6}
                    max={30}
                    step={0.5}
                    value={rate}
                    onChange={e => setRate(Number(e.target.value))}
                    className="w-24 px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-white shadow-sm focus:ring-2 focus:ring-primary-400 focus:outline-none"
                  />
                </div>
                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                  <span>6%</span>
                  <span>30%</span>
                </div>
              </div>

              {/* Loan Tenure */}
              <div>
                <label className="block text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Total Loan Tenure (Months)
                </label>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min={12}
                    max={360}
                    step={12}
                    value={totalMonths}
                    onChange={e => setTotalMonths(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
                  />
                  <input
                    type="number"
                    min={12}
                    max={360}
                    step={12}
                    value={totalMonths}
                    onChange={e => setTotalMonths(Number(e.target.value))}
                    className="w-24 px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-white shadow-sm focus:ring-2 focus:ring-primary-400 focus:outline-none"
                  />
                </div>
                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                  <span>1 yr</span>
                  <span>30 yr</span>
                </div>
              </div>

              {/* Paid Months */}
              <div>
                <label className="block text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Months Already Paid
                </label>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min={0}
                    max={totalMonths - 1}
                    step={1}
                    value={paidMonths}
                    onChange={e => setPaidMonths(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
                  />
                  <input
                    type="number"
                    min={0}
                    max={totalMonths - 1}
                    step={1}
                    value={paidMonths}
                    onChange={e => setPaidMonths(Number(e.target.value))}
                    className="w-24 px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-white shadow-sm focus:ring-2 focus:ring-primary-400 focus:outline-none"
                  />
                </div>
                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                  <span>0 months</span>
                  <span>{totalMonths - 1} months</span>
                </div>
              </div>

              {/* Prepayment Amount */}
              <div>
                <label className="block text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Prepayment Amount (₹)
                </label>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min={0}
                    max={outstanding}
                    step={10000}
                    value={Math.min(prepaymentAmount, outstanding)}
                    onChange={e => setPrepaymentAmount(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
                  />
                  <input
                    type="number"
                    min={0}
                    max={outstanding}
                    step={10000}
                    value={prepaymentAmount}
                    onChange={e => setPrepaymentAmount(Number(e.target.value))}
                    className="w-32 px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-white shadow-sm focus:ring-2 focus:ring-primary-400 focus:outline-none"
                  />
                </div>
                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                  <span>₹0</span>
                  <span>{formatCurrency(outstanding)}</span>
                </div>
                <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Outstanding Principal: <span className="font-bold text-primary-600">{formatCurrency(outstanding)}</span>
                </div>
              </div>

              {/* Calculate Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 mt-2 rounded-2xl bg-gradient-to-r from-primary-600 to-success-600 text-white font-bold text-lg shadow-lg transition-all duration-300 hover:from-primary-700 hover:to-success-700 focus:outline-none focus:ring-2 focus:ring-primary-400"
              >
                Calculate Savings
              </motion.button>
            </form>

            {/* Result Section */}
            {showResult && maxPrepayment > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="mt-8"
              >
                <h3 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-primary-600 to-success-600 bg-clip-text text-transparent">Your Potential Savings</h3>
                
                {/* Key Savings Cards */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-6 text-white shadow-xl">
                    <div className="text-sm font-semibold mb-2 opacity-90">Total Interest Saved</div>
                    <div className="text-3xl md:text-4xl font-bold mb-2">{formatCurrency(savings.interestSavings)}</div>
                  </div>
                  <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl p-6 text-white shadow-xl">
                    <div className="text-sm font-semibold mb-2 opacity-90">EMI Reduction</div>
                    <div className="text-3xl md:text-4xl font-bold mb-2">{formatCurrency(savings.emiReduction)}</div>
                  </div>
                </div>

                {/* Additional Details */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-white/50 dark:border-gray-700/50 rounded-2xl p-4 shadow-lg">
                    <div className="text-xs font-medium text-gray-600 dark:text-gray-400 mb-2">Outstanding Before</div>
                    <div className="text-lg font-bold text-orange-600 dark:text-orange-400">{formatCurrency(savings.outstandingBeforePrepayment)}</div>
                  </div>
                  <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-white/50 dark:border-gray-700/50 rounded-2xl p-4 shadow-lg">
                    <div className="text-xs font-medium text-gray-600 dark:text-gray-400 mb-2">Outstanding After</div>
                    <div className="text-lg font-bold text-blue-600 dark:text-blue-400">{formatCurrency(savings.outstandingAfterPrepayment)}</div>
                  </div>
                  <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-white/50 dark:border-gray-700/50 rounded-2xl p-4 shadow-lg">
                    <div className="text-xs font-medium text-gray-600 dark:text-gray-400 mb-2">Current EMI</div>
                    <div className="text-lg font-bold text-purple-600 dark:text-purple-400">{formatCurrency(savings.currentEmi)}</div>
                  </div>
                  <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-white/50 dark:border-gray-700/50 rounded-2xl p-4 shadow-lg">
                    <div className="text-xs font-medium text-gray-600 dark:text-gray-400 mb-2">New EMI</div>
                    <div className="text-lg font-bold text-success-600 dark:text-success-400">{formatCurrency(savings.newEmi)}</div>
                  </div>
                </div>

                {/* Info Alert */}
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-2xl p-4 flex items-start gap-3">
                  <Info className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div className="text-sm text-blue-900 dark:text-blue-200">
                    <p className="font-semibold mb-1">Important Note:</p>
                    <p>This is an estimated calculation. Actual savings may vary based on your lender's policies and prepayment charges. Always confirm with your bank before making a prepayment.</p>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="relative w-full py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900/10 dark:to-gray-800/10 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-primary-600 to-success-600 bg-clip-text text-transparent tracking-tight">Smart Prepayment Tips</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tips.map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-primary-100 to-success-100 dark:from-primary-900/30 dark:to-success-900/30 rounded-xl p-3 group-hover:scale-110 transition-transform duration-300">
                    <AlertCircle className="h-5 w-5 text-primary-600" />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 font-medium">{tip}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default ForeclosureCalculator;
