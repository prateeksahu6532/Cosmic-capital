import React from "react";
import { TbTargetArrow } from "react-icons/tb";
import { BsGraphUpArrow } from "react-icons/bs";
import { BsPinMapFill } from "react-icons/bs";

function AboutVision() {
  return (
    <>
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto p-6 my-10 rounded-4xl shadow-lg hover:shadow-2xl bg-amber-100 ">
          <div className="flex flex-col  items-center justify-center text-center gap-2 ">
            <TbTargetArrow className="w-14 h-14 text-amber-900 bg-amber-50 rounded-lg p-1" />
            <h2 className="text-amber-900 font-bold text-3xl">
              Our Vision and Mission
            </h2>
          </div>
          <div className="grid gap-6  mx-10 my-10 md:mx-30 md:grid-cols-2 ">
            <div className="flex flex-col bg-white border px-6 py-6 border-blue-100 rounded-2xl  items-center justify-center text-center gap-2 hover:shadow-2xl ">
              <BsGraphUpArrow className="w-12 h-12 text-blue-700 bg-blue-50 rounded-lg p-3" />
              <h2 className="text-blue-700 font-semibold text-xl">
                Our Vision
              </h2>
              <p className="text-gray-600 text-lg">
                To make Kutch Capital Research India's leading research firm,
                trusted for discipline, compliance, and research excellence.
              </p>
            </div>
            <div className="flex flex-col bg-white border px-6 py-6 border-blue-100 rounded-2xl  items-center justify-center text-center gap-2 hover:shadow-2xl">
              <BsPinMapFill className="w-12 h-12 text-blue-700 bg-blue-50 rounded-lg p-3" />
              <h2 className="text-blue-700 font-semibold text-xl">
                Our Mission
              </h2>
              <p className="text-gray-600 text-lg">
                To empower every investor with clarity and confidence, while
                protecting them from misinformation and unlawful practices.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutVision;
