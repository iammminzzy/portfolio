import {
  ProjectImg_Admin,
  ProjectImg_Beople,
  ProjectImg_Knewnew,
} from "@/public/images";

export const sections = [
  {
    id: 1,
    name: "About",
    hash: "#about",
  },
  { id: 2, name: "Experience", hash: "#experience" },
  {
    id: 3,
    name: "Projects",
    hash: "#projects",
  },
  { id: 4, name: "Contact", hash: "#contact" },
] as const;

export const experiences = [
  {
    id: 1,
    title: "Front End Developer",
    company: "ReadNumber",
    startDate: "Dec 2022",
    endDate: "Jul 2023",
    description: [
      "Built a renewal project to process 3,000 reports monthly in the back-office, resulting in a 180% increase in revenue.",
      "To enhance project scalability without technical debt, implemented delicate architectural planning, documentation, and thorough PRs and code reviews.",
      "Migrated from Javascript to Typescript, improving code maintainability and leveraging the benefits of static typing.",
      "Achieved a 30% reduction in API calls by utilizing Tanstack-Query to optimize cache and stale times for each API.",
      "Achieved a 58% reduction(2.5s→1.05s) in Largest Contentful Paint(LCP) through image optimization using Next/image for improved web loading performance.",
    ],
  },
  {
    id: 2,
    title: "Front End Developer",
    company: "Beople",
    startDate: "Sep 2022",
    endDate: "Dec 2022",
    description: [
      "Led the MVP project and experienced the entire product lifecycle from inception to market release.",
      "Implemented responsive design for screens ranging from desktop size down to as small as 280px for mobile, resulting in a 25% reduction in bounce rate on the first page and providing a seamless mobile user experience.",
      "Introduced a multi-filtering feature to provide customized search options and effectively resolved performance issues by utilizing debouncing, memoization, and caching techniques.",
    ],
  },
  {
    id: 3,
    title: "Front End Developer Intern",
    company: "Knewnew",
    startDate: "Aug 2022",
    endDate: "Sep 2022",
    description: [
      "Improved user experience by implementing a desktop view for the mobile application using React.js.",
      "Added a social login feature using OAuth 2.0, providing the ability for more users to easily sign in.",
    ],
  },
  {
    id: 4,
    title: "Flight Attendant",
    company: "Jeju Air",
    startDate: "Aug 2017",
    endDate: "Aug 2022",
    description: [
      "Based on quick problem-solving abilities and strong collaborative skills, achieved 3 consecutive years of top performance evaluations and took on managerial responsibilities ahead of schedule.",
      "Effectively communicated with international passengers by utilizing Japanese and English language skills.",
    ],
  },
];

export const projects = [
  {
    id: 1,
    image: ProjectImg_Admin,
    name: "Notiee",
    description:
      "Back-office application used by the tax team to assist clients with their tax filings. In contrast to the previous manual data entry process, We introduced AI to automate the extraction of data from file records. This program presents the data and allows for corrections to be made if something's wrong. This transformation greatly improved efficiency and reduced the potential for errors.",
    skills: ["React", "Typescript", "Styled-Components", "Tanstack-Query"],
    links: [
      {
        Github: "",
        site: "",
      },
    ],
  },
  {
    id: 2,
    image: ProjectImg_Beople,
    name: "Beople",
    description:
      "Beople provides a 1:1 mentoring service that matches by finding mentors in areas of interest.",
    skills: ["React", "NextJS", "TailwindCSS", "Redux", "Figma"],
    links: [
      {
        Github: "",
        site: "",
      },
    ],
  },
  {
    id: 3,
    image: ProjectImg_Knewnew,
    name: "Knewnew Desktop ver.",
    description:
      "Implemented a desktop version view for the mobile application.",
    skills: ["React", "Typescript", "Styled-Components", "Tanstack-Query"],
    links: [
      {
        Github: "",
        Youtube: "",
        site: "",
      },
    ],
  },
];

export const email = "minjeeson.dev@gmail.com";

export const socialMedia = [
  {
    name: "GitHub",
    url: "https://github.com/iammminzzy",
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/iammminzzy",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/m.minzzy",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/j_jennnnny",
  },
];
