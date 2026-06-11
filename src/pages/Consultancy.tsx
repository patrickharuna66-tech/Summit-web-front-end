import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ClipboardCheck, Database, Lightbulb, BrainCircuit, FileCheck, BarChart } from 'lucide-react';
import { services } from '@/data/content';

const service = services.find(s => s.id === 'consultancy')!;

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

const subServices = [
  { icon: ClipboardCheck, title: 'ISO Compliance', desc: 'Navigate ISO certification with expert guidance and documentation support.' },
  { icon: Database, title: 'GDPR Compliance', desc: 'Ensure your data handling practices meet GDPR requirements and avoid penalties.' },
  { icon: BrainCircuit, title: 'Digital Transformation', desc: 'Strategic roadmaps to modernize your operations and embrace digital technologies.' },
  { icon: Lightbulb, title: 'AI Strategy', desc: 'Practical AI implementation plans that deliver ROI without the hype.' },
  { icon: BarChart, title: 'Business Analysis', desc: 'Data-driven insights to identify opportunities and optimize performance.' },
  { icon: FileCheck, title: 'Process Optimization', desc: 'Streamline workflows and eliminate inefficiencies across your organization.' },
];

export default function Consultancy() {
  return (
    <div>
      <section className="relative pt-32 pb-20 bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-[#4a6cf7]/5 via-transparent to-transparent" />
        <div className="relative z-10 w-full px-6 lg:px-12">
          <motion.div initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.div variants={fadeUp} custom={0} className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#4a6cf7]" />
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">{service.number} — Our Services</span>
            </motion.div>
            <motion.h1 variants={fadeUp} custom={1} className="font-display text-5xl sm:text-6xl lg:text-7xl text-white max-w-4xl">
              {service.title}
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="mt-6 text-lg text-gray-400 max-w-2xl">
              {service.description} We provide valuable, cost-effective consultancy to improve efficiency and facilitate compliance in crucial business areas.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="mt-10">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-[#4a6cf7] hover:bg-[#3a5ce5] text-white font-medium px-7 py-3.5 rounded-lg transition-all">
                Book a Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-32 bg-[#0a0f1c]">
        <div className="w-full px-6 lg:px-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="mb-16">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#4a6cf7]" />
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">What We Offer</span>
            </div>
            <h2 className="font-display text-4xl text-white">Our Consultancy Services</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subServices.map((sub, i) => (
              <motion.div key={sub.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="group p-8 rounded-2xl bg-[#111827] border border-white/5 hover:border-[#4a6cf7]/30 transition-all">
                <div className="p-3 rounded-xl bg-[#4a6cf7]/10 text-[#4a6cf7] w-fit mb-4">
                  <sub.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display text-white group-hover:text-[#7b95ff] transition-colors">{sub.title}</h3>
                <p className="mt-2 text-sm text-gray-400 leading-relaxed">{sub.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-black">
        <div className="w-full px-6 lg:px-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }} className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeUp} custom={0}>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#4a6cf7]" />
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">Our Approach</span>
              </div>
              <h2 className="font-display text-4xl text-white mb-6">
                Practical Advice, Real Results
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                We cut through the jargon and provide actionable advice that delivers measurable results. Our consultants bring years of industry experience to every engagement.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Whether you need help with compliance, digital transformation, or process optimization, we work alongside your team to implement solutions that stick.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} custom={1} className="rounded-2xl overflow-hidden border border-white/10">
              <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80" alt="Consultancy" className="w-full h-auto object-cover" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-32 bg-[#0a0f1c]">
        <div className="w-full px-6 lg:px-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }} className="text-center max-w-3xl mx-auto">
            <motion.h2 variants={fadeUp} custom={0} className="font-display text-4xl text-white">
              Need Expert Guidance?
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="mt-6 text-gray-400">
              Let's discuss how our consultancy services can help your business thrive.
            </motion.p>
            <motion.div variants={fadeUp} custom={2} className="mt-10">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-[#4a6cf7] hover:bg-[#3a5ce5] text-white font-medium px-8 py-4 rounded-lg transition-all text-lg">
                Book a Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
