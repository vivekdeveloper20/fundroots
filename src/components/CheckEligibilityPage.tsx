import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calculator, 
  CheckCircle, 
  XCircle, 
  AlertCircle, 
  TrendingUp, 
  DollarSign, 
  Calendar, 
  User, 
  Building2, 
  Car, 
  Home, 
  Briefcase, 
  CreditCard, 
  Star, 
  Award, 
  Shield, 
  Zap, 
  Target, 
  Heart, 
  Globe,
  Phone,
  Mail,
  MapPin,
  Clock,
  FileText,
  Download,
  Send,
  ArrowRight,
  Info,
  Percent,
  PieChart,
  BarChart3,
  Activity
} from 'lucide-react';

const loanTypes = [
  {
    id: 'personal',
    name: 'Personal Loan',
    icon: User,
    minAmount: 50000,
    maxAmount: 5000000,
    minTenure: 12,
    maxTenure: 60,
    minIncome: 15000,
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    borderColor: 'border-blue-200 dark:border-blue-800'
  },
  {
    id: 'home',
    name: 'Home Loan',
    icon: Home,
    minAmount: 500000,
    maxAmount: 10000000,
    minTenure: 60,
    maxTenure: 360,
    minIncome: 25000,
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50 dark:bg-green-900/20',
    borderColor: 'border-green-200 dark:border-green-800'
  },
  {
    id: 'business',
    name: 'Business Loan',
    icon: Briefcase,
    minAmount: 100000,
    maxAmount: 10000000,
    minTenure: 12,
    maxTenure: 84,
    minIncome: 20000,
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50 dark:bg-purple-900/20',
    borderColor: 'border-purple-200 dark:border-purple-800'
  },
  {
    id: 'car',
    name: 'Car Loan',
    icon: Car,
    minAmount: 100000,
    maxAmount: 5000000,
    minTenure: 12,
    maxTenure: 84,
    minIncome: 15000,
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50 dark:bg-orange-900/20',
    borderColor: 'border-orange-200 dark:border-orange-800'
  }
];

const employmentTypes = [
  { id: 'salaried', name: 'Salaried', icon: Building2 },
  { id: 'self-employed', name: 'Self Employed', icon: User },
  { id: 'business', name: 'Business Owner', icon: Briefcase },
  { id: 'professional', name: 'Professional', icon: Award }
];

