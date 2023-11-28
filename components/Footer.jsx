"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import Logo from "/public/imgs/logo.svg";

import { MENU_ITENS } from "./Nav";

import Buttom from "@/components/Buttom";

const Footer = () => {
  return (
    <div className="flex  flex-col md:flex-row md:w-full lg:w-[77%] h-40 mx-auto mt-32 items-center justify-between relative">
      <div className="bg-cus_vl_gray flex flex-col md:flex-row items-center justify-start w-[80%]">
        <Link href="/">
          <div className="w-40 h-40 bg-black flex">
            <Image
              src={Logo}
              alt="Logo Arch"
              className="w-20 h-20 invert m-auto self-center"
            />
          </div>
        </Link>

        <div className="flex-1 h-20 flex flex-col md:flex-row items-center justify-start ml-8 text-gray-500">
          {MENU_ITENS.map((item, index) => (
            <div key={index} className="px-8">
              <Link href={item.link}>{item.text}</Link>
            </div>
          ))}
        </div>
        <div className="md:hidden top-10 -right-1 z-10">
          <Buttom link="portfolio">
            <p>See Out Portfolio</p>
          </Buttom>
        </div>
      </div>

      <div className="hidden md:block md:absolute top-10 -right-1 z-10">
        <Buttom link="portfolio">
          <p>See Out Portfolio</p>
        </Buttom>
      </div>
    </div>
  );
};

export default Footer;
