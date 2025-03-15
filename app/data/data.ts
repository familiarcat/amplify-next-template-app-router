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

export const data = {
  // Add your data structure here
  navigation: [
    {
      name: 'About',
      href: `#${SectionId.About}`,
    },
    {
      name: 'Resume',
      href: `#${SectionId.Resume}`,
    },
    {
      name: 'Portfolio',
      href: `#${SectionId.Portfolio}`,
    },
    {
      name: 'Testimonials',
      href: `#${SectionId.Testimonials}`,
    },
    {
      name: 'Contact',
      href: `#${SectionId.Contact}`,
    },
  ],
};