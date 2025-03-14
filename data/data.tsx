import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';

// Update image imports to use string literals instead of direct imports
const heroImage = '/images/header-background.webp';
const porfolioImage1 = '/images/portfolio/portfolio-1.jpg';
const porfolioImage2 = '/images/portfolio/portfolio-2.jpg';
const porfolioImage3 = '/images/portfolio/portfolio-3.jpg';
const porfolioImage4 = '/images/portfolio/portfolio-4.jpg';
const porfolioImage5 = '/images/portfolio/portfolio-5.jpg';
const porfolioImage6 = '/images/portfolio/portfolio-6.jpg';
const porfolioImage7 = '/images/portfolio/portfolio-7.jpg';
const porfolioImage8 = '/images/portfolio/portfolio-8.jpg';
const porfolioImage9 = '/images/portfolio/portfolio-9.jpg';
const porfolioImage10 = '/images/portfolio/portfolio-10.jpg';
const porfolioImage11 = '/images/portfolio/portfolio-11.jpg';
const profilepic = '/images/profilepic.jpg';
const testimonialImage = '/images/testimonial.webp';

import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';
import React from 'react';

/**
 * Page meta data
 */
const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Brady Georgen's dynamic resume content",
};

/**
 * Section definition
 */
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

/**
 * Base JSON resume content
 */
