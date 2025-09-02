import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, ChevronDown } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would send the form data to your backend or email service
  };

  return (
    <section className="py-20 min-h-screen bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-blue-900">
      <div className="w-full p-8 md:p-12">
        <div className="relative mb-16">
          <div aria-hidden="true" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-3xl h-40 md:h-56 blur-2xl opacity-60 pointer-events-none z-0 animate-pulse-glow"
            style={{ background: 'radial-gradient(circle at 60% 40%, #38B00055 0%, #0047AB33 60%, transparent 100%)' }}
          />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center relative z-10"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
              Get in <span className="bg-gradient-to-r from-primary-600 to-success-600 bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Have questions or need help? Our team is here to assist you. Fill out the form or use the contact info below.
            </p>
          </motion.div>
        </div>
        <section className="rounded-3xl bg-white/70 dark:bg-gray-800/70 shadow-xl p-6 md:p-12 mb-16 flex flex-col md:flex-row gap-12 md:gap-8">
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="flex-1 space-y-6"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full bg-white/60 dark:bg-gray-700/60 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full bg-white/60 dark:bg-gray-700/60 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="you@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                className="w-full bg-white/60 dark:bg-gray-700/60 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Your Phone Number"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                required
                className="w-full bg-white/60 dark:bg-gray-700/60 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="How can we help you?"
              />
            </div>
            <motion.button
              type="submit"
              className="w-full bg-gradient-to-r from-primary-500 to-success-500 text-white px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 shadow-md hover:from-primary-600 hover:to-success-600 transition-all duration-300"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
            >
              <Send className="h-5 w-5" /> Send Message
            </motion.button>
            {submitted && (
              <div className="text-green-600 dark:text-green-400 font-semibold mt-4 text-center">Thank you! We have received your message.</div>
            )}
          </motion.form>
          {/* Contact Info + Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-1 space-y-8"
          >
            <div className="bg-gradient-to-r from-primary-500/10 to-success-500/10 dark:from-primary-500/20 dark:to-success-500/20 rounded-2xl p-6 flex items-center gap-4">
              <Phone className="h-7 w-7 text-primary-500" />
              <div>
                <div className="text-lg font-semibold text-gray-800 dark:text-white">Call Us</div>
                <div className="text-gray-600 dark:text-gray-300">+91 98765 43210</div>
                <div className="text-gray-400 text-sm">Mon-Sat, 9 AM - 7 PM</div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 dark:from-blue-500/20 dark:to-indigo-500/20 rounded-2xl p-6 flex items-center gap-4">
              <Mail className="h-7 w-7 text-blue-500" />
              <div>
                <div className="text-lg font-semibold text-gray-800 dark:text-white">Email Us</div>
                <div className="text-gray-600 dark:text-gray-300">support@fundroot.in</div>
                <div className="text-gray-400 text-sm">We respond within 2 hours</div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 dark:from-purple-500/20 dark:to-pink-500/20 rounded-2xl p-6 flex items-center gap-4">
              <MapPin className="h-7 w-7 text-purple-500" />
              <div>
                <div className="text-lg font-semibold text-gray-800 dark:text-white">Visit Us</div>
                <div className="text-gray-600 dark:text-gray-300">Bandra Kurla Complex, Mumbai</div>
                <div className="text-gray-400 text-sm">Office Hours: 9 AM - 6 PM</div>
              </div>
            </div>
            {/* Map or Illustration */}
            <div className="mt-8">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Our Location</h2>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  title="FundRoot Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.788393478255!2d72.8649783149036!3d19.0675809870957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c630b6b6b6b7%3A0x7b7b7b7b7b7b7b7b!2sBandra%20Kurla%20Complex%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-56 md:h-48"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
          <div className="rounded-3xl bg-white/70 dark:bg-gray-800/70 shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">Frequently Asked Questions</h2>
            <FAQSection />
          </div>
          <div className="rounded-3xl bg-white/70 dark:bg-gray-800/70 shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">Schedule a Call</h2>
            <CallSchedulingForm />
          </div>
        </section>
      </div>
    </section>
  );
};

export default ContactPage;

const faqs = [
  {
    question: 'How long does loan approval take?',
    answer: 'Most loans are approved within 24-48 hours after submitting all required documents. Some cases may take longer depending on verification.'
  },
  {
    question: 'What documents are required for a loan?',
    answer: 'Typically, you need identity proof, address proof, income proof, and bank statements. Specific requirements may vary by loan type.'
  },
  {
    question: 'Can I apply for a loan online?',
    answer: 'Yes, you can apply for all our loan products online through our website. The process is 100% digital and secure.'
  },
  {
    question: 'Is my data safe with FundRoot?',
    answer: 'Absolutely. We use advanced encryption and work only with RBI-registered partners to ensure your data is always secure.'
  },
  {
    question: 'How do I contact support?',
    answer: 'You can call us, email us, or use the contact form on this page. Our team responds within 2 hours during business hours.'
  },
];

function FAQSection() {
  const [open, setOpen] = React.useState<number | null>(null);
  return (
    <div className="space-y-4">
      {faqs.map((faq, idx) => (
        <motion.div key={faq.question} layout initial={false}>
          <button
            className="w-full flex justify-between items-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
            onClick={() => setOpen(open === idx ? null : idx)}
            aria-expanded={open === idx}
            aria-controls={`faq-panel-${idx}`}
          >
            <span className="font-medium text-gray-800 dark:text-white">{faq.question}</span>
            <ChevronDown className={`h-5 w-5 ml-2 transition-transform ${open === idx ? 'rotate-180' : ''}`} />
          </button>
          <motion.div
            id={`faq-panel-${idx}`}
            initial={false}
            animate={{ height: open === idx ? 'auto' : 0, opacity: open === idx ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className={`overflow-hidden px-6 ${open === idx ? 'py-4' : 'py-0'}`}
            aria-hidden={open !== idx}
          >
            <div className="text-gray-600 dark:text-gray-300 text-sm">{faq.answer}</div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}

function CallSchedulingForm() {
  const [form, setForm] = React.useState({ name: '', phone: '', date: '', time: '' });
  const [submitted, setSubmitted] = React.useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would send the form data to your backend or scheduling service
  };
  return (
    <motion.form
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      onSubmit={handleSubmit}
      className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-white/50 dark:border-gray-700/50 rounded-3xl shadow-xl p-8 space-y-6"
    >
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full bg-white/60 dark:bg-gray-700/60 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
          placeholder="Your Name"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Phone</label>
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          required
          className="w-full bg-white/60 dark:bg-gray-700/60 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
          placeholder="Your Phone Number"
        />
      </div>
      <div className="flex gap-4">
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Preferred Date</label>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
            className="w-full bg-white/60 dark:bg-gray-700/60 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Preferred Time</label>
          <input
            type="time"
            name="time"
            value={form.time}
            onChange={handleChange}
            required
            className="w-full bg-white/60 dark:bg-gray-700/60 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>
      </div>
      <motion.button
        type="submit"
        className="w-full bg-gradient-to-r from-primary-500 to-success-500 text-white px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 shadow-md hover:from-primary-600 hover:to-success-600 transition-all duration-300"
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.98 }}
      >
        📞 Schedule Call
      </motion.button>
      {submitted && (
        <div className="text-green-600 dark:text-green-400 font-semibold mt-4 text-center">Thank you! Your call has been scheduled.</div>
      )}
    </motion.form>
  );
} 