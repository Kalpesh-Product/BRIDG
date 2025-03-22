import React from "react";

import InclusionsSection from "../components/Inclusions/inclusionsSection";
import InfoBox from "../components/BlackInfoBox/InfoBox";
import TestimonialsSection from "../components/Testimonials/TestimonialsSection";
import MortgageSection from "../components/Mortgage/MortgageSection";
import FullWidthInfoCard from "../components/FullWidthCard/FullWidthInfoCard";

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

  const sectionsData = [
    {
      image: "https://dummyimage.com/600x200/000/fff", // Replace with actual image URL
      heading: "Why wait to make high ROI from Real-Estate Investments in UAE?",
      description:
        "Select from our highly curated opportunistic lower than market price real-estate deals to instantly start making highest monthly ROI immediately.",
      buttonText: "Connect with us",
    },
    {
      image: "https://dummyimage.com/600x200/000/fff",
      heading: "Invest in Prime Locations Today!",
      description:
        "Unlock exclusive real estate deals in the most sought-after locations. Don't miss out on lucrative investment opportunities.",
      buttonText: "Learn More",
    },
  ];

  return (
    <div>
      <TestimonialsSection />
      <InclusionsSection />

      <div className="flex justify-center items-center min-h-screen bg-gray-900">
        <InfoBox title="Why purchase a property in Dubai?" items={infoData} />
      </div>
      <MortgageSection />
      <FullWidthInfoCard sections={sectionsData} />
    </div>
  );
};

export default TestingPageAllan;
