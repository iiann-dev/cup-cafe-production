import { useState } from 'react';
import { MENU_CATEGORIES } from '../data';
import { motion } from 'framer-motion';

const fadeUp = { initial: { y: 30, opacity: 0 }, whileInView: { y: 0, opacity: 1 }, viewport: { once: true, margin: '-40px' }, transition: { duration: 0.6 } };

export default function MenuView() {
  const [activeCategory, setActiveCategory] = useState(MENU_CATEGORIES[0].id);

  return (
    <div className="px-margin-desktop max-w-screen-2xl mx-auto pt-12">
      <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="mb-section-gap">
        <span className="font-decorative-note text-secondary block mb-2 italic">handcrafted with love</span>
        <h1 className="font-display-lg text-display-lg text-primary">Our <span className="italic text-secondary">Menu</span></h1>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-gutter">
        <aside className="lg:w-64 shrink-0">
          <div className="lg:sticky lg:top-32 flex lg:flex-col gap-4 overflow-x-auto pb-4 lg:pb-0">
            {MENU_CATEGORIES.map((cat, i) => (
              <motion.button
                key={cat.id}
                initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: i * 0.08 }}
                onClick={() => setActiveCategory(cat.id)}
                className={`font-label-sm text-label-sm px-5 py-3 rounded-full whitespace-nowrap transition-all ${
                  activeCategory === cat.id
                    ? 'bg-secondary text-on-secondary shadow-lg'
                    : 'hover:bg-surface-container-low text-on-surface-variant'
                }`}
              >
                {cat.label}
              </motion.button>
            ))}
          </div>
        </aside>

        <div className="flex-1 space-y-section-gap">
          {MENU_CATEGORIES.filter(c => c.id === activeCategory).map(cat => (
            <motion.section key={cat.id} {...fadeUp} className="scroll-mt-32">
              <div className="flex items-center justify-between mb-12">
                <div>
                  <span className="font-decorative-note text-secondary block mb-2">{cat.note}</span>
                  <h2 className="font-headline-lg text-headline-lg italic">{cat.label}</h2>
                </div>
                <div className="h-px flex-1 mx-8 bg-outline-variant/30" />
              </div>

              {/* GRID layout */}
              {cat.layout === 'grid' && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
                  {cat.items.map((item, i) => (
                    <motion.div key={i} initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}
                      className="group bg-accent-cream/30 p-4 rounded-3xl hover:shadow-2xl transition-all duration-500 border border-outline-variant/10"
                    >
                      <div className="relative overflow-hidden rounded-2xl aspect-square mb-6 bg-surface-container-highest flex items-center justify-center">
                        <span className="font-decorative-note text-on-surface-variant text-sm italic opacity-60">Fresh daily</span>
                      </div>
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-headline-md text-[24px]">{item.name}</h4>
                        <span className="font-headline-md text-secondary text-[20px]">{item.price}</span>
                      </div>
                      <p className="font-body-md text-on-surface-variant text-sm mb-4">{item.description}</p>
                      <button className="w-full py-3 rounded-xl border border-outline-variant hover:border-secondary hover:bg-secondary hover:text-white transition-all flex items-center justify-center gap-2 font-label-sm">
                        <span className="material-symbols-outlined text-[18px]">add_circle</span> Add to Order
                      </button>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* ASYMMETRIC — Coffee */}
              {cat.layout === 'asymmetric' && cat.id === 'coffee' && (
                <div className="space-y-16">
                  <div className="grid grid-cols-12 gap-gutter">
                    <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                      className="col-span-12 md:col-span-7 bg-surface-container-low rounded-[40px] p-10 flex flex-col justify-center relative overflow-hidden editorial-shadow"
                    >
                      <div className="relative z-10 max-w-sm">
                        <h3 className="font-display-md text-headline-lg mb-4">Our Signature <span className="text-secondary italic">Flat White</span></h3>
                        <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">Double shot of our artisan roast, perfectly micro-foamed milk for a silky, velvety finish.</p>
                        <div className="space-y-4">
                          {[
                            { size: 'Regular (12oz)', price: '$4.50' },
                            { size: 'Large (16oz)', price: '$5.25' },
                          ].map((s, i) => (
                            <div key={i} className="flex justify-between border-b border-outline-variant pb-2">
                              <span className="font-label-sm">{s.size}</span>
                              <span className="font-headline-md">{s.price}</span>
                            </div>
                          ))}
                        </div>
                        <button className="mt-8 bg-secondary text-white px-10 py-4 rounded-full font-label-sm hover:scale-95 transition-transform">Customize & Order</button>
                      </div>
                    </motion.div>
                    <div className="col-span-12 md:col-span-5 grid grid-cols-1 gap-gutter">
                      {cat.items.filter(i => i.name !== 'Signature Flat White').slice(0, 2).map((item, i) => (
                        <motion.div key={i} initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                          className="bg-accent-cream/30 p-6 rounded-3xl flex gap-6 group hover:shadow-xl transition-all cursor-pointer"
                        >
                          <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0 bg-surface-container flex items-center justify-center font-decorative-note text-xs italic opacity-60">
                            {item.name.split(' ')[0]}
                          </div>
                          <div>
                            <h4 className="font-headline-md text-xl mb-1">{item.name}</h4>
                            <p className="font-body-md text-sm text-on-surface-variant mb-4">{item.description}</p>
                            <div className="flex items-center justify-between">
                              <span className="font-headline-md">{item.price}</span>
                              <button className="material-symbols-outlined text-secondary hover:scale-125 transition-transform">add_circle</button>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {cat.items.filter(i => i.name !== 'Signature Flat White').slice(2).map((item, i) => (
                      <motion.div key={i} initial={{ y: 15, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                        className="flex justify-between items-center border-b border-outline-variant/30 pb-4"
                      >
                        <div>
                          <h5 className="font-headline-md text-lg">{item.name}</h5>
                          <p className="text-xs font-label-sm opacity-60">{item.description}</p>
                        </div>
                        <span className="font-headline-md text-secondary">{item.price}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* ASYMMETRIC — Burgers */}
              {cat.layout === 'asymmetric' && cat.id === 'burgers' && (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
                  <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                    className="md:col-span-8 bg-surface-container-low rounded-[40px] p-8 md:p-12 flex flex-col md:flex-row gap-10 items-center editorial-shadow"
                  >
                    <div className="w-full md:w-1/2 aspect-square rounded-[32px] overflow-hidden bg-surface-container-high flex items-center justify-center font-decorative-note text-sm italic shadow-2xl">
                      <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=85&auto=format" alt="Wagyu burger" />
                    </div>
                    <div className="w-full md:w-1/2">
                      <span className="bg-secondary text-white px-3 py-1 rounded-full text-[11px] font-label-sm inline-block mb-4">THE MASTERPIECE</span>
                      <h3 className="font-display-md text-[42px] leading-tight mb-4 italic">The Wagyu Signature</h3>
                      <p className="font-body-md text-on-surface-variant mb-6">American Wagyu, aged cheddar, bone marrow butter, caramelized shallots, house pickles.</p>
                      <div className="flex items-center gap-6">
                        <span className="font-headline-md text-3xl">$19.00</span>
                        <button className="bg-secondary text-white px-8 py-3 rounded-full font-label-sm hover:bg-primary transition-all">Add to Cart</button>
                      </div>
                    </div>
                  </motion.div>
                  <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                    className="md:col-span-4 bg-primary text-on-primary rounded-[40px] p-8 flex flex-col justify-end relative overflow-hidden group"
                  >
                    <div className="absolute top-0 right-0 p-6 opacity-20 transform translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700">
                      <span className="material-symbols-outlined text-[200px]">fastfood</span>
                    </div>
                    <div className="relative z-10">
                      <h4 className="font-display-md text-3xl mb-4 italic">Smoky Truffle Burger</h4>
                      <p className="font-body-md text-sm opacity-80 mb-6">Double beef patty, truffle mayo, smoked gouda, crispy onions.</p>
                      <div className="flex justify-between items-center">
                        <span className="font-headline-md text-2xl">$16.50</span>
                        <button className="bg-white/20 backdrop-blur-md p-3 rounded-full hover:bg-white/40 transition-all">
                          <span className="material-symbols-outlined">add</span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </div>
              )}

              {/* LIST layout */}
              {cat.layout === 'list' && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {cat.items.map((item, i) => (
                    <motion.div key={i} initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                      className="text-center group cursor-pointer"
                    >
                      <div className="w-full aspect-square rounded-full overflow-hidden mb-6 bg-surface-container-high border-2 border-transparent group-hover:border-secondary transition-all p-4 flex items-center justify-center">
                        <span className="material-symbols-outlined text-5xl text-secondary">
                          {item.name.includes('Lemonade') ? 'local_bar' : item.name.includes('Matcha') ? 'grass' : item.name.includes('Berry') ? 'berry' : 'water_drop'}
                        </span>
                      </div>
                      <h5 className="font-headline-md text-lg">{item.name}</h5>
                      <p className="font-label-sm text-secondary">{item.price}</p>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  );
}
