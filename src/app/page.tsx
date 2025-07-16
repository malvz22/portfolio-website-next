/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { Javascript, Nextjs, React, Typescript } from "./components/TechLabels";
import ProjectCard from "./components/ProjectCard";
import Link from "next/link";
import DisplayProjects from "./components/DisplayProjects";
import Heading from "./components/Heading";

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
              <h2 className="text-[28px] font-semibold text-[#555555] mb-4">
                Front-End Developer
              </h2>
              <p className="mb-4 font-normal text-lg">
                I'm a front-end developer passionate about building clean,
                responsive, and user-friendly websites. Skilled in HTML, CSS,
                JavaScript, TypeScript, React.js, Next.js, and Tailwind CSS. I’m
                eager to contribute to meaningful, modern web experiences in a
                dynamic and creative environment!
              </p>
              <Link href={"#contact-section"}>
                <button className="bg-[#353535] hover:bg-white hover:text-black border-solid border-[#353535] border-2 transition-all duration-900 w-[8rem] text-[13px] font-semibold text-white p-4 rounded-full mb-4 cursor-pointer">
                  Contact Info
                </button>
              </Link>

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
          className="flex flex-col items-start gap-4 py-4 mb-6 px-4"
        >
          <div className="flex flex-col gap-3 max-w-full">
            <Heading title="About Me" />
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
          <div className="flex flex-col gap-3 max-w-full">
            <Heading title="Skills & Tech" />
            {/* <div className="flex flex-col md:flex-row gap-4 items-center w-full max-w-full">
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
            </div> */}
          </div>
          <div className="flex flex-col md:flex-row gap-9 items-center">
            <p className="font-bold text-[20px] flex flex-row gap-6">
              Tech Stack <span className="hidden md:flex">|</span>
            </p>
            <div className="flex flex-row flex-wrap gap-3 justify-center">
              <Image src={"/html-5.png"} alt="html-5" width={50} height={50} />
              <Image src={"/css-3.png"} alt="css-3" width={50} height={50} />
              <Image src={"/js.png"} alt="js" width={50} height={50} />
              <Image src={"/ts-logo-512.png"} alt="ts" width={50} height={50} />
              <Image src={"/react.png"} alt="react" width={50} height={50} />
              <Image
                src={"/nextjs-icon-light-background.png"}
                alt="nextjs"
                width={50}
                height={50}
              />
              <Image
                src={"/tailwind.svg"}
                alt="tailwind"
                width={50}
                height={50}
              />
            </div>
          </div>
        </section>
        <section
          id="projects-section"
          className="flex flex-col gap-4 py-4 mx-4 justify-center items-start"
        >
          <Heading title="Portfolio" />
          <div className="max-w-[1200px] flex flex-col gap-3 ">
            <DisplayProjects />
          </div>
        </section>
      </div>
    </>
  );
}
