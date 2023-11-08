"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { createElement } from "react";
import { content } from "./content";

const Navbar = () => {
  const { nav } = content;
  const [showMenu, setShowMenu] = useState(false);
  const [active, setActive] = useState(0);

  return (
    <div className="flex w-full justify-center">
      <div
        className="fixed left-5 top-5 z-[999] cursor-pointer rounded-lg"
        onClick={() => setShowMenu(!showMenu)}
      >
        <HiMenuAlt2 size={50} />
      </div>
      <nav
        className={`fixed z-[999] flex items-center gap-5 rounded-full bg-slate-100/30 px-6 py-3 text-blue-950 backdrop-blur-sm duration-200 ${
          showMenu ? "bottom-10" : "bottom-[-100%]"
        }`}
      >
        {nav.map((item, i) => (
          <Link
            key={i}
            href={item.link}
            onClick={() => setActive(i)}
            className={`rounded-full p-3 text-xl sm:cursor-pointer 
     ${i === active && "bg-blue-950 text-white"}`}
          >
            {createElement(item.icon)}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
