import { useState } from 'react';
import { GALLERY_ITEMS } from '../data';
import type { GalleryItem } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

const stagger = (i: number) => ({ initial: { y: 30, opacity: 0 }, whileInView: { y: 0, opacity: 1 }, viewport: { once: true }, transition: { delay: i * 0.07, duration: 0.5 } });

export default function GalleryView() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const openLightbox = (item: GalleryItem) => {
    setLightboxItem(item);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxItem(null);
    document.body.style.overflow = '';
  };

  return (
    <div className="pt-12">
      <section className="px-margin-desktop max-w-screen-2xl mx-auto">
        <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="mb-section-gap">
          <span className="font-decorative-note text-secondary block mb-2 italic">captured moments</span>
          <h1 className="font-display-lg text-display-lg text-primary">Moments At <span className="italic text-secondary">Cup</span> Cafe</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-4 max-w-xl">Real moments, Real people, Real good food.</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {GALLERY_ITEMS.map((item, i) => (
            <motion.div
              key={i} {...stagger(i)}
              className={`${item.span === 'tall' ? 'aspect-[4/5] md:row-span-2' : 'aspect-square'} rounded-xl overflow-hidden group cursor-pointer relative`}
              onClick={() => openLightbox(item)}
            >
              <img className="w-full h-full object-cover grayscale-[0.15] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" src={item.src} alt={item.alt} />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />
            </motion.div>
          ))}
          <motion.div {...stagger(GALLERY_ITEMS.length)}
            className="aspect-square bg-secondary-fixed-dim rounded-xl flex flex-col items-center justify-center p-6 text-center group cursor-pointer"
          >
            <span className="material-symbols-outlined text-secondary text-4xl mb-2">photo_camera</span>
            <p className="font-label-sm text-xs text-on-secondary-fixed">Follow Us @CupCafe</p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <motion.section {...stagger(0)} className="mt-section-gap mb-section-gap px-margin-desktop max-w-screen-md mx-auto text-center">
        <h2 className="font-headline-lg text-headline-lg text-primary mb-6">Experience it <span className="italic text-secondary">in person.</span></h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-10">
          The scent of freshly baked bread and the hiss of the espresso machine are waiting for you. Come find your favorite corner.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="bg-primary text-on-primary px-10 py-4 rounded-xl font-label-sm text-label-sm hover:scale-105 transition-transform">Visit Us Today</button>
          <button className="border border-primary text-primary px-10 py-4 rounded-xl font-label-sm text-label-sm hover:bg-primary hover:text-on-primary transition-all">View Our Menu</button>
        </div>
      </motion.section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && lightboxItem && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-primary/95 flex items-center justify-center p-6 backdrop-blur-sm cursor-pointer"
            onClick={closeLightbox}
          >
            <motion.button
              initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}
              className="absolute top-10 right-10 text-on-primary hover:text-secondary transition-colors z-10"
              onClick={closeLightbox}
            >
              <span className="material-symbols-outlined text-5xl">close</span>
            </motion.button>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }}
              className="max-w-5xl w-full h-full flex items-center justify-center"
              onClick={e => e.stopPropagation()}
            >
              <img className="max-h-[80vh] max-w-full rounded-xl border-4 border-white/10 object-contain" src={lightboxItem.src} alt={lightboxItem.alt} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
