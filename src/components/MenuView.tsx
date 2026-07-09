import { useState } from 'react';
import { MENU_CATEGORIES } from '../data';
import { motion } from 'framer-motion';

const fadeUp = { initial: { y: 30, opacity: 0 }, whileInView: { y: 0, opacity: 1 }, viewport: { once: true, margin: '-40px' }, transition: { duration: 0.6 } };

export default function MenuView() {
  const [activeCategory, setActiveCategory] = useState(MENU_CATEGORIES[0].id);

  return (
    <div className="px-margin-desktop max-w-screen-2xl mx-auto pt-12">
      <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="mb-section-gap">
        <span className="font-decorative-note text-secondary block mb-2 italic">handcrafted since 2012</span>
        <h1 className="font-display-lg text-display-lg text-primary">Our <span className="italic text-secondary">Menu</span></h1>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-gutter">
        <aside className="lg:w-64 shrink-0">
          <div className="lg:sticky lg:top-32 flex lg:flex-col gap-4 overflow-x-auto pb-4 lg:pb-0">
            {MENU_CATEGORIES.map((cat, i) => (
              <motion.button
                key={cat.id}
                initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: i * 0.05 }}
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
              <div className="flex items-center justify-between mb-8">
                <div>
                  <span className="font-decorative-note text-secondary block mb-2 text-sm">{cat.note}</span>
                  <h2 className="font-headline-lg text-headline-lg italic">{cat.label}</h2>
                </div>
                <div className="h-px flex-1 mx-8 bg-outline-variant/30" />
              </div>

              {cat.id === 'design-your-own' ? (
                /* Design Your Own — special display */
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {cat.items.map((item, i) => (
                    <motion.div key={i} initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                      className="bg-secondary-fixed-dim/20 p-8 rounded-3xl text-center border border-secondary/20"
                    >
                      <span className="font-decorative-note text-secondary text-6xl block mb-4">
                        {item.name.includes('6"') ? '🥪' : '🥖'}
                      </span>
                      <h3 className="font-headline-md text-headline-md mb-2">{item.name}</h3>
                      <p className="font-body-md text-body-md text-on-surface-variant mb-4">{item.description}</p>
                      <span className="font-headline-lg text-headline-lg text-secondary">{item.price}</span>
                    </motion.div>
                  ))}
                </div>
              ) : (
                /* All other categories — list style */
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                  {cat.items.map((item, i) => (
                    <motion.div key={i} initial={{ y: 15, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}
                      className="border-b border-outline-variant/20 pb-4 group"
                    >
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-headline-md text-[20px] text-primary group-hover:text-secondary transition-colors">{item.name}</h4>
                        <span className="font-headline-md text-secondary text-[18px] ml-4 shrink-0">{item.price}</span>
                      </div>
                      <p className="font-body-md text-[14px] text-on-surface-variant leading-relaxed">{item.description}</p>
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
