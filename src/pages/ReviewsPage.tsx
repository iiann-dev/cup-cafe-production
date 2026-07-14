import { TESTIMONIALS } from '../data';
import { motion } from 'framer-motion';

const fadeUp = { initial: { y: 30, opacity: 0 }, whileInView: { y: 0, opacity: 1 }, viewport: { once: true, margin: '-40px' }, transition: { duration: 0.6 } };
const stagger = (i: number) => ({ ...fadeUp, transition: { ...fadeUp.transition, delay: i * 0.12 } });

export default function ReviewsPage() {
  return (
    <div className="px-margin-desktop max-w-screen-2xl mx-auto pt-12">
      <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="mb-section-gap">
        <span className="font-decorative-note text-secondary block mb-2 italic">what our guests say</span>
        <h1 className="font-display-lg text-display-lg text-primary">Kind Words From <br/>Our <span className="italic text-secondary">Community</span></h1>
      </motion.div>

      {/* Real Review Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        {TESTIMONIALS.map((t, i) => (
          <motion.div key={i} {...stagger(i)}
            className="bg-surface-container p-8 rounded-2xl editorial-shadow flex flex-col justify-between border border-outline-variant/10 hover:-translate-y-1 transition-transform"
          >
            <div>
              <div className="flex text-secondary mb-4">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <span key={s} className="material-symbols-outlined text-sm">star</span>
                ))}
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8 italic leading-relaxed">"{t.content}"</p>
            </div>
            <div className="flex items-center gap-4 pt-6 border-t border-outline-variant/20">
              <div className="w-10 h-10 rounded-full bg-secondary-fixed-dim flex items-center justify-center font-bold text-on-secondary-fixed text-xs">
                {t.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <p className="font-label-sm text-label-sm text-primary">{t.name}</p>
                <p className="text-[12px] text-on-surface-variant/70">{t.date}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Leave Review CTA */}
      <motion.section {...fadeUp} className="mt-section-gap mb-section-gap">
        <div className="bg-surface-container-highest p-12 md:p-24 rounded-[40px] text-center relative overflow-hidden">
          <h2 className="font-display-md text-headline-lg md:text-display-md text-primary mb-6">Had a great <span className="italic text-secondary">sandwich?</span></h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-12 max-w-xl mx-auto">
            We'd love to hear about your experience. Your feedback helps us keep the sandwiches fresh and the coffee brewing.
          </p>
          <a href="https://www.google.com/maps/place/6+Monterey+Blvd,+San+Francisco,+CA+94131" target="_blank" rel="noopener"
             className="bg-secondary text-on-secondary px-10 py-5 rounded-full font-label-sm text-label-sm shadow-xl hover:scale-105 transition-transform flex items-center gap-2 mx-auto inline-flex">
            Write a Review <span className="material-symbols-outlined">edit</span>
          </a>
        </div>
      </motion.section>
    </div>
  );
}