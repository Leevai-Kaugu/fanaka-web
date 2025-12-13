import React from "react";
import Link from "next/link";
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
  } from 'react-icons/fa';
import { BsThreadsFill } from "react-icons/bs";
import ContactButton from "../contact/page";
import ContactModal from "../contactModal/page";


export default function Footer() {

    const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-gray-700 pt-6 pb-10 border-t">
      {/* Top divider */}
      {/* <div className="w-full border-t mb-6"></div> */}

      {/* Featured Products Row */}
      <div className="w-full flex flex-wrap justify-center gap-8 text-sm mb-6">
        <div className="flex items-center gap-2 font-semibold">
          <span> Download our Mobile App </span>
        </div>

        <Link href="https://kula-dev.fanakatech.com/api/v1/apk/download/fanaka-kula" className="flex items-center gap-2 hover:text-black">
          <img src="/kula-app-logo-01.png" className="w-10 h-10" alt="Kula app" />
          <span>Kula</span>
        </Link>

      </div>

      {/* Second divider */}
      <div className="w-full border-t mb-6"></div>

      {/* Region + Socials + Logo */}
      <div className="flex flex-wrap justify-between items-center px-4 max-w-7xl mx-auto">

        {/* Social Icons */}
        <div className="flex items-center gap-4 mb-4 md:mb-0">
          <Link href="#"><FaLinkedin className="w-5 h-5 opacity-70 hover:opacity-100" /></Link>
          <Link href="#"><FaFacebook className="w-5 h-5 opacity-70 hover:opacity-100" /></Link>
          <Link href="#"><FaInstagram className="w-5 h-5 opacity-70 hover:opacity-100" /></Link>
          <Link href="#"><BsThreadsFill className="w-5 h-5 opacity-70 hover:opacity-100" /></Link>
        </div>


        <div className="flex flex-col items-center gap-2">
          <ContactButton />
        </div>
      </div>

      {/* Footer Links */}
      <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm text-gray-600">
        <span>Copyright © {currentYear} All rights reserved.</span>
        <Link href="/" className="hover:text-black">Privacy</Link>
        <Link href="/" className="hover:text-black">Terms of Use</Link>
        <Link href="/" className="hover:text-black">Cookie preferences</Link>
        {/* <Link href="/" className="hover:text-black">Do not sell my personal information</Link> */}
      </div>
    </footer>
  );
}
