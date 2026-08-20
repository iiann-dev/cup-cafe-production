import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';
import Icon, { type IconName } from './Icon';

const tabs = [
  { path: '/', label: 'Home' },
  { path: '/menu', label: 'Menu' },
  { path: '/our-story', label: 'Our Story' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/reviews', label: 'Reviews' },
  { path: '/contact', label: 'Visit Us' },
];

/* Phone dock — 4 main slots; the rest live in the More sheet */
const dockTabs: { path: string; label: string; icon: IconName }[] = [
  { path: '/', label: 'Home', icon: 'home' },
  { path: '/menu', label: 'Menu', icon: 'lunch_dining' },
  { path: '/gallery', label: 'Gallery', icon: 'photo_camera' },
  { path: '/reviews', label: 'Reviews', icon: 'star' },
];

const moreTabs = [
  { path: '/our-story', label: 'Our Story' },
  { path: '/contact', label: 'Visit Us' },
];

/* Spring for the sliding active-pill — crisp, not bouncy */
const pillSpring = { type: 'spring', stiffness: 380, damping: 32, mass: 0.9 } as const;

/* Magnetic wrapper for the CTA: follows cursor with physical momentum */
function Magnetic({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const x = useSpring(useMotionValue(0), { stiffness: 150, damping: 15, mass: 0.1 });
  const y = useSpring(useMotionValue(0), { stiffness: 150, damping: 15, mass: 0.1 });

  const onMove = (e: React.MouseEvent) => {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.25);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.35);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} style={{ x, y }}>
      {children}
    </motion.div>
  );
}

