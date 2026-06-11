import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Phone, Mail, MapPin, Clock, MessageCircle,
  Send, ArrowRight, CheckCircle
} from 'lucide-react';
import { contactInfo } from '@/data/content';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-[#4a6cf7]/5 via-transparent to-transparent" />
        <div className="relative z-10 w-full px-6 lg:px-12">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div variants={fadeUp} custom={0} className="flex items-center justify-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#4a6cf7]" />
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">Contact</span>
            </motion.div>
            <motion.h1 variants={fadeUp} custom={1} className="font-display text-5xl sm:text-6xl text-white">
              Let's Start a Conversation
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="mt-6 text-lg text-gray-400">
              Ready to transform your digital presence? Get in touch and let's discuss how we can help your business grow.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-[#0a0f1c]">
        <div className="w-full px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Phone, label: 'Phone', value: contactInfo.phone, href: `tel:${contactInfo.phone}`, color: 'text-green-400' },
              { icon: Mail, label: 'Email', value: contactInfo.email, href: `mailto:${contactInfo.email}`, color: 'text-[#4a6cf7]' },
              { icon: MapPin, label: 'Address', value: contactInfo.address, href: '#', color: 'text-red-400' },
              { icon: Clock, label: 'Hours', value: contactInfo.hours, href: '#', color: 'text-yellow-400' },
            ].map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group p-6 rounded-2xl bg-[#111827] border border-white/5 hover:border-[#4a6cf7]/30 transition-all"
              >
                <div className={`p-3 rounded-xl bg-white/5 w-fit mb-4 ${item.color}`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <div className="text-sm text-gray-500 mb-1">{item.label}</div>
                <div className="text-white font-medium">{item.value}</div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form + WhatsApp */}
      <section className="py-32 bg-black">
        <div className="w-full px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
            >
              <motion.div variants={fadeUp} custom={0} className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#4a6cf7]" />
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">Send a Message</span>
              </motion.div>
              <motion.h2 variants={fadeUp} custom={1} className="font-display text-3xl text-white mb-8">
                We'd Love to Hear From You
              </motion.h2>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl bg-green-500/10 border border-green-500/20 text-center"
                >
                  <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <h3 className="text-xl font-display text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-400">We'll get back to you within minutes.</p>
                </motion.div>
              ) : (
                <motion.form variants={fadeUp} custom={2} onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#111827] border border-[#374151] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4a6cf7] focus:border-transparent"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#111827] border border-[#374151] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4a6cf7] focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#111827] border border-[#374151] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4a6cf7] focus:border-transparent"
                      placeholder="How can we help?"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#111827] border border-[#374151] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4a6cf7] focus:border-transparent resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#4a6cf7] hover:bg-[#3a5ce5] text-white font-semibold transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </motion.form>
              )}
            </motion.div>

            {/* WhatsApp CTA */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center"
            >
              <div className="rounded-2xl bg-gradient-to-br from-green-600/20 to-green-900/20 border border-green-500/20 p-8">
                <div className="p-4 rounded-2xl bg-green-600/20 w-fit mb-6">
                  <MessageCircle className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-display text-white mb-4">
                  Prefer WhatsApp?
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Chat with us directly on WhatsApp for instant responses. Our team typically replies within 1 minute during business hours.
                </p>
                <a
                  href={contactInfo.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-medium px-8 py-4 rounded-xl transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
              </div>

              {/* Quick Links */}
              <div className="mt-8 space-y-4">
                <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Quick Links</h4>
                {[
                  { label: 'View Pricing Plans', href: '/pricing' },
                  { label: 'Build a Custom Plan', href: '/custom-plan' },
                  { label: 'Browse Our Course', href: '/course' },
                ].map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="flex items-center justify-between p-4 rounded-xl bg-[#111827] border border-white/5 hover:border-[#4a6cf7]/30 transition-all group"
                  >
                    <span className="text-gray-300 group-hover:text-white transition-colors">{link.label}</span>
                    <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-[#4a6cf7] group-hover:translate-x-1 transition-all" />
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-[#0a0f1c]">
        <div className="w-full px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.h2 variants={fadeUp} custom={0} className="font-display text-4xl text-white">
              Ready to Reach Your Summit?
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="mt-6 text-lg text-gray-400">
              Your digital transformation starts with a single conversation. Let's make it happen.
            </motion.p>
            <motion.div variants={fadeUp} custom={2} className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                to="/pricing"
                className="inline-flex items-center gap-2 bg-[#4a6cf7] hover:bg-[#3a5ce5] text-white font-medium px-8 py-4 rounded-lg transition-all text-lg"
              >
                View Pricing
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={contactInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-medium px-8 py-4 rounded-lg transition-all text-lg"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
