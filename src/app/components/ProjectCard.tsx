"use client";
import { log } from "console";
import { React, Javascript, Nextjs, Typescript } from "./TechLabels";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { LuGlobe } from "react-icons/lu";

type Data = {
  projectName: string;
  imgSrc: string;
  imgAlt: string;
  bgColor: string;
  techs: string[];
  websiteLink: string;
  repositoryLink: string;
};

const ProjectCard = ({
  projectName,
  imgSrc,
  imgAlt,
  bgColor,
  techs,
  websiteLink,
  repositoryLink,
}: Data) => {
  return (
    <>
      <div className="flex flex-col gap-3 col-span-1">
        <h1 className="text-[24px] font-semibold">{projectName}</h1>
        <div className="flex flex-row flex-wrap sm:flex-nowrap gap-2">
          {techs.map((value, i) => {
            return (
              <p
                className="rounded-full border-solid border-2 border-black px-4 py-2 font-semibold text-[12px]"
                key={i}
              >
                {value}
              </p>
            );
          })}
        </div>
        <div className={`rounded-xl p-3 flex-wrap max-w-full ${bgColor}`}>
          <Image
            src={imgSrc}
            alt={imgAlt}
            width={1000}
            height={1000}
            priority={false}
          />
        </div>
        <div className="flex flex-row gap-3 ps-2 text-[14px] font-medium">
          <Link target="_blank" href={`${repositoryLink}`}>
            <div className="flex flex-row items-center gap-1">
              <p>Github</p>
              <FaGithub />
            </div>
          </Link>

          <Link target="_blank" href={`${websiteLink}`}>
            <div className="flex flex-row items-center gap-1">
              <p>Deploy</p>
              <LuGlobe />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
