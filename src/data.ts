/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, Skill, ExperienceItem, EducationItem, CertificationItem } from './types';

export const ownerDetails = {
  name: 'Avikam Manoj',
  role: 'Software Engineer | Data Science | Machine Learning',
  tagline: 'Build. Grow. Serve.',
  location: 'Kerala, India',
  email: 'avikammanoj01@gmail.com',
  linkedin: 'https://linkedin.com/in/avikam-manoj-world1822',
  github: 'https://github.com/avikammanoj1-stack',
  bio: 'I enjoy building intelligent software that combines Software Engineering, Artificial Intelligence, and Data Science to solve real-world problems. I continuously learn new technologies and enjoy creating practical applications that improve everyday experiences.',
};

export const skillsData: Skill[] = [
  // Programming
  { name: 'Python', category: 'Programming', level: 95, iconName: 'Python' },
  { name: 'Java', category: 'Programming', level: 85, iconName: 'Java' },
  { name: 'JavaScript', category: 'Programming', level: 90, iconName: 'Code' },
  { name: 'TypeScript', category: 'Programming', level: 88, iconName: 'Code2' },

  // Frontend
  { name: 'React', category: 'Frontend', level: 92, iconName: 'Cpu' },
  { name: 'HTML', category: 'Frontend', level: 95, iconName: 'FileCode' },
  { name: 'CSS', category: 'Frontend', level: 90, iconName: 'Layers' },
  { name: 'Tailwind CSS', category: 'Frontend', level: 94, iconName: 'Palette' },

  // Database
  { name: 'SQL', category: 'Database', level: 88, iconName: 'Database' },
  { name: 'Supabase', category: 'Database', level: 82, iconName: 'CloudLightning' },

  // AI & Data Science
  { name: 'Pandas', category: 'AI & Data Science', level: 92, iconName: 'Table' },
  { name: 'NumPy', category: 'AI & Data Science', level: 88, iconName: 'Binary' },
  { name: 'Scikit-learn', category: 'AI & Data Science', level: 90, iconName: 'Brain' },
  { name: 'Machine Learning', category: 'AI & Data Science', level: 92, iconName: 'Workflow' },
  { name: 'Data Science', category: 'AI & Data Science', level: 90, iconName: 'Sparkles' },

  // Version Control
  { name: 'Git', category: 'Version Control', level: 88, iconName: 'GitBranch' },
  { name: 'GitHub', category: 'Version Control', level: 90, iconName: 'Github' },
];

export const projectsData: Project[] = [
  {
    id: 'echonote',
    title: 'EchoNote',
    description: 'AI-powered lecture transcription and summarization platform. Effortlessly convert spoken class lectures into clean, readable, formatted transcripts and comprehensive structured study summaries with key terms, chapters, and dynamic action items.',
    tech: ['React', 'TypeScript', 'Python', 'Whisper API', 'Gemini API'],
    category: 'AI & Data Science',
    githubUrl: 'https://github.com/avikammanoj1-stack/EchoNote',
    liveUrl: 'https://echonote-ai.vercel.app',
    imageUrl: 'https://picsum.photos/seed/echonote/800/600',
  },
  {
    id: 'employee-mgmt',
    title: 'Employee Management System',
    description: 'A responsive full-stack platform built for corporate teams. Integrates full role-based access gates, dynamic interactive employee statistics dashboards, secure custom document generation, and real-time database synchronization workflows.',
    tech: ['React', 'TypeScript', 'Supabase', 'Tailwind CSS'],
    category: 'Web Development',
    githubUrl: 'https://github.com/avikammanoj1-stack/employee-management-system',
    liveUrl: 'https://employee-sync.vercel.app',
    imageUrl: 'https://picsum.photos/seed/ems/800/600',
  },
  {
    id: 'student-predictor',
    title: 'Student Performance Predictor',
    description: 'An interactive web portal running custom Machine Learning regressions to forecast student final outcomes based on academic and socioeconomic metrics. Backed by detailed data pipelines and interactive prediction modeling matrices.',
    tech: ['Python', 'Scikit-learn', 'Machine Learning', 'Flask', 'Pandas'],
    category: 'AI & Data Science',
    githubUrl: 'https://github.com/avikammanoj1-stack/student-performance-predictor',
    liveUrl: 'https://grade-predictor.vercel.app',
    imageUrl: 'https://picsum.photos/seed/predictor/800/600',
  },
  {
    id: 'grammar-calibrator',
    title: 'CNTRL-M Intelligence AI Grammar Calibrator',
    description: 'An advanced, fine-tuned high-fidelity grammar correction and syntactic alignment tool designed for computational writing, utilizing structural linguistic modeling and sentence grammar pattern calibrations.',
    tech: ['Python', 'Machine Learning', 'NLP', 'Transformers', 'Flask'],
    category: 'AI & Data Science',
    githubUrl: 'https://github.com/avikammanoj1-stack/CNTRL-M-Intelligence-AI-Grammar-Calibrator',
    liveUrl: 'https://grammar-calibrator.vercel.app',
    imageUrl: 'https://picsum.photos/seed/grammar/800/600',
  },
  {
    id: 'gesture-classifier',
    title: 'Gesture Classifier',
    description: 'A real-time artificial intelligence hand gesture classifier and tracking module using advanced computer vision architectures, mapping spatial vectors to predict interactive action gestures.',
    tech: ['Python', 'Scikit-learn', 'Machine Learning', 'OpenCV', 'NumPy'],
    category: 'AI & Data Science',
    githubUrl: 'https://github.com/avikammanoj1-stack/Gesture-Classifier',
    liveUrl: 'https://gesture-ai.vercel.app',
    imageUrl: 'https://picsum.photos/seed/gesture/800/600',
  },
];

