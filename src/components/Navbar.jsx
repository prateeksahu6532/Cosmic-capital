import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { MdRoundaboutRight } from "react-icons/md";
import { MdMiscellaneousServices } from "react-icons/md";
import { MdSubscriptions } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import { GrCompliance } from "react-icons/gr";
import CosmicLogo from "./CosmicLogo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <div>
      {/*  Main colour code = Bronze	#CD7F32	205, 127, 50	30, 61, 50 */}
      <nav className="bg-white shadow-md fixed w-full z-50 text-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <Link to="/">
              <img
                src={CosmicLogo}
                alt="Logo"
                className="h-10 w-17  rounded-full object-contain bg-"
              />
            </Link>
            <h1 className="text-2xl font-bold text-[#CD7F32]">
              <Link to="/">Cosmic Capital Research</Link>
            </h1>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-cente space-x-8 font-medium">
            <Link
              to="/"
              className="hover:text-[#CD7F32] flex gap-1 items-center"
            >
              <IoHome />
              Home
            </Link>
            <Link
              to="/about"
              className="hover:text-[#CD7F32] flex gap-1 items-center"
            >
              <MdRoundaboutRight /> About
            </Link>
            <Link
              to="/services"
              className="hover:text-[#CD7F32] flex gap-1 items-center"
            >
              <MdMiscellaneousServices />
              Services
            </Link>
            <Link
              to="/subscription"
              className="hover:text-[#CD7F32] flex gap-1 items-center"
            >
              <MdSubscriptions />
              Subscriptions
            </Link>
            {/* Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button className="hover:text-[#CD7F32] pt-1.5 flex gap-1 items-center">
                <GrCompliance />
                Compliance ⮟
              </button>
              {dropdownOpen && (
                <div className=" block absolute top-8 left-0 bg-white shadow-lg rounded-lg w-52 p-4 space-y-3">
                  <Link to="/disclaimer" className="block hover:text-[#CD7F32]">
                    Disclaimer
                  </Link>
                  <Link
                    to="/privacy-policy"
                    className="block hover:text-[#CD7F32]"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    to="/refund-policy"
                    className="block hover:text-[#CD7F32]"
                  >
                    Refund Policy
                  </Link>
                  <Link to="/terms" className="block hover:text-[#CD7F32]">
                    Terms & Conditions
                  </Link>
                </div>
              )}
            </div>
            <Link
              to="/contact"
              className="hover:text-[#CD7F32] flex gap-1 items-center"
            >
              <IoMdContact />
              Contact
            </Link>
            {/* Login Button */}
            <button className="bg-[#CD7F32] text-white px-5 py-1.5 rounded-lg shadow-lg hover:scale-101">
              Login
            </button>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>☰</button>
          </div>
        </div>
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden grid bg-white px-6 py-4 space-y-4">
            <Link
              to="/"
              className="hover:text-[#CD7F32] flex gap-1 items-center"
            >
              <IoHome />
              Home
            </Link>

            <Link
              to="/about"
              className="hover:text-[#CD7F32] flex gap-1 items-center"
            >
              <MdRoundaboutRight />
              About
            </Link>
            <Link
              to="/services"
              className="hover:text-[#CD7F32] flex gap-1 items-center"
            >
              <MdMiscellaneousServices />
              Services
            </Link>
            <Link
              to="/subscription"
              className="hover:text-[#CD7F32] flex gap-1 items-center"
            >
              <MdSubscriptions />
              Subscriptions
            </Link>
            <Link
              to="/contact"
              className="hover:text-[#CD7F32] flex gap-1 items-center"
            >
              <IoMdContact />
              Contact
            </Link>
            {/* Mobile Dropdown */}
            <details>
              <summary className=" hover:text-[#CD7F32] flex gap-1 items-center">
                <GrCompliance />
                Compliance ⮟
              </summary>
              <div className="ml-4 mt-2 space-y-2">
                <Link to="/disclaimer" className="block">
                  Disclaimer
                </Link>
                <Link to="/privacy-policy" className="block">
                  Privacy Policy
                </Link>
                <Link to="/refund-policy" className="block">
                  Refund Policy
                </Link>
                <Link to="/terms" className="block">
                  Terms & Conditions
                </Link>
              </div>
            </details>

            <button className="bg-[#CD7F32] text-white px-4 py-2 rounded w-full">
              Login
            </button>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
