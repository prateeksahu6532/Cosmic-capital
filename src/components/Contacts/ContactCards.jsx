import React from "react";
import { FiPhone, FiMail, FiMapPin, FiClock } from "react-icons/fi";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

function ContactCards() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left side */}
        <div className="space-y-6">
          {/* 1. Contact card */}
          <div className="bg-gradient-to-br from-orange-50 to-white border border-orange-300 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6">
            <h2 className="text-xl font-bold mb-4">Kutch Capital Research</h2>
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-start gap-3">
                <FiPhone className="text-orange-600 mt-1" size={20} />
                <div>
                  <p className="font-medium">Phone</p>
                  <p>+1 (123) 456-7890</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FiMail className="text-orange-600 mt-1" size={20} />
                <div>
                  <p className="font-medium">Email</p>
                  <p>hello@kutchreact.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FiMapPin className="text-orange-600 mt-1" size={20} />
                <div>
                  <p className="font-medium">Office Address</p>
                  <p>123 React Street, Suite 400</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FiMapPin className="text-orange-600 mt-1" size={20} />
                <div>
                  <p className="font-medium">Business Address</p>
                  <p>456 Tailwind Blvd, San Jose, CA</p>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Business hours */}
          <div className="bg-gradient-to-br from-orange-50 to-white border border-orange-300 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6">
            <div className="flex items-center gap-2 mb-4">
              <FiClock className="text-orange-600" size={22} />
              <h2 className="text-xl font-bold">Business Hours</h2>
            </div>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex justify-between border-b border-orange-200 pb-2">
                <span>Monday - Friday</span>
                <span>9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between border-b border-orange-200 pb-2 pt-2">
                <span>Saturday</span>
                <span>10:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between pt-2">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </div>

          {/* 3. Social */}
          <div className="bg-gradient-to-br from-orange-50 to-white border border-orange-300 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6">
            <h2 className="text-xl font-bold mb-4">Connect With Us</h2>
            <div className="flex flex-wrap gap-3">
              <a
                href="#"
                className="p-3 rounded-full bg-blue-600 shadow-sm hover:shadow-lg transition"
              >
                <FaFacebookF className=" text-white" size={18} />
              </a>
              <a
                href="#"
                className="p-3 rounded-full bg-sky-500 shadow-sm hover:shadow-lg transition"
              >
                <FaTwitter className="text-white" size={18} />
              </a>
              <a
                href="#"
                className="p-3 rounded-full bg-pink-500 shadow-sm hover:shadow-lg transition"
              >
                <FaInstagram className="text-white" size={18} />
              </a>
              <a
                href="#"
                className="p-3 rounded-full bg-blue-700 shadow-sm hover:shadow-lg transition"
              >
                <FaLinkedinIn className="text-white" size={18} />
              </a>
              <a
                href="#"
                className="p-3 rounded-full bg-red-600 shadow-sm hover:shadow-lg transition"
              >
                <FaYoutube className="text-white" size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Right side - Form */}
        <div className="bg-gradient-to-br from-orange-50 to-white border border-orange-300 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6">
          <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
          <form className="space-y-4">
            <div className="grid gap-4">
              <label className="flex flex-col text-gray-600 text-sm">
                <span className="mb-1 font-medium text-gray-700">
                  Full name
                </span>
                <input
                  type="text"
                  placeholder="Enter full name"
                  className="w-full rounded-lg border border-orange-200 bg-white px-4 py-3 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-100"
                />
              </label>
              <label className="flex flex-col text-gray-600 text-sm">
                <span className="mb-1 font-medium text-gray-700">
                  Phone number
                </span>
                <input
                  type="tel"
                  placeholder="Enter phone number"
                  className="w-full rounded-lg border border-orange-200 bg-white px-4 py-3 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-100"
                />
              </label>
            </div>
            <label className="flex flex-col text-gray-600 text-sm">
              <span className="mb-1 font-medium text-gray-700">
                Email address
              </span>
              <input
                type="email"
                placeholder="Enter email address"
                className="w-full rounded-lg border border-orange-200 bg-white px-4 py-3 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-100"
              />
            </label>
            <label className="flex flex-col text-gray-600 text-sm">
              <span className="mb-1 font-medium text-gray-700">Message</span>
              <textarea
                rows="5"
                placeholder="Enter your message"
                className="w-full rounded-lg border border-orange-200 bg-white px-4 py-3 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-100"
              />
            </label>
            <label className="flex items-start gap-3 text-gray-600 text-sm">
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 rounded border-orange-300 text-orange-600 focus:ring-orange-500"
              />
              <span>
                I agree to receive communication about services, market updates,
                and other information through SMS, email, and WhatsApp.
              </span>
            </label>
            <button
              type="submit"
              className="w-full rounded-lg bg-orange-500 px-5 py-2 text-white font-semibold hover:bg-orange-600 transition-colors duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactCards;
