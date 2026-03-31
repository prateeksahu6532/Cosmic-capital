import React from "react";
import { BsPinMapFill } from "react-icons/bs";
import { GiArchiveResearch } from "react-icons/gi";
import { GrRisk } from "react-icons/gr";
import { BsTransparency } from "react-icons/bs";
function AboutCredentials() {
  return (
    <>
      <section className="py-8">
        <div
          className="max-w-7xl
          mx-auto"
        >
          <div className=" text-center  ">
            <h2
              className="text-2xl md:text-3xl font-bold
             text-shadow-black"
            >
              Our Credentials & Strengths
            </h2>
            <p className="text-gray-600 mt-4 text-md font-semibold">
              Trusted for discipline, compliance, and independent research.
            </p>
          </div>

          <div className="grid gap-8  mx-10 my-10 md:grid-cols-2 lg:grid-cols-3 ">
            <div
              className="flex flex-col bg-gradient-to-tr from-amber-100
               to-white border px-6 py-6 border-amber-200 rounded-2xl 
             items-center justify-center text-center gap-1 hover:shadow-2xl "
            >
              <h2 className="text-amber-600 font-bold text-4xl">SEBI</h2>
              <span className="text-gray-600 text-md font-semibold">
                Registered
              </span>
              <span className="text-gray-600 text-sm">INH000021924</span>
            </div>
            <div
              className="flex flex-col bg-gradient-to-tr from-blue-100 to-white
             border px-6 py-6 border-blue-200 rounded-2xl  items-center justify-center text-center gap-2 hover:shadow-2xl "
            >
              <h2 className="text-blue-600 font-bold text-4xl">BSE</h2>
              <span className="text-gray-600 text-md font-semibold">
                Enlisted
              </span>
              <span className="text-gray-600 text-sm">ID:6661</span>
            </div>
            <div
              className="flex flex-col bg-gradient-to-tr from-purple-100 to-white
             border px-6 py-6 border-purple-200 rounded-2xl  items-center justify-center text-center gap-2 hover:shadow-2xl "
            >
              <h2 className="text-purple-600 font-bold text-4xl">7 +</h2>
              <span className="text-gray-600 text-md font-semibold">
                Years Experience
              </span>
            </div>
            <div
              className="flex flex-col bg-gradient-to-tr from-red-100 to-white border px-6 py-6 
            border-red-200 rounded-2xl gap-4 hover:shadow-2xl"
            >
              <div className="flex gap-2">
                <GiArchiveResearch className="w-7 h-7 p-1 text-red-700 " />
                <h2 className="text-shadow-black font-semibold text-xl ">
                  Market Research
                </h2>
              </div>
              <p className="text-gray-600">
                Comprehensive market analysis and research reports covering
                equity, IPO and derivative markets with research-driven
                insights.
              </p>
            </div>
            <div
              className="flex flex-col bg-gradient-to-tr from-yellow-100 to-white
               border px-6 py-6 
            border-yellow-200 rounded-2xl gap-4 hover:shadow-2xl"
            >
              <div className="flex gap-2">
                <GrRisk className="w-7 h-7 p-1 text-yellow-700 " />
                <h2 className="text-shadow-black font-semibold text-xl ">
                  Risk Management
                </h2>
              </div>
              <p className="text-gray-600">
                Professional risk assessment and disciplined strategies to
                support informed decision-making and manage market risks
                effectively.
              </p>
            </div>
            <div
              className="flex flex-col bg-gradient-to-tr from-green-100 to-white
               border px-6 py-6
             border-green-200 rounded-2xl gap-4 hover:shadow-2xl"
            >
              <div className="flex gap-2">
                <BsTransparency className="w-7 h-7 p-1 text-green-700 " />
                <h2 className="text-shadow-black font-semibold text-xl ">
                  Transparency
                </h2>
              </div>
              <p className="text-gray-600 ">
                Every research report includes clear disclosures and unbiased
                analysis, ensuring investors understand both the reasoning and
                the risks behind each recommendation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutCredentials;
