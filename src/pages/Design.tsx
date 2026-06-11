import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Palette, Layout, Layers, Figma, PenTool, Eye } from 'lucide-react';
import { services } from '@/data/content';

const service = services.find(s => s.id === 'design')!;

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

const subServices = [
  { icon: Layout, title: 'Web Design', desc: 'Stunning, responsive website designs that captivate visitors and drive conversions. Every pixel crafted with purpose.' },
  { icon: PenTool, title: 'Graphic Design', desc: 'Eye-catching visuals from flyers to banners, designed to communicate your brand message effectively.' },
  { icon: Figma, title: 'UI/UX Design', desc: 'User-centered interface design that creates intuitive, enjoyable experiences for your customers.' },
  { icon: Eye, title: 'Brand Identity', desc: 'Complete branding packages including logos, color palettes, and visual guidelines that make you memorable.' },
  { icon: Layers, title: 'Design Systems', desc: 'Scalable component libraries and design tokens that ensure consistency across all your digital products.' },
  { icon: Palette, title: 'Print Design', desc: 'Professional print materials including brochures, business cards, and packaging that stand out.' },
];

export default function Design() {
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
          >
            <motion.div variants={fadeUp} custom={0} className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#4a6cf7]" />
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">{service.number} — Our Services</span>
            </motion.div>
            <motion.h1 variants={fadeUp} custom={1} className="font-display text-5xl sm:text-6xl lg:text-7xl text-white max-w-4xl">
              {service.title}
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="mt-6 text-lg text-gray-400 max-w-2xl">
              {service.description} We create visually stunning, user-centric designs that elevate your brand and engage your audience at every touchpoint.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="mt-10">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-[#4a6cf7] hover:bg-[#3a5ce5] text-white font-medium px-7 py-3.5 rounded-lg transition-all">
                Discuss Your Project
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Sub Services */}
      <section className="py-32 bg-[#0a0f1c]">
        <div className="w-full px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="mb-16"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#4a6cf7]" />
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">What We Offer</span>
            </div>
            <h2 className="font-display text-4xl text-white">Our Design Services</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subServices.map((sub, i) => (
              <motion.div
                key={sub.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group p-8 rounded-2xl bg-[#111827] border border-white/5 hover:border-[#4a6cf7]/30 transition-all"
              >
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

      {/* Process */}
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
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">Our Process</span>
            </div>
            <h2 className="font-display text-4xl text-white">How We Work</h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', desc: 'We learn about your brand, goals, and audience to set a clear direction.' },
              { step: '02', title: 'Strategy', desc: 'We create a design strategy that aligns with your business objectives.' },
              { step: '03', title: 'Creation', desc: 'Our designers craft stunning visuals following best design practices.' },
              { step: '04', title: 'Refinement', desc: 'We iterate based on your feedback until everything is perfect.' },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-display text-[#4a6cf7]/20 mb-4">{item.step}</div>
                <h3 className="text-xl font-display text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
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
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.h2 variants={fadeUp} custom={0} className="font-display text-4xl text-white">
              Ready to Transform Your Brand?
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="mt-6 text-gray-400">
              Let's discuss how our design services can elevate your brand presence.
            </motion.p>
            <motion.div variants={fadeUp} custom={2} className="mt-10">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-[#4a6cf7] hover:bg-[#3a5ce5] text-white font-medium px-8 py-4 rounded-lg transition-all text-lg">
                Start a Project
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
