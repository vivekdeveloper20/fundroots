import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileText, 
  Upload, 
  Download, 
  CheckCircle, 
  AlertCircle, 
  Camera, 
  Scan, 
  Shield, 
  User, 
  Building2, 
  Car, 
  Home, 
  Briefcase, 
  CreditCard, 
  MapPin, 
  Calendar, 
  DollarSign, 
  Phone, 
  Mail, 
  Award, 
  Star, 
  Zap, 
  Target, 
  Heart, 
  Globe,
  Eye,
  EyeOff,
  Copy,
  Share2,
  Printer,
  Send,
  ArrowRight,
  ArrowDown,
  ArrowUp,
  ChevronRight,
  ChevronDown,
  Info,
  HelpCircle,
  BookOpen,
  Clipboard,
  FolderOpen,
  Archive,
  Lock,
  Unlock,
  Check,
  X,
  Plus,
  Minus,
  Search,
  Filter,
  SortAsc,
  SortDesc
} from 'lucide-react';

const loanTypes = [
  {
    id: 'personal',
    name: 'Personal Loan',
    icon: User,
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    borderColor: 'border-blue-200 dark:border-blue-800',
    description: 'Quick personal loans for immediate needs'
  },
  {
    id: 'home',
    name: 'Home Loan',
    icon: Home,
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50 dark:bg-green-900/20',
    borderColor: 'border-green-200 dark:border-green-800',
    description: 'Home loans for your dream property'
  },
  {
    id: 'business',
    name: 'Business Loan',
    icon: Briefcase,
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50 dark:bg-purple-900/20',
    borderColor: 'border-purple-200 dark:border-purple-800',
    description: 'Business loans for growth and expansion'
  },
  {
    id: 'car',
    name: 'Car Loan',
    icon: Car,
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50 dark:bg-orange-900/20',
    borderColor: 'border-orange-200 dark:border-orange-800',
    description: 'Car loans for your dream vehicle'
  }
];

