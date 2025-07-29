"use client";

import ProjectCard from "./ProjectCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MouseEventHandler, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import next from "next";
import Modal from "./Modal";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { LuGlobe } from "react-icons/lu";
import Image from "next/image";

interface Project {
  name: string;
  imgSrc: string;
  imgAlt: string;
  bgColor: string;
  techs: string[];
  description: string;
  repositoryLink: string;
  websiteLink: string;
  screenshots: string[];
}

const Projects = [
  {
    name: "RoguePixel",
    imgSrc: "/thumbnail/thumbnail-roguepixel.webp",
    imgAlt: "roguepixel",
    bgColor: "bg-[#dc2626]",
    techs: ["Next.js", "JavaScript", "Tailwind CSS"],
    description:
      "This company website is a personal training project built using Next.js, JavaScript, and Tailwind CSS. It showcases a clean and modern design with a focus on user experience, and responsive layout. This project features Home page, About page, Services page, and Teams page. In this project, I learned how to build responsive layouts with Tailwind CSS, implement dynamic routing using Next.js, and fetch external data using APIs. For demonstration purposes, the Team page uses random user data fetched from the Randomuser.me API.",
    repositoryLink: "https://github.com/malvz22/RoguePixel-Company-Website",
    websiteLink: "https://roguepixel-woad.vercel.app/",
  },
  {
    name: "Simpang Raya",
    imgSrc: "/thumbnail/thumbnail-sr.webp",
    imgAlt: "simpang raya",
    bgColor: "bg-[#A22020]",
    techs: ["Next.js", "TypeScript", "Tailwind CSS"],
    description:
      "Simpang Raya is a restaurant website built using Next.js, TypeScript, and Tailwind CSS. It was developed to promote Simpang Raya restaurant by showcasing its available menus and multiple restaurant locations. The site features a fully responsive layout and a modern design. This project includes a Home page, About page, Menu page, Locations page, and Contact form. From this project, I learned how to use libraries such as React Slick to implement image sliders.",
    repositoryLink: "https://github.com/malvz22/simpang-raya",
    websiteLink: "https://simpang-raya.vercel.app/",
  },
  // {
  //   name: "NextGen Gym",
  //   imgSrc: "/thumbnail/thumbnail-nextgen.webp",
  //   imgAlt: "nextgen gym",
  //   bgColor: "bg-[#000000]",
  //   techs: ["Next.js", "TypeScript", "Tailwind CSS"],
  //   description:
  //     "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  //   repositoryLink: "https://github.com/malvz22/nextgen-gym",
  //   websiteLink: "https://nextgen-gym.vercel.app/",
  // },
  {
    name: "OtakuVault",
    imgSrc: "/thumbnail/thumbnail-otaku-vault.webp",
    imgAlt: "otaku vault",
    bgColor: "bg-[#1E90FF]",
    techs: ["Next.js", "TypeScript", "Tailwind CSS"],
    description:
      "OtakuVault is a personal project built using Next.js, TypeScript, and Tailwind CSS that allows users to search for anime and manga titles and view detailed information such as trailers, release dates, synopsis, and more. The website features a responsive and modern layout with a homepage showcasing current season anime, most popular anime, and most popular manga. It also includes a search function for anime and manga, genre-specific list pages, and top anime rankings. From this project, I learned how to fetch and display API data dynamically, build reusable components, and implement client-side filtering and pagination for improved user navigation.",
    repositoryLink: "https://github.com/malvz22/otaku-vault",
    websiteLink: "https://otaku-vault.vercel.app/",
  },
  {
    name: "Spoon & Fork",
    imgSrc: "/thumbnail/thumbnail-spoon-and-fork.webp",
    imgAlt: "spoon & fork",
    bgColor: "bg-[#F15025]",
    techs: ["Next.js", "TypeScript", "Tailwind CSS"],
    description:
      "Spoon & Fork is a personal project website built using Next.js, TypeScript, and Tailwind CSS. It allows users to discover recipes and explore detailed cooking instructions through a clean, modern, and fully responsive layout. The website features a homepage, recipe search, recipe categories, an About section, and a contact form. From this project, I learned how to manage dynamic routing in Next.js, implement search functionality, and build a responsive UI that enhances user experience.",
    repositoryLink: "https://github.com/malvz22/spoon-and-fork",
    websiteLink: "https://spoon-and-fork-ebon.vercel.app",
  },
  {
    name: "Tenplus",
    imgSrc: "/thumbnail/thumbnail-tenplus.webp",
    imgAlt: "tenplus thumbnail",
    bgColor: "bg-[#e1e43d]",
    techs: ["React.js", "JavaScript", "Tailwind CSS"],
    description:
      "This product landing page was a personal creative challenge project developed for Tenplus, an hydration and electrolyte brand. Built using React.js, JavaScript, and Tailwind CSS, it features a clean and modern design focused on product showcase and user engagement. The page is fully responsive and optimized for smooth navigation across devices. It includes key sections such as Hero, About, Product, and Testimonials.",
    repositoryLink: "https://github.com/malvz22/tenplus-landing-page",
    websiteLink: "https://tenplus-seven.vercel.app/",
  },
];

