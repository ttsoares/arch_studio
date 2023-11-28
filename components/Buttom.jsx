import React from "react";
import Link from "next/link";

import { BiRightArrowAlt } from "react-icons/bi";

const Buttom = ({ children, link = "/" }) => {
  return (
    <Link href={`/${link}`}>
      <div className="w-fit flex px-20 h-20 bg-cus_d_blue text-white items-center justify-center hover:bg-cus_m_gray">
        <p className="font-bold">{children}</p>
        <BiRightArrowAlt className="w-8 h-8 ml-2" />
      </div>
    </Link>
  );
};

export default Buttom;