const jsonResume = {
  title: "Full Stack Application Architect & Digital Transformation Leader",
  summary: {
    goals:
      "To continuously drive innovation by blending cutting-edge technology with creative design and agile best practices. Focused on delivering enterprise-grade solutions and digital transformations that empower teams and organizations.",
    persona:
      "A versatile, team-oriented leader with a strong balance of creative vision and technical proficiency.",
    url: "https://bradygeorgen.example.com",
    headshot: "https://bradygeorgen.example.com/headshot.jpg",
    gptResponse:
      "Brady Georgen uniquely merges a background in digital arts with deep technical expertise to lead transformative projects in modern software development.",
    resume: "brady_comprehensive_resume",
  },
  contactInformation: {
    name: "Brady Georgen",
    email: "brady@example.com",
    phone: "3145800608",
    resume: "brady_comprehensive_resume",
    references: [
      {name: "Joe", phone: "111-222-3333", email: "joe@example.com", contactInformationId: "contact_brady"},
      {name: "Serge", phone: "222-333-4444", email: "serge@example.com", contactInformationId: "contact_brady"},
      {name: "Jason", phone: "333-444-5555", email: "jason@example.com", contactInformationId: "contact_brady"},
      {name: "Heather", phone: "444-555-6666", email: "heather@example.com", contactInformationId: "contact_brady"},
    ],
  },
  education: {
    summary:
      "Brady’s education provided a unique blend of creative arts and critical thinking, forming the foundation for his innovative approach to technology.",
    resume: "brady_comprehensive_resume",
    schools: [
      {
        name: "Meramac Community College",
        educationId: "education_brady",
        degrees: [
          {major: "Digital Filmmaking", startYear: "1999", endYear: "2001", schoolId: "school1"},
        ],
      },
      {
        name: "Webster University",
        educationId: "education_brady",
        degrees: [
          {major: "Philosophy", startYear: "2001", endYear: "2005", schoolId: "school2"},
          {major: "Graphic Design", startYear: "2001", endYear: "2005", schoolId: "school2"},
        ],
      },
    ],
  },
  experience: {
    title: "Comprehensive Career in Software, Design & Enterprise Consulting",
    text:
      "Brady Georgen has built a multifaceted career that spans creative design, web development, and enterprise consulting. His journey includes early work in Flash-based web development, leading creative projects, and later spearheading digital transformations for Fortune 500 clients.",
    gptResponse:
      "A proven leader with extensive experience in both the creative and technical domains, driving agile methodologies and innovative enterprise solutions.",
    resume: "brady_comprehensive_resume",
    companies: [
      {
        name: "Asynchrony Solutions",
        role: "Designer, Web Developer & Marketing Assistant",
        startDate: "2005",
        endDate: "2008",
        title: "Designer, Web Developer & Marketing Assistant",
        gptResponse:
          "Initiated his career by designing and developing interactive web content using Flash, JavaScript, and HTML. Instrumental in the creation of a $25M proposal for a DOD contract.",
        experienceId: "experience_brady",
      },
      {
        name: "ThinkTank",
        role: "Lead Developer & Creative Director",
        startDate: "2008",
        endDate: "2009",
        title: "Lead Developer & Creative Director",
        gptResponse:
          "Founded a freelance consultancy that relaunched dialsoap.com with innovative interactive elements built with Adobe Flex, merging creative vision with technical execution.",
        experienceId: "experience_brady",
      },
      {
        name: "Touchwood Creative / Infuze",
        role: "Senior Developer & Assistant Art Director",
        startDate: "2009",
        endDate: "2013",
        title: "Senior Developer & Assistant Art Director",
        gptResponse:
          "Advanced from developer to creative leader, developing interactive frameworks for Elsevier and maintaining internal Ruby on Rails systems. Recognized with two Silver Addy Awards for outstanding creative contributions.",
        experienceId: "experience_brady",
      },
      {
        name: "Deliveries on Demand",
        role: "Lead Developer",
        startDate: "2013",
        endDate: "2014",
        title: "Lead Developer",
        gptResponse:
          "Designed and developed an interactive visualization platform that centralized automotive financing data, enabling real-time decision-making.",
        experienceId: "experience_brady",
      },
      {
        name: "Daugherty Business Solutions",
        role: "Enterprise Consultant & Technology Strategist",
        startDate: "2014",
        endDate: "2023",
        title: "Enterprise Consultant & Technology Strategist",
        gptResponse:
          "Led transformative projects for major clients including MasterCard, Charter Communications, Bayer, and Cox. Implemented agile methodologies, cloud migrations, and innovative digital solutions while also spearheading a green field R&D initiative.",
        experienceId: "experience_brady",
        companies: [
          {
            name: "Daugherty Business Solutions",
            role: "Enterprise Consultant & Technology Strategist",
            startDate: "2014",
            endDate: "2023",
            title: "Enterprise Consultant & Technology Strategist",
            gptResponse:
              "Led transformative projects for major clients including MasterCard, Charter Communications, Bayer, and Cox.",
            experienceId: "experience_brady",
            engagements: [
              {
                client: "MasterCard",
                startDate: "2014",
                endDate: "2016",
                gptResponse:
                  "Developed comprehensive onboarding materials and interactive sample code to support the MasterPass initiative.",
                companyId: "company5",
                accomplishments: [
                  {
                    title: "MasterPass Onboarding Suite",
                    description:
                      "Created an integrated set of tutorials, sample code, and interactive demonstrations that streamlined the onboarding process for MasterPass.",
                    link: "https://bradygeorgen.example.com/masterpass",
                    companyId: "company5",
                  },
                ],
              },
              {
                client: "Charter Communications",
                startDate: "2016",
                endDate: "2018",
                gptResponse:
                  "Engineered an interactive call center solution that enabled automation of customer connectivity management.",
                companyId: "company5",
              },
              {
                client: "Monsanto/Bayer",
                startDate: "2018",
                endDate: "2020",
                gptResponse:
                  "Managed the migration and modernization of legacy systems, delivering an executive dashboard for real-time data visualization using Angular and React.",
                companyId: "company5",
              },
              {
                client: "Cox Communications",
                startDate: "2020",
                endDate: "2023",
                gptResponse:
                  "Developed a scaffolding framework to generate modular React applications that integrated with Adobe Content Manager.",
                companyId: "company5",
              },
            ],
          },
        ],
      },
      {
        name: "Digital Ronan (Consultancy)",
        role: "Digital Consultant",
        startDate: "2023",
        endDate: "Present",
        title: "Digital Consultant & Creative Technologist",
        gptResponse:
          "Provides strategic digital consulting for local businesses, applying skills in automation, networking, and design to deliver scalable solutions.",
        experienceId: "experience_brady",
      },
    ],
  },
  skills: [
    {title: "Full Stack Development", link: "https://example.com/fullstack"},
    {title: "Agile Methodologies", link: "https://www.agilealliance.org/"},
    {title: "Cloud Migration", link: "https://aws.amazon.com/cloud/"},
    {title: "React", link: "https://reactjs.org/"},
    {title: "Node.js", link: "https://nodejs.org/"},
    {title: "Ruby on Rails", link: "https://rubyonrails.org/"},
    {title: "Java", link: "https://www.oracle.com/java/"},
    {title: "UI/UX & Graphic Design", link: "https://www.adobe.com/creativecloud.html"},
    {title: "Project & Product Management", link: "https://www.pmi.org/"},
  ],
};

