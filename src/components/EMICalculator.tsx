import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Download, PieChart } from 'lucide-react';

const EMICalculator: React.FC = () => {
  const [amount, setAmount] = useState(500000);
  const [tenure, setTenure] = useState(24);
  const [interestRate, setInterestRate] = useState(12);
  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  // Calculate EMI
  useEffect(() => {
    const calculateEMI = () => {
      const monthlyRate = interestRate / 12 / 100;
      const emiAmount = (amount * monthlyRate * Math.pow(1 + monthlyRate, tenure)) / 
                       (Math.pow(1 + monthlyRate, tenure) - 1);
      
      const totalAmountPayable = emiAmount * tenure;
      const totalInterestPayable = totalAmountPayable - amount;

      setEmi(Math.round(emiAmount));
      setTotalAmount(Math.round(totalAmountPayable));
      setTotalInterest(Math.round(totalInterestPayable));
    };

    calculateEMI();
  }, [amount, tenure, interestRate]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(value);
  };

  const principalPercentage = ((amount / totalAmount) * 100).toFixed(1);
  const interestPercentage = ((totalInterest / totalAmount) * 100).toFixed(1);

  return (
    <section id="calculator" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
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
            <span className="bg-gradient-to-r from-primary-600 to-success-600 bg-clip-text text-transparent">
              EMI Calculator
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4 sm:px-0">
            Plan your loan with our interactive EMI calculator. Get instant calculations 
            and make informed financial decisions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
          {/* Calculator Controls */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-white/50 dark:border-gray-700/50 rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 shadow-xl">
              <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
                <div className="bg-gradient-to-r from-primary-500 to-success-500 p-2 sm:p-3 rounded-lg sm:rounded-xl">
                  <Calculator className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
                  Calculate Your EMI
                </h3>
              </div>

              <div className="space-y-6 sm:space-y-8">
                {/* Loan Amount */}
                <div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 sm:mb-4 gap-2">
                    <label className="text-base sm:text-lg font-semibold text-gray-700 dark:text-gray-300">
                      Loan Amount
                    </label>
                    <span className="text-lg sm:text-xl font-bold text-primary-600 dark:text-primary-400">
                      {formatCurrency(amount)}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="50000"
                    max="10000000"
                    step="50000"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer slider-thumb"
                  />
                  <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mt-2">
                    <span>₹50K</span>
                    <span>₹1Cr</span>
                  </div>
                </div>

                {/* Tenure */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <label className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                      Loan Tenure
                    </label>
                    <span className="text-xl font-bold text-success-600 dark:text-success-400">
                      {tenure} months
                    </span>
                  </div>
                  <input
                    type="range"
                    min="6"
                    max="360"
                    step="6"
                    value={tenure}
                    onChange={(e) => setTenure(Number(e.target.value))}
                    className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer slider-thumb"
                  />
                  <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mt-2">
                    <span>6 months</span>
                    <span>30 years</span>
                  </div>
                </div>

                {/* Interest Rate */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <label className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                      Interest Rate
                    </label>
                    <span className="text-xl font-bold text-orange-600 dark:text-orange-400">
                      {interestRate}% p.a.
                    </span>
                  </div>
                  <input
                    type="range"
                    min="6"
                    max="24"
                    step="0.5"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer slider-thumb"
                  />
                  <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mt-2">
                    <span>6%</span>
                    <span>24%</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* EMI Result Card */}
            <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 text-white shadow-xl">
              <div className="text-center">
                <h3 className="text-base sm:text-lg font-semibold mb-2 opacity-90">Monthly EMI</h3>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                  {formatCurrency(emi)}
                </div>
                <motion.button
                  className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base hover:bg-white/30 transition-all duration-300 flex items-center gap-2 mx-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="hidden sm:inline">Download Report</span>
                  <span className="sm:hidden">Download</span>
                </motion.button>
              </div>
            </div>

            {/* Breakdown Cards */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-white/50 dark:border-gray-700/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg">
                <div className="text-center">
                  <div className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                    Total Interest
                  </div>
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-orange-600 dark:text-orange-400">
                    {formatCurrency(totalInterest)}
                  </div>
                </div>
              </div>
              
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-white/50 dark:border-gray-700/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg">
                <div className="text-center">
                  <div className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                    Total Amount
                  </div>
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-success-600 dark:text-success-400">
                    {formatCurrency(totalAmount)}
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Chart */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-white/50 dark:border-gray-700/50 rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-2 mb-6">
                <PieChart className="h-5 w-5 text-primary-500" />
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                  Payment Breakdown
                </h4>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      Principal ({principalPercentage}%)
                    </span>
                    <span className="text-sm font-bold text-primary-600 dark:text-primary-400">
                      {formatCurrency(amount)}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-primary-500 to-primary-600 h-3 rounded-full transition-all duration-1000"
                      style={{ width: `${principalPercentage}%` }}
                    />
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      Interest ({interestPercentage}%)
                    </span>
                    <span className="text-sm font-bold text-orange-600 dark:text-orange-400">
                      {formatCurrency(totalInterest)}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-orange-500 to-orange-600 h-3 rounded-full transition-all duration-1000"
                      style={{ width: `${interestPercentage}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EMICalculator;