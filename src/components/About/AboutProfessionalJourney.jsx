import React from "react";
import { GiJourney } from "react-icons/gi";
import { GiSkills } from "react-icons/gi";
import { GiArchiveResearch } from "react-icons/gi";
import { GiRelationshipBounds } from "react-icons/gi";
import { GrCertificate } from "react-icons/gr";
import { SiWikimediafoundation } from "react-icons/si";

const journey = [
  {
    icon: <GiJourney />,
    heading: "Market Journey Begins",
    title: "Deep Market Study & Learning",
    year: "2019",
    desc: "Started studying markets deeply, reading books, attending workshops across Mumbai, Pune, Bengaluru, and Ahmedabad, and learning directly from market experts.",
  },
  {
    icon: <GiSkills />,
    heading: "Skill Development",
    title: "Technical & Fundamental Analysis",
    year: "2019-22",
    desc: "Gained hands-on expertise in technical analysis, fundamental research, F&O trading, and mutual funds through continuous learning and practice.",
  },
  {
    icon: <GiArchiveResearch />,
    heading: "Research Internship",
    title: "Professional Experience",
    year: "2022",
    desc: "Completed Research Internship, gaining practical experience in market research and analysis methodologies.",
  },
  {
    icon: <GiRelationshipBounds />,
    heading: "Relationship Manager",
    title: "IIFL Securities & Sharekhan",
    year: "2022-24",
    desc: "Worked as a Relationship Manager with IIFL Securities and Sharekhan, gaining valuable experience in client relationship management and market operations.",
  },
  {
    icon: <GrCertificate />,
    heading: "NISM Certification",
    title: "Research Analyst Certification",
    year: "2025",
    desc: "Successfully cleared the NISM Research Analyst certification, demonstrating professional competence and regulatory compliance.",
  },
  {
    icon: <SiWikimediafoundation />,
    heading: "Kutch Capital Research",
    title: "Founder & Research Analyst",
    year: "2025",
    desc: "Founded Kutch Capital Research with the mission to give investors unbiased, research-backed, and disciplined guidance.",
  },
];

function AboutProfessionalJourney() {
  return (
    <>
      <section className="bg-gray-50 py-8">
        <div className="max-w-7xl  bg-amber-100 rounded-4xl shadow-lg hover:shadow-2xl mx-auto py-8">
          {/* Heading */}
          <div className=" text-center mb-14 mx-16 md:mx-50 border border-amber-200 bg-amber-50 rounded-2xl shadow-lg px-4 py-6 hover:shadow-2xl ">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-700">
              Professional Journey
            </h2>
            <p className="text-gray-600 mt-4 hidden md:block">
              From Civil Engineering to SEBI Registered Research Analyst - A
              journey of continuous learning and growth.
            </p>
          </div>
          <div className="max-w-6xl mx-auto px-6 grid gap-8">
            {/* Right side */}
            {journey.map((item, index) => (
              <div
                key={index}
                className="border border-amber-200 bg-amber-50 rounded-2xl shadow-lg px-4 py-6 hover:shadow-2xl "
              >
                <div className="grid grid-cols-12 justify-between w-full">
                  {/* Icon */}
                  <div className="col-span-9 gap-6 flex ">
                    <div
                      className="bg-amber-100 w-14 h-14 rounded-2xl
                   items-center flex justify-center text-4xl text-amber-600"
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl  font-semibold md:text-2xl">
                        {item.heading}
                      </h3>
                      <h2 className="text-lg text-amber-600 font-semibold">
                        {item.title}
                      </h2>
                    </div>
                  </div>
                  {/* Year */}
                  <div
                    className="text-end col-span-3  
                  text-amber-600 text-2xl md:text-3xl font-semibold font-serif whitespace-nowrap"
                  >
                    {item.year}
                  </div>
                </div>
                {/* Paragraph */}
                <div>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutProfessionalJourney;
