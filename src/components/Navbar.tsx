"use client";

import { useState } from "react";
import Hamburger from "hamburger-react";
import Link from "next/link";
import Image from "next/image";
import MavinStudiosLogo from "../../public/Mavin Logo.svg";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className="fixed bg-background border-b items-center flex w-full top-0 z-20 h-24">
      {/* Container */}
      <div className="container mx-auto flex items-center px-4 lg:px-0">
        {/* Logo */}
        <Link href="/" className="mr-auto flex gap-2 items-center">
          <Image
            src={MavinStudiosLogo}
            alt="Mavin Studios"
            className="w-14 xl:w-16 xl:h-16"
          />
          <h1 className="font-bold text-lg xl:text-2xl">Mavin Studios</h1>
        </Link>
        {/* Items */}
        <ul
          className={`bg-background shadow-md font-semibold xl:shadow-none xl:bg-transparent w-full xl:w-fit xl:mr-12 left-0 px-6 flex flex-col xl:flex xl:flex-row xl:gap-12 absolute xl:static top-full ${
            !isOpen && "hidden"
          }`}
        >
          <li className="nav-item">
            <Link href="#about">About</Link>
          </li>
          <li className="nav-item">
            <Link href="#services">Services</Link>
          </li>
          <li className="nav-item">
            <Link href="#works">Works</Link>
          </li>
        </ul>
        {/* CTA */}
        <Link href="#contact" className="btn-primary hidden xl:flex">
          Contact Us
        </Link>
        {/* Hamburger Menu */}
        <div className="xl:hidden">
          <Hamburger size={24} toggle={setOpen} toggled={isOpen} />
        </div>
      </div>
    </nav>
  );
}
