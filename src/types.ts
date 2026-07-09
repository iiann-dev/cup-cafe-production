export type TabType = 'home' | 'menu' | 'our-story' | 'gallery' | 'reviews' | 'contact';

export interface MenuItem {
  name: string;
  description: string;
  price: string;
  image?: string;
  badge?: string;
}

export interface MenuCategory {
  id: string;
  label: string;
  note: string;
  items: MenuItem[];
}

export interface Review {
  name: string;
  content: string;
  rating: number;
  date: string;
}

export interface GalleryItem {
  src: string;
  alt: string;
}

export interface Amenity {
  icon: string;
  label: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
