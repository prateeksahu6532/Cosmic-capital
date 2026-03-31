import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

function ServicesResearch() {
  return (
    <div className="max-w-3xl mx-auto my-10">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Research Philosophy
      </h1>
      <p className="mb-6 text-center text-lg px-12 text-gray-700">
        I believe that successful investing is built on discipline, clarity, and
        risk management. Every research report I prepare includes detailed
        analysis covering the rationale, entry/exit levels, and risk management.
      </p>
      <div className="bg-amber-50 border border-amber-300 p-4 mt-10 rounded-2xl">
        <div className="flex items-center mb-4">
          <FaQuoteLeft className="text-amber-600 text-2xl mr-2" />
          <h2 className="text-amber-600 text-xl font-semibold">
            Common Investor Mistakes
          </h2>
        </div>
        <ul className="text-gray-600">
          <li>
            <span className="text-amber-600 text-2xl">•</span> "A weak stock
            will never reward you just because you hold it longer."
          </li>
          <li>
            <span className="text-amber-600 text-2xl">•</span> "Stop-loss is not
            an option, it’s survival."
          </li>
          <li>
            <span className="text-amber-600 text-2xl">•</span> "Options trading
            without a strategy is not trading, it’s gambling."
          </li>
          <li>
            <span className="text-amber-600 text-2xl">•</span> "Profit booked on
            time is profit earned, paper profits don’t build gains."
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ServicesResearch;
