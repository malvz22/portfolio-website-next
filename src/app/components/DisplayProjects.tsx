"use client";

import ProjectCard from "./ProjectCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MouseEventHandler } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import next from "next";

const Projects = [
  {
    name: "RoguePixel",
    imgSrc: "/thumbnail/thumbnail-roguepixel.webp",
    imgAlt: "roguepixel",
    bgColor: "bg-[#dc2626]",
    techs: ["Next.js", "JavaScript", "Tailwind CSS"],
    repositoryLink: "https://github.com/malvz22/RoguePixel-Company-Website",
    websiteLink: "https://roguepixel-woad.vercel.app/",
  },
  {
    name: "Moonlit Sirens",
    imgSrc: "/thumbnail/thumbnail-moonlit.webp",
    imgAlt: "moonlit",
    bgColor: "bg-black",
    techs: ["Next.js", "TypeScript", "Tailwind CSS"],
    repositoryLink: "https://github.com/malvz22/the-band-next",
    websiteLink: "https://moonlightsirens.vercel.app/",
  },
  {
    name: "Simpang Raya",
    imgSrc: "/thumbnail/thumbnail-sr.webp",
    imgAlt: "simpang raya",
    bgColor: "bg-[#A22020]",
    techs: ["Next.js", "TypeScript", "Tailwind CSS"],
    repositoryLink: "https://github.com/malvz22/simpang-raya",
    websiteLink: "https://simpang-raya.vercel.app/",
  },
  {
    name: "NextGen Gym",
    imgSrc: "/thumbnail/thumbnail-nextgen.webp",
    imgAlt: "nextgen gym",
    bgColor: "bg-[#000000]",
    techs: ["Next.js", "TypeScript", "Tailwind CSS"],
    repositoryLink: "https://github.com/malvz22/nextgen-gym",
    websiteLink: "https://nextgen-gym.vercel.app/",
  },
  {
    name: "OtakuVault",
    imgSrc: "/thumbnail/thumbnail-otaku-vault.webp",
    imgAlt: "otaku vault",
    bgColor: "bg-[#1E90FF]",
    techs: ["Next.js", "TypeScript", "Tailwind CSS"],
    repositoryLink: "https://github.com/malvz22/otaku-vault",
    websiteLink: "https://otaku-vault.vercel.app/",
  },
  {
    name: "Spoon & Fork",
    imgSrc: "/thumbnail/thumbnail-spoon-and-fork.webp",
    imgAlt: "spoon & fork",
    bgColor: "bg-[#F15025]",
    techs: ["Next.js", "TypeScript", "Tailwind CSS"],
    repositoryLink: "https://github.com/malvz22/spoon-and-fork",
    websiteLink: "https://spoon-and-fork-ebon.vercel.app",
  },
  {
    name: "Tenplus",
    imgSrc: "/thumbnail/thumbnail-tenplus.webp",
    imgAlt: "tenplus thumbnail",
    bgColor: "bg-[#e1e43d]",
    techs: ["React.js", "JavaScript", "Tailwind CSS"],
    repositoryLink: "https://github.com/malvz22/tenplus-landing-page",
    websiteLink: "https://tenplus-seven.vercel.app/",
  },
];

const NextArrow = ({ onClick }: { onClick?: MouseEventHandler }) => {
  return (
    <div
      className="absolute -right-10 top-1/2 transform -translate-y-1/2 z-10 p-2 cursor-pointer text-gray-500 text-[32px]"
      onClick={onClick}
    >
      <IoIosArrowForward />
    </div>
  );
};

const PrevArrow = ({ onClick }: { onClick?: MouseEventHandler }) => {
  return (
    <div
      className="absolute -left-10 top-1/2 transform -translate-y-1/2 z-10 p-2 cursor-pointer text-gray-500 text-[32px]"
      onClick={onClick}
    >
      <IoIosArrowBack />
    </div>
  );
};

const DisplayProjects = () => {
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

  return (
    <div className="w-full max-w-full mx-auto relative">
      <Slider {...settings}>
        {sortedProjects.map((project, index) => (
          <div key={index} className="px-4 w-full">
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
  );
};

export default DisplayProjects;