const CheckEligibilityPage: React.FC = () => {
  const [selectedLoanType, setSelectedLoanType] = useState(loanTypes[0]);
  const [currentStep, setCurrentStep] = useState(1);
  const [eligibilityResult, setEligibilityResult] = useState<any>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const [formData, setFormData] = useState({
    loanType: 'personal',
    loanAmount: 500000,
    tenure: 36,
    monthlyIncome: 50000,
    employmentType: 'salaried',
    creditScore: 750,
    existingEMI: 0,
    age: 30,
    city: 'Mumbai',
    companyName: '',
    workExperience: 3
  });

  const totalSteps = 4;

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const calculateEligibility = () => {
    setIsCalculating(true);
    
    // Simulate calculation delay
    setTimeout(() => {
      const loanType = loanTypes.find(lt => lt.id === formData.loanType);
      if (!loanType) return;

      // Basic eligibility calculation
      const monthlyIncome = formData.monthlyIncome;
      const existingEMI = formData.existingEMI;
      const availableIncome = monthlyIncome - existingEMI;
      const maxEMI = availableIncome * 0.4; // 40% of available income
      
      const rate = getInterestRate(formData.loanType, formData.creditScore);
      const monthlyRate = rate / 12 / 100;
      const tenureMonths = formData.tenure;
      
      const maxLoanAmount = maxEMI * ((Math.pow(1 + monthlyRate, tenureMonths) - 1) / (monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)));
      
      const isEligible = formData.loanAmount <= maxLoanAmount && 
                        formData.monthlyIncome >= loanType.minIncome &&
                        formData.creditScore >= 650 &&
                        formData.age >= 21 && formData.age <= 65;

      const eligibilityScore = calculateEligibilityScore();

      setEligibilityResult({
        isEligible,
        maxLoanAmount: Math.round(maxLoanAmount),
        suggestedEMI: Math.round(formData.loanAmount * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths) / (Math.pow(1 + monthlyRate, tenureMonths) - 1)),
        interestRate: rate,
        eligibilityScore,
        reasons: getEligibilityReasons(isEligible, maxLoanAmount, formData.loanAmount)
      });
      
      setIsCalculating(false);
    }, 2000);
  };

  const getInterestRate = (loanType: string, creditScore: number) => {
    const baseRates: { [key: string]: number } = {
      personal: 12,
      home: 8.5,
      business: 14,
      car: 9.5
    };
    
    let rate = baseRates[loanType] || 12;
    
    // Adjust rate based on credit score
    if (creditScore >= 800) rate -= 1.5;
    else if (creditScore >= 750) rate -= 1;
    else if (creditScore >= 700) rate -= 0.5;
    else if (creditScore < 650) rate += 2;
    
    return Math.max(rate, 6.5);
  };

  const calculateEligibilityScore = () => {
    let score = 0;
    
    // Income score (40%)
    const incomeRatio = formData.monthlyIncome / 100000;
    score += Math.min(incomeRatio * 40, 40);
    
    // Credit score (30%)
    score += (formData.creditScore / 850) * 30;
    
    // Employment stability (20%)
    if (formData.employmentType === 'salaried') score += 20;
    else if (formData.employmentType === 'self-employed') score += 15;
    else if (formData.employmentType === 'business') score += 10;
    else score += 5;
    
    // Work experience (10%)
    score += Math.min(formData.workExperience * 2, 10);
    
    return Math.round(score);
  };

  const getEligibilityReasons = (isEligible: boolean, maxAmount: number, requestedAmount: number) => {
    const reasons = [];
    
    if (isEligible) {
      reasons.push('✅ Income meets minimum requirements');
      reasons.push('✅ Credit score is satisfactory');
      reasons.push('✅ Age criteria fulfilled');
      if (maxAmount > requestedAmount) {
        reasons.push(`✅ You can get up to ₹${maxAmount.toLocaleString()} more`);
      }
    } else {
      if (formData.monthlyIncome < selectedLoanType.minIncome) {
        reasons.push('❌ Monthly income below minimum requirement');
      }
      if (formData.creditScore < 650) {
        reasons.push('❌ Credit score needs improvement');
      }
      if (formData.age < 21 || formData.age > 65) {
        reasons.push('❌ Age criteria not met');
      }
      if (maxAmount < requestedAmount) {
        reasons.push(`❌ Requested amount exceeds eligibility (Max: ₹${maxAmount.toLocaleString()})`);
      }
    }
    
    return reasons;
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const resetForm = () => {
    setFormData({
      loanType: 'personal',
      loanAmount: 500000,
      tenure: 36,
      monthlyIncome: 50000,
      employmentType: 'salaried',
      creditScore: 750,
      existingEMI: 0,
      age: 30,
      city: 'Mumbai',
      companyName: '',
      workExperience: 3
    });
    setCurrentStep(1);
    setEligibilityResult(null);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-16 text-center relative overflow-visible">
          <div aria-hidden="true" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-3xl h-40 md:h-56 blur-2xl opacity-60 pointer-events-none z-0 animate-pulse-glow"
            style={{ background: 'radial-gradient(circle at 60% 40%, #38B00055 0%, #0047AB33 60%, transparent 100%)' }}
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10 text-primary-700 dark:text-primary-300 drop-shadow-lg text-center">
            Check Your <span className="bg-gradient-to-r from-primary-600 via-purple-600 to-success-600 bg-clip-text text-transparent">Loan Eligibility</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto relative z-10">
            Get instant loan eligibility results in just 2 minutes. 
            Find out how much you can borrow and at what interest rate.
          </p>
        </header>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex items-center justify-center mb-4">
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
              Step {currentStep} of {totalSteps}
            </span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 max-w-md mx-auto">
            <motion.div
              className="bg-gradient-to-r from-primary-500 to-success-500 h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl shadow-xl p-8">
              <AnimatePresence mode="wait">
                {/* Step 1: Loan Type Selection */}
                {currentStep === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
                      <span className="bg-gradient-to-r from-primary-600 to-success-600 bg-clip-text text-transparent">
                        Choose Your Loan Type
                      </span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {loanTypes.map((loan) => (
                        <motion.div
                          key={loan.id}
                          className={`${loan.bgColor} backdrop-blur-lg rounded-2xl p-6 cursor-pointer border-2 ${loan.borderColor} ${
                            formData.loanType === loan.id ? 'ring-2 ring-primary-500 shadow-xl' : ''
                          }`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => {
                            setSelectedLoanType(loan);
                            handleInputChange('loanType', loan.id);
                          }}
                        >
                          <div className="flex items-center gap-4">
                            <div className={`w-12 h-12 bg-gradient-to-r ${loan.color} rounded-full flex items-center justify-center`}>
                              <loan.icon className="h-6 w-6 text-white" />
                            </div>
                            <div>
                              <h3 className="text-lg font-bold text-gray-900 dark:text-white">{loan.name}</h3>
                              <p className="text-sm text-gray-600 dark:text-gray-300">
                                ₹{loan.minAmount.toLocaleString()} - ₹{loan.maxAmount.toLocaleString()}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Loan Details */}
                {currentStep === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
                      <span className="bg-gradient-to-r from-primary-600 to-success-600 bg-clip-text text-transparent">
                        Loan Details
                      </span>
                    </h2>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                          Loan Amount (₹)
                        </label>
                        <input
                          type="number"
                          value={formData.loanAmount}
                          onChange={(e) => handleInputChange('loanAmount', parseInt(e.target.value))}
                          min={selectedLoanType.minAmount}
                          max={selectedLoanType.maxAmount}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                        <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                          <span>Min: ₹{selectedLoanType.minAmount.toLocaleString()}</span>
                          <span>Max: ₹{selectedLoanType.maxAmount.toLocaleString()}</span>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                          Tenure (Months)
                        </label>
                        <input
                          type="number"
                          value={formData.tenure}
                          onChange={(e) => handleInputChange('tenure', parseInt(e.target.value))}
                          min={selectedLoanType.minTenure}
                          max={selectedLoanType.maxTenure}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                        <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                          <span>Min: {selectedLoanType.minTenure} months</span>
                          <span>Max: {selectedLoanType.maxTenure} months</span>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                          Monthly Income (₹)
                        </label>
                        <input
                          type="number"
                          value={formData.monthlyIncome}
                          onChange={(e) => handleInputChange('monthlyIncome', parseInt(e.target.value))}
                          min={selectedLoanType.minIncome}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          Minimum required: ₹{selectedLoanType.minIncome.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Personal Details */}
                {currentStep === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
                      <span className="bg-gradient-to-r from-primary-600 to-success-600 bg-clip-text text-transparent">
                        Personal Details
                      </span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                          Employment Type
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                          {employmentTypes.map((emp) => (
                            <motion.button
                              key={emp.id}
                              className={`p-3 rounded-xl border-2 transition-all ${
                                formData.employmentType === emp.id
                                  ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                                  : 'border-gray-200 dark:border-gray-700 hover:border-primary-300'
                              }`}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              onClick={() => handleInputChange('employmentType', emp.id)}
                            >
                              <div className="flex items-center gap-2">
                                <emp.icon className="h-4 w-4 text-primary-500" />
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                  {emp.name}
                                </span>
                              </div>
                            </motion.button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                          Credit Score
                        </label>
                        <input
                          type="number"
                          value={formData.creditScore}
                          onChange={(e) => handleInputChange('creditScore', parseInt(e.target.value))}
                          min="300"
                          max="850"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          Range: 300 - 850
                        </p>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                          Age
                        </label>
                        <input
                          type="number"
                          value={formData.age}
                          onChange={(e) => handleInputChange('age', parseInt(e.target.value))}
                          min="21"
                          max="65"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                          Existing EMI (₹)
                        </label>
                        <input
                          type="number"
                          value={formData.existingEMI}
                          onChange={(e) => handleInputChange('existingEMI', parseInt(e.target.value))}
                          min="0"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 4: Additional Details */}
                {currentStep === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
                      <span className="bg-gradient-to-r from-primary-600 to-success-600 bg-clip-text text-transparent">
                        Additional Details
                      </span>
                    </h2>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                          City
                        </label>
                        <select
                          value={formData.city}
                          onChange={(e) => handleInputChange('city', e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                        >
                          <option value="Mumbai">Mumbai</option>
                          <option value="Delhi">Delhi</option>
                          <option value="Bangalore">Bangalore</option>
                          <option value="Chennai">Chennai</option>
                          <option value="Kolkata">Kolkata</option>
                          <option value="Pune">Pune</option>
                          <option value="Hyderabad">Hyderabad</option>
                          <option value="Ahmedabad">Ahmedabad</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                          Work Experience (Years)
                        </label>
                        <input
                          type="number"
                          value={formData.workExperience}
                          onChange={(e) => handleInputChange('workExperience', parseInt(e.target.value))}
                          min="0"
                          max="30"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                          Company Name (Optional)
                        </label>
                        <input
                          type="text"
                          value={formData.companyName}
                          onChange={(e) => handleInputChange('companyName', e.target.value)}
                          placeholder="Enter your company name"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                <motion.button
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                    currentStep === 1
                      ? 'bg-gray-200 dark:bg-gray-700 text-gray-400 cursor-not-allowed'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                  whileHover={currentStep > 1 ? { scale: 1.05 } : {}}
                  whileTap={currentStep > 1 ? { scale: 0.95 } : {}}
                >
                  Previous
                </motion.button>

                {currentStep < totalSteps ? (
                  <motion.button
                    onClick={nextStep}
                    className="bg-gradient-to-r from-primary-500 to-success-500 text-white font-semibold px-6 py-3 rounded-xl hover:from-primary-600 hover:to-success-600 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Next
                  </motion.button>
                ) : (
                  <motion.button
                    onClick={calculateEligibility}
                    disabled={isCalculating}
                    className="bg-gradient-to-r from-primary-500 to-success-500 text-white font-semibold px-6 py-3 rounded-xl hover:from-primary-600 hover:to-success-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                    whileHover={!isCalculating ? { scale: 1.05 } : {}}
                    whileTap={!isCalculating ? { scale: 0.95 } : {}}
                  >
                    {isCalculating ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        Calculating...
                      </>
                    ) : (
                      <>
                        <Calculator className="h-4 w-4" />
                        Check Eligibility
                      </>
                    )}
                  </motion.button>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Loan Summary */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl shadow-xl p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Loan Summary
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Loan Type:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {selectedLoanType.name}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Amount:</span>
                  <span className="font-semibold text-primary-600 dark:text-primary-400">
                    ₹{formData.loanAmount.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Tenure:</span>
                  <span className="font-semibold text-success-600 dark:text-success-400">
                    {formData.tenure} months
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Monthly Income:</span>
                  <span className="font-semibold text-purple-600 dark:text-purple-400">
                    ₹{formData.monthlyIncome.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Credit Score:</span>
                  <span className="font-semibold text-orange-600 dark:text-orange-400">
                    {formData.creditScore}
                  </span>
                </div>
              </div>
            </div>

            {/* Eligibility Result */}
            {eligibilityResult && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl shadow-xl p-6"
              >
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    eligibilityResult.isEligible 
                      ? 'bg-gradient-to-r from-green-500 to-green-600' 
                      : 'bg-gradient-to-r from-red-500 to-red-600'
                  }`}>
                    {eligibilityResult.isEligible ? (
                      <CheckCircle className="h-8 w-8 text-white" />
                    ) : (
                      <XCircle className="h-8 w-8 text-white" />
                    )}
                  </div>
                  <h3 className={`text-2xl font-bold ${
                    eligibilityResult.isEligible 
                      ? 'text-green-600 dark:text-green-400' 
                      : 'text-red-600 dark:text-red-400'
                  }`}>
                    {eligibilityResult.isEligible ? 'Eligible!' : 'Not Eligible'}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">
                    Eligibility Score: {eligibilityResult.eligibilityScore}/100
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Loan Details</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-300">Max Amount:</span>
                        <span className="font-semibold text-primary-600 dark:text-primary-400">
                          ₹{eligibilityResult.maxLoanAmount.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-300">Interest Rate:</span>
                        <span className="font-semibold text-success-600 dark:text-success-400">
                          {eligibilityResult.interestRate}% p.a.
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-300">EMI:</span>
                        <span className="font-semibold text-purple-600 dark:text-purple-400">
                          ₹{eligibilityResult.suggestedEMI.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Assessment</h4>
                    <ul className="space-y-1 text-sm">
                      {eligibilityResult.reasons.map((reason: string, index: number) => (
                        <li key={index} className="text-gray-600 dark:text-gray-300">
                          {reason}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <motion.button
                    className="w-full bg-gradient-to-r from-primary-500 to-success-500 text-white font-semibold px-6 py-3 rounded-xl hover:from-primary-600 hover:to-success-600 transition-all"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Apply Now
                  </motion.button>
                </div>
              </motion.div>
            )}

            {/* Reset Button */}
            <motion.button
              onClick={resetForm}
              className="w-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-semibold px-6 py-3 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-all mt-6"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Reset Form
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckEligibilityPage;
