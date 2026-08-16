import { Review, GalleryItem, Amenity, FAQItem } from './types';

const U = (id: string, w = 1200) => `https://images.unsplash.com/${id}?w=${w}&q=85&auto=format`;



/* ─── Featured Items (top picks from real menu) ─── */
export const FEATURED_ITEMS = [
  { name: 'Roma\'s Club', description: 'Turkey, Bacon, Avocado, Swiss Cheese, Pesto Aioli Spread, on Dutch Crunch', price: '$11.75', badge: 'Best Seller', image: U('photo-1553909489-cd47e0907980', 800) },
  { name: 'Chicken Pesto', description: 'Chicken Breast, Avocado, American Cheese, Pesto Aioli Sweet, on Soft & Sweet Roll', price: '$10.90', badge: 'Customer Favorite', image: U('photo-1677511084683-0eba66ebaa7c', 800) },
  { name: 'Hot Pastrami', description: 'Pastrami Brisket Marinated overnight, steamed in our kettle, Cheddar, Lou\'s Special Sauce, on Dutch Crunch Roll', price: '$10.90', badge: 'Chef\'s Pick', image: U('photo-1700937314577-898450cafe35', 800) },
];

/* ─── Neighborhood Feedback ─── */
export const TESTIMONIALS: Review[] = [
  { name: 'Elizabeth McDonald', content: 'Our go-to neighborhood morning spot. Great pour-overs, fresh pastries, and warm service that makes you feel at home every visit.', rating: 5, date: '5 July 2026' },
  { name: 'Thomas Negrel', content: 'Fantastic local coffee stop with a relaxed room and delicious lunchtime sandwiches. Exactly what a neighborhood cafe should be.', rating: 5, date: '2 July 2026' },
  { name: 'Lindsay Grizzard', content: 'One of the friendliest teams around. Consistent coffee, delicious lunch options, and a cozy space to relax.', rating: 5, date: '28 June 2026' },
];

export const ALL_REVIEWS: Review[] = TESTIMONIALS;

/* ─── Hero social-proof monograms (real reviewer initials, brand colors) ─── */
export const AVATARS = [
  { initials: 'EM', bg: '#D46A2E' },
  { initials: 'TN', bg: '#7B8B63' },
  { initials: 'LG', bg: '#E57B3E' },
];

/* ─── Gallery (High-res curated photography) ─── */
export const GALLERY_ITEMS: GalleryItem[] = [
  { src: U('photo-1501339847302-ac426a4a7cbb', 800), alt: 'Cup Cafe interior ambience' },
  { src: U('photo-1554118811-1e0d58224f24', 800), alt: 'Cozy seating and window tables' },
  { src: U('photo-1553909489-cd47e0907980', 800), alt: 'Fresh toasted artisan sandwich' },
  { src: U('photo-1509785307050-d4066910ec1e', 800), alt: 'Fresh espresso extraction' },
  { src: U('photo-1509440159596-0249088772ff', 800), alt: 'Fresh bakery selection' },
  { src: U('photo-1517248135467-4c7edcad34c4', 800), alt: 'Outdoor patio seating' },
  { src: U('photo-1556910103-1c02745aae4d', 800), alt: 'Kitchen prep and sandwich assembly' },
  { src: U('photo-1533089860892-a7c6f0a88666', 800), alt: 'Hearty brunch spread' },
  { src: U('photo-1498837167922-ddd27525d352', 800), alt: 'Farm-fresh garden produce' },
  { src: U('photo-1540189549336-e6e99c3679fe', 800), alt: 'Colorful salad bowl' },
  { src: U('photo-1512621776951-a57141f2eefd', 800), alt: 'Seasonal specialty dish' },
  { src: U('photo-1490645935967-10de6ba17061', 800), alt: 'Fresh cafe breakfast plate' },
];

/* ─── Real Amenities ─── */
export const AMENITIES: Amenity[] = [
  { icon: 'wifi', label: 'Free WiFi' },
  { icon: 'transit_enterexit', label: 'Outdoor Seating' },
  { icon: 'directions_bike', label: 'Bike Parking' },
  { icon: 'local_parking', label: 'Street Parking' },
  { icon: 'accessible', label: 'Wheelchair Accessible' },
  { icon: 'favorite', label: 'Vegan Options' },
  { icon: 'credit_card', label: 'Accepts Cards' },
  { icon: 'tap_and_play', label: 'Apple Pay' },
  { icon: 'android', label: 'Android Pay' },
  { icon: 'thumb_up', label: 'Staff Masks' },
  { icon: 'move_to_inbox', label: 'Takeout' },
  { icon: 'coffee', label: 'Good for Working' },
];

/* ─── Real FAQ ─── */
export const FAQ: FAQItem[] = [
  { question: 'Do you offer gluten-free options?', answer: 'Yes, most of our sandwiches can be served on gluten-free bread. Just let our team know when placing your order.' },
  { question: 'Can I pre-order for a large group?', answer: 'Yes, we recommend placing orders for 10 or more people at least 24 hours ahead so we can have everything boxed and ready.' },
  { question: 'What are your payment options?', answer: 'We accept credit cards, Apple Pay, Android Pay, and cash at the counter.' },
  { question: 'Do you have vegan options?', answer: 'Yes, our veggie sandwich and house garden salads can be customized fully vegan upon request.' },
];

/* ─── Images ─── */
export const IMAGES = {
  hero: '/hero.png',
  sauce: U('photo-1498837167922-ddd27525d352', 800),
  interior: U('photo-1777502286448-35389817f504', 800),
  chef: U('photo-1556910103-1c02745aae4d', 800),
};
