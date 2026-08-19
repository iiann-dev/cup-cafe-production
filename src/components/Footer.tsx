import { useNavigate } from 'react-router-dom';
import Icon from './Icon';

const pages = [
  { path: '/', label: 'Home' },
  { path: '/menu', label: 'Menu' },
  { path: '/our-story', label: 'Our Story' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/reviews', label: 'Reviews' },
  { path: '/contact', label: 'Visit Us' },
];

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="px-margin-desktop py-section-gap bg-dark text-on-primary border-t border-white/10">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-gutter">
        <div>
          <span className="font-headline-md text-headline-md text-secondary">Cup Cafe.</span>
          <p className="font-body-md text-body-md text-on-primary-container mt-4 max-w-xs">
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
              <button key={s} className="hover:text-secondary transition-colors"><Icon name={s === 'instagram' ? 'photo_camera' : s === 'facebook' ? 'groups' : 'alternate_email'} /></button>
            ))}
          </div>
          <div className="flex flex-col gap-1 mt-4">
            <p className="font-body-md text-xs text-on-primary-container">© {new Date().getFullYear()} Cup Cafe. All rights reserved.</p>
            <p className="font-body-md text-[11px] text-on-primary-container/80">Concept redesign for portfolio. Not affiliated with Cup Cafe SF.</p>
          </div>
        </div>
      </div>
      {/* Dock clearance — phone bottom nav floats over the footer otherwise.
          Phone-only: match the dock's total height (dock ~75px + safe area inset ~34px
          on iPhone) so the dark footer extends fully behind the dock and no cream
          page background shows at the bottom edge. Was h-28 (112px) → h-14 (56px)
          was too short; now h-24 (96px) ≈ dock + safe area. */}
      <div className="h-24 md:hidden" aria-hidden="true" />
    </footer>
  );
}
