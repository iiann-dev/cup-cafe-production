import { TabType } from '../types';
import { FEATURED_ITEMS, TESTIMONIALS, GALLERY_ITEMS, IMAGES } from '../data';
import { motion, useScroll, useTransform } from 'framer-motion';

const fadeUp = { initial: { y: 40, opacity: 0 }, whileInView: { y: 0, opacity: 1 }, viewport: { once: true, margin: '-60px' }, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const } };
const stagger = (i: number) => ({ ...fadeUp, transition: { ...fadeUp.transition, delay: i * 0.12 } });

interface Props { onNavigate: (tab: TabType) => void; }

export default function HomeView({ onNavigate }: Props) {
  const { scrollYProgress } = useScroll();
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 1.08]);

  return (
    <div>
      {/* ═══ HERO — Every Sandwich Has A Story ═══ */}
      <section className="min-h-[90dvh] flex flex-col md:flex-row overflow-hidden">
        {/* Left Panel */}
        <div className="w-full md:w-[42%] bg-[#f5f0e6] flex flex-col justify-center px-8 md:px-16 py-16 relative min-h-[60dvh] md:min-h-[90dvh]">

          <motion.div
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h1 className="font-display-lg text-[44px] md:text-[52px] leading-[1.1] text-primary mb-4">
              Every<br />Sandwich<br />Has A{" "}
              <span className="italic text-secondary font-caveat text-[52px] md:text-[58px]">Story.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-body-md text-body-md text-on-surface-variant max-w-xs mb-10"
          >
            Handcrafted sandwiches made fresh every morning using local ingredients and our legendary signature sauces.
          </motion.p>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex gap-4"
          >
            <button
              onClick={() => onNavigate('menu')}
              className="bg-[#C84A31] text-white px-8 py-4 rounded-full font-label-sm text-label-sm hover:scale-95 transition-transform shadow-lg"
            >
              View Menu <span className="material-symbols-outlined text-sm align-middle ml-1">arrow_forward</span>
            </button>

          </motion.div>


        </div>

        {/* Right Panel — Hero Photo */}
        <motion.div className="w-full md:w-[58%] min-h-[50dvh] md:min-h-[90dvh] relative overflow-hidden" style={{ scale: heroScale }}>
          <img
            className="w-full h-full object-cover"
            src={IMAGES.hero}
            alt="Gourmet sandwich on ceramic plate"
          />

        </motion.div>
      </section>

      {/* ═══ Featured Menu ═══ */}
      <section className="py-section-gap px-margin-desktop max-w-screen-2xl mx-auto">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="font-decorative-note text-secondary italic block mb-3">From Our Kitchen</span>
          <h2 className="font-display-lg text-display-lg text-primary">Featured <span className="italic text-secondary">Menu</span></h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {FEATURED_ITEMS.map((item, i) => (
            <motion.div key={i} {...stagger(i)} className="group cursor-pointer bg-surface-container-low rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-shadow duration-500">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={item.image} alt={item.name} />
                <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full font-decorative-note text-xs italic">{item.badge}</div>
              </div>
              <div className="p-8">
                <h3 className="font-headline-md text-headline-md mb-2">{item.name}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="font-headline-md text-headline-md text-secondary">{item.price}</span>
                  <button className="w-12 h-12 rounded-full bg-secondary text-on-secondary flex items-center justify-center hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined">add</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══ Sauce Section ═══ */}
      <section className="py-section-gap px-margin-desktop bg-gradient-to-b from-background via-surface-container-low to-background">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-section-gap items-center">
          <motion.div {...fadeUp} className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img className="w-full aspect-square object-cover" src={IMAGES.sauce} alt="Signature sauce" />
            </div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="absolute -bottom-8 -right-8 bg-background p-6 rounded-xl shadow-xl max-w-xs hidden lg:block"
            >
              <div className="flex items-center gap-4 mb-3">
                <span className="material-symbols-outlined text-secondary">star</span>
                <span className="font-label-sm">Voted "Best Secret Sauce" 2023</span>
              </div>
              <p className="text-on-surface-variant text-sm font-body-md italic">"The kind of flavor you crave for days."</p>
            </motion.div>
          </motion.div>
          <motion.div initial={{ x: 60, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}>
            <span className="font-decorative-note text-secondary italic block mb-4">The Heart of the Kitchen</span>
            <h2 className="font-headline-lg text-headline-lg mb-6">The Sauce That Started It All</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
              Lou's signature sauce wasn't planned — it was a happy accident in a tiny kitchen. A dash of this, a pinch of that, and suddenly a neighborhood legend was born.
            </p>
            <button onClick={() => onNavigate('our-story')} className="group inline-flex items-center gap-3 font-label-sm text-label-sm text-secondary">
              Read Our Full Story <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_right_alt</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* ═══ About Collage ═══ */}
      <section className="py-section-gap px-margin-desktop max-w-screen-2xl mx-auto">
        <motion.div {...fadeUp} className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg">Honest Ingredients, <br/><span className="italic text-secondary">Every Single Morning.</span></h2>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-12 gap-4">
          <motion.div {...stagger(0)} className="col-span-2 md:col-span-7 aspect-square rounded-2xl overflow-hidden">
            <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=800&q=85&auto=format" alt="Fresh ingredients" />
          </motion.div>
          <motion.div {...stagger(1)} className="col-span-2 md:col-span-5 row-span-1 aspect-[4/5] rounded-2xl overflow-hidden mt-8 md:mt-16">
            <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1559314809-0d155014e29e?w=800&q=85&auto=format" alt="Bread baking" />
          </motion.div>
          <motion.div {...stagger(2)} className="col-span-2 md:col-span-5 aspect-square rounded-2xl overflow-hidden -mt-8">
            <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&q=85&auto=format" alt="Herbs" />
          </motion.div>
          <motion.div {...stagger(3)} className="col-span-2 md:col-span-7 aspect-[4/5] rounded-2xl overflow-hidden">
            <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=85&auto=format" alt="Chef preparing" />
          </motion.div>
        </div>
      </section>

      {/* ═══ Moments Gallery ═══ */}
      <section className="py-section-gap px-margin-desktop max-w-screen-2xl mx-auto">
        <motion.div {...fadeUp} className="mb-section-gap">
          <span className="font-decorative-note text-secondary italic block mb-2">captured moments</span>
          <h2 className="font-display-lg text-display-lg text-primary">Moments At <span className="italic text-secondary">Cup</span> Cafe</h2>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {GALLERY_ITEMS.slice(0, 5).map((item, i) => (
            <motion.div key={i} {...stagger(i)} className="aspect-square rounded-xl overflow-hidden">
              <img className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" src={item.src} alt={item.alt} />
            </motion.div>
          ))}
        </div>
        <motion.div {...fadeUp} className="mt-12 text-center">
          <button onClick={() => onNavigate('gallery')} className="group inline-flex items-center gap-3 font-label-sm text-label-sm text-secondary border border-secondary px-8 py-4 rounded-full hover:bg-secondary hover:text-on-secondary transition-all">
            View Full Gallery <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
          </button>
        </motion.div>
      </section>

      {/* ═══ Testimonials ═══ */}
      <section className="py-section-gap px-margin-desktop max-w-screen-2xl mx-auto">
        <motion.div {...fadeUp} className="text-center mb-section-gap">
          <span className="font-decorative-note text-secondary italic block mb-2">What They Say</span>
          <h2 className="font-display-lg text-display-lg text-primary">Kind Words From <br/><span className="italic text-secondary">Our Community.</span></h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {TESTIMONIALS.map((t, i) => (
            <motion.div key={i} {...stagger(i)} className="bg-surface-container-low p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-500">
              <div className="flex text-secondary mb-6">
                {Array.from({ length: t.rating }).map((_, s) => <span key={s} className="material-symbols-outlined text-sm">star</span>)}
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8 italic">"{t.content}"</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary-fixed-dim flex items-center justify-center font-bold text-on-secondary-fixed text-xs">{t.name.split(' ').map((n:string) => n[0]).join('')}</div>
                <div>
                  <p className="font-label-sm text-label-sm text-primary">{t.name}</p>
                  <p className="text-xs text-on-surface-variant">{t.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══ Visit Us CTA ═══ */}
      <section className="py-section-gap px-margin-desktop max-w-screen-2xl mx-auto">
        <motion.div {...fadeUp} className="bg-gradient-to-br from-primary to-primary-container text-white rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-secondary/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-secondary/10 blur-3xl" />
          <div className="relative z-10">
            <span className="font-decorative-note text-secondary italic block mb-4">We're Waiting For You</span>
            <h2 className="font-display-md text-[48px] md:text-[56px] leading-tight mb-8">Come Experience<br/>The <span className="italic text-secondary">Cup Cafe</span> Difference</h2>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button onClick={() => onNavigate('menu')} className="bg-secondary text-on-secondary px-10 py-5 rounded-full font-label-sm text-label-sm hover:scale-105 transition-transform shadow-2xl">
                View Our Menu
              </button>
              <button onClick={() => onNavigate('contact')} className="border border-white/40 text-white px-10 py-5 rounded-full font-label-sm text-label-sm hover:bg-white/10 transition-all">
                Find Us
              </button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
