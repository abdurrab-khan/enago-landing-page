"use client";
import { navigation } from "@/data/navigation";
import Image from "next/image";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoChevronDown } from "react-icons/io5";

const NavSlide = ({ onClose }: { onClose: () => void }) => {
  const handleClose = (evt: React.MouseEvent<HTMLElement>) => {
    if (evt.target === evt.currentTarget) {
      onClose();
    }
  };

  return (
    <nav
      onClick={handleClose}
      className="fixed inset-0 z-50 h-screen w-screen bg-black/40"
    >
      <ul className="h-full w-85 bg-[#1d1d1d] p-4 text-white">
        <Image
          src={"/enago-logo-white.svg"}
          height={48}
          width={48}
          alt="logo"
          className="h-10 w-1/2 object-contain"
        />
        {navigation.map((nav) => (
          <li
            key={nav.label}
            className="flex items-center justify-between text-lg font-semibold not-first:mt-4"
          >
            {nav.label}
            <IoChevronDown />
          </li>
        ))}
      </ul>
    </nav>
  );
};

function MobileNav() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleOpenNav = () => {
    setIsNavOpen(true);
  };

  const handleCloseNav = () => {
    setIsNavOpen(false);
  };

  return (
    <div className="block lg:hidden">
      <button onClick={handleOpenNav}>
        <FaBars size={24} />
      </button>
      {isNavOpen && <NavSlide onClose={handleCloseNav} />}
    </div>
  );
}

export default MobileNav;
