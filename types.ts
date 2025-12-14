export interface NavItem {
  label: string;
  href: string;
}

export interface CollectionItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  price?: string;
}

export interface ServiceStep {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: number;
  name: string;
  text: string;
  role: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  image: string; // Added image
}

export interface RunwayItem {
  id: number;
  imageUrl: string;
  alt: string;
}

export interface EditorialItem {
  id: number;
  imageUrl: string;
}