/**
 * Hero section
 */
const hero: Hero = {
  imageSrc: heroImage, // Use heroImage here instead of jsonResume.summary.headshot
  name: jsonResume.contactInformation.name,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        {jsonResume.summary.goals}
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        {jsonResume.summary.persona}
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
const about = {
  profileImageSrc: profilepic,
  description: `Brady Georgen uniquely merges a background in digital arts with deep technical expertise to lead transformative projects in modern software development.`,
  aboutItems: [
    {label: 'Name', text: 'Brady Georgen', Icon: MapIcon},
    {label: 'Email', text: 'brady@example.com', Icon: CalendarIcon},
    {label: 'Phone', text: '3145800608', Icon: FlagIcon},
    {label: 'Website', text: 'https://bradygeorgen.example.com', Icon: SparklesIcon},
  ],
};

/**
 * Skills section
 *
 * Since the JSON resume lists skills as a flat array we group them here under a single group.
 * (You could also split them into multiple categories if your data allowed.)
 */
const resumeSkillGroups: SkillGroup[] = [
  {
    name: 'Technical Skills',
    skills: jsonResume.skills.map((skill) => ({
      name: skill.title,
      level: 8, // Default level assigned; adjust as needed
    })),
  },
];

/**
 * Portfolio section
 *
 * Since portfolio data is not in the JSON resume, we use a placeholder set from the original config.
 */
export const resumePortfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  },
];

/**
 * Resume section (Education)
 *
 * Map each school and its degrees into timeline items.
 */
const educationTimeline: TimelineItem[] = jsonResume.education.schools.flatMap((school) =>
  school.degrees.map((degree) => ({
    date: `${degree.startYear} - ${degree.endYear}`,
    location: school.name,
    title: degree.major,
    content: <p>{`Studied ${degree.major} at ${school.name}.`}</p>,
    icon: AcademicCapIcon, // Add this line to use the AcademicCapIcon
  }))
);

/**
 * Resume section (Experience)
 *
 * Each company in the JSON becomes a timeline item.
 * (Nested engagements under a company could be further mapped if needed.)
 */
const experienceTimelineItems: TimelineItem[] = jsonResume.experience.companies.map((company) => ({
  date: `${company.startDate} - ${company.endDate}`,
  location: company.name,
  title: company.role,
  content: <p>{company.gptResponse}</p>,
  icon: BuildingOffice2Icon, // Add this line to use the BuildingOffice2Icon
}));

/**
 * Testimonial section
 *
 * We use the original testimonial sample.
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 *
 * Maps the JSON contact information into the contact configuration.
 */
export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Feel free to reach out to discuss projects, collaboration, or inquiries.',
  items: [
    {
      type: ContactType.Email,
      text: jsonResume.contactInformation.email,
      href: `mailto:${jsonResume.contactInformation.email}`,
    },
    {
      type: ContactType.Location,
      text: 'Location TBD', // Update if location data is available
      href: 'https://www.google.ca/maps',
    },
    {
      type: ContactType.Phone,
      text: jsonResume.contactInformation.phone,
      href: `tel:${jsonResume.contactInformation.phone}`,
    },
  ],
};

/**
 * Social items
 */
const socialMediaLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/bradygeorgen'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/bradygeorgen/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/bradygeorgen/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/bradygeorgen'},
];

