"use client";

import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  const [icon, setIcon] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
    setIcon(!icon);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-full items-center px-3 py-3 fixed top-0 left-0 z-[1000]">
        <header className="mx-auto flex flex-row bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-md items-center text-black justify-between w-full max-w-[1200px] z-[100] p-6">
          <Link href={"#"}>
            <h1 className="font-bold text-[24px] dark:text-white">Malvin A.</h1>
          </Link>

          <div className="hidden lg:flex flex-row items-center gap-8">
            <Link href={"#"}>
              <p className="cursor-pointer text-[18px] text-black dark:text-white dark:hover:text-primary hover:text-primary transition-colors duration-300">
                Home
              </p>
            </Link>
            <Link href={"#about-section"}>
              <p className="cursor-pointer text-[18px] text-black dark:text-white dark:hover:text-primary hover:text-primary transition-colors duration-300">
                About
              </p>
            </Link>
            <Link href={"#projects-section"}>
              <p className="cursor-pointer text-[18px] text-black dark:text-white dark:hover:text-primary hover:text-primary transition-colors duration-300">
                Portfolio
              </p>
            </Link>
            <Link href={"#contact-section"}>
              <p className="cursor-pointer text-[18px] text-black dark:text-white dark:hover:text-primary hover:text-primary transition-colors duration-300">
                Contact
              </p>
            </Link>
          </div>
          <div className="hidden lg:flex flex-row">
            {/* <Link href={"#contact-section"}>
            <button className="cursor-pointer text-[18px] text-white font-semibold rounded-full px-5 py-2 bg-primary hover:bg-hover transition-all duration-300">
              Contact
            </button>
          </Link> */}
            <ThemeToggle />
          </div>
          <div
            onClick={handleMenu}
            className="lg:hidden flex items-center justify-center cursor-pointer"
          >
            <RxHamburgerMenu className={icon ? "hidden" : "flex"} size={34} />
            <IoClose className={icon ? "flex" : "hidden"} size={34} />
          </div>
        </header>
      </div>
      <div
        className={`flex flex-col z-[1000] fixed h-screen w-[60%] lg:hidden text-start items-start justify-between bg-white dark:bg-neutral-800 transform right-0 top-0 ${
          menu ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <nav className="flex flex-col items-start py-3 px-5">
          <Link href={"#"}>
            <p
              className="cursor-pointer text-[24px] text-center font-semibold p-3"
              onClick={handleMenu}
            >
              Home
            </p>
          </Link>
          <Link href={"#about-section"}>
            <p
              className="cursor-pointer text-[24px] text-center font-semibold p-3"
              onClick={handleMenu}
            >
              About
            </p>
          </Link>
          <Link href={"#projects-section"}>
            <p
              className="cursor-pointer text-[24px] text-center font-semibold p-3"
              onClick={handleMenu}
            >
              Portfolio
            </p>
          </Link>
          <Link href={"#contact-section"}>
            <p
              className="cursor-pointer text-[24px] text-center font-semibold p-3"
              onClick={handleMenu}
            >
              Contact
            </p>
          </Link>
        </nav>
        <div className="py-5 px-6">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
