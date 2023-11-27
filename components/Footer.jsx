"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import Logo from "/public/imgs/logo.svg";

import { MENU_ITENS } from "./Nav";

import Buttom from "@/components/Buttom";

const Footer = () => {
  return (
    <div className="w-full h-40 px-36 mt-32 flex items-center justify-between">
      <Link href="/">
        <div className="w-40 h-40 bg-black flex">
          <Image
            src={Logo}
            alt="Logo Arch"
            className="w-20 h-20 invert m-auto self-center"
          />
        </div>
      </Link>

      <div className="flex-1 h-20 flex items-center justify-start ml-8 text-gray-500">
        {MENU_ITENS.map((item, index) => (
          <div key={index} className="px-8">
            <Link href={item.link}>{item.text}</Link>
          </div>
        ))}
      </div>

      <Buttom link="portfolio">
        <p>See Out Portfolio</p>
      </Buttom>
    </div>
  );
};

export default Footer;
