import awsLogo from 'app/resume/images/aws-logo.png'
import boulderWineLogo from 'app/resume/images/boulder-wine-logo.png'
import coaLogo from 'app/resume/images/coa-logo.png'
import csulbLogo from 'app/resume/images/csulb-logo.png'
import headshot from 'app/resume/images/headshot.jpg'
import turingLogo from 'app/resume/images/turing-logo.png'
import webscaleLogo from 'app/resume/images/webscale-logo.png'

import {
  HeaderData,
  ExperienceData,
  EducationData,
  TechStackData,
} from 'app/resume/types'

export const headerData: HeaderData = {
  fullName: 'William J. Phelps',
  headshotImage: headshot,
  title: 'Senior Software Engineer',
  location: 'Denver, Colorado',
  phone: '(707) 533-9586',
  email: 'williamphelps13@gmail.com',
  linkedin: 'linkedin.com/in/williamjphelps',
}

export const techStackData: TechStackData = [
  {
    tech: 'JavaScript',
    iconName: 'javascript',
    outputs: ['Will Do', 'PocketSomm', 'Top Notch Tomatillos'],
  },
  {
    tech: 'HTML5',
    iconName: 'html5',
  },
  {
    tech: 'CSS3',
    iconName: 'css3',
  },
  {
    tech: 'TypeScript',
    iconName: 'typescript',
  },
  {
    tech: 'React.js',
    iconName: 'react',
  },
  {
    tech: 'Next.js',
    iconName: 'nextjs',
  },
  {
    tech: 'Angular',
    iconName: 'angularjs',
  },
  {
    tech: 'Svelte',
    iconName: 'svelte',
  },
  {
    tech: 'GraphQL',
    iconName: 'graphql',
  },
  {
    tech: 'Python',
    iconName: 'python',
  },
  {
    tech: 'FastAPI',
    iconName: 'fastapi',
  },
  {
    tech: 'Ruby',
    iconName: 'ruby',
  },
  {
    tech: 'Rails',
    iconName: 'rails',
  },
  {
    tech: 'AWS',
    iconName: 'amazonwebservices',
  },
  {
    tech: 'Cypress',
    iconName: 'cypressio',
  },
  {
    tech: 'Jest',
    iconName: 'jest',
  },
  {
    tech: 'Storybook',
    iconName: 'storybook',
  },
  {
    tech: 'Tailwind',
    iconName: 'tailwindcss',
  },
  {
    tech: 'SASS',
    iconName: 'sass',
  },
  {
    tech: 'Figma',
    iconName: 'figma',
  },
  {
    tech: 'Git/Github',
    iconName: 'git',
  },
]

export const experienceData: ExperienceData = [
  {
    organization: 'Coa Solutions',
    link: 'https://coa.solutions/',
    image: coaLogo,
    location: 'Remote',
    date: 'Oct 2023 – Present',
    title: 'Fullstack Software Engineer',
    descriptions: [
      "Spearheading system improvements for VA.gov's Veteran claims submission process, combining expertise in React, Ruby on Rails, and AWS within a diverse 5-member team.",
      'Enhancing Veteran and VA employee experiences by reducing evidence submission errors and wait times, ensuring efficient and accurate claims processing.',
    ],
  },
  {
    organization: 'Webscale Networks',
    link: 'https://www.webscale.com/',
    image: webscaleLogo,
    location: 'Boulder, Colorado',
    date: 'Nov 2021 – Oct 2023',
    title: 'Software Engineer',
    descriptions: [
      'Webscale is a cloud platform with a mission to streamline or automate the biggest challenges facing e-commerce companies today by empowering them with prescriptive analytics, performance optimizations, and edge security.',
      'Collaborated with stakeholders, authored requirements, and played a pivotal role in translating designs into robust frontend implementations using Typescript, Svelte, and SCSS, ensuring the delivery of high-quality software.',
    ],
  },
  {
    organization: 'Boulder Wine Merchant',
    link: 'https://www.boulderwine.com/',
    image: boulderWineLogo,
    location: 'Boulder, Colorado',
    date: 'Feb 2017 – March 2021',
    title: 'Manager, Buyer, and Certified Sommelier',
    descriptions: [
      'Developed my leadership skills and ability to drive revenue through team management and customer satisfaction.',
      'These transferable skills, combined with my technical expertise as a Software Engineer, enable me to deliver exceptional software solutions while prioritizing user satisfaction and business goals.',
    ],
  },
]

export const educationData: EducationData = [
  {
    organization: 'Turing School of Software and Design',
    link: 'https://turing.edu/',
    image: turingLogo,
    location: 'Denver, CO',
    date: 'May 2021 – Nov 2021',
    result: 'Frontend Engineering Program Completion',
    descriptions: [
      'JavaScript, TypeScript, React, REST, CSS, HTML, Cypress, Git/Github',
      '1500hr, 7 month project-based program; collaborated with 1 to 5 team members on 12 projects',
    ],
  },
  {
    organization: 'California State University, Long Beach',
    link: 'https://www.csulb.edu/',
    image: csulbLogo,
    location: 'Long Beach, CA',
    date: 'Sep 2009 – Dec 2013',
    result: 'Pre-Med, Bachelor of Arts in World Literature',
    descriptions: [
      'Graduated with Honors, 3.7 GPA, Cum Laude',
      'Technical Courses Include: Calculus I & II, Physics I & II, General Chemistry I & II, Organic Chemistry I & II',
    ],
  },
  {
    organization: 'Amazon Web Services',
    link: 'https://aws.amazon.com/certification/certified-cloud-practitioner/',
    image: awsLogo,
    date: 'Apr 2023',
    result: 'AWS Certified Cloud Practitioner',
  },
]
