import React, { useState } from "react";
import {
  FaRocket,
  FaChartLine,
  FaBriefcase,
  FaTrophy,
  FaCheck,
} from "react-icons/fa";

const iconMap = {
  rocket: FaRocket,
  chart: FaChartLine,
  briefcase: FaBriefcase,
  trophy: FaTrophy,
};

const subscriptionPlans = [
  {
    id: 1,
    title: "Starter",
    icon: "rocket",
    bg: "bg-white",
    border: "border-orange-300",
    text: "text-orange-700",
    description: "Ideal for beginning investors with a simple start.",
    pricing: {
      weekly: 9,
      monthly: 29,
      quarterly: 79,
      halfyearly: 149,
      yearly: 279,
    },
    features: ["Real-time tracking", "Daily market alerts", "Basic support"],
  },
  {
    id: 2,
    title: "Growth",
    icon: "chart",
    bg: "bg-orange-50",
    border: "border-orange-400",
    text: "text-orange-800",
    description: "A balanced package for growing portfolios.",
    pricing: {
      weekly: 18,
      monthly: 59,
      quarterly: 159,
      halfyearly: 299,
      yearly: 559,
    },
    features: ["Portfolio analysis", "Weekly reports", "Priority support"],
  },
  {
    id: 3,
    title: "Premium",
    icon: "briefcase",
    bg: "bg-blue-50",
    border: "border-blue-400",
    text: "text-blue-800",
    description: "Advanced insights for active traders.",
    pricing: {
      weekly: 26,
      monthly: 79,
      quarterly: 219,
      halfyearly: 439,
      yearly: 839,
    },
    features: ["Advanced analytics", "1-on-1 advisory", "Priority chat"],
  },
  {
    id: 4,
    title: "Elite",
    icon: "trophy",
    bg: "bg-emerald-50",
    border: "border-emerald-400",
    text: "text-emerald-800",
    description: "Full-suite strategy for committed investors.",
    pricing: {
      weekly: 45,
      monthly: 139,
      quarterly: 389,
      halfyearly: 749,
      yearly: 1459,
    },
    features: ["Dedicated analyst", "Custom research", "VIP support"],
  },
];

const billingCycles = [
  "weekly",
  "monthly",
  "quarterly",
  "halfyearly",
  "yearly",
];

function SubscriptionCard() {
  const [selectedCycle, setSelectedCycle] = useState(() => {
    const initial = {};
    subscriptionPlans.forEach((plan) => {
      initial[plan.id] = "monthly";
    });
    return initial;
  });

  const handleSelectCycle = (planId, cycle) => {
    setSelectedCycle((prev) => ({ ...prev, [planId]: cycle }));
  };

  return (
    <section className="w-full min-h-screen px-4 py-12 md:px-8 lg:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-4xl font-bold text-gray-900 mb-8">
          Subscription Plans
        </h2>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {subscriptionPlans.map((plan) => {
            const activeCycle = selectedCycle[plan.id];
            const activePrice = plan.pricing[activeCycle];

            return (
              <article
                key={plan.id}
                className={`rounded-2xl shadow-lg hover:shadow-xl border ${plan.border} ${plan.bg} transition-all duration-300 ease-out p-5 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className={`text-xl font-bold ${plan.text}`}>
                      {plan.title}
                    </h3>
                    <span
                      className="text-2xl text-amber-700"
                      aria-hidden="true"
                    >
                      {React.createElement(iconMap[plan.icon], {
                        className: `w-6 h-6`,
                      })}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    {plan.description}
                  </p>

                  <div className="space-y-2">
                    {billingCycles.map((cycle) => {
                      const isActive = activeCycle === cycle;
                      return (
                        <button
                          key={cycle}
                          onClick={() => handleSelectCycle(plan.id, cycle)}
                          className={`w-full flex justify-between items-center rounded-lg border px-3 py-2 text-left transition-all duration-200 ${
                            isActive
                              ? "bg-linear-to-r from-orange-500 to-orange-300 border-orange-500 text-white ring-2 ring-orange-400"
                              : "bg-white border-gray-200 text-gray-700 hover:bg-gray-100"
                          }`}
                        >
                          <span className="capitalize text-sm font-medium">
                            {cycle}
                          </span>
                          <span className="font-semibold">
                            ${plan.pricing[cycle]}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  <div className="mt-4 p-4 rounded-xl bg-white border border-gray-200">
                    <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">
                      Selected plan
                    </p>
                    <p className="text-3xl font-extrabold text-gray-800">
                      ${activePrice}
                    </p>
                    <p className="text-sm text-gray-500">
                      {activeCycle} billing
                    </p>
                  </div>

                  <div className="mt-5">
                    <p className="text-sm font-semibold text-gray-700 mb-2">
                      What’s included
                    </p>
                    <ul className="space-y-1 text-sm text-gray-600">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <FaCheck className="text-emerald-500 w-4 h-4" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button
                  className="mt-6 w-full rounded-xl bg-orange-600 text-white py-2.5 font-semibold hover:bg-orange-700 transition-colors"
                  type="button"
                >
                  Buy Now
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default SubscriptionCard;
