import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Plus, Minus, ShoppingCart, Trash2, ArrowRight,
  Palette, Globe, Search, PenTool, Megaphone, Share2,
  Cpu,
} from 'lucide-react';
import { customPlanServices } from '@/data/content';
import { useCurrencyContext } from '@/context/CurrencyContext';
import { useCartContext } from '@/context/CartContext';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

const iconMap: Record<string, React.ElementType> = {
  'branding-consultation': Palette,
  'business-consultation': Globe,
  'logo-design': PenTool,
  'essential-ai': Cpu,
  'growth-ai': Cpu,
  'premium-ai': Cpu,
  'flyer-design': PenTool,
  'seo': Search,
  'mini-website': Globe,
  'advanced-website': Globe,
  'premium-website': Globe,
  'social-media-management': Share2,
  'social-media-optimization': Share2,
  'telegram-members': Megaphone,
  'advertisement': Megaphone,
};

export default function CustomPlan() {
  const { formatPrice } = useCurrencyContext();
  const { items, addItem, removeItem, clearCart, getItemQuantity, totalUSD } = useCartContext();
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
          >
            <motion.div variants={fadeUp} custom={0} className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#4a6cf7]" />
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">Custom Plan</span>
            </motion.div>
            <motion.h1 variants={fadeUp} custom={1} className="font-display text-5xl sm:text-6xl text-white max-w-4xl">
              Build Your Perfect Plan
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="mt-6 text-lg text-gray-400 max-w-2xl">
              Pick only the services you need. No bundled services — pay for exactly what your business requires.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="mt-6 flex items-center gap-4">
              <Link to="/pricing" className="text-[#4a6cf7] hover:text-[#7b95ff] font-medium transition-colors inline-flex items-center gap-1">
                View Pre-built Plans <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid + Cart */}
      <section className="py-20 bg-[#0a0f1c]">
        <div className="w-full px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Services Grid */}
            <div className="flex-1">
              <div className="grid md:grid-cols-2 gap-4">
                {customPlanServices.map((service, i) => {
                  const qty = getItemQuantity(service.id);
                  const Icon = iconMap[service.id] || Palette;

                  return (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.04 }}
                      className={`group p-6 rounded-2xl border transition-all duration-200 cursor-pointer ${
                        qty > 0
                          ? 'bg-[#4a6cf7]/10 border-[#4a6cf7]/40'
                          : 'bg-[#111827] border-white/5 hover:border-white/15'
                      }`}
                      onClick={() => {
                        if (qty === 0) {
                          addItem({
                            id: service.id,
                            name: service.name,
                            description: service.description,
                            priceUSD: service.priceUSD,
                          });
                        }
                      }}
                    >
                      <div className="flex items-start justify-between">
                        <div className="p-2.5 rounded-xl bg-[#4a6cf7]/10 text-[#4a6cf7]">
                          <Icon className="w-5 h-5" />
                        </div>
                        {qty > 0 && (
                          <span className="px-2.5 py-1 rounded-full bg-[#4a6cf7] text-white text-xs font-semibold">
                            {qty}x
                          </span>
                        )}
                      </div>

                      <h3 className="mt-4 text-lg font-display text-white group-hover:text-[#7b95ff] transition-colors">
                        {service.name}
                      </h3>
                      <p className="mt-1 text-sm text-gray-400 line-clamp-2">{service.description}</p>

                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-xl font-bold text-white font-display">
                          {formatPrice(service.priceUSD)}
                        </span>

                        {qty > 0 ? (
                          <div className="flex items-center gap-2">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                removeItem(service.id);
                              }}
                              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="text-white font-semibold w-6 text-center">{qty}</span>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                addItem({
                                  id: service.id,
                                  name: service.name,
                                  description: service.description,
                                  priceUSD: service.priceUSD,
                                });
                              }}
                              className="p-2 rounded-lg bg-[#4a6cf7] hover:bg-[#3a5ce5] text-white transition-colors"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              addItem({
                                id: service.id,
                                name: service.name,
                                description: service.description,
                                priceUSD: service.priceUSD,
                              });
                            }}
                            className="p-2 rounded-lg bg-white/5 hover:bg-[#4a6cf7] text-gray-400 hover:text-white transition-all"
                          >
                            <Plus className="w-5 h-5" />
                          </button>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Sticky Cart Sidebar */}
            <div className="lg:w-96 shrink-0">
              <div className="lg:sticky lg:top-28">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="rounded-2xl bg-[#111827] border border-white/5 p-6"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <ShoppingCart className="w-5 h-5 text-[#4a6cf7]" />
                      <h3 className="text-lg font-display text-white">Your Cart</h3>
                    </div>
                    {items.length > 0 && (
                      <button
                        onClick={clearCart}
                        className="text-sm text-gray-500 hover:text-red-400 transition-colors flex items-center gap-1"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        Clear
                      </button>
                    )}
                  </div>

                  {items.length === 0 ? (
                    <div className="text-center py-12">
                      <ShoppingCart className="w-12 h-12 text-gray-700 mx-auto mb-4" />
                      <p className="text-gray-500">Your cart is empty</p>
                      <p className="text-sm text-gray-600 mt-1">Click on services to add them</p>
                    </div>
                  ) : (
                    <>
                      <div className="space-y-3 max-h-80 overflow-y-auto pr-1">
                        <AnimatePresence mode="popLayout">
                          {items.map((item) => (
                            <motion.div
                              key={item.id}
                              layout
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="flex items-center justify-between p-3 rounded-xl bg-white/5"
                            >
                              <div className="flex-1 min-w-0">
                                <p className="text-sm text-white truncate">{item.name}</p>
                                <p className="text-xs text-gray-500">{formatPrice(item.priceUSD)} each</p>
                              </div>
                              <div className="flex items-center gap-2 ml-3">
                                <button
                                  onClick={() => removeItem(item.id)}
                                  className="p-1 rounded hover:bg-white/10 text-gray-400"
                                >
                                  <Minus className="w-3 h-3" />
                                </button>
                                <span className="text-sm text-white w-4 text-center">{item.quantity}</span>
                                <button
                                  onClick={() =>
                                    addItem({
                                      id: item.id,
                                      name: item.name,
                                      description: item.description,
                                      priceUSD: item.priceUSD,
                                    })
                                  }
                                  className="p-1 rounded hover:bg-white/10 text-gray-400"
                                >
                                  <Plus className="w-3 h-3" />
                                </button>
                              </div>
                            </motion.div>
                          ))}
                        </AnimatePresence>
                      </div>

                      <div className="mt-6 pt-6 border-t border-white/10">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-gray-400">Subtotal</span>
                          <span className="text-gray-300">{formatPrice(totalUSD)}</span>
                        </div>
                        <div className="flex items-center justify-between text-lg font-semibold">
                          <span className="text-white">Total</span>
                          <span className="text-[#4a6cf7] font-display text-2xl">{formatPrice(totalUSD)}</span>
                        </div>
                      </div>

                      <button className="mt-6 w-full py-4 rounded-xl bg-[#4a6cf7] hover:bg-[#3a5ce5] text-white font-semibold transition-all flex items-center justify-center gap-2">
                        Proceed to Checkout
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </>
                  )}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
