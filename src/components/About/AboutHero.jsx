import React from "react";
import heroImg from "./AboutHeroimage.jpg";

function AboutHero() {
  return (
    <>
      <section className=" bg-orange-600">
        <div className=" py-35 max-w-7xl mx-auto h-auto px-6 md:flex gap-30 ">
          {/* LEFT CONTENT */}

          <div className="text-left  my-auto text-white md:w-1/2">
            <span className="text-sm font-semibold bg-orange-500 rounded-2xl px-2 py-1 shadow-lg">
              SEBI Registered Research Analyst
            </span>
            <h1 className="text-3xl md:text-4xl font-bold  mb-6 mt-4">
              About Nirav Joshi
            </h1>

            <p className=" mb-6 leading-7 text-lg md:text-xl">
              As a SEBI Registered Research Analyst (INH000021924), I provide
              high-quality stock market research services to traders and
              investors across the country.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className=" md:pl-10  md:w-1/2 ">
            <img
              src={heroImg}
              alt="about"
              className="w-100 h-80 rounded-xl shadow-lg object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutHero;
