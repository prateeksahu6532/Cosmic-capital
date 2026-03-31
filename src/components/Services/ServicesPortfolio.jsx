import React from "react";
import { AiOutlineRise, AiOutlineCheckCircle } from "react-icons/ai";
import { FaRocket } from "react-icons/fa";

const subCardsFirst = [
  {
    icon: (
      <AiOutlineCheckCircle
        className="text-white bg-gradient-to-l from-purple-500 via-blue-700 to-blue-500 
      rounded-xl h-10 w-10 p-2"
      />
    ),
    title: "Algo Trading",
    description:
      "Intraday service for stocks only (NSE/BSE) with 1-3 calls per day.",
    features: [
      "Real-time execution and monitoring",
      "Low latency trade processing",
      "Risk management controls",
      "Backtested strategies",
    ],
  },
  {
    icon: (
      <AiOutlineCheckCircle
        className="text-white bg-gradient-to-l from-purple-500 via-blue-700 to-blue-500
       rounded-xl h-10 w-10 p-2"
      />
    ),
    title: "Risk Management",
    description: "Position sizing and stops for capital protection.",
    features: [
      "Position size optimization",
      "Stop loss automation",
      "Capital allocation strategy",
      "Portfolio metrics tracking",
    ],
  },
  {
    icon: (
      <AiOutlineCheckCircle
        className="text-white
       bg-gradient-to-l from-purple-500 via-blue-700 to-blue-500
        rounded-xl h-10 w-10 p-2"
      />
    ),
    title: "Market Research",
    description: "Daily insights and sector analysis for trend clarity.",
    features: [
      "Daily market analysis reports",
      "Sector trend identification",
      "Technical level identification",
      "Sentiment analysis reports",
    ],
  },
];

const subCardsSecond = [
  {
    icon: (
      <AiOutlineCheckCircle
        className="text-white bg-gradient-to-l from-green-900 to-green-500 
      rounded-xl h-10 w-10 p-3"
      />
    ),
    title: "Portfolio Allocation",
    description: "Diversified portfolios tuned to investment horizon.",
    features: [
      "Multi-asset class diversification",
      "Goal-based allocation",
      "Rebalancing strategies",
      "Risk-return optimization",
    ],
  },
  {
    icon: (
      <AiOutlineCheckCircle
        className="text-white bg-gradient-to-l from-green-900 to-green-500 
      rounded-xl h-10 w-10 p-3"
      />
    ),
    title: "Wealth Planning",
    description: "Structured planning for long-term objectives.",
    features: [
      "Retirement planning guidance",
      "Investment timeline planning",
      "Milestone-based tracking",
      "Comprehensive wealth review",
    ],
  },
  {
    icon: (
      <AiOutlineCheckCircle
        className="text-white bg-gradient-to-l from-green-900 to-green-500 
      rounded-xl h-10 w-10 p-3"
      />
    ),
    title: "Tax Efficiency",
    description: "Strategies to reduce tax drag on returns.",
    features: [
      "Tax-loss harvesting strategy",
      "Optimal holding period planning",
      "Capital gains optimization",
      "Tax bracket management",
    ],
  },
];

function ServicesPortfolio() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10 text-center">
        <div className="flex items-center justify-center text-white mb-3 text-4xl">
          <AiOutlineRise
            className="text-white bg-gradient-to-r from-orange-600 to-orange-400
           h-16 w-16 rounded-full p-3"
          />
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Our Service Portfolio
        </h2>
        <p className="mt-3 text-gray-600 text-base sm:text-lg">
          Comprehensive trading and investment solutions tailored to your
          financial goals
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-15">
        <article className="bg-white rounded-3xl shadow-lg hover:shadow-2xl p-8 transition-shadow">
          <div className="flex items-center justify-center text-orange-600 mb-4 text-4xl">
            <FaRocket
              className="text-white bg-gradient-to-l from-purple-500 via-blue-700 to-blue-500 
            h-15 w-15 rounded-2xl p-3"
            />
          </div>
          <h3 className="text-2xl font-semibold text-center mb-2">
            Traders Club
          </h3>
          <p className="text-gray-800 mb-8 text-center text-md">
            Active trading strategies for short to medium-term opportunities
          </p>

          <div className="space-y-6">
            {subCardsFirst.map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-blue-200 bg-blue-50 p-3 shadow-lg hover:shadow-2xl transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {item.icon}
                    <h4 className="font-bold text-xl text-gray-800">
                      {item.title}
                    </h4>
                  </div>
                  <span className="text-blue-500 text-5xl">•</span>
                </div>
                <p className="mt-2 text-gray-700 text-md">{item.description}</p>
                <div className="mt-3 ">
                  {item.features.map((feature, idx) => (
                    <p
                      key={idx}
                      className="text-gray-700 text-md flex items-center gap-2"
                    >
                      <span className="text-blue-500 text-xl">•</span>
                      {feature}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className="bg-white rounded-3xl shadow-lg hover:shadow-2xl p-8 transition-shadow">
          <div className="flex items-center justify-center text-orange-600 mb-4 text-4xl">
            <AiOutlineRise
              className="text-white bg-gradient-to-l from-green-900 to-green-500 rounded-2xl  
            h-15 w-15 p-2"
            />
          </div>
          <h3 className="text-2xl font-semibold mb-2 text-center">
            Investor Suite
          </h3>
          <p className="text-gray-800 mb-8 text-center text-md">
            Strategic planning and wealth building for long-term success
          </p>

          <div className="space-y-6">
            {subCardsSecond.map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-green-200 bg-green-50 p-3 shadow-lg hover:shadow-2xl transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {item.icon}
                    <h4 className="font-bold text-xl text-gray-800">
                      {item.title}
                    </h4>
                  </div>
                  <span className="text-green-500 text-5xl">•</span>
                </div>
                <p className="mt-2 text-gray-700 text-md">{item.description}</p>
                <div className="mt-3">
                  {item.features.map((feature, idx) => (
                    <p
                      key={idx}
                      className="text-gray-700 text-md flex items-center gap-2"
                    >
                      <span className="text-green-500 text-xl">•</span>
                      {feature}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </article>
      </div>
    </main>
  );
}

export default ServicesPortfolio;
