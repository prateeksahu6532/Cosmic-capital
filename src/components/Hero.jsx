import React from "react";

function Hero() {
  return (
    <>
      <section className="pt-28 pb-20 bg-gradient-to-r from-[#e39f5b] to-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-amber-900 mb-6">
              Trusted Stock Market Research & Advisory Services
            </h1>
            <p className="text-white text-lg mb-8">
              Get expert guidance, accurate stock tips, and powerful trading
              strategies to grow your wealth with confidence.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-amber-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-amber-900 transition">
                Get Started
              </button>
              <button className="border border-amber-800 text-amber-800 px-6 py-3 rounded-lg font-medium hover:bg-amber-900 hover:text-white transition">
                View Services
              </button>
            </div>
            {/* EXTRA TRUST POINTS */}
            <div className="flex items-center gap-6 mt-10 text-lg text-amber-900">
              <p>✔ SEBI Registered</p>
              <p>✔ Trusted by 1000+ Clients</p>
            </div>
          </div>
          {/* RIGHT IMAGE */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3"
              alt="stock market"
              className="rounded-xl shadow-lg w-full object-cover"
            />
            {/* OPTIONAL FLOATING CARD */}
            <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-md hidden md:block ">
              <p className="text-sm font-semibold text-gray-800">
                Market Growth
              </p>
              <p className="text-blue-600 font-bold text-lg">+24.5%</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