const techIconMap: Record<string, JSX.Element> = {
  "React.js": (
    <Image src={"/react.png"} width={24} height={24} alt="React.js" />
  ),
  "Next.js": (
    <Image
      src={"/nextjs-icon-light-background.png"}
      width={24}
      height={24}
      alt="Next.js"
    />
  ),
  JavaScript: <Image src={"/js.png"} width={24} height={24} alt="JavaScript" />,
  TypeScript: (
    <Image src={"/ts-logo-512.png"} width={24} height={24} alt="TypeScript" />
  ),
  "Tailwind CSS": (
    <Image src={"/tailwind.svg"} width={24} height={24} alt="Tailwind CSS" />
  ),
};

const NextArrow = ({ onClick }: { onClick?: MouseEventHandler }) => {
  return (
    <div
      className="absolute -right-10 top-1/2 transform -translate-y-1/2 z-10 p-2 cursor-pointer text-gray-500 text-[32px] hover:text-primary tramsition-colors duration-300"
      onClick={onClick}
    >
      <IoIosArrowForward />
    </div>
  );
};

const PrevArrow = ({ onClick }: { onClick?: MouseEventHandler }) => {
  return (
    <div
      className="absolute -left-10 top-1/2 transform -translate-y-1/2 z-10 p-2 cursor-pointer text-gray-500 text-[32px] hover:text-primary tramsition-colors duration-300"
      onClick={onClick}
    >
      <IoIosArrowBack />
    </div>
  );
};

const DisplayProjects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const sortedProjects = [...Projects].reverse();

  const handleClick = (project: Project) => {
    setSelectedProject(project);
    // You can add more logic here if needed, like opening a modal or navigating to a project detail page
  };

  return (
    <>
      <div className="w-full max-w-full mx-auto relative">
        <Slider {...settings}>
          {sortedProjects.map((project, index) => (
            <div
              key={index}
              className="px-4 w-full cursor-pointer"
              onClick={() => handleClick(project)}
            >
              <ProjectCard
                projectName={project.name}
                imgSrc={project.imgSrc}
                imgAlt={project.imgAlt}
                bgColor={project.bgColor}
                techs={project.techs}
                repositoryLink={project.repositoryLink}
                websiteLink={project.websiteLink}
              />
            </div>
          ))}
        </Slider>
      </div>
      <Modal
        modalOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      >
        {selectedProject && (
          <div className="flex flex-col">
            <h2 className="font-bold text-xl mb-2">{selectedProject.name}</h2>

            <div className="w-full max-w-full mx-auto mb-4">
              <Slider {...settings}>
                <div className="px-2">
                  <div className="w-full h-[180px] aspect-auto relative">
                    <Image
                      src={selectedProject.imgSrc}
                      alt={selectedProject.imgAlt}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="100%"
                    />
                  </div>
                </div>
              </Slider>
            </div>

            <p className="mb-3">{selectedProject.description}</p>

            <ul className="flex flex-row gap-2 mb-3">
              {selectedProject.techs.map((tech, techIndex) => (
                <li
                  key={techIndex}
                  className="items-center flex justify-center me-2"
                >
                  {techIconMap[tech]}
                </li>
              ))}
            </ul>

            <div className="flex flex-row gap-3 text-[14px] font-medium">
              <Link target="_blank" href={`${selectedProject.repositoryLink}`}>
                <div className="flex flex-row items-center gap-1">
                  <p className="text-lg lg:text-xl">GitHub</p>
                  <FaGithub />
                </div>
              </Link>

              <Link target="_blank" href={`${selectedProject.websiteLink}`}>
                <div className="flex flex-row items-center gap-1">
                  <p className="text-lg lg:text-xl">Deploy</p>
                  <LuGlobe />
                </div>
              </Link>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
};

export default DisplayProjects;
