import { MenuCategory, Review, GalleryItem, TeamMember, TimelineEvent, Amenity, DeliveryPartner, FAQItem } from './types';

/* ─── Image Base (Unsplash) ─── */
const U = (id: string, w = 1200) => `https://images.unsplash.com/${id}?w=${w}&q=85&auto=format`;

/* ─── Menu Categories ─── */
export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: 'sandwiches', label: 'Artisan Sandwiches', note: 'fan favorites', layout: 'grid',
    items: [
      { name: 'Roasted Chicken Pesto', description: 'Basil pesto, roasted chicken, mozzarella, tomato, arugula', price: '$12.50', badge: 'Fresh & Hearty' },
      { name: 'Truffle Mushroom Melt', description: 'Wild mushrooms, truffle aioli, caramelized onions, gruyère', price: '$13.90', badge: 'Best Seller' },
      { name: 'Smoky Bacon & Egg', description: 'Smoked bacon, fried egg, cheddar, chipotle mayo', price: '$11.90', badge: 'Rich & Satisfying' },
    ],
  },
  {
    id: 'coffee', label: 'Coffee & Espresso', note: '— The Perfect Brew', layout: 'asymmetric',
    items: [
      { name: 'Signature Flat White', description: 'Double shot artisan roast, perfectly micro-foamed milk', price: '$4.50 / $5.25' },
      { name: 'Dark Chocolate Mocha', description: '70% cacao dark chocolate, double espresso, steamed milk', price: '$5.50' },
      { name: '18-Hour Cold Brew', description: 'Slow-steeped signature blend served over crystalline ice', price: '$4.95' },
      { name: 'Espresso Macchiato', description: 'Traditional small cup', price: '$3.50' },
      { name: 'Cortado', description: 'Equal parts espresso & milk', price: '$4.00' },
      { name: 'Iced Latte', description: 'Refreshing & creamy', price: '$4.75' },
      { name: 'Pour Over', description: 'Single origin rotating', price: '$5.50' },
    ],
  },
  {
    id: 'salads', label: 'Fresh Salads', note: '— From the Garden', layout: 'grid',
    items: [
      { name: 'Burrata & Heirloom', description: 'Artisan burrata, multicolored heirloom tomatoes, basil pesto, balsamic reduction', price: '$14.50' },
      { name: 'Citrus Beet Root', description: 'Roasted beets, goat cheese, baby spinach, orange segments, walnuts', price: '$13.25' },
      { name: 'Modern Kale Caesar', description: 'Baby kale, crispy chickpeas, shaved parmesan, house-made tahini dressing', price: '$12.50' },
    ],
  },
  {
    id: 'burgers', label: 'House Burgers', note: '— The Grill House', layout: 'asymmetric',
    items: [
      { name: 'The Wagyu Signature', description: 'American Wagyu, aged cheddar, bone marrow butter, caramelized shallots, house pickles', price: '$19.00' },
      { name: 'Smoky Truffle Burger', description: 'Double beef patty, truffle mayo, smoked gouda, crispy onions', price: '$16.50' },
    ],
  },
  {
    id: 'drinks', label: 'Cold Drinks', note: '— Chill & Refresh', layout: 'list',
    items: [
      { name: 'Lavender Lemonade', description: 'Refreshing lavender & lemon', price: '$5.25' },
      { name: 'Iced Matcha Latte', description: 'Vibrant matcha with milk', price: '$6.50' },
      { name: 'Forest Berry Bliss', description: 'Raspberry, blueberry, blackberry blend', price: '$7.00' },
      { name: 'Hibiscus Sparkler', description: 'Sparkling hibiscus with mint & lime', price: '$5.75' },
    ],
  },
];

/* ─── Home Featured Items ─── */
export const FEATURED_ITEMS = [
  { name: 'Roasted Chicken Pesto', description: 'Basil pesto, roasted chicken, mozzarella, tomato, arugula', price: '$12.50', badge: 'Fresh & Hearty', image: U('photo-1553909489-cd47e0907980') },
  { name: 'Truffle Mushroom Melt', description: 'Wild mushrooms, truffle aioli, caramelized onions, gruyère', price: '$13.90', badge: 'Best Seller', image: U('photo-1677511084683-0eba66ebaa7c') },
  { name: 'Smoky Bacon & Egg', description: 'Smoked bacon, fried egg, cheddar, chipotle mayo', price: '$11.90', badge: 'Rich & Satisfying', image: U('photo-1700937314577-898450cafe35') },
];

/* ─── Testimonials ─── */
export const TESTIMONIALS: Review[] = [
  { name: 'Jason M.', initials: 'JM', role: 'Local Guide', time: '', content: "The best sandwich I've had in town! The sauce is honestly addicting. I come here at least twice a week.", rating: 5 },
  { name: 'Sarah L.', initials: 'SL', role: 'Regular Customer', time: '', content: 'Cozy place, amazing food, and the staff treat you like family. Cup Cafe is a gem!', rating: 5 },
  { name: 'Daniel K.', initials: 'DK', role: 'Food Blogger', time: '', content: "You can taste the quality in every bite. Everything feels fresh and handmade.", rating: 5 },
];

