export type TabType = 'home' | 'menu' | 'our-story' | 'gallery' | 'reviews' | 'contact';

export interface MenuItem {
  name: string;
  description: string;
  price: string;
  image?: string;
  badge?: string;
  badgeStyle?: 'fresh' | 'popular' | 'vegetarian';
}

export interface MenuCategory {
  id: string;
  label: string;
  note: string;
  items: MenuItem[];
  layout?: 'grid' | 'bento' | 'list' | 'asymmetric';
}

export interface Review {
  name: string;
  initials: string;
  role: string;
  time: string;
  content: string;
  rating: number;
  avatar?: string;
  images?: string[];
  bgStyle?: 'light' | 'dark';
}

export interface GalleryItem {
  src: string;
  alt: string;
  span?: 'tall' | 'square' | 'wide';
  overlay?: string;
  isFollowUs?: boolean;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  offset?: boolean;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  active?: boolean;
}

export interface Amenity {
  icon: string;
  label: string;
}

export interface DeliveryPartner {
  icon: string;
  name: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
