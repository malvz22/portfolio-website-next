/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { Javascript, Nextjs, React, Typescript } from "./components/TechLabels";
import ProjectCard from "./components/ProjectCard";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="mx-auto max-w-[1200px]">
        <section
          id="home-section"
          className="h-screen flex flex-col justify-center items-center gap-20 px-5"
        >
          <div className="flex flex-col md:flex-row gap-7 justify-center items-center">
            <div className="bg-slate-300 rounded-full w-[300px] h-[300px] relative flex justify-center items-center overflow-hidden">
              <Image
                src={"/profilepic.png"}
                fill
                objectFit="cover"
                alt="displaypicture"
              />
            </div>
            <div className="text-center md:text-start font-semibold max-w-[400px]">
              <h1 className="text-3xl font-bold my-3">Malvin Audriansyah S.</h1>
              <h2 className="text-[28px] font-semibold text-[#555555] mb-4">
                Front-End Developer
              </h2>
              <p className="mb-4">
                Hello, I'm Malvin, some call me Malv. An aspiring Front-End
                Developer from Jakarta, Indonesia.
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
                  href={
                    "https://www.linkedin.com/in/malvin-audriansyah-satriatama-b67909207/"
                  }
                  target="_blank"
                >
                  <FaLinkedin size={32} />
                </Link>
              </div>
            </div>
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
          id="about-section"
          className="flex flex-col justify-center items-center gap-4 py-4 mb-6 px-4 h-screen"
        >
          <div className="flex flex-col gap-3 max-w-full">
            <h1 className="font-bold text-3xl mb-4 text-start">About Me</h1>
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="">
                <Image
                  src={"/laptop.jpg"}
                  alt="laptop"
                  width={1400}
                  height={0}
                  className="rounded-lg"
                  layout="intrinsic"
                />
              </div>
              <div className="max-w-full">
                <p className="mb-3">
                  I'm an aspiring front-end developer with a passion for
                  creating visually appealing websites. Even though i'm still
                  considered new for web development, i have dedicated my time
                  to improve my skills in HTML, CSS, Javascript, and Typescript
                  through self-learning and online course.
                </p>
                <p className="mb-3">
                  I am also interested in responsive web design and ensuring
                  that websites provides a seamless User Experience across
                  devices. I have also explored popular frameworks and libraries
                  such as React.js, Next.js, Bootstrap, Tailwind, and Chakra.
                </p>
                <p>
                  I am eager to seek opportunity for bringing fresh ideas and a
                  strong work ethic to a forward-thinking company. I look
                  forward to collaborating with others who share my passion for
                  technology and innovation
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="projects-section"
          className="flex flex-col gap-4 py-4 mx-4 h-screen justify-center items-center"
        >
          <div className="max-w-[1200px] flex flex-col gap-3 ">
            <h1 className="font-bold text-3xl mb-4 text-start">Projects</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-1 justify-center gap-5">
              <ProjectCard
                projectName="RoguePixel"
                imgSrc="/thumbnail/thumbnail-roguepixel.png"
                imgAlt="roguepixel"
                bgColor="bg-[#dc2626]"
                techs={["NextJS", "Javascript", "Tailwind"]}
                repositoryLink="https://github.com/malvz22/RoguePixel-Company-Website"
                websiteLink="https://roguepixel-woad.vercel.app/"
              />
              <ProjectCard
                projectName="The Band Website"
                imgSrc="/thumbnail/thumbnail-moonlit.png"
                imgAlt="moonlit"
                bgColor="bg-black"
                techs={["NextJS", "Typescript", "Tailwind"]}
                repositoryLink="https://github.com/malvz22/the-band-next"
                websiteLink="https://moonlightsirens.vercel.app/"
              />
              <ProjectCard
                projectName="Simpang Raya"
                imgSrc="/thumbnail/thumbnail-sr.png"
                imgAlt="simpang raya"
                bgColor="bg-[#A22020]"
                techs={["NextJS", "Typescript", "Tailwind"]}
                repositoryLink="https://github.com/malvz22/simpang-raya"
                websiteLink="https://simpang-raya.vercel.app/"
              />
            </div>
          </div>
        </section>
      </div>
      <section
        id="contact-section"
        className="flex flex-col gap-4 px-6 justify-center items-center text-center bg-[#F9FAFB]"
      >
        <div className="px-4 py-16 gap-12 text-center justify-center flex flex-col">
          <h1 className="font-bold text-3xl mb-4 text-center">
            Let's Connect!
          </h1>
          <div className="flex flex-col">
            <div className="flex flex-row gap-5 justify-center items-center">
              <IoMdMail size={36} />
              <p className="text-[28px] md:text-[36px]">
                malvinaudriansyah77@gmail.com
              </p>
            </div>
            <div className="flex flex-row gap-5 justify-center items-center">
              <FaPhoneAlt size={36} />
              <p className="text-[28px] md:text-[36px]">+62 81807218539</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[24px]">
              You may also find me on these platforms!
            </p>
            <div className="flex flex-row justify-center items-center gap-4">
              <Link href={"https://github.com/malvz22"} target="_blank">
                <FaGithub size={32} />
              </Link>
              <Link
                href={
                  "https://www.linkedin.com/in/malvin-audriansyah-satriatama-b67909207/"
                }
                target="_blank"
              >
                <FaLinkedin size={32} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
