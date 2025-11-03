import React, { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface AuthModalProps {
  open: boolean;
  onClose: () => void;
  defaultPhone?: string;
}

type Mode = 'login' | 'signup';

const phoneRegex = /^[6-9][0-9]{9}$/; // India 10-digit starting 6-9
const otpRegex = /^[0-9]{6}$/;

const gradientBtn = 'bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:from-primary-600 hover:to-primary-700';

const AuthModal: React.FC<AuthModalProps> = ({ open, onClose, defaultPhone }) => {
  const [mode, setMode] = useState<Mode>('login');
  const [step, setStep] = useState<'phone' | 'otp'>('phone');
  const [phone, setPhone] = useState(defaultPhone ?? '');
  const [otp, setOtp] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    if (!open) {
      setStep('phone');
      setOtp('');
      setError(null);
      setTimer(0);
      return;
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    if (timer <= 0) return;
    const id = setInterval(() => setTimer((t) => t - 1), 1000);
    return () => clearInterval(id);
  }, [timer, open]);

  const canSendOtp = useMemo(() => phoneRegex.test(phone) && (!isSignup(mode) || name.trim().length >= 2), [phone, mode, name]);
  const canVerify = useMemo(() => otpRegex.test(otp), [otp]);

  function isSignup(m: Mode) {
    return m === 'signup';
  }

  const handleSendOtp = async () => {
    setError(null);
    if (!canSendOtp) {
      setError(isSignup(mode) && name.trim().length < 2 ? 'Please enter your full name' : 'Enter a valid mobile number');
      return;
    }
    try {
      setLoading(true);
      await new Promise((r) => setTimeout(r, 900)); // mock API
      setStep('otp');
      setTimer(30);
    } catch (e) {
      setError('Failed to send OTP. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleVerify = async () => {
    setError(null);
    if (!canVerify) {
      setError('Enter the 6-digit OTP');
      return;
    }
    try {
      setLoading(true);
      await new Promise((r) => setTimeout(r, 900)); // mock verify
      onClose();
    } catch (e) {
      setError('Invalid OTP. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    if (timer > 0) return;
    try {
      setLoading(true);
      await new Promise((r) => setTimeout(r, 700));
      setTimer(30);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
          <motion.div
            className="relative w-full max-w-md rounded-2xl shadow-2xl overflow-hidden bg-white dark:bg-gray-900"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
          >
            <div className="absolute right-3 top-3">
              <button onClick={onClose} className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6">
              <div className="mb-4">
                <div className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-success-600 bg-clip-text text-transparent">Welcome to FundRoot</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{isSignup(mode) ? 'Create your account to continue' : 'Login to continue your application'}</div>
              </div>

              <div className="flex gap-2 mb-6">
                <button
                  className={`flex-1 py-2 rounded-lg border ${mode === 'login' ? 'border-primary-500 text-primary-600' : 'border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-300'}`}
                  onClick={() => setMode('login')}
                >
                  Login
                </button>
                <button
                  className={`flex-1 py-2 rounded-lg border ${mode === 'signup' ? 'border-primary-500 text-primary-600' : 'border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-300'}`}
                  onClick={() => setMode('signup')}
                >
                  Sign Up
                </button>
              </div>

              {step === 'phone' && (
                <div className="space-y-4">
                  {isSignup(mode) && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name</label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g., Rahul Sharma"
                        className="w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-3 outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>
                  )}
                  {isSignup(mode) && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email (optional)</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-3 outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>
                  )}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Mobile Number</label>
                    <div className="flex gap-2">
                      <span className="px-3 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700">+91</span>
                      <input
                        inputMode="numeric"
                        pattern="[0-9]*"
                        maxLength={10}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                        placeholder="Enter 10-digit number"
                        className="flex-1 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-3 outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>
                  </div>

                  {error && <div className="text-sm text-red-600">{error}</div>}

                  <button
                    onClick={handleSendOtp}
                    disabled={!canSendOtp || loading}
                    className={`w-full py-3 rounded-xl font-semibold transition-all ${gradientBtn} disabled:opacity-60 disabled:cursor-not-allowed`}
                  >
                    {loading ? 'Sending OTP…' : 'Send OTP'}
                  </button>

                  <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                    By continuing, you agree to our Terms & Privacy Policy.
                  </p>
                </div>
              )}

              {step === 'otp' && (
                <div className="space-y-4">
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    OTP sent to +91-{phone}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Enter OTP</label>
                    <input
                      inputMode="numeric"
                      pattern="[0-9]*"
                      maxLength={6}
                      value={otp}
                      onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                      placeholder="6-digit code"
                      className="w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-3 outline-none focus:ring-2 focus:ring-primary-500 tracking-widest text-center text-lg"
                    />
                  </div>

                  {error && <div className="text-sm text-red-600">{error}</div>}

                  <button
                    onClick={handleVerify}
                    disabled={!canVerify || loading}
                    className={`w-full py-3 rounded-xl font-semibold transition-all ${gradientBtn} disabled:opacity-60 disabled:cursor-not-allowed`}
                  >
                    {loading ? 'Verifying…' : isSignup(mode) ? 'Create account' : 'Login'}
                  </button>

                  <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                    <button onClick={() => setStep('phone')} className="underline">Change number</button>
                    <button onClick={handleResend} disabled={timer > 0} className="underline disabled:no-underline disabled:opacity-60">
                      {timer > 0 ? `Resend in ${timer}s` : 'Resend OTP'}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AuthModal;


