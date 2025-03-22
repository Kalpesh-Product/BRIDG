import React from "react";

import InclusionsSection from "../components/Inclusions/inclusionsSection";
import InfoBox from "../components/BlackInfoBox/InfoBox";
import TestimonialsSection from "../components/Testimonials/TestimonialsSection";
import MortgageSection from "../components/Mortgage/MortgageSection";

const TestingPageAllan = () => {
  const infoData = [
    {
      title: "Thriving Economy",
      description: "Dubai's market boosts demand and values.",
    },
    {
      title: "Luxurious Lifestyle",
      description: "Top communities and amenities.",
    },
    {
      title: "Business-Friendly",
      description: "Zero income tax and supportive regulations.",
    },
    { title: "Ownership Perks", description: "Income, growth, and residency." },
  ];

  return (
    <div>
      <TestimonialsSection />
      <InclusionsSection />

      <div className="flex justify-center items-center min-h-screen bg-gray-900">
        <InfoBox title="Why purchase a property in Dubai?" items={infoData} />
      </div>
      <MortgageSection />
    </div>
  );
};

export default TestingPageAllan;
