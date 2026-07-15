import { useState, useRef, useEffect } from 'react';
import { FAQ, AMENITIES, IMAGES } from '../data';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const fadeUp = { initial: { y: 30, opacity: 0 }, whileInView: { y: 0, opacity: 1 }, viewport: { once: true, margin: '-40px' }, transition: { duration: 0.6 } };
const stagger = (i: number) => ({ ...fadeUp, transition: { ...fadeUp.transition, delay: i * 0.1 } });

export default function ContactPage() {
  const { hash } = useLocation();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [subject, setSubject] = useState('Catering Inquiry');
  const formRef = useRef<HTMLDivElement>(null);
  const handleCateringClick = () => {
    setSubject('Catering Inquiry');
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    if (hash === '#form' && formRef.current) {
      setTimeout(() => formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
    }
  }, [hash]);

  return (
    <div className="pt-12">
      {/* Hero */}
      <section className="px-margin-desktop max-w-screen-2xl mx-auto mb-section-gap">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-end">
          <motion.div initial={{ x: -40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="md:col-span-7">
            <span className="font-label-sm text-secondary uppercase tracking-widest block mb-4">The Neighborhood Spot</span>
            <h1 className="font-display-lg text-display-lg text-primary mb-8">Visit <span className="italic text-secondary">Us</span></h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              Nestled in the heart of San Francisco, we're a neighborhood sandwich spot serving handcrafted sandwiches, espresso, and good vibes since 2012.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bento Grid */}
      <section className="px-margin-desktop max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* Location Card */}
          <motion.div {...stagger(0)} className="md:col-span-8 bg-surface-container-low rounded-xl overflow-hidden editorial-shadow flex flex-col md:flex-row border border-outline-variant/30">
            <div className="p-12 md:w-1/2 flex flex-col justify-between">
              <div>
                <h2 className="font-headline-lg text-headline-lg text-primary mb-6">Our Location</h2>
                <p className="font-body-md text-body-md text-on-surface-variant mb-2">6 Monterey Blvd</p>
                <p className="font-body-md text-body-md text-on-surface-variant mb-8">San Francisco, CA 94131, USA</p>
              </div>
              <div>
                <a href="https://maps.google.com/maps?q=6+Monterey+Blvd+San+Francisco+CA+94131" target="_blank" rel="noopener"
                  className="flex items-center gap-2 group font-label-sm text-label-sm text-secondary"
                >
                  Get Directions <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
                </a>
              </div>
            </div>
            <div className="md:w-1/2 h-[400px] md:h-auto bg-surface-container-highest flex items-center justify-center relative overflow-hidden">
              <iframe className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12621.811403208607!2d-122.4347697!3d37.732519!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2b7600634dcc96a4!2sCup+Cafe!5e0!3m2!1sru!2sua!4v1497357957612"
                style={{ border: 0 }} allowFullScreen loading="lazy"
                title="Cup Cafe location"
              />
            </div>
          </motion.div>

          {/* Hours Card */}
          <motion.div {...stagger(1)} className="md:col-span-4 bg-primary-container text-on-primary-container rounded-xl p-10 editorial-shadow border border-primary/20 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-headline-md text-headline-md text-white">Hours</h2>
                <span className="material-symbols-outlined text-secondary-container text-4xl">schedule</span>
              </div>
              <ul className="space-y-6">
                {[
                  { day: 'Mon - Fri', time: '7AM - 2PM' },
                  { day: 'Saturday', time: '7AM - 2PM' },
                  { day: 'Sunday', time: 'Closed' },
                ].map((h, i) => (
                  <li key={i} className="flex justify-between items-end border-b border-white/10 pb-2">
                    <span className="font-label-sm text-label-sm">{h.day}</span>
                    <span className={`font-headline-md text-headline-md ${h.time === 'Closed' ? 'text-secondary-fixed-dim' : 'text-white'}`}>{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-12 bg-white/5 p-4 rounded-lg border border-white/10">
              <p className="font-decorative-note text-decorative-note italic text-secondary-fixed-dim">
                We're closed on Sundays. Early breakfast & lunch served daily until 2PM!
              </p>
            </div>
          </motion.div>

          {/* Amenities */}
          <motion.div {...fadeUp} className="md:col-span-12 py-16 grid grid-cols-1 md:grid-cols-5 gap-gutter items-center">
            <div className="md:col-span-2">
              <h3 className="font-headline-lg text-headline-lg text-primary mb-4">What We Offer</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">We've thought of everything to make your visit enjoyable.</p>
            </div>
            <div className="md:col-span-3 flex flex-wrap gap-8 justify-between">
              {AMENITIES.map((amenity, i) => (
                <motion.div key={i} initial={{ y: 15, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className="flex flex-col items-center gap-3 w-24"
                >
                  <div className="w-16 h-16 rounded-full bg-accent-cream flex items-center justify-center border border-outline-variant/20 hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-secondary text-3xl">{amenity.icon}</span>
                  </div>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">{amenity.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Catering Box (no delivery) */}
          <motion.div {...fadeUp} className="md:col-span-12 mb-12">
            <div className="bg-surface-container rounded-xl p-12 border-l-4 border-secondary relative overflow-hidden text-center md:text-left">
              <div className="relative z-10 max-w-2xl mx-auto md:mx-0">
                <h4 className="font-headline-md text-headline-md text-primary mb-4">Corporate Catering</h4>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6">Planning an office lunch or local event? Our catering boxes are packed with gourmet sandwiches, salads, and cookies. Call us or order in-store to arrange.</p>
                <button onClick={handleCateringClick} className="bg-secondary text-white px-8 py-4 rounded-full font-label-sm text-label-sm hover:bg-on-secondary-fixed-variant transition-colors">
                  Inquire About Catering
                </button>
              </div>
              <span className="material-symbols-outlined absolute -bottom-4 -right-4 text-9xl text-secondary/5 pointer-events-none">potted_plant</span>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div ref={formRef} id="form" {...fadeUp} className="md:col-span-12 mt-8 grid grid-cols-1 md:grid-cols-12 gap-gutter">
            <div className="md:col-span-5">
              <span className="font-decorative-note text-secondary italic block mb-4">Get in touch</span>
              <h2 className="font-headline-lg text-headline-lg text-primary mb-6">We'd love to <br/><span className="italic text-secondary">hear from you.</span></h2>
              <p className="font-body-md text-body-md text-on-surface-variant">Whether it's a question, a compliment, or a collaboration — drop us a line.</p>
            </div>
            <div className="md:col-span-6 md:col-start-7">
              <form className="space-y-8" onSubmit={e => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                  <div className="space-y-2">
                    <label className="font-headline-md text-body-md italic text-primary">Your Name</label>
                    <input className="w-full bg-surface-container-lowest border-b border-outline-variant focus:border-secondary transition-colors outline-none py-3 px-2 font-body-md" placeholder="e.g. Jane Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="font-headline-md text-body-md italic text-primary">Email</label>
                    <input className="w-full bg-surface-container-lowest border-b border-outline-variant focus:border-secondary transition-colors outline-none py-3 px-2 font-body-md" placeholder="hello@email.com" type="email" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="font-headline-md text-body-md italic text-primary">Subject</label>
                  <select value={subject} onChange={e => setSubject(e.target.value)} className="w-full bg-surface-container-lowest border-b border-outline-variant focus:border-secondary transition-colors outline-none py-3 px-2 font-body-md">
                    <option>Catering Inquiry</option>
                    <option>General Question</option>
                    <option>Feedback</option>
                    <option>Join the Team</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="font-headline-md text-body-md italic text-primary">Your Message</label>
                  <textarea className="w-full bg-surface-container-lowest border-b border-outline-variant focus:border-secondary transition-colors outline-none py-3 px-2 font-body-md" placeholder="How can we help?" rows={5} />
                </div>
                <div className="pt-6">
                  <button className="bg-primary text-on-primary px-10 py-4 rounded-full font-label-sm text-label-sm hover:bg-secondary transition-all flex items-center justify-center gap-3" type="submit">
                    Send Message <span className="material-symbols-outlined">send</span>
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <motion.section {...fadeUp} className="px-margin-desktop py-section-gap max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-decorative-note text-decorative-note text-secondary italic">Common Curiosities</span>
          <h2 className="font-headline-lg text-headline-lg text-primary">F.A.Q</h2>
        </div>
        <div className="space-y-8">
          {FAQ.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="border-b border-outline-variant pb-6"
            >
              <button className="flex justify-between items-center w-full text-left" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                <h3 className="font-headline-md text-body-lg text-primary">{item.question}</h3>
                <span className="material-symbols-outlined text-secondary transition-transform">
                  {openFaq === i ? 'remove' : 'add'}
                </span>
              </button>
              {openFaq === i && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} className="mt-4 pr-12 overflow-hidden">
                  <p className="font-body-md text-body-md text-on-surface-variant italic">{item.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Ending */}
      <motion.section {...fadeUp} className="py-section-gap text-center px-margin-desktop bg-surface-container/30">
        <div className="max-w-2xl mx-auto">
          <div className="mb-6 flex justify-center">
            <span className="material-symbols-outlined text-secondary text-6xl">lunch_dining</span>
          </div>
          <h3 className="font-display-md text-headline-lg text-primary mb-4">See You Tomorrow</h3>
          <p className="font-body-lg text-body-lg text-on-surface-variant italic">7AM to 2PM, Monday through Saturday. The bread is rising, and Lou's Special Sauce is ready.</p>
        </div>
      </motion.section>
    </div>
  );
}