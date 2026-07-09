import { motion } from 'framer-motion';

const fadeUp = { initial: { y: 30, opacity: 0 }, whileInView: { y: 0, opacity: 1 }, viewport: { once: true, margin: '-40px' }, transition: { duration: 0.6 } };
const stagger = (i: number) => ({ ...fadeUp, transition: { ...fadeUp.transition, delay: i * 0.12 } });

export default function ReviewsView() {
  return (
    <div className="px-margin-desktop max-w-screen-2xl mx-auto pt-12">
      <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="mb-section-gap">
        <span className="font-decorative-note text-secondary block mb-2 italic">what our guests say</span>
        <h1 className="font-display-lg text-display-lg text-primary">Kind Words From <br/>Our <span className="italic text-secondary">Community</span></h1>
      </motion.div>

      {/* Filter Pills */}
      <div className="flex gap-4 mb-16 overflow-x-auto">
        {['All Reviews', 'Most Recent', 'Highest Rated', 'With Photos'].map((filter, i) => (
          <motion.button
            key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.08 }}
            className={`font-label-sm text-label-sm px-6 py-3 rounded-full whitespace-nowrap transition-all ${
              i === 0 ? 'bg-secondary text-on-secondary shadow-lg' : 'text-on-surface-variant hover:bg-surface-container-low'
            }`}
          >
            {filter}
          </motion.button>
        ))}
      </div>

      {/* Review Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
        {/* Card 1 — Sarah */}
        <motion.div {...stagger(0)} className="bg-surface-container p-8 rounded-2xl editorial-shadow flex flex-col justify-between border border-outline-variant/10 hover:-translate-y-1 transition-transform">
          <div>
            <div className="flex text-secondary mb-4">{Array(5).fill(0).map((_, s) => <span key={s} className="material-symbols-outlined text-sm">star</span>)}</div>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6">"This place is a vibe. The aesthetic is beautiful but the coffee is the real winner. The 'Golden Hour' roast is smooth and rich."</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-tertiary-fixed-dim flex items-center justify-center font-bold text-on-tertiary-fixed">SL</div>
            <div><p className="font-label-sm text-label-sm text-primary">Sarah L.</p><p className="text-[12px] text-on-surface-variant/70">Local Guide • 1 week ago</p></div>
          </div>
        </motion.div>

        {/* Card 2 — Daniel */}
        <motion.div {...stagger(1)} className="bg-surface-container p-8 rounded-2xl editorial-shadow flex flex-col justify-between border border-outline-variant/10 hover:-translate-y-1 transition-transform">
          <div>
            <div className="flex text-secondary mb-4">{Array(5).fill(0).map((_, s) => <span key={s} className="material-symbols-outlined text-sm">star</span>)}</div>
            <p className="font-headline-md text-headline-md text-primary leading-tight">"Secret sauce is truly secret. And addictive."</p>
          </div>
          <div className="flex items-center gap-4 pt-6 border-t border-outline-variant/20">
            <div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center font-bold text-on-secondary-fixed">DK</div>
            <div><p className="font-label-sm text-label-sm text-primary">Daniel K.</p><p className="text-[12px] text-on-surface-variant/70">Regular • 3 days ago</p></div>
          </div>
        </motion.div>

        {/* Card 3 — Marcus (dark) */}
        <motion.div {...stagger(2)} className="bg-primary text-on-primary p-8 rounded-2xl editorial-shadow flex flex-col justify-between hover:-translate-y-1 transition-transform relative overflow-hidden">
          <div className="z-10">
            <span className="material-symbols-outlined text-secondary text-4xl mb-4">format_quote</span>
            <p className="font-body-lg text-body-lg mb-8 leading-relaxed">"The staff remembers my order every time. It's the small things that make Cup Cafe my home away from home."</p>
          </div>
          <div className="flex items-center gap-4 z-10">
            <div className="w-10 h-10 rounded-full bg-secondary-fixed-dim flex items-center justify-center font-bold text-on-secondary-fixed-variant">MC</div>
            <div><p className="font-label-sm text-label-sm">Marcus Chen</p><p className="text-[12px] opacity-70">Community Member</p></div>
          </div>
          <div className="absolute -right-10 -bottom-10 opacity-10"><span className="material-symbols-outlined text-[200px]">volunteer_activism</span></div>
        </motion.div>

        {/* Card 4 — Anna H */}
        <motion.div {...stagger(3)} className="bg-surface-container p-8 rounded-2xl editorial-shadow flex flex-col border border-outline-variant/10 hover:-translate-y-1 transition-transform">
          <div className="flex text-secondary mb-4">
            {Array(4).fill(0).map((_, s) => <span key={s} className="material-symbols-outlined text-sm">star</span>)}
            <span className="material-symbols-outlined text-sm">star_half</span>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant mb-6 italic">"Great atmosphere for working, but gets a bit crowded on weekends. The roasted chicken sandwich is a must-try!"</p>
          <div className="grid grid-cols-2 gap-2 mb-6">
            {['Cafe vibe', 'Flowers'].map((label, i) => (
              <div key={i} className="aspect-square rounded-lg overflow-hidden bg-[#f0ebe4] flex items-center justify-center font-decorative-note text-xs italic text-on-surface-variant">{label}</div>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-secondary-fixed-dim flex items-center justify-center font-bold text-on-secondary-fixed-variant">AH</div>
            <div><p className="font-label-sm text-label-sm text-primary">Anna H.</p><p className="text-[12px] text-on-surface-variant/70">Designer • 1 month ago</p></div>
          </div>
        </motion.div>
      </div>

      {/* Pagination */}
      <motion.div {...fadeUp} className="mt-section-gap flex flex-col items-center">
        <button className="font-label-sm text-label-sm text-primary border border-primary px-10 py-4 rounded-full hover:bg-primary hover:text-on-primary transition-all">
          Show More Stories
        </button>
      </motion.div>

      {/* Leave Review CTA */}
      <motion.section {...fadeUp} className="mt-section-gap mb-section-gap">
        <div className="bg-surface-container-highest p-12 md:p-24 rounded-[40px] text-center relative overflow-hidden">
          <h2 className="font-display-md text-headline-lg md:text-display-md text-primary mb-6">Had a great <span className="italic text-secondary">moment?</span></h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-12 max-w-xl mx-auto">
            We'd love to hear about your experience. Your feedback helps us keep the sandwiches fresh and the coffee brewing.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <button className="bg-secondary text-on-secondary px-10 py-5 rounded-full font-label-sm text-label-sm shadow-xl hover:scale-105 transition-transform flex items-center gap-2">
              Write a Review <span className="material-symbols-outlined">edit</span>
            </button>
            <button className="text-primary font-label-sm text-label-sm flex items-center gap-2 hover:translate-x-2 transition-transform">
              See us on Instagram <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
