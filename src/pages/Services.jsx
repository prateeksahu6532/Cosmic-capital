import React from "react";
import ServicesHero from "../components/Services/ServicesHero";
import ServicesPortfolio from "../components/Services/ServicesPortfolio";
import ServicesResearch from "../components/Services/ServicesResearch";

function Services() {
  return (
    <div className="bg-gray-50">
      <ServicesHero />
      <ServicesPortfolio />
      <ServicesResearch />
    </div>
  );
}

export default Services;
