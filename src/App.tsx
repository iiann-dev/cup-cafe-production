import { TabType } from './types';
import { useState, useEffect, useRef, lazy, Suspense } from 'react';
import HomeView from './components/HomeView';
import Lenis from 'lenis';

const MenuView = lazy(() => import('./components/MenuView'));
const OurStoryView = lazy(() => import('./components/OurStoryView'));
const GalleryView = lazy(() => import('./components/GalleryView'));
const ReviewsView = lazy(() => import('./components/ReviewsView'));
const ContactView = lazy(() => import('./components/ContactView'));

const tabs: { id: TabType; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'menu', label: 'Menu' },
  { id: 'our-story', label: 'Our Story' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'contact', label: 'Visit Us' },
];

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({ duration: 0.5, easing: (t: number) => Math.min(1, 1 - Math.pow(1 - t, 3)) });
    lenisRef.current = lenis;

    function raf(time: number) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);

    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => { lenis.destroy(); window.removeEventListener('scroll', handleScroll); };
  }, []);

  const navigate = (tab: TabType) => {
    setActiveTab(tab);
    setMobileOpen(false);
    // Lenis overrides native scrollTo — use its API for instant reset
    if (lenisRef.current) lenisRef.current.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-background text-on-surface font-body">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/85 backdrop-blur-xl shadow-lg' : 'bg-transparent'}`}>
        <div className="px-margin-desktop max-w-screen-2xl mx-auto flex items-center justify-between h-20">
          <button onClick={() => navigate('home')} className="flex items-center gap-2 group">
            <span className="material-symbols-outlined text-secondary text-2xl">local_cafe</span>
            <span className="font-headline-md text-headline-md text-primary group-hover:text-secondary transition-colors">Cup Cafe.</span>
          </button>

          <nav className="hidden md:flex items-center gap-8">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => navigate(tab.id)}
                className={`font-label-sm text-label-sm uppercase tracking-widest py-2 relative transition-colors ${
                  activeTab === tab.id ? 'text-secondary' : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 h-[2px] bg-secondary rounded-full" />
                )}
              </button>
            ))}
            <button onClick={() => navigate('menu')} className="bg-secondary text-on-secondary px-6 py-3 rounded-full font-label-sm text-label-sm hover:scale-95 transition-transform shadow-lg shadow-secondary/20">
              View Menu
            </button>
          </nav>

          <button className="md:hidden text-primary" onClick={() => setMobileOpen(!mobileOpen)}>
            <span className="material-symbols-outlined text-3xl">{mobileOpen ? 'close' : 'menu'}</span>
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-outline-variant/20 px-margin-desktop py-8 space-y-6">
            {tabs.map(tab => (
              <button key={tab.id} onClick={() => navigate(tab.id)} className="block w-full text-left font-headline-md text-xl py-2">
                {tab.label}
              </button>
            ))}
            <button onClick={() => navigate('menu')} className="w-full bg-secondary text-on-secondary py-4 rounded-full font-label-sm text-center">View Menu</button>
          </div>
        )}
      </header>

      <main className="pt-20">
        {activeTab === 'home' && <HomeView onNavigate={navigate} />}
        {activeTab === 'menu' && <Suspense fallback={<div className="h-screen animate-pulse bg-background" />}><MenuView /></Suspense>}
        {activeTab === 'our-story' && <Suspense fallback={<div className="h-screen animate-pulse bg-background" />}><OurStoryView onNavigate={navigate} /></Suspense>}
        {activeTab === 'gallery' && <Suspense fallback={<div className="h-screen animate-pulse bg-background" />}><GalleryView onNavigate={navigate} /></Suspense>}
        {activeTab === 'reviews' && <Suspense fallback={<div className="h-screen animate-pulse bg-background" />}><ReviewsView /></Suspense>}
        {activeTab === 'contact' && <Suspense fallback={<div className="h-screen animate-pulse bg-background" />}><ContactView /></Suspense>}
      </main>

      {/* Footer */}
      <footer className="px-margin-desktop py-section-gap bg-primary text-on-primary border-t border-outline-variant/10">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <div>
            <span className="font-headline-md text-headline-md text-secondary">Cup Cafe.</span>
            <p className="font-body-md text-body-md text-on-surface-variant mt-4 max-w-xs">
              Every Sandwich Has A Story. 6 Monterey Blvd, San Francisco, CA 94131
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-label-sm uppercase tracking-widest text-secondary">Hours</span>
            <p className="font-body-md text-sm">Mon–Sat 7AM–2PM · Sunday Closed</p>
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-label-sm uppercase tracking-widest text-secondary">Follow</span>
            <div className="flex gap-6">
              {['instagram', 'facebook', 'twitter'].map(s => (
                <button key={s} className="material-symbols-outlined hover:text-secondary transition-colors">{s === 'instagram' ? 'photo_camera' : s === 'facebook' ? 'groups' : 'alternate_email'}</button>
              ))}
            </div>
            <p className="font-body-md text-xs text-on-surface-variant mt-4">© 2026 Cup Cafe. Handcrafted with ♥</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
