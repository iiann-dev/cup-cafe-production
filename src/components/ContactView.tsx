import { useState } from 'react';
import { FAQ, AMENITIES, DELIVERY_PARTNERS, IMAGES } from '../data';
import { motion } from 'framer-motion';

const fadeUp = { initial: { y: 30, opacity: 0 }, whileInView: { y: 0, opacity: 1 }, viewport: { once: true, margin: '-40px' }, transition: { duration: 0.6 } };
const stagger = (i: number) => ({ ...fadeUp, transition: { ...fadeUp.transition, delay: i * 0.1 } });

export default function ContactView() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="pt-12">
      {/* Hero */}
      <section className="px-margin-desktop max-w-screen-2xl mx-auto mb-section-gap">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-end">
          <motion.div initial={{ x: -40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="md:col-span-7">
            <span className="font-label-sm text-secondary uppercase tracking-widest block mb-4">The Neighborhood Spot</span>
            <h1 className="font-display-lg text-display-lg text-primary mb-8">Visit <span className="italic text-secondary">Us</span></h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              Nestled in the heart of Oakwood, we're more than just a cafe. We're a destination for handcrafted sandwiches, artisanal coffee, and community connection.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="md:col-span-5 relative hidden md:block">
            <div className="absolute -top-12 -right-12 w-40 h-40 flex items-center justify-center">
              <svg className="w-full h-full text-secondary/20" viewBox="0 0 100 100">
                <path d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" id="contactCircle" />
                <text className="font-label-sm text-[8px] uppercase tracking-widest fill-secondary">
                  <textPath href="#contactCircle">• Fresh Daily • Handcrafted with Love • The Best Coffee •</textPath>
                </text>
              </svg>
              <span className="material-symbols-outlined absolute text-secondary text-3xl">favorite</span>
            </div>
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
                <p className="font-body-md text-body-md text-on-surface-variant mb-2">123 Maple Street</p>
                <p className="font-body-md text-body-md text-on-surface-variant mb-8">Oakwood, CA 90210</p>
                <div className="flex items-center gap-4 mb-4">
                  <span className="material-symbols-outlined text-secondary">call</span>
                  <span className="font-label-sm text-label-sm">(125) 456-7890</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-secondary">mail</span>
                  <span className="font-label-sm text-label-sm">hello@cupcafe.com</span>
                </div>
              </div>
              <div className="mt-12">
                <button className="flex items-center gap-2 group font-label-sm text-label-sm text-secondary">
                  Get Directions <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
                </button>
              </div>
            </div>
            <div className="md:w-1/2 h-[400px] md:h-auto bg-surface-container-highest flex items-center justify-center relative overflow-hidden">
              <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&q=85&auto=format" alt="Map" />
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
                  { day: 'Mon - Fri', time: '7am - 8pm' },
                  { day: 'Saturday', time: '8am - 9pm' },
                  { day: 'Sunday', time: '8am - 7pm' },
                ].map((h, i) => (
                  <li key={i} className="flex justify-between items-end border-b border-white/10 pb-2">
                    <span className="font-label-sm text-label-sm">{h.day}</span>
                    <span className="font-headline-md text-headline-md text-white">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-12 bg-white/5 p-4 rounded-lg border border-white/10">
              <p className="font-decorative-note text-decorative-note italic text-secondary-fixed-dim">
                "We're closed on Tuesdays to let our team rest and source the freshest local ingredients."
              </p>
            </div>
          </motion.div>

          {/* Amenities */}
          <motion.div {...fadeUp} className="md:col-span-12 py-16 grid grid-cols-1 md:grid-cols-5 gap-gutter items-center">
            <div className="md:col-span-2">
              <h3 className="font-headline-lg text-headline-lg text-primary mb-4">Little Comforts</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">We've thought of everything to make your stay feel like home.</p>
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

          {/* Delivery + Catering */}
          <motion.div {...fadeUp} className="md:col-span-12 grid grid-cols-1 md:grid-cols-2 gap-gutter mt-12">
            <div className="rounded-xl overflow-hidden editorial-shadow bg-surface-container-low min-h-[300px] flex items-center justify-center">
              <div className="text-center p-8">
                <h3 className="font-headline-md text-headline-md mb-4">Enjoy at Home</h3>
                <p className="font-body-md text-on-surface-variant">Can't make it in? We partner with the best to bring our kitchen to yours.</p>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-12 px-8">
              <div>
                <h4 className="font-label-sm text-label-sm text-secondary uppercase tracking-widest mb-6">Our Delivery Partners</h4>
                <div className="grid grid-cols-2 gap-8">
                  {DELIVERY_PARTNERS.map((partner, i) => (
                    <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                      className="flex items-center gap-4 p-4 border border-outline-variant rounded-lg hover:border-secondary transition-colors cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-secondary">{partner.icon}</span>
                      <span className="font-label-sm text-label-sm">{partner.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="bg-surface-container rounded-xl p-8 border-l-4 border-secondary relative overflow-hidden">
                <div className="relative z-10">
                  <h4 className="font-headline-md text-headline-md text-primary mb-4">Corporate Catering</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-6">Planning an office lunch or local event? Our sandwich platters are legendary.</p>
                  <button className="bg-secondary text-white px-8 py-4 rounded-full font-label-sm text-label-sm hover:bg-on-secondary-fixed-variant transition-colors">
                    Download Catering Menu
                  </button>
                </div>
                <span className="material-symbols-outlined absolute -bottom-4 -right-4 text-9xl text-secondary/5 pointer-events-none">potted_plant</span>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div {...fadeUp} className="md:col-span-12 mt-16 grid grid-cols-1 md:grid-cols-12 gap-gutter">
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
                  <select className="w-full bg-surface-container-lowest border-b border-outline-variant focus:border-secondary transition-colors outline-none py-3 px-2 font-body-md">
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

      {/* Order Online CTA */}
      <motion.section {...fadeUp} className="px-margin-desktop py-section-gap">
        <div className="max-w-screen-2xl mx-auto bg-primary-container text-on-primary-container rounded-2xl overflow-hidden flex flex-col md:flex-row editorial-shadow">
          <div className="w-full md:w-3/5 p-12 md:p-20 flex flex-col justify-center">
            <span className="font-decorative-note text-decorative-note text-secondary-fixed-dim mb-4">Hungry? We've got you.</span>
            <h2 className="font-display-md text-headline-lg md:text-display-md text-background mb-8 leading-tight">
              Freshness delivered, <br/>or ready for <span className="italic text-secondary-fixed-dim">pick-up.</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-gutter">
              <button className="bg-secondary text-on-secondary px-10 py-5 rounded-full font-label-sm text-label-sm hover:bg-secondary-container transition-all flex items-center justify-center gap-3">
                ORDER NOW <span className="material-symbols-outlined">arrow_outward</span>
              </button>
              <button className="border border-on-primary-container/30 text-on-primary-container px-10 py-5 rounded-full font-label-sm text-label-sm hover:bg-white/5 transition-all text-center">
                VIEW MENU
              </button>
            </div>
          </div>
          <div className="w-full md:w-2/5 min-h-[300px] bg-secondary-container/20 flex items-center justify-center">
            <div className="text-center p-8">
              <span className="material-symbols-outlined text-6xl text-secondary">lunch_dining</span>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Ending */}
      <motion.section {...fadeUp} className="py-section-gap text-center px-margin-desktop bg-surface-container/30">
        <div className="max-w-2xl mx-auto">
          <div className="mb-6 flex justify-center">
            <span className="material-symbols-outlined text-secondary text-6xl">coffee</span>
          </div>
          <h3 className="font-display-md text-headline-lg text-primary mb-4">See You Tomorrow</h3>
          <p className="font-body-lg text-body-lg text-on-surface-variant italic">The coffee is grinding, and the bread is rising. We can't wait to welcome you back.</p>
        </div>
      </motion.section>
    </div>
  );
}
