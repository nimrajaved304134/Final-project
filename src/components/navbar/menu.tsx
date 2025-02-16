"use client";
import React, { useState } from "react";
import Link from "next/link";
import { IoIosMenu } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";

const Menu = () => {
  const [open, setOpen] = useState(false);

  const categories = [
    { name: "Plant pots", slug: "plant-pots" },
    { name: "Ceramics", slug: "ceramics" },
    { name: "Tables", slug: "tables" },
    { name: "Chairs", slug: "chairs" },
    { name: "Crockery", slug: "crockery" },
    { name: "Tableware", slug: "tableware" },
    { name: "Cutlery", slug: "cutlery" },
  ];

  return (
    <>
      {/* Menu toggle */}
      <div onClick={() => setOpen(!open)} className="cursor-pointer text-3xl">
        {!open ? <IoIosMenu /> : <IoCloseOutline />}
      </div>
      
      {/* Menu items */}
      {open && (
        <div
          className="text-white bg-darkprimary absolute left-0 top-16 h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center w-full text-3xl z-10"
          aria-hidden={!open}
        >
          {categories.map((category) => (
            <Link
              key={category.name}
              href={`/category/${category.name}`}
              className="hover:text-blue-800"
              onClick={() => setOpen(false)}
            >
              {category.name}
            </Link>
          ))}
          
          {/* Icons for cart and user */}
          <div className="flex gap-4 mt-8">
            <Link href={'/cart'}><IoCartOutline className="text-3xl" /></Link>
            <FaRegUserCircle className="text-3xl" />
          </div>
        </div>
      )}
    </>
  );
};

export default Menu;
