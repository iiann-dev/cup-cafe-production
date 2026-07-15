import { useNavigate } from 'react-router-dom';
import { FEATURED_ITEMS, TESTIMONIALS, GALLERY_ITEMS, IMAGES } from '../data';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const fadeUp = { initial: { y: 40, opacity: 0 }, whileInView: { y: 0, opacity: 1 }, viewport: { once: true, margin: '-60px' }, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const } };
const stagger = (i: number) => ({ ...fadeUp, transition: { ...fadeUp.transition, delay: i * 0.12 } });

export default function HomePage() {
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 1.08]);

  return (
    <div>
      {/* ═══ HERO — Exact cup-cafe (1).html design ═══ */}
      <style>{`
        .hero-canvas{
          position:relative; width:100%; aspect-ratio:1456/734;
          overflow:hidden; container-type:inline-size;
        }
        .hero-photo{
          position:absolute; inset:0; width:100%; height:100%;
          object-fit:cover; display:block;
        }
        .curve-svg{
          position:absolute; inset:0; width:100%; height:100%; pointer-events:none;
        }
        .curve-svg path{ fill:#f6efe6; }
        .hero-copy{
          position:absolute; left:6.4%; top:0; width:32%; height:100%; z-index:2;
          display:flex; flex-direction:column; justify-content:center;
          gap:clamp(10px,1.4cqw,22px);
        }
        .leaf-deco{
          position:absolute; left:-4.5%; top:52%; width:2.6cqw; min-width:14px;
          opacity:0.3; color:#766e66; pointer-events:none;
        }
        .eyebrow{
          display:flex; align-items:center; gap:8px;
          font-size:clamp(10px,0.85cqw,14px); font-weight:700;
          letter-spacing:0.12em; color:#8a3a1e;
        }
        .eyebrow svg{ width:clamp(11px,0.95cqw,15px); height:auto; flex-shrink:0; }
        .headline{
          font-size:clamp(28px,4.55cqw,72px); line-height:1.07;
          font-weight:600; color:#1c150f;
          font-family:'Playfair Display', serif;
        }
        .headline em{ font-style:italic; color:#8a3a1e; }
        .sub{
          max-width:88%;
          font-size:clamp(12px,1.1cqw,17px); line-height:1.6; color:#4a4033;
        }
        .cta-row{ display:flex; align-items:center; gap:clamp(10px,1.5cqw,22px); }
        .hero-btn{
          background:#9f4222; color:#fff; border:none;
          padding:clamp(8px,1cqw,15px) clamp(14px,1.8cqw,27px);
          border-radius:999px; cursor:pointer;
          display:inline-flex; align-items:center; gap:8px;
          text-decoration:none; white-space:nowrap;
          font-size:clamp(11px,1cqw,15px); font-weight:600;
          font-family:'Inter', sans-serif;
        }
        .hero-btn:hover{ background:#8a3a1e; }
        .hero-btn svg{ width:clamp(11px,1cqw,16px); height:auto; }
        .play-btn{
          width:clamp(28px,3.2cqw,45px); height:clamp(28px,3.2cqw,45px);
          border-radius:50%; border:1px solid #766e66;
          background:transparent; display:flex;
          align-items:center; justify-content:center;
          cursor:pointer; color:#1c150f; flex-shrink:0;
        }
        .play-btn svg{ width:38%; height:38%; }
        .watch-link{
          font-weight:600; font-size:clamp(11px,1cqw,15px);
          color:#1c150f; text-decoration:underline;
          text-decoration-color:#9f4222; text-underline-offset:4px;
          white-space:nowrap; cursor:pointer; background:none; border:none;
          font-family:'Inter', sans-serif;
        }
        .social-proof{ display:flex; align-items:center; gap:clamp(8px,1cqw,14px); }
        .avatars{ display:flex; }
        .avatars img{
          width:clamp(20px,2.5cqw,37px); height:clamp(20px,2.5cqw,37px);
          border-radius:50%; object-fit:cover;
          margin-left:-10px;
          box-shadow:0 0 0 2px #f6efe6, 0 0 0 3px #9f4222;
        }
        .avatars img:first-child{ margin-left:0; }
        .proof-text{ font-size:clamp(9px,0.8cqw,13px); }
        .proof-label{
          font-weight:700; letter-spacing:0.05em; color:#766e66;
          display:block; margin-bottom:2px;
          font-size:clamp(8.5px,0.72cqw,11px);
        }
        .stars{ color:#9f4222; letter-spacing:1px; }
        .rating-num{ font-weight:700; color:#1c150f; margin-left:4px; }
        .review-count{ color:#8a8072; }
        .badge-daily{
          position:absolute; left:81.4%; top:37.3%;
          width:10.3%; aspect-ratio:1; border-radius:50%;
          background:#8a3a1e; color:#fff;
          display:flex; align-items:center; justify-content:center;
          box-shadow:0 12px 30px rgba(0,0,0,0.25); z-index:2;
        }
        .badge-daily svg{ width:100%; height:100%; }
        .badge-daily text{
          fill:#fff; font-family:'Inter', sans-serif;
          font-weight:700; font-size:7.4px; letter-spacing:1.1px;
        }
        .badge-daily .daily-word{
          font-family:'Playfair Display', serif;
          font-size:13px; font-weight:600; letter-spacing:0.5px;
        }
        .card-sourced{
          position:absolute; left:82.5%; top:73%; width:16%;
          background:#fbf8f2; border-radius:14px;
          padding:clamp(8px,1.1cqw,18px) clamp(9px,1.3cqw,20px);
          display:flex; gap:clamp(7px,1cqw,14px); align-items:flex-start;
          box-shadow:0 16px 40px rgba(0,0,0,0.18); z-index:2;
        }
        .card-sourced .icon-wrap{
          width:clamp(18px,2.3cqw,34px); height:clamp(18px,2.3cqw,34px);
          border-radius:50%; background:#f6efe6;
          display:flex; align-items:center; justify-content:center;
          flex-shrink:0; color:#8a3a1e;
        }
        .card-sourced .icon-wrap svg{ width:52%; height:52%; }
        .card-sourced h4{
          font-size:clamp(8.5px,0.75cqw,12px); letter-spacing:0.04em;
          margin-bottom:4px; color:#1c150f;
          font-family:'Inter', sans-serif; font-weight:600;
        }
        .card-sourced p{
          font-size:clamp(8px,0.7cqw,11.5px); line-height:1.4;
          color:#6b5f4f; font-family:'Inter', sans-serif;
        }
        @media (max-width:760px){
          .hero-canvas{
            aspect-ratio:auto; display:flex;
            flex-direction:column; container-type:normal;
          }
          .hero-photo{ position:relative !important; height:260px; order:1; }
          .curve-svg{ display:none; }
          .hero-copy{
            position:relative; left:0; top:0; width:100%; height:auto;
            order:2; padding:24px 20px 20px; gap:10px;
          }
          .leaf-deco{ display:none; }
          .eyebrow{ font-size:10px; gap:6px; }
          .headline{ font-size:1.5rem; max-width:100%; line-height:1.15; }
          .sub{ max-width:100%; font-size:0.825rem; line-height:1.5; }
          .cta-row{ flex-wrap:wrap; gap:8px; }
          .social-proof{ display:flex !important; }
          .hero-btn{ min-height:44px; font-size:13px; padding:10px 18px !important; }
          .play-btn{ width:32px !important; height:32px !important; }
          .watch-link{ min-height:44px; display:inline-flex; align-items:center; font-size:13px; }
          .badge-daily{ display:none; }
          .card-sourced{ display:none; }
          .social-proof{ flex-wrap:wrap; gap:6px; margin-top:4px; }
          .proof-label{ font-size:7.5px; }
          .stars{ font-size:11px; }
          .rating-num{ font-size:11px; }
          .review-count{ font-size:10px; }
          .avatars img{ width:22px !important; height:22px !important; }
        }
      `}</style>

      <section className="hero-canvas" style={{ background: '#f6efe6' }}>
        {/* Responsive Hero Photo — WebP + sizes */}
        <picture>
          <source
            media="(max-width: 600px)"
            srcSet="/hero-mobile.webp"
          />
          <source
            media="(min-width: 601px)"
            srcSet="/hero-lg.webp 1200w, /hero.webp 1400w"
            sizes="(min-width: 1456px) 58vw, 100vw"
          />
          <img
            className="hero-photo"
            src="/hero.png"
            alt="Grilled sandwich on a plate with fresh greens, wooden table setting"
            loading="eager"
            decoding="async"
          />
        </picture>

        {/* Curve Overlay */}
        <svg className="curve-svg" viewBox="0 0 1456 734" preserveAspectRatio="none">
          <path d="M545,0 C543.3,10.8 535.0,45.8 535.0,65.0 C535.0,84.2 541.7,98.3 545.0,115.0 C548.3,131.7 551.7,148.3 555.0,165.0 C558.3,181.7 559.2,198.3 565.0,215.0 C570.8,231.7 581.7,248.3 590.0,265.0 C598.3,281.7 612.5,298.3 615.0,315.0 C617.5,331.7 610.8,348.3 605.0,365.0 C599.2,381.7 587.5,398.3 580.0,415.0 C572.5,431.7 561.7,448.3 560.0,465.0 C558.3,481.7 561.7,498.3 570.0,515.0 C578.3,531.7 595.0,548.3 610.0,565.0 C625.0,581.7 644.2,598.3 660.0,615.0 C675.8,631.7 693.3,648.3 705.0,665.0 C716.7,681.7 725.0,703.5 730.0,715.0 C735.0,726.5 734.2,730.8 735.0,734.0 L0,734 L0,0 Z"/>
        </svg>

        {/* Text Layer */}
        <div className="hero-copy">
          {/* Leaf Decoration */}
          <svg className="leaf-deco" viewBox="0 0 40 200" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M20 0 V200 M20 30 C5 40 5 55 20 65 M20 65 C35 75 35 90 20 100 M20 100 C5 110 5 125 20 135 M20 135 C35 145 35 160 20 170"/>
          </svg>

          <motion.div
            className="eyebrow"
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c-4 4-6 8-6 12a6 6 0 0 0 12 0c0-4-2-8-6-12z"/></svg>
            MADE FRESH. MADE WITH LOVE.
          </motion.div>

          <motion.h1
            className="headline"
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            Every<br />Sandwich<br />Has A <em>Story.</em>
          </motion.h1>

          <motion.p
            className="sub"
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            Handcrafted sandwiches made fresh every morning using local ingredients and our legendary signature sauces.
          </motion.p>

          <motion.div
            className="cta-row"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <button className="hero-btn" onClick={() => navigate('/menu')}>
              View Menu
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M5 12h14M13 5l7 7-7 7"/>
              </svg>
            </button>
            <button className="watch-link" onClick={() => navigate('/our-story')}>Watch Our Story</button>
          </motion.div>

          <motion.div
            className="social-proof"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.85 }}
          >
            <div className="avatars">
              <img src="https://i.pravatar.cc/72?img=12" alt="" />
              <img src="https://i.pravatar.cc/72?img=32" alt="" />
              <img src="https://i.pravatar.cc/72?img=15" alt="" />
            </div>
            <div className="proof-text">
              <span className="proof-label">LOVED BY OUR COMMUNITY</span>
              <span className="stars">★★★★★</span><span className="rating-num">4.8</span> <span className="review-count">(225 reviews)</span>
            </div>
          </motion.div>
        </div>

        {/* DAILY Badge */}
        <motion.div
          className="badge-daily"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1, ease: [0.34, 1.56, 0.64, 1] }}
        >
          <svg viewBox="0 0 150 150">
            <defs>
              <path id="arcTop" d="M 20,75 A 55,55 0 0 1 130,75"/>
              <path id="arcBottom" d="M 26,100 A 55,55 0 0 0 124,100"/>
            </defs>
            <text><textPath href="#arcTop" startOffset="50%" textAnchor="middle">FRESH INGREDIENTS</textPath></text>
            <text className="daily-word" x="75" y="82" textAnchor="middle">DAILY</text>
            <text><textPath href="#arcBottom" startOffset="50%" textAnchor="middle">MADE WITH CARE</textPath></text>
          </svg>
        </motion.div>

        {/* Sourced Locally Card */}
        <motion.div
          className="card-sourced"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          <div className="icon-wrap">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M12 2v6M9 5l3 3 3-3M4 14c0 5 4 8 8 8s8-3 8-8"/>
            </svg>
          </div>
          <div>
            <h4>SOURCED LOCALLY</h4>
            <p>We partner with local farms to bring you the freshest ingredients every day.</p>
          </div>
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
                <img loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={item.image} alt={item.name} />
                <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full font-decorative-note text-xs italic">{item.badge}</div>
              </div>
              <div className="p-8">
                <h3 className="font-headline-md text-headline-md mb-2">{item.name}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="font-headline-md text-headline-md text-secondary">{item.price}</span>
                  <div className="w-12 h-12"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Mobile-only: View More Menu link */}
        <a
          href="/menu"
          className="md:hidden block text-center text-secondary font-label-sm text-label-sm mt-10 tracking-wider transition-opacity hover:opacity-80"
        >
          View More Menu <span className="material-symbols-outlined text-sm align-middle ml-1">arrow_right_alt</span>
        </a>
      </section>

      {/* ═══ Sauce Section ═══ */}
      <section className="py-section-gap px-margin-desktop bg-gradient-to-b from-background via-surface-container-low to-background">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-section-gap items-center">
          <motion.div {...fadeUp} className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img loading="lazy" className="w-full aspect-square object-cover" src={IMAGES.sauce} alt="Signature sauce" />
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
            <button onClick={() => navigate('/our-story')} className="group inline-flex items-center gap-3 font-label-sm text-label-sm text-secondary">
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
            <img loading="lazy" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=800&q=85&auto=format" alt="Fresh ingredients" />
          </motion.div>
          <motion.div {...stagger(1)} className="col-span-2 md:col-span-5 row-span-1 aspect-[4/5] rounded-2xl overflow-hidden mt-8 md:mt-16">
            <img loading="lazy" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1559314809-0d155014e29e?w=800&q=85&auto=format" alt="Bread baking" />
          </motion.div>
          <motion.div {...stagger(2)} className="col-span-2 md:col-span-5 aspect-square rounded-2xl overflow-hidden -mt-8">
            <img loading="lazy" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&q=85&auto=format" alt="Herbs" />
          </motion.div>
          <motion.div {...stagger(3)} className="col-span-2 md:col-span-7 aspect-[4/5] rounded-2xl overflow-hidden">
            <img loading="lazy" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=85&auto=format" alt="Chef preparing" />
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
              <img loading="lazy" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" src={item.src} alt={item.alt} />
            </motion.div>
          ))}
        </div>
        <motion.div {...fadeUp} className="mt-12 text-center">
          <button onClick={() => navigate('/gallery')} className="group inline-flex items-center gap-3 font-label-sm text-label-sm text-secondary border border-secondary px-8 py-4 rounded-full hover:bg-secondary hover:text-on-secondary transition-all">
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
        <motion.div {...fadeUp} className="bg-gradient-to-br from-primary to-primary-container text-white rounded-[24px] md:rounded-[40px] p-6 md:p-20 text-center relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-secondary/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-secondary/10 blur-3xl" />
          <div className="relative z-10">
            <span className="font-decorative-note text-secondary italic block mb-4">We're Waiting For You</span>
            <h2 className="font-display-md text-[48px] md:text-[56px] leading-tight mb-8">Come Experience<br/>The <span className="italic text-on-primary">Cup Cafe</span> Difference</h2>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button onClick={() => navigate('/contact')} className="border border-secondary text-secondary px-12 py-5 rounded-full font-label-sm text-label-sm hover:bg-secondary hover:text-on-secondary transition-all duration-300">
                Find Us
              </button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}