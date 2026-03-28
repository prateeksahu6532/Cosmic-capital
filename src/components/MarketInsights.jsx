import React from "react";
import { FaChartLine, FaUserTie, FaHeadset, FaShieldAlt } from "react-icons/fa";

const features = [
  {
    icon: <FaChartLine />,
    title: "Technical Analysis",
    desc: "Advanced chart patterns and technical indicators for identifying entry/exit opportunities.",
  },
  {
    icon: <FaUserTie />,
    title: "Fundamental Research",
    desc: "Deep-dive company analysis and sector-specific insights",
  },
  {
    icon: <FaHeadset />,
    title: "Risk Management",
    desc: "Focus on capital protection and disciplined execution",
  },
  {
    icon: <FaShieldAlt />,
    title: "IPO Research",
    desc: "We follow proper risk management and trusted strategies.",
  },
];
function MarketInsights() {
  return (
    <>
      <section className="pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Market Insights & Research
            </h2>
            <p className="text-gray-600 mt-4">
              Stay informed with our expert analysis and market intelligence.
            </p>
          </div>
          {/* Cards */}
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {features.map((item, index) => (
              <div
                key={index}
                className="bg-amber-100 rounded-xl shadow-sm p-8 text-center hover:shadow-lg transition"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-full bg-amber-800 mx-auto flex items-center justify-center text-white text-xl shadow-2xl mb-4">
                  {item.icon}
                </div>
                {/* Title */}
                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                  {item.title}
                </h3>
                {/* Description */}
                <p className="text-gray-600 text-sm leading-6">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default MarketInsights;
