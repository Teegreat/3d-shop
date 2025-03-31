import React from "react";
import Logo from "../Logo";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="flex flex-col gap-4">
      <Logo size="lg" />
      <div className="flex flex-row gap-4">
        <Link
          href="#"
          className="flex items-center justify-center rounded-full bg-white p-1"
        >
          <FaInstagram className="text-stone-900" />
        </Link>
        <Link
          href="#"
          className="flex items-center justify-center rounded-full bg-white p-1"
        >
          <FaFacebook className="text-stone-900" />
        </Link>
        <Link
          href="#"
          className="flex items-center justify-center rounded-full bg-white p-1"
        >
          <FaTwitter className="text-stone-900" />
        </Link>
        <Link
          href="#"
          className="flex items-center justify-center rounded-full bg-white p-1"
        >
          <FaYoutube className="text-stone-900" />
        </Link>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="container max-w-5xl mx-auto pt-32 relative z-20">
      <div className="flex flex-col gap-12 md:flex-row md:justify-between pb-8 px-8">
        <Socials />

        <div className="flex flex-col gap-8 ">
          <div className="w-32 flex flex-col gap-2">
            <p className="p-xs font-semibold text-slate-400">Location</p>
            <p>1234 Main St, Anytown, USA</p>
          </div>

          <div className="w-32 flex flex-col gap-2">
            <p className="p-xs font-semibold text-slate-400">Phone</p>
            <p>+123 456 7890</p>
          </div>
        </div>

        <div className="flex flex-col gap-2 text-sm text-slate-400">
          <Link href="#">Home</Link>
          <Link href="#">Catalog</Link>
          <Link href="#">About</Link>
          <Link href="#">Contact Us</Link>
          <Link href="#">Privacy Policy</Link>
        </div>
      </div>

      <hr className="px-16 border-slate-400" />
      <div className="w-full flex flex-col-reverse gap-y-2 md:flex-row md:justify-between items-center justify-between py-4 text-xs text-slate-400">
        <p>&copy; Fibipal.co.</p>
        <p>Contact Us | keyboard@gmail.com</p>
      </div>
    </div>
  );
};

export default Footer;
