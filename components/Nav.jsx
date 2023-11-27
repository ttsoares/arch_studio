"use client";

import Image from "next/image";
import Link from "next/link";

import React, { useState } from "react";

import Logo from "/public/imgs/logo.svg";
import Hamburger from "/public/imgs/icon-hamburger.svg";
import Close from "/public/imgs/icon-close.svg";

export const MENU_ITENS = [
  {
    text: "Portfolio",
    link: "/portfolio",
  },
  {
    text: "About",
    link: "/about",
  },
  {
    text: "Contact",
    link: "/contact",
  },
];

//-----------------
const Nav = () => {
  const [showBM, setShowBM] = useState(false);

  function toggleMenu() {
    setShowBM(!showBM);
  }

  return (
    <section className="w-full my-4 h-32 bg-white flex items-center justify-between md:justify-start relative">
      <Link href="/">
        <div className="ml-20 h-10 w-24 flex">
          <Image src={Logo} alt="Logo Arch" />
        </div>
      </Link>

      {/* SM */}
      <div className="md:hidden mr-10">
        {showBM ? (
          <div className="absolute -mt-5 inset-0 w-full h-screen z-20  bg-slate-400/50 ">
            <div className="absolute top-16 right-32 w-38 h-64 bg-gray-500 p-10">
              {MENU_ITENS.map((item, index) => (
                <div
                  key={index}
                  className="px-8 py-4 text-base font-bold flex items-center"
                >
                  <Link href={item.link}>{item.text}</Link>
                </div>
              ))}
            </div>
            <div
              onClick={toggleMenu}
              className="p-2 absolute top-16 right-11 text-3xl font-bold"
            >
              <Image src={Close} alt="Close menu" width={20} height={20} />
            </div>
          </div>
        ) : (
          <div onClick={toggleMenu} className="p-2 text-3xl font-bold">
            <Image src={Hamburger} alt="Open menu" width={20} height={20} />
          </div>
        )}
      </div>

      {/* Md and LG */}
      <div className="hidden md:flex flex-1 h-20 items-center justify-start ml-8 ">
        {MENU_ITENS.map((item, index) => (
          <div
            key={index}
            className="px-7 text-sm text-base text-cus_m_gray font-bold flex items-center"
          >
            <Link href={item.link}>{item.text}</Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Nav;
