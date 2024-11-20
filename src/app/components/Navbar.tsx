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
    <div className="w-full max-w-full bg-white z-50 mx-auto">
      <div className="flex flex-row text-black justify-between max-w-[1170px] py-12 sticky top-0 mx-auto px-6">
        <h1 className="font-bold text-[24px]">Malvin A.</h1>
        <div className="hidden lg:flex flex-row gap-8">
          <Link href={"#"}>
            <p className="cursor-pointer text-[24px]">Home</p>
          </Link>
          <Link href={"#about-section"}>
            <p className="cursor-pointer text-[24px]">About</p>
          </Link>

          <p className="cursor-pointer text-[24px]">Projects</p>
          <p className="cursor-pointer text-[24px]">Contact</p>
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
            <a className="cursor-pointer text-center p-2 text-[24px]">About</a>
            <a className="cursor-pointer text-center p-2 text-[24px]">
              Experience
            </a>
            <a className="cursor-pointer text-center p-2 text-[24px]">
              Projects
            </a>
            <a className="cursor-pointer text-center p-2 text-[24px]">
              Contacts
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
