import React from "react";
import AboutHero from "../components/About/AboutHero";
import AboutProfessionalJourney from "../components/About/AboutProfessionalJourney";
import AboutVision from "../components/About/AboutVision";
import AboutCredentials from "../components/About/AboutCredentials";
import AboutRegulatory from "../components/About/AboutRegulatory";

function About() {
  return (
    <>
      <div className="bg-gray-50">
        <AboutHero />
        <AboutProfessionalJourney />
        <AboutVision />
        <AboutCredentials />
        <AboutRegulatory />
      </div>
    </>
  );
}

export default About;
