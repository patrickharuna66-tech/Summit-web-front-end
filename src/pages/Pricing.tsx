import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, X, ArrowRight, ChevronDown, MessageCircle } from 'lucide-react';
import { pricingPlans, faqs, contactInfo } from '@/data/content';
import { useCurrencyContext } from '@/context/CurrencyContext';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

export default function Pricing() {
  const { formatPrice } = useCurrencyContext();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-[#4a6cf7]/5 via-transparent to-transparent" />
        <div className="relative z-10 w-full px-6 lg:px-12">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div variants={fadeUp} custom={0} className="flex items-center justify-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#4a6cf7]" />
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">Pricing</span>
            </motion.div>
            <motion.h1 variants={fadeUp} custom={1} className="font-display text-5xl sm:text-6xl text-white">
              Choose Your Perfect Plan
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="mt-6 text-lg text-gray-400">
              Transparent pricing, no hidden fees. Select the plan that fits your business needs and start growing today.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-[#0a0f1c]">
        <div className="w-full px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pricingPlans.map((plan, i) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative rounded-2xl p-8 ${
                  plan.popular
                    ? 'bg-gradient-to-b from-[#4a6cf7]/20 to-[#111827] border-2 border-[#4a6cf7]'
                    : 'bg-[#111827] border border-white/5'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#4a6cf7] text-white text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider">
                    Most Popular
                  </div>
                )}

                <h3 className="text-2xl font-display text-white">{plan.name}</h3>
                <p className="mt-2 text-sm text-gray-400">{plan.description}</p>

                <div className="mt-6">
                  <span className="text-4xl font-bold text-white font-display">
                    {formatPrice(plan.priceUSD)}
                  </span>
                  <span className="text-gray-500 text-sm ml-2">{plan.period}</span>
                </div>

                <ul className="mt-8 space-y-3">
                  {plan.features.map((feature, fi) => (
                    <li key={fi} className="flex items-start gap-3 text-sm">
                      {feature.included ? (
                        <Check className="w-4 h-4 text-[#4a6cf7] shrink-0 mt-0.5" />
                      ) : (
                        <X className="w-4 h-4 text-gray-600 shrink-0 mt-0.5" />
                      )}
                      <span className={feature.included ? 'text-gray-300' : 'text-gray-600'}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`mt-8 w-full py-3.5 rounded-lg font-medium transition-all ${
                    plan.popular
                      ? 'bg-[#4a6cf7] hover:bg-[#3a5ce5] text-white'
                      : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                  }`}
                >
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>

          {/* Custom Plan CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link
              to="/custom-plan"
              className="inline-flex items-center gap-2 text-[#4a6cf7] hover:text-[#7b95ff] font-medium transition-colors group"
            >
              Need a custom plan? Build your own
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* All Features Comparison */}
      <section className="py-32 bg-black">
        <div className="w-full px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#4a6cf7]" />
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">Comparison</span>
            </div>
            <h2 className="font-display text-4xl text-white">Compare All Features</h2>
          </motion.div>

          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-4 text-sm font-medium text-gray-400">Feature</th>
                  {pricingPlans.map((plan) => (
                    <th key={plan.id} className="text-center py-4 px-4 text-sm font-medium text-white">
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  'Branding Consultations',
                  'Branded Flyers',
                  'Link In Bio',
                  'AI Setup',
                  'Website Design',
                  'Social Media Setup',
                  'Social Media Management',
                  'S.E.O.',
                  'Professional Logo',
                  'Unlimited Q&A',
                  'Priority Support',
                ].map((feature) => (
                  <tr key={feature} className="border-b border-white/5">
                    <td className="py-4 px-4 text-sm text-gray-300">{feature}</td>
                    {pricingPlans.map((plan) => {
                      const hasFeature = plan.features.some(
                        (f) => f.text.toLowerCase().includes(feature.toLowerCase()) && f.included
                      );
                      return (
                        <td key={plan.id} className="text-center py-4 px-4">
                          {hasFeature ? (
                            <Check className="w-5 h-5 text-[#4a6cf7] mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-gray-700 mx-auto" />
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faqs" className="py-32 bg-[#0a0f1c]">
        <div className="w-full px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#4a6cf7]" />
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">FAQs</span>
            </div>
            <h2 className="font-display text-4xl text-white">Frequently Asked Questions</h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-xl bg-[#111827] border border-white/5 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="text-white font-medium">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 shrink-0 transition-transform ${
                      openFaq === i ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-gray-400 text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-32 bg-black">
        <div className="w-full px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
            className="text-center max-w-2xl mx-auto"
          >
            <motion.div variants={fadeUp} custom={0} className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#4a6cf7]/10 text-[#4a6cf7] mb-6">
              <MessageCircle className="w-8 h-8" />
            </motion.div>
            <motion.h2 variants={fadeUp} custom={1} className="font-display text-4xl text-white">
              Still Have Questions?
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="mt-4 text-gray-400">
              Our team is here to help. Reach out via WhatsApp or email and we'll get back to you within minutes.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href={contactInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-lg transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="inline-flex items-center gap-2 bg-[#4a6cf7] hover:bg-[#3a5ce5] text-white font-medium px-6 py-3 rounded-lg transition-all"
              >
                Email Us
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