// Model Interfaces
interface ResumeModel {
  title: string;
  summaryId: string;
  contactInformationId: string;
  educationId: string;
  experienceId: string;
}

interface SummaryModel {
  goals: string;
  persona: string;
  url: string;
  headshot: string;
  gptResponse: string;
  resume: string;
}

interface ContactInformationModel {
  name: string;
  email: string;
  phone: string;
  resume: string;
  references?: ReferenceModel[];
}

interface ReferenceModel {
  name: string;
  phone: string;
  email: string;
  contactInformationId: string;
}

interface EducationModel {
  summary: string;
  resume: string;
  schools?: SchoolModel[];
}

interface SchoolModel {
  name: string;
  educationId: string;
  degrees?: DegreeModel[];
}

interface DegreeModel {
  major: string;
  startYear: string;
  endYear: string;
  schoolId: string;
}

interface ExperienceModel {
  title: string;
  text: string;
  gptResponse: string;
  resume: string;
  companies?: CompanyModel[];
}

interface CompanyModel {
  name: string;
  role: string;
  startDate: string;
  endDate: string;
  title: string;
  gptResponse: string;
  experienceId: string;
  engagements?: EngagementModel[];
  accomplishments?: AccomplishmentModel[];
}

interface EngagementModel {
  client: string;
  startDate: string;
  endDate: string;
  gptResponse: string;
  companyId: string;
}

interface AccomplishmentModel {
  title: string;
  description: string;
  link: string;
  companyId: string;
  engagementId?: string;
}

interface SkillModel {
  title: string;
  link: string;
  resumeId: string;
  companyId?: string;
  accomplishmentId?: string;
}

// Model Implementations
const modelDefaults = {
  Resume: {
    title: '',
    summaryId: '',
    contactInformationId: '',
    educationId: '',
    experienceId: ''
  } as ResumeModel,

  Summary: {
    goals: '',
    persona: '',
    url: '',
    headshot: '',
    gptResponse: '',
    resume: ''
  } as SummaryModel,

  ContactInformation: {
    name: '',
    email: '',
    phone: '',
    resume: '',
    references: []
  } as ContactInformationModel,

  Reference: {
    name: '',
    phone: '',
    email: '',
    contactInformationId: ''
  } as ReferenceModel,

  Education: {
    summary: '',
    resume: '',
    schools: []
  } as EducationModel,

  School: {
    name: '',
    educationId: '',
    degrees: []
  } as SchoolModel,

  Degree: {
    major: '',
    startYear: '',
    endYear: '',
    schoolId: ''
  } as DegreeModel,

  Experience: {
    title: '',
    text: '',
    gptResponse: '',
    resume: '',
    companies: []
  } as ExperienceModel,

  Company: {
    name: '',
    role: '',
    startDate: '',
    endDate: '',
    title: '',
    gptResponse: '',
    experienceId: '',
    engagements: [],
    accomplishments: []
  } as CompanyModel,

  Engagement: {
    client: '',
    startDate: '',
    endDate: '',
    gptResponse: '',
    companyId: ''
  } as EngagementModel,

  Accomplishment: {
    title: '',
    description: '',
    link: '',
    companyId: '',
    engagementId: ''
  } as AccomplishmentModel,

  Skill: {
    title: '',
    link: '',
    resumeId: '',
    companyId: '',
    accomplishmentId: ''
  } as SkillModel
};

// Export type definitions
export type {
  ResumeModel,
  SummaryModel,
  ContactInformationModel,
  ReferenceModel,
  EducationModel,
  SchoolModel,
  DegreeModel,
  ExperienceModel,
  CompanyModel,
  EngagementModel,
  AccomplishmentModel,
  SkillModel
};

export { 
  about as aboutData, 
  resumePortfolioItems as portfolioItems, 
  resumeSkillGroups, 
  educationTimeline, 
  experienceTimelineItems, 
  contact as contactData, 
  socialMediaLinks, 
  testimonial as testimonialData, 
  hero, 
  homePageMeta, 
  modelDefaults 
};
