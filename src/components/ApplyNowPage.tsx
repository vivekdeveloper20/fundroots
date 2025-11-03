import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import AuthModal from './AuthModal';

const ApplyNowPage: React.FC = () => {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    setOpen(true);
  }, []);

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 pt-28 pb-16">
      <div className="w-full max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-3xl bg-white/70 dark:bg-gray-900/70 backdrop-blur p-8 shadow-xl border border-gray-100 dark:border-gray-800"
        >
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-600 to-success-600 bg-clip-text text-transparent">Start your application</h1>
            <p className="mt-2 text-gray-600 dark:text-gray-300">Login or sign up with OTP to continue</p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-800">
              <div className="font-semibold">Secure OTP</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Your number is used only to verify identity.</div>
            </div>
            <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-800">
              <div className="font-semibold">2-min Onboarding</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Create account and save progress easily.</div>
            </div>
            <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-800">
              <div className="font-semibold">Track Application</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">We keep you updated at every step.</div>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <motion.button
              onClick={() => setOpen(true)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3 rounded-xl font-semibold bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:from-primary-600 hover:to-primary-700"
            >
              Continue with OTP
            </motion.button>
          </div>
        </motion.div>
      </div>

      <AuthModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
};

export default ApplyNowPage;


