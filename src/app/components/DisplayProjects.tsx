import ProjectCard from "./ProjectCard";

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
    name: "Otaku Vault",
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
];

const DisplayProjects = () => {
  return (
    <div className="w-full max-w-full">
      <h1 className="font-bold text-3xl mb-4 text-start">Projects</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {Projects.map((project, index) => (
          <div key={index}>
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
      </div>
    </div>
  );
};

export default DisplayProjects;
