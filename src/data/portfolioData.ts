import { EducationItem, AchievementItem, SkillItem, SocialLink, ExperienceItem } from '../types';

export const PERSONAL_INFO = {
  fullName: "HANIN MARYAM KHAIRUNNISA",
  firstName: "Hanin",
  monogram: "HMK",
  tagline: "FUTURE UI/UX DESIGNER",
  location: "Semarang, Indonesia",
  subheading: "PORTFOLIO — 2026",
  status: "ASPIRING UI/UX DESIGNER · OPEN TO LEARNING",
  bioShort: "Designing intuitive digital experiences through thoughtful research, clear interfaces, and purposeful interactions.",
  bioLong: "I'm Hanin Maryam Khairunnisa, an aspiring UI/UX designer with an interest in creating intuitive, accessible, and meaningful digital experiences. I enjoy exploring how design and technology can work together to solve real problems and make digital products easier to use.",
  whyIDesign: "My interest in information technology goes beyond how things work. I'm also interested in how people interact with them. UI/UX design allows me to combine logical thinking, visual communication, and problem-solving to create experiences that feel intuitive and purposeful.",
  contactPerson: "Hanin Maryam Khairunnisa",
  phone: "+62 858-0279-5766",
  phoneDisplay: "+62 858 • 0279 • 5766",
  email: "haaninkhairunnisa@gmail.com",
  cvUrl: "https://drive.google.com/file/d/1-YtTQ6aRm6FYAoVIKGEewyr_pbkZyrpx/view?usp=sharing", // Configurable link to CV
};

export const EDUCATION_LIST: EducationItem[] = [
  {
    id: "smk",
    institution: "Vocational High School 7 Semarang (SMKN 7 Semarang)",
    level: "Vocational High School",
    major: "Sistem Informasi, Jaringan, dan Aplikasi (SIJA)",
    period: "2024 — Present",
    description: "Specialized in software development, cloud systems, network engineering, and user-centric web applications."
  },
  {
    id: "smp",
    institution: "Junior High School 21 Semarang (SMPN 21 Semarang)",
    level: "Junior High School",
    period: "2021 — 2024",
    description: "Active in logical problem solving, digital arts, and leadership extracurricular activities."
  },
  {
    id: "sd",
    institution: "Hidayatullah Islamic Elementary School",
    level: "Elementary School",
    period: "2015 — 2021",
    description: "Foundational education with emphasis on creativity, academic excellence, and character development."
  }
];

export const ACHIEVEMENT: AchievementItem = {
  id: "clash-of-minds",
  badge: "03 / ACHIEVEMENT",
  title: "3rd Winner",
  competition: "Clash of Minds Competition",
  certificateUrl: "https://drive.google.com/file/d/1Qvvkfu_khVcaMZulkQeHaIu2MRtMRT9F/view?usp=sharing",
  description: "Recognized for logical deduction, rapid problem solving, critical thinking, and collaborative interface solutions in the Clash of Minds competition."
};

export const CREDENTIALS = [
  {
    id: "clash-of-minds",
    title: "3rd Winner of Clash of Minds Competition",
    issuer: "Clash of Minds",
    category: "Competition — Logical & Problem Solving",
    certificateUrl: "https://drive.google.com/file/d/1Qvvkfu_khVcaMZulkQeHaIu2MRtMRT9F/view?usp=sharing",
    thumbnail: "/images/projects/clash-of-minds-cert.png",
    description: "Honored with 3rd place in an intensive competitive arena testing logic, problem solving, algorithmic reasoning, and rapid deduction."
  },
  {
    id: "cisco-it-essentials",
    title: "IT Essentials Cisco Networking Academy Program",
    issuer: "Cisco Networking Academy & SMKN 7 Semarang",
    category: "Professional Credential",
    certificateUrl: "https://drive.google.com/file/d/1Qvvkfu_khVcaMZulkQeHaIu2MRtMRT9F/view?usp=sharing",
    thumbnail: "/images/projects/cisco-it-essentials.png",
    description: "Cisco certification verifying foundational proficiency in computer hardware, networking protocols, operating systems, and security diagnostics."
  }
];

export const TECH_STACK_TICKER = [
  { name: "GitHub", category: "Version Control" },
  { name: "Vercel", category: "Deployment" },
  { name: "React", category: "Frontend Library" },
  { name: "JavaScript", category: "Language" },
  { name: "CSS", category: "Styling & Layout" },
  { name: "Tailwind CSS", category: "Utility Framework" },
  { name: "Figma", category: "Interface Design" },
  { name: "Three.js", category: "3D Graphics" },
];

export const SKILLS_UIUX: SkillItem[] = [
  { name: "Mock-up", percentage: 70 },
  { name: "Style Guide", percentage: 62 },
  { name: "UX Research", percentage: 60 }
];

export const SKILLS_PROGRAMMING: SkillItem[] = [
  { name: "AI Prompting", percentage: 45 },
  { name: "Front-end", percentage: 42 },
  { name: "Web Testing", percentage: 38 }
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "GitHub", label: "hazypetals520", url: "https://github.com/hazypetals520" },
  { platform: "Spotify", label: "Hanyin's Collections", url: "https://open.spotify.com/user/31f6pvmql5g6yoepg4klcdwfiu2u?si=6a830b307c204796" },
  { platform: "Instagram", label: "@h4951_", url: "https://www.instagram.com/h4951_?srtk=MWY3dW45ZTRsMDllMQ==" },
  { platform: "Discord", label: "Hanyin's DC", url: "https://discord.com/users/1387367376475132044" },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "id-networkers-cybersecurity",
    role: "Cybersecurity Industrial Class",
    organization: "ID-Networkers",
    partner: "SMK Negeri 7 Semarang (Vocational High School 7)",
    period: "2024 — Present",
    badge: "INDUSTRIAL CLASS",
    logo: "/images/experience/id-networkers.png",
    overview: "A specialized industrial immersion class held in direct partnership between ID-Networkers (Indonesian IT Expert Factory) and SMKN 7 Semarang. The program focuses on bridging foundational cybersecurity theory with extensive practical lab exploration.",
    keyLearnings: [
      {
        title: "Cybersecurity Fundamentals (Dasar)",
        description: "Studying core security concepts, the CIA Triad (Confidentiality, Integrity, Availability), network topologies, authentication models, common threat vectors, and defense-in-depth principles."
      },
      {
        title: "Hands-on Laboratory Exploration (Labs Exploration)",
        description: "Engaging in intensive practical labs: network traffic inspection, port scanning, packet analysis, vulnerability diagnostics, and simulated defensive countermeasures."
      },
      {
        title: "Industrial Standards & Threat Mitigation",
        description: "Adopting enterprise security hygiene, incident detection workflows, firewall and access control configuration, guided by industry practitioners from ID-Networkers."
      }
    ],
    tags: [
      "Cybersecurity",
      "ID-Networkers",
      "SMKN 7 Semarang",
      "Dasar & Fundamentals",
      "Labs Exploration",
      "Network Defense",
      "Threat Analysis"
    ]
  }
];
