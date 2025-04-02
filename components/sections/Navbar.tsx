"use client";

import React from "react";
import Logo from "../Logo";
import Link from "next/link";
import { FaCartShopping } from "react-icons/fa6";
import { useCart } from "./Cart";

const Navbar = () => {
  const { toggleCart } = useCart();

  return (
    <div className="max-w-5xl flex justify-between items-center p-8 mx-auto">
      <Logo size="lg" />
      <div className="flex flex-row  gap-8 items-center">
        <Link href="#catalog" className="hidden md:block font-semibold">
          Catalog
        </Link>
        <Link href="#features" className="hidden md:block font-semibold">
          Features
        </Link>
        <Link href="#catalog" className="hidden md:block font-semibold">
          Reviews
        </Link>
      </div>

      <FaCartShopping
        className="w-6 h-6 text-slate-400 cursor-pointer"
        onClick={toggleCart}
      />
    </div>
  );
};

export default Navbar;
