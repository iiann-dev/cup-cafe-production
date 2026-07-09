import { MenuCategory, Review, GalleryItem, Amenity, FAQItem } from './types';

const U = (id: string, w = 1200) => `https://images.unsplash.com/${id}?w=${w}&q=85&auto=format`;

/* ─── Real Menu from cup-cafe.cafe-inspector.com ─── */
export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: 'gourmet-sandwiches', label: 'Gourmet Sandwiches',
    note: 'All include: Lettuce, Tomato, Red Onion, Pickles, Jalapeno Spread. Subs extra.',
    items: [
      { name: 'Ami-Cado', description: 'Pastrami, Salami, Avocado, Pepper Jack Cheese, Lou\'s Special Sauce, on a Soft & Sweet Roll', price: '$10.90' },
      { name: 'Llb Special', description: 'Roast Beef, Turkey, Ham, Swiss Cheese, Provolone Cheese, Lou\'s Special Sauce, on Dutch Crunch', price: '$10.90' },
      { name: 'Roma\'s Club', description: 'Turkey, Bacon, Avocado, Swiss Cheese, Pesto Aioli Spread, on Dutch Crunch', price: '$11.75' },
      { name: 'RB Mushroom', description: 'Roast Beef, Bacon, Mushrooms, Cheddar Cheese, Lou\'s Special Sauce, on a Dutch Crunch Roll', price: '$11.75' },
      { name: 'Chicken Pesto', description: 'Chicken Breast, Avocado, American Cheese, Pesto Aioli Sweet, on Soft & Sweet Roll', price: '$10.90' },
      { name: 'Italian Special', description: 'Ham, Salami, Mortadella, Provolone Cheese, Lou\'s Special Sauce, Dijon Mustard, on a Soft & Sweet Roll', price: '$10.90' },
      { name: 'Ultimate Club', description: 'Roast Beef, Turkey, Salami, Ham, Bacon, Swiss Cheese, Lou\'s Special Sauce, Dijon Mustard, on a Soft & Sweet Roll', price: '$11.75' },
      { name: 'Lou-Ben', description: 'Pastrami, Turkey, Provolone Cheese, Sauerkraut, Lou\'s Special Sauce, on a Sourdough Roll', price: '$10.90' },
      { name: 'Turkey Cranberry', description: 'Turkey, Swiss Cheese, Cranberry, Lou\'s Special Sauce on a Sourdough Roll', price: '$10.90' },
      { name: 'CBR', description: 'Chicken Breast, Bacon, Cheddar Cheese, Ranch Dressing, on a Soft & Sweet Roll', price: '$10.90' },
      { name: 'Buffalo Chicken', description: 'Chicken Breast Filet marinated in Hot Buffalo Sauce, Bacon, Monterey Jack Cheese, Lou\'s Special Sauce', price: '$10.90' },
      { name: 'Veggie', description: 'Alfalfa Sprouts, Roasted Peppers, Avocado, Cucumber, Pepperoncinis, Swiss Cheese, Lou\'s Special Sauce on a 9-Grain Wheat Roll', price: '$10.90' },
      { name: 'Veggie-Licious', description: 'Eggplant, Mushrooms, Avocado, Roasted Peppers, Alfalfa Sprouts, Provolone and Cheddar Cheese, Lou\'s Special Sauce, on a Soft & Sweet Roll', price: '$10.90' },
      { name: 'Crab Melt', description: 'Imitation Snow Crab Salad, Avocado, American Cheese, Lou\'s Special Sauce, on a Dutch Crunch Roll', price: '$11.35' },
      { name: 'Tuna Melt', description: 'Tuna Salad, Avocado, Swiss and Cheddar Cheese, Lou\'s Special Sauce, on a Soft & Sweet Roll', price: '$10.90' },
      { name: 'Hot Link', description: 'LOUISIANA Hot Link, Sauerkraut, Monterey Jack Cheese, Lou\'s Special Sauce, on a Soft & Sweet Roll', price: '$10.90' },
      { name: 'Kick\'n R.B.', description: 'Roast Beef, EXTRA HOT Raw Horseradish, Pepper Jack Cheese, Lou\'s Special Sauce, on a Dutch Crunch Roll. Medium spice as-is.', price: '$11.25' },
      { name: 'Barbeque Chicken', description: 'Chicken Breast Strips marinated in Barbeque Sauce, Monterey Jack Cheese, Lou\'s Special Sauce, on a Soft & Sweet Roll', price: '$10.90' },
      { name: 'Hot Pastrami', description: 'Pastrami Brisket Marinated overnight steamed in our kettle, Cheddar Cheese, Lou\'s Special Sauce, on a Dutch Crunch Roll', price: '$10.90' },
      { name: 'Hot and Sweet', description: 'Louisiana Hot Links, pineapple chunks, topped with teriyaki sauce, Provolone Cheese, Lou\'s Special Sauce', price: '$11.65' },
      { name: 'Risky Bizness', description: 'Hot Pastrami Brisket, Crab Salad, Bacon, Avocado, Pepper Jack Cheese, Pepperoncini\'s, Lou\'s Special Sauce, on a Dutch Crunch Roll', price: '$12.15' },
      { name: 'Pomaikai', description: 'Ham, Pineapple, Jalapeno Rings, Teriyaki Sauce, Sriracha, Pepper Jack Cheese, Lou\'s Special Sauce, on a Sourdough Roll', price: '$11.15' },
      { name: 'Space Balls', description: 'Beef Meatballs, House Made Marinara Sauce, Provolone Cheese, Lou\'s Special Sauce, on a Soft and Sweet Roll', price: '$10.90' },
      { name: 'Loquito', description: 'Chicken Breast, Avocado, Lime Juice, Jalapeno Rings, Sour Cream, Tortilla Chips, Monterey Jack Cheese, Lou\'s Special Sauce', price: '$11.15' },
      { name: 'B.P.A.V.', description: 'Bacon, Alfalfa Sprouts, Roasted Peppers, Avocado, Cucumber, Pepperoncini\'s, Monterey Jack Cheese, Lou\'s Special Sauce on a Dutch Crunch', price: '$11.15' },
    ],
  },
  {
    id: 'breakfast', label: 'Breakfast Sandwiches',
    note: 'Served until 2:00 PM daily',
    items: [
      { name: 'Original Breakfast Sandwich', description: 'Choice of Bacon, Ham or both, with Egg, American Cheese, Hash Browns, Lou\'s Special Sauce, on a Ciabatta', price: '$7.99' },
      { name: 'B.E.C.', description: 'Bacon, Egg, American Cheese, Hash Browns, Lou\'s Special Sauce, on a Croissant', price: '$7.99' },
      { name: 'H.E.C.', description: 'Ham, Egg, American Cheese, Hash Browns, Lou\'s Special Sauce, on a Croissant', price: '$7.99' },
      { name: 'Sausage Breakfast', description: 'Sausage Patty, Egg, American Cheese, Hash Browns, Lou\'s Special Sauce, on a Soft & Sweet Roll', price: '$7.99' },
      { name: 'Steak & Egg', description: 'Steak, Egg, American Cheese, Hash Browns, Lou\'s Special Sauce, on a Soft & Sweet Roll', price: '$9.50' },
    ],
  },
  {
    id: 'salads', label: 'Gourmet Salads',
    note: 'Fresh & crisp — dressings included',
    items: [
      { name: 'BBQ Chicken Salad', description: 'Chicken Breast, Mixed Greens, Corn, Black Beans, Tortilla Strips, Ranch Dressing', price: '$10.90' },
      { name: 'Chicken Pesto Salad', description: 'Chicken Breast, Mixed Greens, Cherry Tomatoes, Mozzarella, Pesto Dressing', price: '$10.90' },
      { name: 'Greek Salad', description: 'Mixed Greens, Feta, Olives, Pepperoncini\'s, Tomatoes, Cucumbers, Greek Dressing', price: '$9.90' },
      { name: 'Taco Salad', description: 'Ground Beef, Mixed Greens, Cheddar, Sour Cream, Salsa, Tortilla Strips', price: '$10.90' },
      { name: 'Louie Salad', description: 'Turkey, Ham, Swiss, Egg, Mixed Greens, Lou\'s Special Sauce', price: '$10.90' },
    ],
  },
  {
    id: 'soups', label: 'Soups',
    note: 'New England Clam Chowder or Soup of the Day',
    items: [
      { name: 'Soup 8 Oz.', description: 'Fresh made daily', price: '$4.99' },
      { name: 'Soup 16 Oz.', description: 'Fresh made daily', price: '$7.49' },
    ],
  },
  {
    id: 'kids', label: 'Kids Menu',
    note: 'For our little guests',
    items: [
      { name: 'Grilled Cheese', description: 'Cheddar on white bread, served with apple slices', price: '$5.50' },
      { name: 'Quesadilla', description: 'Cheese quesadilla with mild salsa', price: '$5.50' },
      { name: 'Hot Dog', description: 'All-beef hot dog with fries', price: '$4.50' },
    ],
  },
  {
    id: 'espresso', label: 'Espresso Beverages',
    note: 'Made to order',
    items: [
      { name: 'Espresso', description: 'Single shot', price: '$2.00' },
      { name: 'Macchiato', description: 'Espresso with a dollop of foam', price: '$2.50' },
      { name: 'Cappuccino', description: 'Espresso, steamed milk, thick foam', price: '$3.00' },
      { name: 'Latte', description: 'Espresso with steamed milk', price: '$3.50' },
      { name: 'Mocha', description: 'Espresso, chocolate, steamed milk', price: '$4.00' },
      { name: 'White Mocha', description: 'Espresso, white chocolate, steamed milk', price: '$4.00' },
      { name: 'Caramel Latte', description: 'Latte with caramel syrup', price: '$4.25' },
      { name: 'Americano', description: 'Espresso with hot water', price: '$2.50' },
      { name: 'Chai Latte', description: 'Spiced chai with steamed milk', price: '$4.00' },
      { name: 'Hot Chocolate', description: 'Steamed milk with rich chocolate', price: '$3.25' },
      { name: 'Steamer', description: 'Steamed milk with flavored syrup', price: '$2.50' },
      { name: 'Iced Coffee', description: 'Chilled brewed coffee', price: '$3.00' },
      { name: 'Tea', description: 'Choice of black, green, or herbal', price: '$2.50' },
      { name: 'Affogato', description: 'Espresso over vanilla ice cream', price: '$4.50' },
    ],
  },
  {
    id: 'design-your-own', label: 'Design Your Own Sandwich',
    note: 'Pick your base, then build',
    items: [
      { name: '6" Sandwich', description: 'Choose your meat, bread, cheese, veggies, and spread', price: '$8.90' },
      { name: '12" Sandwich', description: 'Choose your meat, bread, cheese, veggies, and spread', price: '$11.90' },
    ],
  },
  {
    id: 'add-ons', label: 'Add-Ons',
    note: 'Topping upgrades',
    items: [
      { name: 'Extra Meat', description: 'Any additional meat portion', price: '$2.50' },
      { name: 'Extra Cheese', description: 'Any additional cheese', price: '$1.00' },
      { name: 'Avocado', description: 'Fresh sliced avocado', price: '$1.50' },
      { name: 'Bacon', description: 'Crispy bacon strips', price: '$1.50' },
    ],
  },
  {
    id: 'catering', label: 'Catering Menu',
    note: 'The Works Box — most popular!',
    items: [
      { name: 'The Works Box', description: 'Assorted gourmet sandwiches, sides, and a cookie. Perfect for groups.', price: '$8.90' },
      { name: 'Classic Box', description: 'Ham & Swiss or Turkey & Swiss on choice of bread with chips', price: '$7.90' },
      { name: 'Veggie Special Box', description: 'Vegetarian sandwich with fresh veggies and spread', price: '$8.40' },
      { name: 'Breakfast Box', description: 'Breakfast sandwich, hash browns, coffee', price: '$7.00' },
      { name: 'Soup Box', description: 'Soup of the day + half sandwich', price: '$7.90' },
      { name: 'Salad Box', description: 'Choice of gourmet salad + bread roll', price: '$8.90' },
    ],
  },
  {
    id: 'large-functions', label: 'Large Functions Menu',
    note: 'Individual orders for events of 10+',
    items: [
      { name: 'Individual Box Lunch', description: 'Custom sandwich, chips, cookie, pickle spear', price: '$9.00' },
    ],
  },
  {
    id: 'sides', label: 'Additional Sides',
    note: 'Perfect to round out your meal',
    items: [
      { name: 'Deep Dish Gourmet Cookies', description: 'Chocolate Chip, Peanut Butter Brownie, or Oatmeal Raisin', price: '$2.50' },
      { name: 'Kettle Chips', description: 'BBQ, Sea Salt, Salt & Vinegar, Maui Onion, Sour Cream & Onion, Funky Fusion, Zesty Ranch, Buffalo Bleu, Fully Loaded, Jalapeno, Honey Dijon, and more', price: '$1.50' },
      { name: 'Soup 8 Oz.', description: 'Clam Chowder or Soup of the Day', price: '$4.99' },
      { name: 'Soup 16 Oz.', description: 'Clam Chowder or Soup of the Day', price: '$7.49' },
    ],
  },
];

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
  { icon: 'favorite_border', label: 'Vegan Options' },
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
  hero: U('photo-1504674900247-0877df9cc836', 1400),
  sauce: U('photo-1498837167922-ddd27525d352', 800),
  interior: U('photo-1777502286448-35389817f504', 800),
  chef: U('photo-1556910103-1c02745aae4d', 800),
};