export const experienceData: ExperienceItem[] = [
  {
    role: 'Python for Data Science Intern',
    company: 'Neovent Innovations',
    period: 'Jan 2025 - Present',
    location: 'Kerala, India',
    points: [
      'Python: Formulated scalable scripts to streamline complex computational data aggregation, clean raw text resources, and handle unstructured telemetry flows.',
      'Data Analysis: Constructed comprehensive statistical insights, computed correlation metrics, and designed custom exploratory data frames for corporate analysis.',
      'Problem Solving: Debugged critical bottleneck processes, improved processing speeds of ingestion workflows, and deployed scalable script integrations.',
      'Machine Learning Fundamentals: Trained predictive statistical algorithms, mapped hyper-parameters, and generated precise metric visual evaluation boards.',
    ],
    tech: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Machine Learning', 'Git'],
  },
];

export const educationData: EducationItem[] = [
  {
    degree: 'B.Tech Computer Science (Data Science)',
    field: 'Computer Science and Engineering with specialization in Data Science',
    institution: 'St. Thomas College of Engineering and Technology',
    period: '2021 - 2025',
    grade: 'CGPA: 8.6 / 10.0',
    details: [
      'Core focus on Software Engineering, Artificial Intelligence, Machine Learning, and Full Stack Development.',
      'Completed academic projects exploring predictive modeling, supervised neural networks, and web service architectures.',
      'Active participant in technical symposiums, hackathons, and software engineering meetups.',
    ],
  },
];

export const certificationsData: CertificationItem[] = [
  {
    title: 'IEEE Edge IoT & Smart Automation',
    issuer: 'IEEE',
    date: 'Dec 2024',
    credentialId: 'IEEE-IOT-9428A',
    url: 'https://ieee.org',
  },
  {
    title: 'Python for Data Science Internship',
    issuer: 'Neovent Innovations',
    date: 'Jan 2025',
    credentialId: 'NEO-PDS-2025I',
    url: 'https://neovent.in',
  },
  {
    title: 'Dekathon 4.0 Hackathon',
    issuer: 'Dekathon Technical Committee',
    date: 'Nov 2024',
    credentialId: 'DEKA-40-HACK',
    url: 'https://dekathon.org',
  },
];

// Seeded GitHub metrics
export const githubStatsData = {
  username: 'avikammanoj1-stack',
  totalContributions: 1428,
  streakDays: 42,
  longestStreak: 86,
  totalStars: 124,
  prsMerged: 48,
  topLanguages: [
    { name: 'Python', percentage: 48, color: '#3572A5' },
    { name: 'TypeScript', percentage: 22, color: '#3178C6' },
    { name: 'JavaScript', percentage: 14, color: '#F1E05A' },
    { name: 'HTML/CSS', percentage: 11, color: '#E34C26' },
    { name: 'Other', percentage: 5, color: '#85E3B3' },
  ],
};
