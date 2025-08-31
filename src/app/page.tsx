"use client"; // This is a client component
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Chip,
  IconButton,
  MobileNav,
  Navbar
} from "@material-tailwind/react";
import { FC, useEffect, useState } from "react";
import {
  PERSONAL_PROJECTS,
  PROGRAMMING_LANGUAGES,
  TECHNOLOGIES,
  TOOLS,
  WORK_EXPERIENCES,
} from "./data";

const Icon = (id: number, open: number): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`text-white ${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
};

const Home: FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:px-12 pt-0 pb-10 text-text">
      <div className="flex flex-col items-center w-full max-w-screen-sm lg:max-w-screen-md">
        {/* Header Bar */}
        <HeadNav />

        {/* Profile Image */}
        <div className="flex flex-col lg:flex-row gap-8 mb-4 items-center">
          <img
            className="rounded-full object-cover size-72 lg:size-64"
            src="/img/profile-avatar.svg"
            alt="Aashna"
          />

          {/* Heading */}
          <div>
            <div className="items-start flex w-full">
              <h1 className="text-left text-4xl">Hi, I'm Aashna!</h1>
            </div>

            {/* Message */}
            <p className="mt-8 font-light">
              I'm a passionate software engineer with 5+ years of experience building 
              scalable web applications and cloud solutions. I specialize in React, 
              Node.js, and AWS, helping teams deliver robust products from concept 
              to production. When I'm not coding, you'll find me exploring new 
              technologies, contributing to open source, or hiking local trails.
            </p>
            {/* Social Stuff */}
            <div className="flex flex-row w-full items-start mt-6 gap-6">
              <a
                href="https://github.com/aparakh"
                className="text-primary text-3xl hover:text-secondary"
                target="_blank"
              >
                <i className="fa fa-github" />
              </a>
              <a
                href="https://www.linkedin.com/in/aashna-parakh"
                className="text-primary text-3xl hover:text-secondary"
                target="_blank"
              >
                <i className="fa fa-linkedin-square" />
              </a>
              <a
                href="mailto:aashna@anujinfotech.com"
                className="text-primary text-3xl hover:text-secondary"
                target="_blank"
              >
                <i className="fa fa-envelope" />
              </a>
            </div>
          </div>
        </div>

        {/* Work Experience */}
        <h2 id="experience" className="w-full text-left text-3xl mt-10 mb-10">
          Work Experience
        </h2>

        <div className=" bg-section-background rounded-xl px-5 pb-2 w-full">
          <WorkExperiences />
        </div>

        {/* Skills */}
        <h2 id="skills" className="w-full text-left text-3xl mt-10 mb-10">
          Skills
        </h2>

        <div className="bg-section-background rounded-xl px-5 pb-2">
          {/* Languages */}
          <h2 className="w-full text-left text-xl mt-5 mb-5">
            Programming Languages
          </h2>

          <div className="flex flex-row gap-x-2 gap-y-3 flex-wrap mb-10">
            {PROGRAMMING_LANGUAGES.map((language) => (
              <Chip
                value={language}
                className="rounded-full hover:scale-[1.05] transition duration-300 ease-in-out"
                size="md"
                color="teal"
              />
            ))}
          </div>
          <hr className="border-blue-gray-600" />

          {/* Technologies */}

          <h2 className="w-full text-left text-xl mt-5 mb-5">Technologies</h2>
          <div className="flex flex-row gap-x-2 gap-y-3 flex-wrap mb-10">
            {TECHNOLOGIES.map((technology) => (
              <Chip
                size="md"
                value={technology}
                className="rounded-full hover:scale-[1.05] transition duration-300 ease-in-out"
                color="blue"
              />
            ))}
          </div>
          <hr className="border-blue-gray-600" />

          {/* Tools */}

          <h2 className="w-full text-left text-xl mt-5 mb-5">Software Tools</h2>
          <div className="flex flex-row gap-x-2 gap-y-3 flex-wrap mb-10">
            {TOOLS.map((tool) => (
              <Chip
                size="md"
                value={tool}
                className="rounded-full hover:scale-[1.05] transition duration-300 ease-in-out"
                color="deep-purple"
              />
            ))}
          </div>
        </div>

        {/* Personal Projects */}
        <h2 id="projects" className="w-full text-left text-3xl mt-10 mb-10">
          Personal Projects
        </h2>
        <div className=" bg-section-background rounded-xl px-5 pb-2 w-full">
          <PersonalProjects />
        </div>

        {/* Contact */}
        <h2 id="contact" className="w-full text-left text-3xl mt-10 mb-10">
          Contact
        </h2>
        <div className="flex flex-col gap-5 w-full">
          <div className="flex flex-row text-xl font-light hover:text-primary w-full items-center gap-4">
            <i className="fa fa-envelope text-primary" />
            <a href="mailto:aashna@anujinfotech.com">aashna@anujinfotech.com</a>
          </div>
          <div className="flex flex-row text-xl font-light hover:text-primary w-full items-center gap-4">
            <i className="fa fa-phone text-primary" />
            <a href="tel:+19792670771">(979)-267-0771</a>
          </div>
          <div className="flex flex-row text-xl font-light hover:text-primary w-full items-center gap-4">
            <i className="fa fa-linkedin-square text-primary" />
            <a href="https://www.linkedin.com/in/aashhna-parakh">
              linkedin.com/in/aashhna-parakh
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

const WorkExperiences: FC = () => {
  const [open, setOpen] = useState(0);
  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <>
      {WORK_EXPERIENCES.map((workExp, index) => {
        return (
          <Accordion
            open={open === index + 1}
            icon={Icon(index + 1, open)}
            className={`border-b-blue-gray-700 border-b-[1px] ${
              index === WORK_EXPERIENCES.length - 1 && "border-b-0"
            }`}
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <AccordionHeader
              onClick={() => handleOpen(index + 1)}
              className={`text-white hover:text-primary border-b-0`}
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              <div className="flex flex-row gap-5">
                <img
                  src={workExp.icon}
                  className="rounded-full object-cover size-10 border-blue-gray-200 border-2"
                />
                <div className="flex flex-col">
                  <p className="text-base">{workExp.title}</p>
                  <p className="text-base  font-light">{workExp.company}</p>
                  <p className="font-light text-sm">
                    {workExp.starting} &ndash; {workExp.ending}
                  </p>
                </div>
              </div>
            </AccordionHeader>
            <AccordionBody className="text-white text-base pt-3 pb-8">
              <ul className="list-disc list-outside ml-4">
                {workExp.description.map((desc) => (
                  <li>{desc}</li>
                ))}
              </ul>
            </AccordionBody>
          </Accordion>
        );
      })}
    </>
  );
};

const PersonalProjects: FC = () => {
  const [open, setOpen] = useState(0);
  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <>
      {PERSONAL_PROJECTS.map((project, index) => {
        return (
          <Accordion
            open={open === index + 1}
            icon={Icon(index + 1, open)}
            className={`border-b-blue-gray-700 border-b-[1px] ${
              index === PERSONAL_PROJECTS.length - 1 && "border-b-0"
            }`}
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <AccordionHeader
              onClick={() => handleOpen(index + 1)}
              className={`text-white hover:text-primary border-b-0`}
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              <div className="flex flex-row gap-5">
                <div className="flex flex-col md:flex-row md:items-center gap-5 justify-between">
                  <img
                    src={project.image}
                    className="rounded-md w-32 border-blue-gray-200 border-[0.5px]"
                  />
                  <div className="flex flex-col">
                    <p className="text-lg">{project.title}</p>
                    <p className="text-base font-light">{project.subtitle}</p>
                  </div>
                </div>
              </div>
            </AccordionHeader>
            <AccordionBody className="text-white text-base pt-3 pb-6">
              <div className="flex flex-row gap-4 items-center">
                {project.description.map((desc) => (
                  <>
                    {desc}
                    <br />
                  </>
                ))}
              </div>
              <div className="flex gap-2 items-start text-2xl font-light text-primary hover:text-secondary mt-4">
                <i className="fa fa-github" />
                <a className="text-lg" href={project.githubLink}>
                  Project GitHub
                </a>
              </div>
            </AccordionBody>
          </Accordion>
        );
      })}
    </>
  );
};

const HeadNav: FC = () => {
  const [openNav, setOpenNav] = useState(false);
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 768 && setOpenNav(false)
    );
  });

  type HeaderLink = {
    link: string;
    label: string;
  };

  const HEADER_LINKS = [
    {
      link: "#experience",
      label: "Experience",
    },
    {
      link: "#skills",
      label: "Skills",
    },
    {
      link: "#projects",
      label: "Projects",
    },
    {
      link: "#contact",
      label: "Contact",
    },
  ];

  return (
    <>
      <Navbar
        className="h-max max-w-full rounded-xl bg-header-background px-8 py-4 my-5 mb-10 border border-gray-800/80"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <div className="flex items-center justify-between text-white w-full">
          <span className="text-xl font-semibold pr-5">AP</span>
          <div className="flex items-center justify-center gap-10">
            {HEADER_LINKS.map((header) => (
              <a
                href={header.link}
                className="hidden md:inline-block hover:text-primary"
              >
                {header.label}
              </a>
            ))}
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent md:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          <div className="container mx-auto">
            <div className="flex flex-col gap-4 mt-5 pt-5 border-t-[1px] border-t-blue-gray-500">
              {HEADER_LINKS.map((header) => (
                <a href={header.link} className=" hover:text-primary">
                  {header.label}
                </a>
              ))}
            </div>
          </div>
        </MobileNav>
      </Navbar>
    </>
  );
};

export default Home;
