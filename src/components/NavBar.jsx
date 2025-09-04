"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";

const NavBar = () => {
  const links = [
    { url: "/", title: "Home" },
    { url: "/about", title: "About" },
    { url: "/portfolio", title: "portfolio" },
    { url: "/contact", title: "contact" },
  ];

  const [open, setOpen] = useState(false);

  const handleNav = () => {
    setOpen(!open);
  };

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link) => (
          <NavLink link={link} key={link.title}></NavLink>
        ))}
      </div>
      {/* Logo Container  */}
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
        >
          <span className="text-white mr-1">Lama</span>
          <span className="w-12 h-8 rounded bg-white text-black flex items-center items-center ">
            .dev
          </span>
        </Link>
      </div>
      <div className=" gap-4 hidden md:flex w-1/3">
        <Link href="#">
          <Image alt="" src="/github.png" width={24} height={24}></Image>
        </Link>
        <Link href="#">
          <Image alt="" src="/facebook.png" width={24} height={24}></Image>
        </Link>
        <Link href="#">
          <Image alt="" src="/dribbble.png" width={24} height={24}></Image>
        </Link>
        <Link href="#">
          <Image alt="" src="/instagram.png" width={24} height={24}></Image>
        </Link>
        <Link href="#">
          <Image alt="" src="/pinterest.png" width={24} height={24}></Image>
        </Link>
        <Link href="">
          <Image alt="" src="/linkedin.png" width={24} height={24}></Image>
        </Link>
      </div>
      {/* Responsive Menu  */}
      <div className="md:hidden">
        {/* Menu Button  */}

        <button
          className="w-10 h-8 flex flex-col justify-between cursor-pointer z-50 relative "
          onClick={handleNav}
        >
          <div className="w-10 h-1 bg-black rounded"></div>
          <div className="w-10 h-1 bg-black rounded"></div>
          <div className="w-10 h-1 bg-black rounded"></div>
        </button>
        {/* Menu Loinks  */}
        {open && (
          <div className="absolute top-0 left-0 w-screen h-screen text-white bg-black flex flex-col justify-center items-center gap-8 text-4xl">
            {links.map((link) => (
              <Link key={link.title} href={link.url} className="">
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
