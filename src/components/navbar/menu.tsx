"use client";

import React, { useState } from "react";
import Link from "next/link";
import { IoIosMenu } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Menu toggle */}
      <div onClick={() => setOpen(!open)} className="cursor-pointer text-3xl">
        {!open ? <IoIosMenu /> : <IoCloseOutline />}
      </div>

      {/* Menu items */}
      {open && (
        <div
          className="text-white bg-gradient-to-bl from-blue-600 to-red-600 absolute left-0 top-20 h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center w-full text-3xl z-10"
          aria-hidden={!open}
        >
          <Link href={"/"} className="hover:text-blue-600" onClick={() => setOpen(false)}>
            Plant pots
          </Link>
          <Link href={"#about"} className="hover:text-blue-800" onClick={() => setOpen(false)}>
            Ceramics
          </Link>
          <Link href={"#skills"} className="hover:text-blue-800" onClick={() => setOpen(false)}>
            Tables
          </Link>
          <Link href={"#projects"} className="hover:text-blue-800" onClick={() => setOpen(false)}>
            Chairs
          </Link>
          <Link href={"#contact"} className="hover:text-blue-800" onClick={() => setOpen(false)}>
            Crockery
          </Link>
          <Link href={"#contact"} className="hover:text-blue-800" onClick={() => setOpen(false)}>
            Tableware
          </Link>
          <Link href={"#contact"} className="hover:text-blue-800" onClick={() => setOpen(false)}>
            Cutlery
          </Link>

          {/* Icons for cart and user */}
          <div className="flex gap-4 mt-8">
            <IoCartOutline className="text-3xl" />
            <FaRegUserCircle className="text-3xl" />
          </div>
        </div>
      )}
    </>
  );
};

export default Menu;
