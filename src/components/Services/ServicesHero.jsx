import React from "react";

function ServicesHero() {
  const textShadow = "0 2px 8px rgba(0, 0, 0, 0.5)";

  return (
    <section className="bg-gradient-to-l from-orange-600 to-orange-400 py-20">
      <div className="max-w-6xl mx-auto pt-10 px-4 sm:px-6 lg:px-8 text-center">
        <p
          className="text-xs py-1.5 bg-gradient-to-r from-orange-500 to-orange-400 
          rounded-lg text-white
           uppercase tracking-wider"
          style={{ textShadow }}
        >
          SEBI Registered Research Analyst
        </p>

        <h1
          className="mt-4 text-3xl sm:text-4xl font-bold text-white"
          style={{ textShadow }}
        >
          Our Research Services
        </h1>

        <p
          className="mt-6 text-lg text-white mx-auto max-w-3xl"
          style={{ textShadow }}
        >
          Professional research-backed investment solutions designed to help you
          make informed decisions in today&apos;s dynamic markets.
        </p>
      </div>
    </section>
  );
}

export default ServicesHero;
