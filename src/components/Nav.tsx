import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';
import Icon from './Icon';

const tabs = [
  { path: '/', label: 'Home' },
  { path: '/menu', label: 'Menu' },
  { path: '/our-story', label: 'Our Story' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/reviews', label: 'Reviews' },
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
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  const active = location.pathname;
  /* The pill follows whichever is lit — hover takes priority over active */
  const lit = hovered ?? active;

  const navTo = (path: string) => {
    navigate(path);
    setMobileOpen(false);
  };

  return (
    <motion.header
      initial={reduce ? false : { y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      className="fixed top-0 inset-x-0 z-50 px-4 md:px-8 pt-3 md:pt-4"
    >
      {/* Floating island — transparent at top, frosted glass pill on scroll. 3-col grid keeps links centered */}
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
            src="/images/new (1).png"
            alt="Cup Cafe"
            className="h-10 md:h-12 w-auto object-contain"
          />
          <span className="font-headline-md text-headline-md text-primary group-hover:text-secondary transition-colors duration-300">
            Cup Cafe.
          </span>
        </button>

        {/* Centered links — Home .. Visit Us, sliding shared pill */}
        <nav className="hidden md:flex items-center justify-center gap-0.5 lg:gap-1 self-center">
          {tabs.map(tab => {
            const isLit = lit === tab.path;
            const isActive = active === tab.path;
            return (
              <button
                key={tab.path}
                onClick={() => navTo(tab.path)}
                onMouseEnter={() => setHovered(tab.path)}
                onMouseLeave={() => setHovered(null)}
                className="relative px-2 lg:px-4 py-2 rounded-full font-label-sm text-label-sm uppercase tracking-widest transition-colors duration-200 whitespace-nowrap"
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

        {/* CTA + hamburger — right */}
        <div className="justify-self-end flex items-center gap-2 pr-2 md:pr-4">
          <div className="hidden md:block">
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

          <button
            aria-label="Toggle menu"
            className={`md:hidden flex items-center justify-center w-10 h-10 rounded-full transition-colors ${
              mobileOpen ? 'text-secondary' : 'text-primary'
            }`}
            onClick={() => setMobileOpen(o => !o)}
          >
            <Icon name={mobileOpen ? 'close' : 'menu'} className="text-3xl" />
          </button>
        </div>
      </div>

      {/* Full-screen staggered mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="md:hidden fixed inset-x-0 top-[88px] bottom-0 bg-surface/95 backdrop-blur-xl border-t border-outline-variant/60 px-8 py-10 flex flex-col"
          >
            <div className="flex-1 flex flex-col justify-start gap-2">
              {tabs.map((tab, i) => {
                const isActive = active === tab.path;
                return (
                  <motion.button
                    key={tab.path}
                    initial={{ opacity: 0, y: 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 12 }}
                    transition={{ delay: 0.05 * i, duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
                    onClick={() => navTo(tab.path)}
                    className={`block w-full text-left font-headline text-3xl py-3 transition-colors ${
                      isActive ? 'text-secondary' : 'text-on-surface hover:text-secondary'
                    }`}
                  >
                    {tab.label}
                  </motion.button>
                );
              })}
            </div>
            <motion.button
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ delay: 0.05 * tabs.length, duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
              onClick={() => navTo('/contact#form')}
              className="w-full bg-secondary text-on-secondary py-4 rounded-full font-label-sm text-center"
            >
              Contact Us
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}