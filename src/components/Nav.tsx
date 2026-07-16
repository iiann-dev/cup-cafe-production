import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';

const tabs = [
  { path: '/', label: 'Home' },
  { path: '/menu', label: 'Menu' },
  { path: '/our-story', label: 'Our Story' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/reviews', label: 'Reviews' },
  { path: '/contact', label: 'Visit Us' },
];

export default function Nav({ scrolled }: { scrolled: boolean }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navTo = (path: string) => {
    navigate(path);
    setMobileOpen(false);
  };

  const active = location.pathname;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/85 backdrop-blur-xl shadow-lg' : 'bg-transparent'}`}>
      <div className="px-margin-desktop max-w-screen-2xl mx-auto flex items-center justify-between h-20">
        <button onClick={() => navTo('/')} className="flex items-center gap-2 group">
          <img
            src="/images/cup-logo.png"
            alt="Cup Cafe"
            className="h-8 md:h-9 w-auto object-contain"
          />
          <span className="font-headline-md text-headline-md text-primary group-hover:text-secondary transition-colors">Cup Cafe.</span>
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {tabs.map(tab => (
            <button
              key={tab.path}
              onClick={() => navTo(tab.path)}
              className={`font-label-sm text-label-sm uppercase tracking-widest py-2 relative transition-colors ${
                active === tab.path ? 'text-secondary' : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              {tab.label}
              {active === tab.path && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 h-[2px] bg-secondary rounded-full" />
              )}
            </button>
          ))}
          <button onClick={() => navTo('/contact#form')} className="bg-secondary text-on-secondary px-6 py-3 rounded-full font-label-sm text-label-sm hover:scale-95 transition-transform shadow-lg shadow-secondary/20">
            Contact Us
          </button>
        </nav>

        <button className="md:hidden text-primary" onClick={() => setMobileOpen(!mobileOpen)}>
          <span className="material-symbols-outlined text-3xl">{mobileOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-outline-variant/20 px-margin-desktop py-8 space-y-6">
          {tabs.map(tab => (
            <button key={tab.path} onClick={() => navTo(tab.path)} className="block w-full text-left font-headline-md text-xl py-2">
              {tab.label}
            </button>
          ))}
          <button onClick={() => navTo('/contact#form')} className="w-full bg-secondary text-on-secondary py-4 rounded-full font-label-sm text-center">Contact Us</button>
        </div>
      )}
    </header>
  );
}
