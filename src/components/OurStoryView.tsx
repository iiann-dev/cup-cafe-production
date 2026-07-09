import { TabType } from '../types';
import { TEAM, TIMELINE, IMAGES } from '../data';
import { motion } from 'framer-motion';

const fadeUp = { initial: { y: 30, opacity: 0 }, whileInView: { y: 0, opacity: 1 }, viewport: { once: true, margin: '-60px' }, transition: { duration: 0.6 } };
const stagger = (i: number) => ({ ...fadeUp, transition: { ...fadeUp.transition, delay: i * 0.12 } });

interface Props { onNavigate: (tab: TabType) => void; }

export default function OurStoryView({ onNavigate }: Props) {
  return (
    <div>
      {/* Hero */}
      <section className="px-margin-desktop max-w-screen-2xl mx-auto mb-section-gap pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          <motion.div initial={{ x: -40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="lg:col-span-7">
            <span className="font-label-sm text-secondary uppercase tracking-[0.2em] block mb-4">Our Journey</span>
            <h1 className="font-display-lg text-display-lg text-primary mb-8">
              The Story Behind <br/><span className="italic text-secondary">Every Bite.</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              From a tiny corner booth to a neighborhood staple. Cup Cafe is built on early mornings, secret recipes, and the belief that good food brings people together.
            </p>
          </motion.div>
          <motion.div initial={{ x: 40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden editorial-shadow">
              <img className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-700" src={IMAGES.interior} alt="Cafe interior" />
            </div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
              className="absolute -bottom-8 -left-8 bg-background p-6 rounded-xl editorial-shadow max-w-xs hidden lg:block"
            >
              <div className="flex items-center gap-4 mb-3">
                <span className="material-symbols-outlined text-secondary">star</span>
                <span className="font-label-sm">Voted "Best Secret Sauce" 2023</span>
              </div>
              <p className="text-on-surface-variant text-sm font-body-md italic">"It's the kind of flavor you crave for days."</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Sauce Story */}
      <section className="py-section-gap px-margin-desktop bg-surface-container-low">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-section-gap items-center">
          <motion.div {...fadeUp} className="relative">
            <div className="rounded-2xl overflow-hidden editorial-shadow">
              <img className="w-full aspect-square object-cover hover:scale-105 transition-transform duration-700" src={IMAGES.sauce} alt="Signature sauce" />
            </div>
          </motion.div>
          <motion.div initial={{ x: 60, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span className="font-decorative-note text-secondary mb-4 block italic">The Heart of the Kitchen</span>
            <h2 className="font-headline-lg text-headline-lg mb-6">The Sauce That Started It All</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
              Lou's signature sauce wasn't planned — it was a happy accident in a tiny kitchen. A dash of this, a pinch of that, and suddenly a neighborhood legend was born.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: 'egg', label: 'Real Mayo', desc: 'Slow-blended for creaminess' },
                { icon: 'psychiatry', label: 'Roasted Garlic', desc: 'Caramelized for depth' },
                { icon: 'eco', label: 'Lemon Zest', desc: 'Bright, fresh finish' },
                { icon: 'filter_vintage', label: 'Secret Blend', desc: 'Lou keeps this locked up' },
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center">
                    <span className="material-symbols-outlined text-secondary">{item.icon}</span>
                  </div>
                  <div>
                    <p className="font-label-sm text-sm uppercase tracking-wider">{item.label}</p>
                    <p className="font-decorative-note text-xs italic text-on-surface-variant">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Craftsmanship */}
      <section className="py-section-gap px-margin-desktop bg-background">
        <div className="max-w-screen-2xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-section-gap max-w-2xl mx-auto">
            <h2 className="font-headline-lg text-headline-lg mb-6">Honest Ingredients, <br/><span className="italic text-secondary">Every Single Morning.</span></h2>
            <p className="font-body-lg text-on-surface-variant">We believe the foundation of any great sandwich is the bread, and the soul of the sandwich is where it came from.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
            <div className="md:col-span-7 grid grid-cols-2 gap-4">
              <motion.div {...stagger(0)} className="aspect-square rounded-xl overflow-hidden editorial-shadow">
                <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&q=85&auto=format" alt="Fresh sourdough" />
              </motion.div>
              <motion.div {...stagger(1)} className="aspect-[3/4] rounded-xl overflow-hidden editorial-shadow mt-12">
                <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=600&q=85&auto=format" alt="Farm fresh" />
              </motion.div>
            </div>
            <div className="md:col-span-4 md:col-start-9 space-y-12">
              {[
                { num: '01', title: 'Milled with Care', desc: "Our flour is sourced from a family-run mill in the valley, ensuring every slice of bread has a rich, nutty depth." },
                { num: '02', title: 'Garden-To-Glass', desc: "Our herbs are picked daily from our rooftop garden. It's a small detail, but the difference in aroma is everything." },
              ].map((item, i) => (
                <motion.div key={i} initial={{ x: 40, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.15 }}
                  className="relative"
                >
                  <span className="font-decorative-note text-secondary text-5xl absolute -top-8 -left-8 opacity-20">{item.num}</span>
                  <h4 className="font-headline-md text-headline-md mb-4">{item.title}</h4>
                  <p className="font-body-md text-on-surface-variant">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-section-gap px-margin-desktop bg-surface-container overflow-hidden">
        <div className="max-w-screen-2xl mx-auto">
          <motion.div {...fadeUp} className="mb-16">
            <h2 className="font-headline-lg text-headline-lg">Our Journey <br/><span className="italic text-secondary">Through Time</span></h2>
          </motion.div>
          <div className="relative flex flex-col md:flex-row gap-gutter md:items-start">
            <div className="hidden md:block absolute top-12 left-0 w-full h-[2px] bg-outline-variant/30" />
            {TIMELINE.map((event, i) => (
              <motion.div key={i} initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                className="relative z-10 md:w-1/4 pt-20"
              >
                <div className={`w-6 h-6 rounded-full ${event.active ? 'bg-secondary' : 'bg-outline-variant'} absolute top-10 left-0 md:left-1/2 -translate-x-1/2 ${event.active ? 'border-4 border-white shadow-lg' : ''}`} />
                <span className={`font-decorative-note ${event.active ? 'text-secondary' : 'text-on-surface-variant'} mb-2 block`}>{event.year}</span>
                <h5 className="font-headline-md text-[24px] mb-4">{event.title}</h5>
                <p className="font-body-md text-on-surface-variant pr-4">{event.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-section-gap px-margin-desktop bg-background">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center mb-16">
            <motion.div {...fadeUp} className="md:col-span-5">
              <h2 className="font-headline-lg text-headline-lg">The Hands Behind <br/>The <span className="text-secondary italic">Magic.</span></h2>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
              className="md:col-span-6 md:col-start-7"
            >
              <p className="font-body-lg text-on-surface-variant">Our team isn't just staff; they're family. Most of us have been here since the beginning, sharing recipes and stories over the morning brew.</p>
            </motion.div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
            {TEAM.map((member, i) => (
              <motion.div key={i} initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
                className={`group cursor-pointer ${member.offset ? 'mt-12' : ''}`}
              >
                <div className="aspect-[4/5] rounded-xl overflow-hidden mb-6 editorial-shadow transition-transform duration-500 group-hover:scale-[1.02]">
                  <img className="w-full h-full object-cover" src={member.image} alt={member.name} />
                </div>
                <h6 className="font-headline-md text-[20px]">{member.name}</h6>
                <p className="font-label-sm text-secondary uppercase tracking-widest mt-1">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-section-gap px-margin-desktop">
        <motion.div {...fadeUp} className="max-w-screen-2xl mx-auto rounded-3xl overflow-hidden relative min-h-[400px] flex items-center justify-center bg-gradient-to-br from-primary to-primary-container">
          <div className="relative z-10 text-center max-w-2xl p-gutter">
            <h2 className="font-display-lg text-display-lg mb-8">Come Be Part Of <br/>Our <span className="text-secondary italic">Next Chapter.</span></h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-secondary text-on-secondary px-10 py-5 rounded-full font-label-sm text-label-sm shadow-lg hover:shadow-xl hover:scale-105 transition-all">Book A Table</button>
              <button onClick={() => onNavigate('contact')} className="bg-background text-on-surface px-10 py-5 rounded-full font-label-sm text-label-sm border border-outline hover:bg-surface-container transition-all">Find Us</button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
