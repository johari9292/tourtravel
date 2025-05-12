export interface Destination {
  id: string;
  name: string;
  description: string;
  image: string;
  alt: string;
  fullDescription: string;
  highlights: string[];
  bestTimeToVisit: string;
  howToReach: string;
  activities: string[];
  tips: string[];
}

export interface Experience {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  fullDescription: string;
  duration: string;
  difficulty: string;
  requirements: string[];
  whatToBring: string[];
  tips: string[];
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

export interface NavLink {
  id: string;
  label: string;
  path: string;
}