import { Review, GalleryItem, Amenity, FAQItem } from './types';

const U = (id: string, w = 1200) => `https://images.unsplash.com/${id}?w=${w}&q=85&auto=format`;



/* ─── Featured Items (top picks from real menu) ─── */
export const FEATURED_ITEMS = [
  { name: 'Roma\'s Club', description: 'Turkey, Bacon, Avocado, Swiss Cheese, Pesto Aioli Spread, on Dutch Crunch', price: '$11.75', badge: 'Best Seller', image: U('photo-1553909489-cd47e0907980') },
  { name: 'Chicken Pesto', description: 'Chicken Breast, Avocado, American Cheese, Pesto Aioli Sweet, on Soft & Sweet Roll', price: '$10.90', badge: 'Customer Favorite', image: U('photo-1677511084683-0eba66ebaa7c') },
  { name: 'Hot Pastrami', description: 'Pastrami Brisket Marinated overnight, steamed in our kettle, Cheddar, Lou\'s Special Sauce, on Dutch Crunch Roll', price: '$10.90', badge: 'Chef\'s Pick', image: U('photo-1700937314577-898450cafe35') },
];

/* ─── Real Reviews from cafe-inspector.com ─── */
export const TESTIMONIALS: Review[] = [
  { name: 'Elizabeth McDonald', content: 'A neighborhood gem. Cozy spot, good coffee, tasty pastries, and the friendliest owners you could imagine. I\'m proud to have become a regular here.', rating: 5, date: '5 July 2026' },
  { name: 'Thomas Negrel', content: 'Super nice local coffee. Quiet with nice chilled background music and delicious sandwiches and salads. About a million times nicer than starbucks or peets...ah the joy of non corporate coffee places!!!', rating: 5, date: '2 July 2026' },
  { name: 'Lindsay Grizzard', content: 'I love this place. The owners are so incredibly sweet and offer the best customer service around.', rating: 5, date: '28 June 2026' },
];

export const ALL_REVIEWS: Review[] = TESTIMONIALS;

/* ─── Gallery (real photos from client site) ─── */
const G = (n: number) => `https://cup-cafe.cafe-inspector.com/cdn/img/cup-cafe/photo${n}.jpg`;

export const GALLERY_ITEMS: GalleryItem[] = [
  { src: G(1), alt: 'Cup Cafe exterior' },
  { src: G(2), alt: 'Cafe interior' },
  { src: G(3), alt: 'Sandwich preparation' },
  { src: G(4), alt: 'Coffee bar' },
  { src: G(5), alt: 'Pastry display' },
  { src: G(6), alt: 'Seating area' },
  { src: G(7), alt: 'Menu board' },
  { src: G(8), alt: 'Outdoor seating' },
  { src: G(9), alt: 'Espresso machine' },
  { src: G(10), alt: 'Sandwich close-up' },
  { src: G(11), alt: 'Cafe counter' },
  { src: G(12), alt: 'Customer enjoying coffee' },
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
  { question: 'Do you offer gluten-free options?', answer: 'Yes! Most of our gourmet sandwiches can be made on a gluten-free bread option. Just let our team know when ordering.' },
  { question: 'Can I pre-order for a large group?', answer: 'Absolutely — we recommend placing large orders (10+) at least 24 hours in advance. Check our Catering Menu for box lunch options.' },
  { question: 'What are your payment options?', answer: 'We accept all major credit cards, Apple Pay, Android Pay, and good old cash.' },
  { question: 'Do you have vegan options?', answer: 'Yes, we offer vegan-friendly sandwiches and salads. Our Veggie and Veggie-Licious sandwiches can be prepared vegan upon request.' },
];

/* ─── Images ─── */
export const IMAGES = {
  hero: '/hero.png',
  sauce: U('photo-1498837167922-ddd27525d352', 800),
  interior: U('photo-1777502286448-35389817f504', 800),
  chef: U('photo-1556910103-1c02745aae4d', 800),
};
