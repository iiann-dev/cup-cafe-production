import { useNavigate } from 'react-router-dom';

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
  );
}
