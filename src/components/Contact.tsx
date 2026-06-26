/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Linkedin, Github, Send, Copy, Check, MessageSquare, AlertCircle } from 'lucide-react';
import { ownerDetails } from '../data';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Email Copy Controller
  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(ownerDetails.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  // Inline Validation
  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject line is required.';
    if (!formData.message.trim()) {
      newErrors.message = 'Please type a message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Form Submission
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate API delivery
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="py-24 bg-[#F8F9FB] dark:bg-[#080B11] border-t border-gray-100/40 dark:border-gray-900/40 relative overflow-hidden"
    >
      {/* Dynamic blurs */}
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] rounded-full bg-blue-100/10 dark:bg-blue-900/5 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 font-bold">
              08 / CONNECTION
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-black text-gray-900 dark:text-white mt-2">
              Let's Connect
            </h2>
          </div>
          <p className="text-xs font-mono text-gray-400 dark:text-gray-500 uppercase">
            // Start a conversation
          </p>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Block: Social channels, Copyable Email */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 md:p-8 rounded-[24px] bg-white dark:bg-gray-800/20 border border-gray-200/50 dark:border-gray-800/40 shadow-sm">
              <h3 className="text-lg font-display font-bold text-gray-900 dark:text-white mb-4">
                Chat or Collaborate
              </h3>
              <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-8">
                Whether you have a full stack development opening, an algorithmic machine learning objective, 
                or just want to talk shop about data pipelines — my inbox is always open.
              </p>

              {/* Email Copier */}
              <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-800/40 border border-gray-100 dark:border-gray-800/50 flex items-center justify-between gap-4 mb-8">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[10px] font-mono text-gray-400 block uppercase">Email Address</span>
                    <span className="text-xs md:text-sm font-semibold text-gray-800 dark:text-white truncate block">
                      {ownerDetails.email}
                    </span>
                  </div>
                </div>

                <button
                  id="contact-copy-email"
                  onClick={copyEmailToClipboard}
                  className="p-2.5 rounded-xl bg-white border border-gray-200 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-300 transition-all cursor-pointer shadow-sm relative active:scale-95"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Social Channels list */}
              <div className="space-y-3">
                <span className="text-[10px] font-mono uppercase text-gray-400 tracking-wider block mb-1">
                  Social Channels
                </span>
                
                {/* LinkedIn */}
                <a
                  href={ownerDetails.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl border border-gray-200/50 hover:border-blue-500/30 hover:bg-blue-50/5 dark:border-gray-800/40 dark:hover:border-blue-500/20 dark:hover:bg-blue-500/5 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-5 h-5 text-blue-600" />
                    <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">LinkedIn</span>
                  </div>
                  <span className="text-[10px] font-mono text-gray-400 group-hover:text-blue-600 transition-colors">
                    linkedin.com/in/avikam-manoj-world1822
                  </span>
                </a>

                {/* GitHub */}
                <a
                  href={ownerDetails.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl border border-gray-200/50 hover:border-gray-950/30 hover:bg-gray-50 dark:border-gray-800/40 dark:hover:border-white/20 dark:hover:bg-white/5 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Github className="w-5 h-5 text-gray-900 dark:text-white" />
                    <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">GitHub</span>
                  </div>
                  <span className="text-[10px] font-mono text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                    github.com/avikammanoj1-stack
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Block: Professional Contact Form */}
          <div className="lg:col-span-7">
            <form
              id="contact-form"
              onSubmit={handleSubmit}
              className="p-6 md:p-8 rounded-[24px] bg-white dark:bg-gray-800/20 border border-gray-200/50 dark:border-gray-800/40 shadow-sm space-y-5"
              noValidate
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-mono font-bold text-gray-500 dark:text-gray-400">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: '' });
                    }}
                    placeholder="Enter name"
                    className={`w-full px-4 py-3 rounded-xl text-xs bg-gray-50 dark:bg-gray-800/30 border text-gray-800 dark:text-white focus:outline-none focus:ring-1 transition-all ${
                      errors.name
                        ? 'border-red-400 focus:ring-red-400'
                        : 'border-gray-200 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-800'
                    }`}
                  />
                  {errors.name && (
                    <span className="text-[10px] text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.name}
                    </span>
                  )}
                </div>

                {/* Email address */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-mono font-bold text-gray-500 dark:text-gray-400">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: '' });
                    }}
                    placeholder="name@example.com"
                    className={`w-full px-4 py-3 rounded-xl text-xs bg-gray-50 dark:bg-gray-800/30 border text-gray-800 dark:text-white focus:outline-none focus:ring-1 transition-all ${
                      errors.email
                        ? 'border-red-400 focus:ring-red-400'
                        : 'border-gray-200 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-800'
                    }`}
                  />
                  {errors.email && (
                    <span className="text-[10px] text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                    </span>
                  )}
                </div>
              </div>

              {/* Subject line */}
              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-xs font-mono font-bold text-gray-500 dark:text-gray-400">
                  Subject Line
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => {
                    setFormData({ ...formData, subject: e.target.value });
                    if (errors.subject) setErrors({ ...errors, subject: '' });
                  }}
                  placeholder="How can I help you?"
                  className={`w-full px-4 py-3 rounded-xl text-xs bg-gray-50 dark:bg-gray-800/30 border text-gray-800 dark:text-white focus:outline-none focus:ring-1 transition-all ${
                    errors.subject
                      ? 'border-red-400 focus:ring-red-400'
                      : 'border-gray-200 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-800'
                  }`}
                />
                {errors.subject && (
                  <span className="text-[10px] text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" /> {errors.subject}
                  </span>
                )}
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-mono font-bold text-gray-500 dark:text-gray-400">
                  Detailed Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (errors.message) setErrors({ ...errors, message: '' });
                  }}
                  placeholder="Type your message details here..."
                  className={`w-full px-4 py-3 rounded-xl text-xs bg-gray-50 dark:bg-gray-800/30 border text-gray-800 dark:text-white focus:outline-none focus:ring-1 transition-all resize-none ${
                    errors.message
                      ? 'border-red-400 focus:ring-red-400'
                      : 'border-gray-200 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-800'
                  }`}
                />
                {errors.message && (
                  <span className="text-[10px] text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" /> {errors.message}
                  </span>
                )}
              </div>

              {/* Status Notifications */}
              <AnimatePresence>
                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="p-4 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-100 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/10 text-xs flex items-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4 shrink-0" />
                    <span>Message received successfully! I will get back to you shortly.</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit Button */}
              <button
                type="submit"
                id="contact-form-submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#111827] text-white dark:bg-white dark:text-gray-900 font-medium text-xs hover:bg-gray-800 dark:hover:bg-gray-100 transition-all shadow-md cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <div className="w-4 h-4 border-2 border-white dark:border-gray-900 border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