export default function Nav({ scrolled }: { scrolled: boolean }) {
  const navigate = useNavigate();
  const location = useLocation();
  const reduce = useReducedMotion();
  const [moreOpen, setMoreOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  const active = location.pathname;
  /* The pill follows whichever is lit — hover takes priority over active */
  const lit = hovered ?? active;
  const moreActive = moreTabs.some(t => active === t.path);

  const navTo = (path: string) => {
    navigate(path);
    setMoreOpen(false);
  };

  /* Escape closes the More sheet — window-level so it works even unfocused */
  useEffect(() => {
    if (!moreOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMoreOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [moreOpen]);

  return (
    <motion.header
      initial={reduce ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      className="fixed top-0 inset-x-0 z-50"
    >
      {/* Phone: minimal floating logo only — hero breathes edge-to-edge */}
      <div className="md:hidden px-4 pt-3">
        <button
          onClick={() => navTo('/')}
          className="flex items-center gap-2 drop-shadow-sm"
          aria-label="Cup Cafe home"
        >
          <img
            src={`${import.meta.env.BASE_URL}cup-logo.svg`}
            alt="Cup Cafe"
            className="h-9 w-auto object-contain"
          />
        </button>
      </div>

      {/* Tablet+: floating island — transparent at top, frosted glass pill on scroll. 3-col grid keeps links centered */}
      <div className="hidden md:block px-4 md:px-8 pt-3 md:pt-4">
        <div
          className={`max-w-6xl mx-auto grid grid-cols-[1fr_auto_1fr] items-center rounded-full transition-all duration-500 ease-out ${
            scrolled
              ? 'h-16 bg-white/80 backdrop-blur-xl shadow-lg shadow-black/5 border border-outline-variant/70'
              : 'h-20 bg-white/80 backdrop-blur-xl shadow-lg shadow-black/5 border border-outline-variant/70'
          }`}
        >
          {/* Logo — left */}
          <button
            onClick={() => navTo('/')}
            className="justify-self-start flex items-center gap-2 group pl-4 md:pl-6"
          >
            <img
              src={`${import.meta.env.BASE_URL}cup-logo.svg`}
              alt="Cup Cafe"
              className="h-10 md:h-12 w-auto object-contain"
            />
            <span className="font-headline-md text-headline-md text-primary group-hover:text-secondary transition-colors duration-300">
              Cup Cafe.
            </span>
          </button>

          {/* Centered links — Home .. Visit Us, sliding shared pill. Our Story + Reviews tuck away below lg so 6 links never crowd tablet */}
          <nav className="hidden md:flex items-center justify-center gap-0.5 lg:gap-1 self-center">
            {tabs.map(tab => {
              const isLit = lit === tab.path;
              const isActive = active === tab.path;
              const tight = tab.path === '/our-story' || tab.path === '/reviews';
              return (
                <button
                  key={tab.path}
                  onClick={() => navTo(tab.path)}
                  onMouseEnter={() => setHovered(tab.path)}
                  onMouseLeave={() => setHovered(null)}
                  className={`relative px-2 lg:px-4 py-2 rounded-full font-label-sm text-label-sm uppercase tracking-widest transition-colors duration-200 whitespace-nowrap ${
                    tight ? 'hidden lg:inline-flex' : 'inline-flex'
                  }`}
                >
                  {isLit && (
                    <motion.span
                      layoutId="nav-pill"
                      transition={pillSpring}
                      className="absolute inset-0 rounded-full bg-surface-container-highest/80"
                    />
                  )}
                  <span
                    className={`relative z-10 transition-colors duration-200 ${
                      isActive ? 'text-secondary' : 'text-on-surface-variant hover:text-on-surface'
                    }`}
                  >
                    {tab.label}
                  </span>
                </button>
              );
            })}
          </nav>

          {/* CTA — right */}
          <div className="justify-self-end flex items-center gap-2 pr-2 md:pr-4">
            <Magnetic>
              <motion.button
                onClick={() => navTo('/contact#form')}
                whileTap={{ scale: 0.96 }}
                className="relative inline-flex items-center gap-2 bg-secondary text-on-secondary pl-5 pr-4 py-2.5 rounded-full font-label-sm text-label-sm overflow-hidden group"
              >
                <span className="relative z-10">Contact Us</span>
                <Icon name="arrow_forward" className="relative z-10 text-sm" />
                {/* hover fill sweep */}
                <span className="absolute inset-0 bg-secondary-container scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out" />
              </motion.button>
            </Magnetic>
          </div>
        </div>
      </div>

      {/* ═══ Phone: bottom dock — 4 main slots + More sheet trigger ═══ */}
      <div
        className="md:hidden fixed bottom-0 inset-x-0 z-50"
        style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      >
        <div className="mx-4 mb-3 bg-white/90 backdrop-blur-xl rounded-full border border-outline-variant/70 shadow-lg shadow-black/10 px-2 py-1.5 flex items-center">
          {dockTabs.map(tab => {
            const isActive = active === tab.path;
            return (
              <button
                key={tab.path}
                onClick={() => navTo(tab.path)}
                className="relative flex-1 min-w-0 flex flex-col items-center gap-0.5 py-1.5 rounded-full"
                aria-label={tab.label}
              >
                {isActive && (
                  <motion.span
                    layoutId="dock-pill"
                    transition={pillSpring}
                    className="absolute inset-0 rounded-full bg-secondary/15"
                  />
                )}
                <Icon
                  name={tab.icon}
                  className={`relative z-10 text-[20px] transition-colors ${
                    isActive ? 'text-secondary' : 'text-on-surface-variant'
                  }`}
                />
                <span
                  className={`relative z-10 text-[10px] font-semibold tracking-wide transition-colors ${
                    isActive ? 'text-secondary' : 'text-on-surface-variant'
                  }`}
                >
                  {tab.label}
                </span>
              </button>
            );
          })}

          {/* More — Our Story + Visit Us sheet */}
          <button
            onClick={() => setMoreOpen(true)}
            className="relative flex-1 min-w-0 flex flex-col items-center gap-0.5 py-1.5 rounded-full"
            aria-label="More"
          >
            {moreActive && (
              <motion.span
                layoutId="dock-pill"
                transition={pillSpring}
                className="absolute inset-0 rounded-full bg-secondary/15"
              />
            )}
            <Icon
              name="more_horiz"
              className={`relative z-10 text-[20px] transition-colors ${
                moreActive ? 'text-secondary' : 'text-on-surface-variant'
              }`}
            />
            <span
              className={`relative z-10 text-[10px] font-semibold tracking-wide transition-colors ${
                moreActive ? 'text-secondary' : 'text-on-surface-variant'
              }`}
            >
              More
            </span>
          </button>
        </div>
      </div>

      {/* ═══ More bottom sheet — z above the dock so the backdrop dims everything ═══ */}
      <AnimatePresence>
        {moreOpen && (
          <div
            className="md:hidden fixed inset-0 z-[60]"
            style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="absolute inset-0 bg-black/35 backdrop-blur-[2px]"
              onClick={() => setMoreOpen(false)}
            />
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', stiffness: 380, damping: 38 }}
              className="absolute bottom-0 inset-x-0 mx-4 mb-24 bg-surface rounded-3xl border border-outline-variant/70 shadow-2xl p-6"
            >
              <div className="w-10 h-1 rounded-full bg-outline mx-auto mb-5" />
              <div className="flex flex-col">
                {moreTabs.map(tab => {
                  const isActive = active === tab.path;
                  return (
                    <button
                      key={tab.path}
                      onClick={() => navTo(tab.path)}
                      className={`flex items-center justify-between py-4 font-label-sm text-label-sm uppercase tracking-widest transition-colors ${
                        isActive ? 'text-secondary' : 'text-on-surface'
                      }`}
                    >
                      {tab.label}
                      <Icon name="arrow_right_alt" className="text-lg" />
                    </button>
                  );
                })}
              </div>
              <button
                onClick={() => navTo('/contact#form')}
                className="mt-2 w-full bg-secondary text-on-secondary py-4 rounded-full font-label-sm text-label-sm flex items-center justify-center gap-2"
              >
                Contact Us
                <Icon name="arrow_forward" className="text-sm" />
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
