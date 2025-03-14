import { StaticImageData } from 'next/image';
import { ForwardRefExoticComponent, SVGProps } from 'react';

export enum SectionId {
  Hero = 'hero',
  About = 'about',
  Contact = 'contact',
  Portfolio = 'portfolio',
  Resume = 'resume',
  Skills = 'skills',
  Stats = 'stats',
  Testimonials = 'testimonials',
}

export interface About {
  profileImageSrc?: string | StaticImageData;
  description: string;
  aboutItems: AboutItem[];
}

export interface AboutItem {
  label: string;
  text: string;
  Icon?: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, 'ref'>>;
}

// Add other type definitions as needed...