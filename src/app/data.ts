type WorkExperience = {
  icon: string;
  title: string;
  company: string;
  starting: string;
  ending: string;
  description: Array<string>;
};

type PersonalProject = {
  title: string;
  subtitle: string;
  image: string;
  date: string;
  githubLink?: string;
  demoLink?: string;
  description: Array<string>; // list of bullets
};

export const PERSONAL_PROJECTS: Array<PersonalProject> = [
  {
    title: "Example Project",
    subtitle:
      "Example Project Subtitle. Text goes here",
    image: "/img/project-example.svg",
    date: "April 2020",
    githubLink:
      "", // can be left empty
    demoLink: "", // can be left empty
    description: [
      "First bullet with some longer example text that describes what this project accomplishes and the key features that were implemented during development.",
      "Second bullet with additional details about the technical implementation, including the frameworks and libraries that were used to build this application.",
      "Third bullet explaining the challenges that were overcome during the development process and how the final solution addresses the original problem statement.",
    ],
  },
];

export const WORK_EXPERIENCES: Array<WorkExperience> = [
  {
    icon: "/img/company-icon.svg",
    title: "Senior Junior AI Agentic LLM Engineer",
    company: "The AI Company",
    starting: "Jan 2024",
    ending: "Present",
    description: [
      "Developed and maintained multiple software applications using modern frameworks and programming languages, collaborating with cross-functional teams to deliver high-quality solutions that met business requirements and user expectations.",
      "Implemented comprehensive testing strategies including unit tests, integration tests, and end-to-end testing to ensure code quality and reliability, while also establishing continuous integration and deployment pipelines for streamlined development workflows.",
      "Participated in code reviews and technical discussions to share knowledge and best practices with team members, while also mentoring junior developers and contributing to the overall improvement of development processes and coding standards.",
    ],
  },

];

export const PROGRAMMING_LANGUAGES = [
  "Java",
  "TypeScript",
  "C/C++",
  "Python",
  "JavaScript",
  "Swift",
  "Scala",
  "C#",
  "Dart",
  "SQL",
  "Ruby",
  "Objective C/C++",
  "HTML",
  "CSS",
];

export const TECHNOLOGIES = [
  "React",
  "Next.js",
  "Redux",
  "Spring Boot",
  "Tailwind",
  "Material UI",
  "React Native",
  "Flutter",
  ".NET",
  "Node.js",
  "Cucumber",
  "Jest",
  "Playwright",
  "Selenium",
  "JUnit",
  "Kubernetes",
  "AWS",
  "Azure",
  "MongoDB",
];

export const TOOLS = [
  "Git",
  "VSCode",
  "Bash",
  "IntelliJ",
  "Postman",
  "Docker",
  "XCode",
  "Emacs",
  "Jira",
  "Azure DevOps",
  "Vim",
  "GitHub",
  "GitLab",
  "Perforce",
  "Boost",
  "CMake",
  "Jenkins",
  "Visual Studio",
  "Android Studio",
];
