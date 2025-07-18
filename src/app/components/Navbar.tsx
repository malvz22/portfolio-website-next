"use client";

import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import Link from "next/link";

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  const [icon, setIcon] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
    setIcon(!icon);
    console.log(menu);
  };

  return (
    <div className="w-full max-w-full p-8 z-50 mx-auto fixed top-0">
      <div className="flex flex-row bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-md items-center text-black justify-between max-w-[1200px] py-6 mx-auto px-6">
        <Link href={"#"}>
          <h1 className="font-bold text-[24px]">Malvin A.</h1>
        </Link>

        <div className="hidden lg:flex flex-row items-center gap-8">
          <Link href={"#"}>
            <p className="cursor-pointer text-[18px] hover:text-primary transition-colors duration-300">
              Home
            </p>
          </Link>
          <Link href={"#about-section"}>
            <p className="cursor-pointer text-[18px] hover:text-primary transition-colors duration-300">
              About
            </p>
          </Link>
          <Link href={"#projects-section"}>
            <p className="cursor-pointer text-[18px] hover:text-primary transition-colors duration-300">
              Portfolio
            </p>
          </Link>
        </div>
        <div className="hidden lg:flex flex-row">
          <Link href={"#contact-section"}>
            <button className="cursor-pointer text-[18px] text-white font-semibold rounded-full px-5 py-2 bg-primary hover:bg-hover transition-all duration-300">
              Contact
            </button>
          </Link>
        </div>

        <div className="flex flex-col lg:hidden relative transition-all duration-900">
          <div onClick={handleMenu}>
            <RxHamburgerMenu className={icon ? "hidden" : "flex"} size={34} />
            <IoClose className={icon ? "flex" : "hidden"} size={34} />
          </div>
          <div
            className={
              menu
                ? "flex flex-col absolute top-10 right-[1px] bg-white"
                : "hidden"
            }
          >
            <Link href={"#"}>
              <p className="cursor-pointer text-[24px] text-center">Home</p>
            </Link>
            <Link href={"#about-section"}>
              <p className="cursor-pointer text-[24px] text-center">About</p>
            </Link>
            <Link href={"#projects-section"}>
              <p className="cursor-pointer text-[24px] text-center">Projects</p>
            </Link>
            <Link href={"#contact-section"}>
              <p className="cursor-pointer text-[24px] text-center">Contact</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
