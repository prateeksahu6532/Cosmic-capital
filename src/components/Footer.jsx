import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import CosmicLogo from "./CosmicLogo.png";

function Footer() {
  return (
    <>
      <footer className="bg-black text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-6 mb-4 cursor-pointer">
              <Link to="/">
                <img
                  src={CosmicLogo}
                  alt="Logo"
                  className="h-15 w-15 rounded-full md:w-22"
                />
              </Link>
              <h2 className="text-2xl font-bold text-white ">
                Cosmic Capital Research
              </h2>
            </div>
            <p className="text-sm leading-6">
              We provide professional stock market research services including
              equity tips, intraday calls, and portfolio management.
            </p>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2 text-sm">
              <Link to="/" className="block hover:text-white">
                Home
              </Link>
              <Link to="/about" className="block hover:text-white">
                About
              </Link>
              <Link to="/services" className="block hover:text-white">
                Services
              </Link>
              <Link to="/subscription" className="block hover:text-white">
                Subscription
              </Link>
              <Link to="/contact" className="block hover:text-white">
                Contact
              </Link>
            </div>
          </div>
          {/* Compliance Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Compliance</h3>
            <div className="space-y-2 text-sm">
              <Link to="/disclaimer" className="block hover:text-white">
                Disclaimer
              </Link>
              <Link to="/privacy-policy" className="block hover:text-white">
                Privacy Policy
              </Link>
              <Link to="/refund-policy" className="block hover:text-white">
                Refund Policy
              </Link>
              <Link to="/terms" className="block hover:text-white">
                Terms & Conditions
              </Link>
            </div>
          </div>
          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2 text-sm">
              <p>Email: support@cosmiccapital.com</p>
              <p>Phone: +91 9876543210</p>
              <p>Location: India</p>
            </div>
            {/* Social Icons */}
            <h3 className="text-white font-semibold mb-4 mt-4">
              Connect with Us
            </h3>
            <div className="flex space-x-4 mt-4">
              <a href="#">
                <FaFacebookF className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition size-10" />
              </a>
              <a href="#">
                <FaTwitter className="bg-gray-800 p-2 rounded-full hover:bg-blue-400 transition size-10" />
              </a>
              <a href="#">
                <FaInstagram className="bg-gray-800 p-2 rounded-full hover:bg-pink-500 transition size-10" />
              </a>
              <a href="#">
                <FaLinkedinIn className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition size-10" />
              </a>
            </div>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Cosmic Capital Research. All rights
          reserved.
        </div>
      </footer>
    </>
  );
}

export default Footer;
