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
   height stable so the footer never flashes to the top. */
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
        <div className="min-h-dvh bg-background text-on-surface font-body">
          <Nav scrolled={scrolled} />
          <main>
            <Outlet />
          </main>
          <Footer />
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
