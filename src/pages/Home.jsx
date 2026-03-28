import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import FAQ from "../components/FAQ";
import WhyChoose from "../components/whyChoose";
import Marquee from "../components/Marquee";
import MarketInsights from "../components/MarketInsights";

function Home() {
  return (
    <div>
      <Marquee />
      <Hero />
      <WhyChoose />
      <Services />
      <FAQ />
      <MarketInsights />
    </div>
  );
}

export default Home;
