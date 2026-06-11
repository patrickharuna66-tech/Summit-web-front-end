import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Check, ArrowRight, BookOpen, Clock, Globe,
  FileText, Mail, MessageCircle
} from 'lucide-react';
import { courseData, contactInfo } from '@/data/content';
import { useCurrencyContext } from '@/context/CurrencyContext';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

export default function Course() {
  const { formatPrice } = useCurrencyContext();
  const [deliveryMethod, setDeliveryMethod] = useState('email');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    deliveryMethod: 'email',
  });

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-[#4a6cf7]/10 via-transparent to-transparent" />
        <div className="relative z-10 w-full px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
            >
              <motion.div variants={fadeUp} custom={0} className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#4a6cf7]" />
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">Online Course</span>
              </motion.div>
              <motion.h1 variants={fadeUp} custom={1} className="font-display text-5xl sm:text-6xl text-white">
                {courseData.title}
              </motion.h1>
              <motion.p variants={fadeUp} custom={2} className="mt-6 text-lg text-gray-400">
                {courseData.description}
              </motion.p>
              <motion.div variants={fadeUp} custom={3} className="mt-8 flex items-center gap-6">
                <div className="flex items-center gap-2 text-gray-300">
                  <Clock className="w-5 h-5 text-[#4a6cf7]" />
                  <span>Self-paced</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <FileText className="w-5 h-5 text-[#4a6cf7]" />
                  <span>PDF Format</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Globe className="w-5 h-5 text-[#4a6cf7]" />
                  <span>Online Access</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Price Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="rounded-2xl bg-[#111827] border border-white/5 p-8 max-w-md ml-auto"
            >
              <div className="text-center">
                <div className="text-sm text-gray-400 mb-2">One-time payment</div>
                <div className="text-5xl font-bold text-white font-display">
                  {formatPrice(courseData.priceUSD)}
                </div>
                <div className="text-sm text-gray-500 mt-1">{courseData.paymentType}</div>
              </div>

              <div className="mt-8 space-y-3">
                {courseData.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#4a6cf7] shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 space-y-3">
                <button className="w-full py-4 rounded-xl bg-[#4a6cf7] hover:bg-[#3a5ce5] text-white font-semibold transition-all flex items-center justify-center gap-2">
                  Buy Course Now
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button className="w-full py-4 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium transition-all flex items-center justify-center gap-2">
                  Download Syllabus
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-32 bg-[#0a0f1c]">
        <div className="w-full px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
            >
              <motion.div variants={fadeUp} custom={0} className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#4a6cf7]" />
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">Curriculum</span>
              </motion.div>
              <motion.h2 variants={fadeUp} custom={1} className="font-display text-4xl text-white mb-8">
                What You Will Learn
              </motion.h2>
              <motion.div variants={fadeUp} custom={2} className="space-y-4">
                {courseData.whatYouWillLearn.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-[#111827] border border-white/5">
                    <div className="p-2 rounded-lg bg-[#4a6cf7]/10 text-[#4a6cf7] shrink-0">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden border border-white/10"
            >
              <img
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80"
                alt="Digital Marketing Course"
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enroll Form */}
      <section className="py-32 bg-black">
        <div className="w-full px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
            className="max-w-2xl mx-auto"
          >
            <motion.div variants={fadeUp} custom={0} className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#4a6cf7]" />
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">Enroll Now</span>
              </div>
              <h2 className="font-display text-4xl text-white">Get Instant Access</h2>
              <p className="mt-4 text-gray-400">
                Fill in your details and choose your delivery method. You'll receive the course material instantly after payment.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} custom={1} className="rounded-2xl bg-[#111827] border border-white/5 p-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#1f2937] border border-[#374151] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4a6cf7] focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#1f2937] border border-[#374151] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4a6cf7] focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number (for WhatsApp delivery)</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#1f2937] border border-[#374151] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4a6cf7] focus:border-transparent"
                    placeholder="+234..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">Delivery Method</label>
                  <div className="grid grid-cols-2 gap-3">
                    {courseData.deliveryOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => {
                          setDeliveryMethod(option.value);
                          setFormData({ ...formData, deliveryMethod: option.value });
                        }}
                        className={`p-4 rounded-xl border text-left transition-all ${
                          deliveryMethod === option.value
                            ? 'border-[#4a6cf7] bg-[#4a6cf7]/10'
                            : 'border-[#374151] bg-[#1f2937] hover:border-white/20'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          {option.value === 'email' ? (
                            <Mail className="w-4 h-4 text-[#4a6cf7]" />
                          ) : (
                            <MessageCircle className="w-4 h-4 text-green-500" />
                          )}
                          <span className="text-white text-sm font-medium">{option.label}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <button className="w-full py-4 rounded-xl bg-[#4a6cf7] hover:bg-[#3a5ce5] text-white font-semibold transition-all flex items-center justify-center gap-2 text-lg">
                  Buy Now — {formatPrice(courseData.priceUSD)}
                  <ArrowRight className="w-5 h-5" />
                </button>

                <p className="text-center text-xs text-gray-500">
                  Secure payment via Flutterwave. Instant delivery after payment confirmation.
                </p>
              </div>
            </motion.div>
          </motion.div>
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
            <motion.div variants={fadeUp} custom={0} className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#4a6cf7]/10 text-[#4a6cf7] mb-6">
              <BookOpen className="w-8 h-8" />
            </motion.div>
            <motion.h2 variants={fadeUp} custom={1} className="font-display text-4xl text-white">
              Start Learning Today
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="mt-4 text-gray-400">
              Invest in your business growth. This course gives you the tools and knowledge to succeed in the digital marketplace.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href={contactInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-lg transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                Ask Questions on WhatsApp
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
