import React from "react";

import InclusionsSection from "../components/Inclusions/inclusionsSection";
import InfoBox from "../components/BlackInfoBox/InfoBox";
import TestimonialsSection from "../components/Testimonials/TestimonialsSection";
import MortgageSection from "../components/Mortgage/MortgageSection";
import FullWidthInfoCard from "../components/FullWidthCard/FullWidthInfoCard";
import FullWidthGraphCard from "../components/FullWidthCard/FullWidthGraphCard";
import graphImage from "../assets/Graph/total-sales-volume.png";
import Test from "./Test";

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

  const graphsData = [
    {
      image: graphImage, // Replace with actual image URL
      heading: "TOTAL SALES VOLUME 2024",
      bulletPoints: [
        "In 2024, off-plan apartment transactions reached an all-time high of 94,455, growing substantially compared to 56,146 in 2023.",
        "The secondary market also saw an increase, rising to 41,984 transactions, up from 36,153 in 2023.",
        "Apartments have consistently outperformed villas in transaction volumes over the years.",
        "The preference for apartments can be attributed to their relatively affordable ticket size, making them more accessible to a larger pool of buyers.",
        "In 2024, 45% of all apartment transactions were for 1-bedroom units, with an average price of AED 1,703 per sq ft.",
        "Over 70% of the apartment sales were for properties priced below AED 2 million, reflecting strong demand for affordable living spaces driven by both end-users and investors.",
      ],
    },
    {
      image: "https://dummyimage.com/600x400/000/fff",
      heading: "Invest in Prime Locations Today!",
      bulletPoints: [
        "Unlock exclusive real estate deals",
        "High ROI properties available",
        "Strategic locations with premium amenities",
      ],
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
      <FullWidthGraphCard sections={graphsData} />
      <Test />
    </div>
  );
};

export default TestingPageAllan;
