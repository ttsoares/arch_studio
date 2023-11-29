import { League_Spartan } from "next/font/google";
const spartan = League_Spartan({ subsets: ["latin"] });

import "./globals.css";
import "/public/css/maplibre-gl.css";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Arch Studio multi-page website",
  description: "www.frontendmentor.io/challenges/arch-studio-multipage-website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="w-screen h-screen">
      <body className={`${spartan.className} w-full h-full`}>
        <div className="flex">
          <div className="hidden md:block ml-[50px] lg:ml-[77px] w-1 h-[104px] border-r-2 border-cus_l_gray"></div>
          <Nav />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
