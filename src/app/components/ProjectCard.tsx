"use client";
import { React, Javascript, Nextjs, Typescript } from "./TechLabels";
import Image from "next/image";
import WIPBadge from "./WIPBadge";

type Data = {
  projectName: string;
  imgSrc: string;
  imgAlt: string;
  bgColor: string;
  techs: string[];
  websiteLink: string;
  repositoryLink: string;
  workInProgress: boolean;
};

const ProjectCard = ({
  projectName,
  imgSrc,
  imgAlt,
  bgColor,
  workInProgress,
}: Data) => {
  return (
    <>
      <div className="flex flex-col gap-3 col-span-1">
        <h1 className="text-[24px] font-semibold">
          {projectName} {workInProgress && <WIPBadge />}
        </h1>
        <div className={`rounded-xl p-3 flex-wrap max-w-full ${bgColor}`}>
          <Image
            src={imgSrc}
            alt={imgAlt}
            width={1000}
            height={1000}
            priority={false}
          />
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