export const ALL_REVIEWS: Review[] = [
  { name: 'Sarah L.', initials: 'SL', role: 'Local Guide', time: '1 week ago', content: "This place is a vibe. The aesthetic is beautiful but the coffee is the real winner. The 'Golden Hour' roast is smooth and rich.", rating: 5 },
  { name: 'Daniel K.', initials: 'DK', role: 'Regular', time: '3 days ago', content: 'Secret sauce is truly secret. And addictive.', rating: 5 },
  { name: 'Marcus Chen', initials: 'MC', role: 'Community Member', time: '', content: "The staff remembers my order every time. It's the small things that make Cup Cafe my home away from home.", rating: 5 },
  { name: 'Anna H.', initials: 'AH', role: 'Designer', time: '1 month ago', content: 'Great atmosphere for working, but gets a bit crowded on weekends. The roasted chicken sandwich is a must-try!', rating: 4.5 },
];

/* ─── Gallery ─── */
export const GALLERY_ITEMS: GalleryItem[] = [
  { src: U('photo-1509042239860-f550ce710b93', 600), alt: 'Coffee latte art', span: 'square' },
  { src: U('photo-1522202176988-66273c2fd55f', 600), alt: 'Friends laughing together', span: 'tall' },
  { src: U('photo-1677511084683-0eba66ebaa7c', 600), alt: 'Grilled cheese sandwich', span: 'square' },
  { src: U('photo-1777502286448-35389817f504', 600), alt: 'Cafe interior sunset', span: 'tall' },
  { src: U('photo-1592417817098-8fd3d9eb14a5', 600), alt: 'Fresh basil & tomatoes', span: 'square' },
  { src: U('photo-1700937314577-898450cafe35', 600), alt: 'Customer biting sandwich', span: 'square' },
  { src: U('photo-1495474472287-4d71bcdd2085', 600), alt: 'Coffee mugs on wall', span: 'square' },
  { src: U('photo-1540189549336-e6e99c3679fe', 600), alt: 'Fresh ingredients', span: 'square' },
];

/* ─── Team ─── */
export const TEAM: TeamMember[] = [
  { name: 'Marco', role: 'Head Barista', image: U('photo-1507003211169-0a1dd7228f2d', 400) },
  { name: 'Sarah', role: 'Pastry Lead', image: U('photo-1438761681033-6461ffad8d80', 400), offset: true },
  { name: 'David', role: 'General Manager', image: U('photo-1472099645785-5658abf4ff4e', 400) },
  { name: 'Elena', role: 'Kitchen Soul', image: U('photo-1544005313-94ddf0286df2', 400), offset: true },
];

/* ─── Timeline ─── */
export const TIMELINE: TimelineEvent[] = [
  { year: '2012', title: 'The Seed', description: "Lou rents a tiny 200sq ft corner booth. The first sandwich, the 'Original Hero', is born.", active: true },
  { year: '2015', title: 'Finding Home', description: 'We moved to our current Oakwood location. The iconic neon sign is lit for the first time.' },
  { year: '2019', title: "The Secret's Out", description: "Lou's Special Sauce is bottled for the first time due to overwhelming customer demand." },
  { year: 'Present', title: 'A Community Anchor', description: 'Voted local favorite five years running. Still early mornings, still small batches.', active: true },
];

/* ─── Amenities ─── */
export const AMENITIES: Amenity[] = [
  { icon: 'wifi', label: 'Free WiFi' },
  { icon: 'pets', label: 'Pet Friendly' },
  { icon: 'park', label: 'Outdoor Seating' },
  { icon: 'accessible', label: 'Accessible' },
  { icon: 'local_parking', label: 'Parking' },
];

/* ─── Delivery Partners ─── */
export const DELIVERY_PARTNERS: DeliveryPartner[] = [
  { icon: 'delivery_dining', name: 'DoorDash' },
  { icon: 'lunch_dining', name: 'UberEats' },
  { icon: 'shopping_bag', name: 'Grubhub' },
  { icon: 'stars', name: 'Direct Pick-up' },
];

/* ─── FAQ ─── */
export const FAQ: FAQItem[] = [
  { question: 'Do you offer gluten-free options?', answer: 'Absolutely. Most of our signature sandwiches can be made with our artisan gluten-free bread. Just ask our team when ordering!' },
  { question: 'Can I pre-order for a large group?', answer: 'Yes, we love catering! For orders over 10 items, we recommend placing your order at least 24 hours in advance.' },
  { question: 'Where do you source your coffee beans?', answer: 'We partner with local small-batch roasters who prioritize ethical sourcing and direct trade.' },
];

/* ─── Images ─── */
export const IMAGES = {
  hero: U('photo-1504674900247-0877df9cc836', 1400),
  sauce: U('photo-1498837167922-ddd27525d352', 800),
  interior: U('photo-1777502286448-35389817f504', 800),
  chef: U('photo-1556910103-1c02745aae4d', 800),
  map: U('photo-1524661135-423995f22d0b', 800),
};