const documentCategories = {
  personal: [
    {
      category: 'Identity Proof',
      icon: User,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100 dark:bg-blue-900/30',
      documents: [
        {
          name: 'Aadhaar Card',
          description: 'Government issued identity proof',
          required: true,
          format: 'PDF/JPG/PNG',
          size: 'Max 5MB',
          example: 'Front and back side',
          tips: 'Ensure clear visibility of all details'
        },
        {
          name: 'PAN Card',
          description: 'Permanent Account Number',
          required: true,
          format: 'PDF/JPG/PNG',
          size: 'Max 5MB',
          example: 'Clear image of PAN card',
          tips: 'All text should be clearly readable'
        },
        {
          name: 'Driving License',
          description: 'Valid driving license',
          required: false,
          format: 'PDF/JPG/PNG',
          size: 'Max 5MB',
          example: 'Front side only',
          tips: 'Alternative to Aadhaar card'
        }
      ]
    },
    {
      category: 'Address Proof',
      icon: MapPin,
      color: 'text-green-600',
      bgColor: 'bg-green-100 dark:bg-green-900/30',
      documents: [
        {
          name: 'Utility Bill',
          description: 'Electricity/Water/Gas bill',
          required: true,
          format: 'PDF/JPG/PNG',
          size: 'Max 5MB',
          example: 'Latest 3 months',
          tips: 'Bill should be in your name'
        },
        {
          name: 'Bank Statement',
          description: 'Bank account statement',
          required: true,
          format: 'PDF',
          size: 'Max 10MB',
          example: 'Last 6 months',
          tips: 'Should show regular transactions'
        },
        {
          name: 'Rent Agreement',
          description: 'Rental agreement',
          required: false,
          format: 'PDF/JPG/PNG',
          size: 'Max 5MB',
          example: 'Registered agreement',
          tips: 'If you are renting'
        }
      ]
    },
    {
      category: 'Income Proof',
      icon: DollarSign,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100 dark:bg-purple-900/30',
      documents: [
        {
          name: 'Salary Slips',
          description: 'Latest salary slips',
          required: true,
          format: 'PDF/JPG/PNG',
          size: 'Max 5MB',
          example: 'Last 3 months',
          tips: 'Should show net salary clearly'
        },
        {
          name: 'Form 16',
          description: 'Tax deduction certificate',
          required: true,
          format: 'PDF',
          size: 'Max 10MB',
          example: 'Latest 2 years',
          tips: 'Issued by employer'
        },
        {
          name: 'Bank Statement',
          description: 'Salary account statement',
          required: true,
          format: 'PDF',
          size: 'Max 10MB',
          example: 'Last 6 months',
          tips: 'Should show salary credits'
        }
      ]
    },
    {
      category: 'Employment Proof',
      icon: Building2,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100 dark:bg-orange-900/30',
      documents: [
        {
          name: 'Offer Letter',
          description: 'Job offer letter',
          required: false,
          format: 'PDF/JPG/PNG',
          size: 'Max 5MB',
          example: 'Current employment',
          tips: 'If recently joined'
        },
        {
          name: 'Experience Letter',
          description: 'Previous employment proof',
          required: false,
          format: 'PDF/JPG/PNG',
          size: 'Max 5MB',
          example: 'Last 2 employers',
          tips: 'Shows work experience'
        }
      ]
    }
  ],
  home: [
    {
      category: 'Identity Proof',
      icon: User,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100 dark:bg-blue-900/30',
      documents: [
        {
          name: 'Aadhaar Card',
          description: 'Government issued identity proof',
          required: true,
          format: 'PDF/JPG/PNG',
          size: 'Max 5MB',
          example: 'Front and back side',
          tips: 'Ensure clear visibility of all details'
        },
        {
          name: 'PAN Card',
          description: 'Permanent Account Number',
          required: true,
          format: 'PDF/JPG/PNG',
          size: 'Max 5MB',
          example: 'Clear image of PAN card',
          tips: 'All text should be clearly readable'
        }
      ]
    },
    {
      category: 'Property Documents',
      icon: Home,
      color: 'text-green-600',
      bgColor: 'bg-green-100 dark:bg-green-900/30',
      documents: [
        {
          name: 'Sale Deed',
          description: 'Property purchase agreement',
          required: true,
          format: 'PDF/JPG/PNG',
          size: 'Max 10MB',
          example: 'Registered sale deed',
          tips: 'Should be in your name'
        },
        {
          name: 'Property Tax Receipt',
          description: 'Latest property tax payment',
          required: true,
          format: 'PDF/JPG/PNG',
          size: 'Max 5MB',
          example: 'Current year',
          tips: 'Shows property ownership'
        },
        {
          name: 'NOC from Builder',
          description: 'No Objection Certificate',
          required: true,
          format: 'PDF',
          size: 'Max 5MB',
          example: 'From builder/society',
          tips: 'Required for under-construction properties'
        }
      ]
    },
    {
      category: 'Financial Documents',
      icon: DollarSign,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100 dark:bg-purple-900/30',
      documents: [
        {
          name: 'Salary Slips',
          description: 'Latest salary slips',
          required: true,
          format: 'PDF/JPG/PNG',
          size: 'Max 5MB',
          example: 'Last 6 months',
          tips: 'Should show net salary clearly'
        },
        {
          name: 'Bank Statements',
          description: 'Salary account statements',
          required: true,
          format: 'PDF',
          size: 'Max 10MB',
          example: 'Last 12 months',
          tips: 'Should show salary credits'
        },
        {
          name: 'ITR Returns',
          description: 'Income Tax Returns',
          required: true,
          format: 'PDF',
          size: 'Max 10MB',
          example: 'Last 3 years',
          tips: 'Filed returns with acknowledgment'
        }
      ]
    }
  ],
  business: [
    {
      category: 'Business Identity',
      icon: Building2,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100 dark:bg-blue-900/30',
      documents: [
        {
          name: 'GST Registration',
          description: 'GST registration certificate',
          required: true,
          format: 'PDF/JPG/PNG',
          size: 'Max 5MB',
          example: 'Current GST certificate',
          tips: 'Should be active and valid'
        },
        {
          name: 'Business License',
          description: 'Business operation license',
          required: true,
          format: 'PDF/JPG/PNG',
          size: 'Max 5MB',
          example: 'Trade license/Shop act',
          tips: 'Issued by local authority'
        },
        {
          name: 'Partnership Deed',
          description: 'Partnership agreement',
          required: false,
          format: 'PDF',
          size: 'Max 10MB',
          example: 'Registered partnership deed',
          tips: 'If partnership firm'
        }
      ]
    },
    {
      category: 'Financial Statements',
      icon: DollarSign,
      color: 'text-green-600',
      bgColor: 'bg-green-100 dark:bg-green-900/30',
      documents: [
        {
          name: 'Balance Sheet',
          description: 'Audited balance sheet',
          required: true,
          format: 'PDF',
          size: 'Max 10MB',
          example: 'Last 2 years',
          tips: 'Should be audited by CA'
        },
        {
          name: 'P&L Statement',
          description: 'Profit & Loss statement',
          required: true,
          format: 'PDF',
          size: 'Max 10MB',
          example: 'Last 2 years',
          tips: 'Shows business profitability'
        },
        {
          name: 'Bank Statements',
          description: 'Business account statements',
          required: true,
          format: 'PDF',
          size: 'Max 10MB',
          example: 'Last 12 months',
          tips: 'All business accounts'
        }
      ]
    }
  ],
  car: [
    {
      category: 'Identity Proof',
      icon: User,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100 dark:bg-blue-900/30',
      documents: [
        {
          name: 'Aadhaar Card',
          description: 'Government issued identity proof',
          required: true,
          format: 'PDF/JPG/PNG',
          size: 'Max 5MB',
          example: 'Front and back side',
          tips: 'Ensure clear visibility of all details'
        },
        {
          name: 'PAN Card',
          description: 'Permanent Account Number',
          required: true,
          format: 'PDF/JPG/PNG',
          size: 'Max 5MB',
          example: 'Clear image of PAN card',
          tips: 'All text should be clearly readable'
        }
      ]
    },
    {
      category: 'Vehicle Documents',
      icon: Car,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100 dark:bg-orange-900/30',
      documents: [
        {
          name: 'RC Copy',
          description: 'Vehicle registration certificate',
          required: true,
          format: 'PDF/JPG/PNG',
          size: 'Max 5MB',
          example: 'Front and back side',
          tips: 'Should be in your name'
        },
        {
          name: 'Insurance Copy',
          description: 'Vehicle insurance policy',
          required: true,
          format: 'PDF/JPG/PNG',
          size: 'Max 5MB',
          example: 'Current year policy',
          tips: 'Should be valid and active'
        },
        {
          name: 'Invoice Copy',
          description: 'Vehicle purchase invoice',
          required: true,
          format: 'PDF/JPG/PNG',
          size: 'Max 5MB',
          example: 'Dealer invoice',
          tips: 'Shows vehicle purchase details'
        }
      ]
    },
    {
      category: 'Income Proof',
      icon: DollarSign,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100 dark:bg-purple-900/30',
      documents: [
        {
          name: 'Salary Slips',
          description: 'Latest salary slips',
          required: true,
          format: 'PDF/JPG/PNG',
          size: 'Max 5MB',
          example: 'Last 3 months',
          tips: 'Should show net salary clearly'
        },
        {
          name: 'Bank Statement',
          description: 'Salary account statement',
          required: true,
          format: 'PDF',
          size: 'Max 10MB',
          example: 'Last 6 months',
          tips: 'Should show salary credits'
        }
      ]
    }
  ]
};

