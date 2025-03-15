import { About } from './types';
import { MapIcon, CalendarIcon, FlagIcon, SparklesIcon } from '@heroicons/react/24/outline';
import profilepic from '@/images/profilepic.jpg';

export const aboutData: About = {
  profileImageSrc: profilepic,
  description: "Brady Georgen uniquely merges a background in digital arts with deep technical expertise to lead transformative projects in modern software development.",
  aboutItems: [
    {label: 'Name', text: 'Brady Georgen', Icon: MapIcon},
    {label: 'Email', text: 'brady@example.com', Icon: CalendarIcon},
    {label: 'Phone', text: '3145800608', Icon: FlagIcon},
    {label: 'Website', text: 'https://bradygeorgen.example.com', Icon: SparklesIcon},
  ],
};