"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import Logo from "/public/imgs/logo.svg";

import { MENU_ITENS } from "./Nav";

import Button from "@/components/Button";

const Footer = () => {
  return (
    <div className="flex  flex-col md:flex-row w-full lg:w-[77%] h-40 mx-auto mt-32 items-center justify-between relative">
      <div className="bg-cus_vl_gray flex flex-col md:flex-row items-center justify-start w-full md:w-[80%] relative">
        <Link href="/">
          <div className="absolute -top-16 left-32 md:static w-28 h-28 lg:w-40 lg:h-40 bg-black flex  hover:invert">
            <Image
              src={Logo}
              alt="Logo Arch"
              className="w-20 lg:w-20  invert m-auto self-center"
            />
          </div>
        </Link>

        <div className="flex-1 h-20 flex flex-col md:flex-row items-center justify-start md:ml-8 text-cus_m_gray mt-16 md:mt-0">
          {MENU_ITENS.map((item, index) => (
            <div
              key={index}
              className="py-6 md:py-0 md:px-4 lg:px-8 hover:font-bold"
            >
              <Link href={item.link}>{item.text}</Link>
            </div>
          ))}
        </div>
        {/* SD */}
        <div className="md:hidden  top-10 -right-1 z-10">
          <Link href="/portfolio">
            <Button width="full">
              <p>See Out Portfolio</p>
            </Button>
          </Link>
        </div>
      </div>

      {/* MD & LG */}
      <div className="hidden md:block md:absolute top-10 -right-1 z-10">
        <Link href="/portfolio">
          <Button>
            <p>See Out Portfolio</p>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