const DocumentsRequiredPage: React.FC = () => {
  const [selectedLoanType, setSelectedLoanType] = useState(loanTypes[0]);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [uploadedDocs, setUploadedDocs] = useState<{ [key: string]: boolean }>({});
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState<any>(null);

  const toggleCategory = (category: string) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  const toggleDocumentUpload = (docName: string) => {
    setUploadedDocs(prev => ({
      ...prev,
      [docName]: !prev[docName]
    }));
  };

  const openUploadModal = (document: any) => {
    setSelectedDocument(document);
    setShowUploadModal(true);
  };

  const getProgressPercentage = () => {
    const totalDocs = documentCategories[selectedLoanType.id as keyof typeof documentCategories]
      .flatMap(cat => cat.documents).length;
    const uploadedCount = Object.values(uploadedDocs).filter(Boolean).length;
    return Math.round((uploadedCount / totalDocs) * 100);
  };

  const getRequiredDocsCount = () => {
    return documentCategories[selectedLoanType.id as keyof typeof documentCategories]
      .flatMap(cat => cat.documents.filter(doc => doc.required)).length;
  };

  const getOptionalDocsCount = () => {
    return documentCategories[selectedLoanType.id as keyof typeof documentCategories]
      .flatMap(cat => cat.documents.filter(doc => !doc.required)).length;
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
            Documents <span className="bg-gradient-to-r from-primary-600 via-purple-600 to-success-600 bg-clip-text text-transparent">Required</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto relative z-10">
            Complete checklist of documents needed for your loan application. 
            Upload documents digitally and track your progress.
          </p>
        </header>

        {/* Loan Type Selection */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
              <span className="bg-gradient-to-r from-primary-600 to-success-600 bg-clip-text text-transparent">
                Select Your Loan Type
              </span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Choose the loan type to see specific document requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {loanTypes.map((loan) => (
              <motion.div
                key={loan.id}
                className={`${loan.bgColor} backdrop-blur-lg rounded-2xl p-6 cursor-pointer border-2 ${loan.borderColor} ${
                  selectedLoanType.id === loan.id ? 'ring-2 ring-primary-500 shadow-xl' : ''
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedLoanType(loan)}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${loan.color} rounded-full flex items-center justify-center`}>
                    <loan.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{loan.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{loan.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Progress Overview */}
        <section className="mb-12">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl shadow-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">{getProgressPercentage()}%</div>
                <div className="text-gray-600 dark:text-gray-300">Progress</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">{getRequiredDocsCount()}</div>
                <div className="text-gray-600 dark:text-gray-300">Required Docs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{getOptionalDocsCount()}</div>
                <div className="text-gray-600 dark:text-gray-300">Optional Docs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  {Object.values(uploadedDocs).filter(Boolean).length}
                </div>
                <div className="text-gray-600 dark:text-gray-300">Uploaded</div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-6">
              <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300 mb-2">
                <span>Document Upload Progress</span>
                <span>{getProgressPercentage()}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                <motion.div
                  className="bg-gradient-to-r from-primary-500 to-success-500 h-3 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${getProgressPercentage()}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Document Categories */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
              <span className="bg-gradient-to-r from-primary-600 to-success-600 bg-clip-text text-transparent">
                Required Documents for {selectedLoanType.name}
              </span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Click on any category to expand and see detailed requirements
            </p>
          </div>

          <div className="space-y-6">
            {documentCategories[selectedLoanType.id as keyof typeof documentCategories].map((category, index) => (
              <motion.div
                key={category.category}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <button
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                  onClick={() => toggleCategory(category.category)}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 ${category.bgColor} rounded-full flex items-center justify-center`}>
                      <category.icon className={`h-6 w-6 ${category.color}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{category.category}</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {category.documents.length} documents required
                      </p>
                    </div>
                  </div>
                  <div className={`transform transition-transform duration-200 ${expandedCategory === category.category ? 'rotate-180' : ''}`}>
                    <ChevronDown className="h-6 w-6 text-gray-500" />
                  </div>
                </button>

                <AnimatePresence>
                  {expandedCategory === category.category && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {category.documents.map((doc, docIndex) => (
                            <motion.div
                              key={doc.name}
                              className={`p-4 rounded-xl border-2 transition-all ${
                                uploadedDocs[doc.name] 
                                  ? 'border-green-200 bg-green-50 dark:bg-green-900/20' 
                                  : 'border-gray-200 dark:border-gray-700 hover:border-primary-300'
                              }`}
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: docIndex * 0.1 }}
                            >
                              <div className="flex items-start justify-between mb-3">
                                <div className="flex items-center gap-3">
                                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                    uploadedDocs[doc.name] 
                                      ? 'bg-green-100 dark:bg-green-900/30' 
                                      : 'bg-gray-100 dark:bg-gray-700'
                                  }`}>
                                    {uploadedDocs[doc.name] ? (
                                      <CheckCircle className="h-4 w-4 text-green-600" />
                                    ) : (
                                      <FileText className="h-4 w-4 text-gray-600" />
                                    )}
                                  </div>
                                  <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white">{doc.name}</h4>
                                    <div className="flex items-center gap-2">
                                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                                        doc.required 
                                          ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300' 
                                          : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
                                      }`}>
                                        {doc.required ? 'Required' : 'Optional'}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <button
                                  onClick={() => openUploadModal(doc)}
                                  className="p-2 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 hover:bg-primary-200 dark:hover:bg-primary-900/50 transition-colors"
                                >
                                  <Upload className="h-4 w-4" />
                                </button>
                              </div>

                              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{doc.description}</p>

                              <div className="grid grid-cols-2 gap-2 text-xs text-gray-500 dark:text-gray-400 mb-3">
                                <div className="flex items-center gap-1">
                                  <FileText className="h-3 w-3" />
                                  <span>{doc.format}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Shield className="h-3 w-3" />
                                  <span>{doc.size}</span>
                                </div>
                              </div>

                              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                                <div className="flex items-center gap-2 mb-2">
                                  <Info className="h-4 w-4 text-blue-500" />
                                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Tips:</span>
                                </div>
                                <p className="text-xs text-gray-600 dark:text-gray-400">{doc.tips}</p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Upload Modal */}
        <AnimatePresence>
          {showUploadModal && (
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowUploadModal(false)}
            >
              <motion.div
                className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Upload {selectedDocument?.name}
                    </h3>
                    <button
                      onClick={() => setShowUploadModal(false)}
                      className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                    >
                      <X className="h-6 w-6" />
                    </button>
                  </div>

                  <div className="space-y-6">
                    <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-2xl p-8 text-center hover:border-primary-500 dark:hover:border-primary-400 transition-colors">
                      <Upload className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Drag and drop your file here
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        or click to browse files
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Supported formats: {selectedDocument?.format} | Max size: {selectedDocument?.size}
                      </p>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Document Requirements:</h4>
                      <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                        <li>• {selectedDocument?.description}</li>
                        <li>• Format: {selectedDocument?.format}</li>
                        <li>• Size: {selectedDocument?.size}</li>
                        <li>• Example: {selectedDocument?.example}</li>
                      </ul>
                    </div>

                    <div className="flex gap-4">
                      <motion.button
                        className="flex-1 bg-gradient-to-r from-primary-500 to-success-500 text-white font-semibold px-6 py-3 rounded-xl hover:from-primary-600 hover:to-success-600 transition-all"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => {
                          toggleDocumentUpload(selectedDocument?.name);
                          setShowUploadModal(false);
                        }}
                      >
                        Upload Document
                      </motion.button>
                      <motion.button
                        className="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setShowUploadModal(false)}
                      >
                        Cancel
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA Section */}
        <section className="text-center">
          <div className="inline-block bg-gradient-to-r from-primary-500/10 to-success-500/10 dark:from-primary-500/5 dark:to-success-500/5 backdrop-blur-lg border border-primary-200/50 dark:border-primary-800/50 rounded-2xl p-10 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">
              Ready to Apply?
            </h2>
            <p className="mb-6 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Once you have all the required documents ready, you can proceed with your loan application. 
              Our team will guide you through the entire process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-gradient-to-r from-primary-500 to-success-500 text-white font-semibold px-8 py-4 rounded-xl shadow hover:from-primary-600 hover:to-success-600 transition-all duration-200 text-lg flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FileText className="h-5 w-5" />
                Start Application
              </motion.button>
              <motion.button
                className="border-2 border-primary-500 text-primary-600 dark:text-primary-400 font-semibold px-8 py-4 rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-200 text-lg flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="h-5 w-5" />
                Get Help
              </motion.button>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default DocumentsRequiredPage;
