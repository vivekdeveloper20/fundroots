import React from 'react';
import { motion } from 'framer-motion';

interface LoanDetailProps {
  title: string;
  description: string;
  eligibility: string[];
  documents: string[];
  interestRate: string;
  tenure: string;
  benefits: string[];
  applyLink?: string;
}

const LoanDetail: React.FC<LoanDetailProps> = ({
  title,
  description,
  eligibility,
  documents,
  interestRate,
  tenure,
  benefits,
  applyLink = '#contact',
}) => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-white/50 dark:border-gray-700/50 rounded-3xl shadow-xl p-8 md:p-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            {title}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            {description}
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-2xl font-semibold text-primary-600 dark:text-primary-400 mb-3">Eligibility Criteria</h2>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 space-y-2">
                {eligibility.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-primary-600 dark:text-primary-400 mb-3">Required Documents</h2>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 space-y-2">
                {documents.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gradient-to-r from-primary-500 to-success-500 rounded-xl p-6 text-white">
              <div className="text-lg font-semibold mb-2">Interest Rate</div>
              <div className="text-2xl font-bold">{interestRate}</div>
            </div>
            <div className="bg-gradient-to-r from-success-500 to-primary-500 rounded-xl p-6 text-white">
              <div className="text-lg font-semibold mb-2">Loan Tenure</div>
              <div className="text-2xl font-bold">{tenure}</div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-primary-600 dark:text-primary-400 mb-3">Benefits of Applying Through FundRoot</h2>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 space-y-2">
              {benefits.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <motion.a
            href={applyLink}
            className="inline-block bg-gradient-to-r from-primary-500 to-success-500 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:from-primary-600 hover:to-success-600 transition-all duration-300 animate-pulse-glow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Apply Now
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default LoanDetail; 