"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { navLink } from "./constants";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <header className="flex items-center px-4 md:px-12 py-3 justify-between fixed top-0 w-full z-50 shadow bg-white">
      <Link href="/">
        <Image src={"/vercel.svg"} alt={"logo"} width={150} height={40} />
      </Link>

      <div className="flex items-center space-x-2.5">
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {navLink.map(({ name, link }) => (
            <Link
              key={name}
              href={link}
              className={`relative mr-5 text-md before:content-[''] before:absolute before:-bottom-1 hover:before:bg-red-800 before:w-full before:h-0.5 ${
                pathname === link
                  ? "text-red-800 before:bg-red-800 "
                  : "text-gray-950 before:bg-transparent"
              }`}
            >
              {name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
