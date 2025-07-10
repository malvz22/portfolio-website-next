/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <footer
      id="contact-section"
      className="flex flex-col gap-4 px-6 justify-center items-center text-center bg-[#F9FAFB]"
    >
      <div className="px-4 py-16 gap-12 text-center justify-center flex flex-col">
        <h1 className="font-bold text-2xl mb-4 text-center">Let's Connect!</h1>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row gap-1 sm:gap-3 justify-center items-center text-[18px] sm:text-[24px]">
            <IoMdMail />
            <p className="">malvinaudriansyah@gmail.com</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-1 sm:gap-3 justify-center items-center text-[18px] sm:text-[24px]">
            <FaPhoneAlt />
            <p className="">+62 81807218539</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-[18px] md:text-[24px]">
            You may also find me on these platforms!
          </p>
          <div className="flex flex-row justify-center items-center gap-4 text-[18px] md:text-[36px]">
            <Link href={"https://github.com/malvz22"} target="_blank">
              <FaGithub />
            </Link>
            <Link
              href={"https://www.linkedin.com/in/malvin-audriansyah"}
              target="_blank"
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
