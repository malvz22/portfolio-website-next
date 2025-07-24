/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { Javascript, Nextjs, React, Typescript } from "./components/TechLabels";
import ProjectCard from "./components/ProjectCard";
import Link from "next/link";
import DisplayProjects from "./components/DisplayProjects";
import Heading from "./components/Heading";

interface Skill {
  category: string;
  skills: {
    name: string;
    icon: string;
  }[];
}

const skills = [
  {
    name: "HTML",
    icon: "/html-5.png",
  },
  {
    name: "CSS",
    icon: "/css-3.png",
  },
  {
    name: "JavaScript",
    icon: "/js.png",
  },
  {
    name: "TypeScript",
    icon: "/ts-logo-512.png",
  },
  {
    name: "React.js",
    icon: "/react.png",
  },
  {
    name: "Next.js",
    icon: "/nextjs-icon-light-background.png",
  },
  {
    name: "Tailwind CSS",
    icon: "/tailwind.svg",
  },
  {
    name: "Git",
    icon: "/git.png",
  },
  {
    name: "Figma",
    icon: "/figma.png",
  },
];

const categorizedSkills = [
  {
    category: "Languages",
    skills: [
      { name: "HTML", icon: "/html-5.png" },
      { name: "CSS", icon: "/css-3.png" },
      { name: "JavaScript", icon: "/js.png" },
      { name: "TypeScript", icon: "/ts-logo-512.png" },
    ],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      {
        name: "React.js",
        icon: "/react.png",
      },
      {
        name: "Next.js",
        icon: "/nextjs-icon-light-background.png",
      },
      {
        name: "Tailwind CSS",
        icon: "/tailwind.svg",
      },
    ],
  },
  {
    category: "Tools",
    skills: [
      {
        name: "Git",
        icon: "/git.png",
      },
      {
        name: "VS Code",
        icon: "/vscode.png",
      },
    ],
  },
];

export default function Home() {
  return (
    <>
      <div className="mx-auto max-w-[1200px] flex flex-col">
        <section
          id="home-section"
          className="md:h-screen flex flex-col justify-center items-center gap-20 px-5"
        >
          <div className="flex flex-col w-full max-w-full md:flex-row-reverse gap-7 justify-between items-center">
            <div className="bg-slate-300 rounded-full w-full max-w-[400px] aspect-square relative flex justify-center items-center overflow-hidden">
              <Image
                src={"/profilepic.png"}
                fill
                style={{ objectFit: "cover" }}
                alt="displaypicture"
                priority={true}
                sizes="100%"
              />
            </div>
            <div className="text-center md:text-start font-semibold w-full max-w-full md:max-w-[600px]">
              <h1 className="text-3xl font-semibold my-3">
                Hello, I'm{" "}
                <span className="font-bold text-primary">
                  Malvin Audriansyah
                </span>
              </h1>
              <h2 className="text-[24px] font-semibold text-[#555555] mb-4">
                Front-End Developer
              </h2>
              <p className="mb-4 font-normal text-lg">
                I'm passionate about building clean, responsive, and
                user-friendly websites. Skilled in HTML, CSS, JavaScript,
                TypeScript, React.js, Next.js, and Tailwind CSS. I’m eager to
                contribute to meaningful, modern web experiences in a dynamic
                and creative environment!
              </p>

              <div className="flex flex-row justify-center md:justify-start gap-4">
                <Link href={"https://github.com/malvz22"} target="_blank">
                  <FaGithub size={32} />
                </Link>
                <Link
                  href={"https://www.linkedin.com/in/malvin-audriansyah"}
                  target="_blank"
                >
                  <FaLinkedin size={32} />
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section
          id="about-section"
          className="flex flex-col items-start gap-4 py-4 mb-6 px-4 scroll-mt-36"
        >
          <div className="flex flex-col gap-3 max-w-full">
            <Heading centered={true} title="About Me" />
            <div className="flex flex-col md:flex-row gap-4 items-center w-full max-w-full">
              <div className="w-full max-w-full text-start text-sm md:text-base lg:text-lg ">
                <p className="mb-3">
                  I'm a motivated front-end developer with a passion for
                  crafting visually engaging and user-friendly websites. While
                  I'm early in my web development journey, I've been actively
                  building my skills through self-learning and personal
                  projects. Through building personal projects, I've leaned to
                  translate designs into modular, maintainable code.
                </p>
                <p className="mb-3">
                  My core technical skills include HTML, CSS, JavaScript, and
                  TypeScript. I'm particularly interested in responsive web
                  designs and ensuring seamless user experience across devices.
                  I've also explored popular tools and frameworks such as
                  React.js, Next.js, Tailwind CSS, Bootstrap, and Chakra UI.
                </p>
                <p>
                  I'm now seeking opportunities where I can contribute fresh
                  ideas, collaborate with like-minded developers, and continue
                  growing in a forward-thinking environment. I'm excited to
                  bring my creativity, discipline, and enthusiasm for technology
                  to a real-world team.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 w-full max-w-full">
            <Heading title="Skills & Tech" centered={true} />
            <p className="text-sm md:text-base lg:text-lg mb-3 text-center">
              I work with a variety of tools to bring modern websites to life:
            </p>

            <div className="flex flex-col w-full max-w-full gap-3 justify-center items-center text-center">
              {categorizedSkills.map((category, index) => (
                <div key={index} className="flex flex-col gap-3">
                  <h3 className="text-lg font-semibold">{category.category}</h3>
                  <div className="flex flex-row flex-wrap md:flex-nowrap gap-4 justify-center items-center">
                    {category.skills.map((skills, skillsIndex) => (
                      <div
                        key={skillsIndex}
                        className="flex flex-row gap-4 items-center justify-center w-[120px] h-[120px]"
                      >
                        <div className="flex flex-col items-center gap-3">
                          <div className="w-[70px] h-[70px] relative aspect-square">
                            <Image
                              src={skills.icon}
                              alt={skills.name}
                              fill
                              style={{ objectFit: "contain" }}
                              sizes="100%"
                            />
                          </div>
                          <p>{skills.name}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section
          id="projects-section"
          className="flex flex-col gap-4 py-4 mx-4 justify-center items-center scroll-mt-36"
        >
          <Heading centered={true} title="Portfolio" />
          <div className="w-full max-w-full mx-auto px-4">
            <DisplayProjects />
          </div>
        </section>
      </div>
    </>
  );
}
