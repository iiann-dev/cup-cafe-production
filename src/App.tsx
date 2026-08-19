import { useEffect, useRef, useState, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Outlet } from 'react-router-dom';
import Lenis from 'lenis';
import Nav from './components/Nav';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';

/* Code-split: only the Home bundle loads on first visit */
const MenuPage = lazy(() => import('./pages/MenuPage'));
const OurStoryPage = lazy(() => import('./pages/OurStoryPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const ReviewsPage = lazy(() => import('./pages/ReviewsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

/* Static placeholder while a lazy page chunk loads — keeps the layout
   height stable so the footer never flashes to the top. min-h-[60vh]
   provides enough height for the footer to sit at the bottom during load. */
function PageFallback() {
  return (
    <div className="min-h-[60vh] bg-background" aria-hidden="true" />
  );
}

function Layout() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
      const lenis = new Lenis({ duration: 0.5, easing: (t: number) => Math.min(1, 1 - Math.pow(1 - t, 3)) });
      lenisRef.current = lenis;
      // Expose for MenuPage category swaps — Lenis owns scroll, so plain
      // window.scrollTo gets fought. Phone-only clamp uses lenis.scrollTo.
      (window as unknown as Record<string, unknown>).__lenis = lenis;
      function raf(time: number) { lenis.raf(time); requestAnimationFrame(raf); }
      requestAnimationFrame(raf);
      const handleScroll = () => setScrolled(window.scrollY > 60);
      window.addEventListener('scroll', handleScroll);
      return () => { lenis.destroy(); window.removeEventListener('scroll', handleScroll); };
    }, []);

  useEffect(() => {
    if (lenisRef.current) lenisRef.current.scrollTo(0, { immediate: true });
  }, [location.pathname]);

  return (
            <div className="min-h-screen bg-background text-on-surface font-body">
              {/* Phone-only sticky footer: short pages (menu Soups / Large Functions)
                  must still fill the viewport so the dark footer always lands at the
                  bottom edge — no cream gap can appear under it. */}
              <div className="min-h-dvh flex flex-col md:block md:min-h-screen">
                <Nav scrolled={scrolled} />
                {/* flex-1: main absorbs ALL leftover viewport height (footer is
                    in-flow below, so this pushes the footer to the bottom edge
                    exactly when content is short) */}
                <main className="flex-1 md:flex-none">
                  <Outlet />
                </main>
                <Footer />
              </div>
            </div>
          );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="menu" element={<Suspense fallback={<PageFallback />}><MenuPage /></Suspense>} />
          <Route path="our-story" element={<Suspense fallback={<PageFallback />}><OurStoryPage /></Suspense>} />
          <Route path="gallery" element={<Suspense fallback={<PageFallback />}><GalleryPage /></Suspense>} />
          <Route path="reviews" element={<Suspense fallback={<PageFallback />}><ReviewsPage /></Suspense>} />
          <Route path="contact" element={<Suspense fallback={<PageFallback />}><ContactPage /></Suspense>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
