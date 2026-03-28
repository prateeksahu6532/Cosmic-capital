import React from "react";
const servicesData = [
  {
    title: "Equity Research",
    desc: "Get high accuracy stock recommendations for long-term investment.",
  },
  {
    title: "Intraday Trading",
    desc: "Daily intraday calls with proper entry and exit strategies.",
  },
  {
    title: "Option Trading",
    desc: "Advanced option trading strategies with risk management.",
  },
  {
    title: "Commodity Tips",
    desc: "Trade in gold, silver, and crude oil with expert guidance.",
  },
  {
    title: "Portfolio Management",
    desc: "Professional portfolio planning to maximize your returns.",
  },
  {
    title: "Market Analysis",
    desc: "Detailed research reports and market insights.",
  },
];

function Services() {
  return (
    <>
      <section className="pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Services
            </h2>
            <p className="text-gray-600 mt-4">
              We provide a wide range of stock market services to help you grow.
            </p>
          </div>
          {/* Cards */}
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {servicesData.map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg transition duration-300 border border-amber-800"
              >
                {/* Icon Circle */}
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-amber-900 text-white mb-4 text-xl font-bold">
                  {index + 1}
                </div>
                {/* Title */}
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
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

export default Services;
