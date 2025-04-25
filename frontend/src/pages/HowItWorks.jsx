import VideoBanner from "../components/VideoBanner";
import { useState } from "react";
import InclusionsCard from "../components/Inclusions/InclusionsCard";

export default function HowItWorks() {
  const [selectedStep, setSelectedStep] = useState(0);
  const steps = [
    {
      title: "Consult with us for FREE",
      content:
        "Just press the button below and connect with us and we will address all your queries for FREE.",
    },
    {
      title: "We will share an Investment Strategy",
      content:
        "We will hear your investment concept and share with you a customised investment structure with High ROI.",
    },
    {
      title: "We will find your properties and close transaction",
      content:
        "We will start sharing opportunistic property investments with you which will be highly curated for closing your investment.",
    },
    {
      title: "You can invest in Full Cash or we can get you Mortgage",
      content:
        "You can choose to invest in full Cash or we can also organise Bank Mortgage for you from UAE from our Esteemed Partners.",
    },
    {
      title: "We will rent these properties to our customers",
      content:
        "We have ready customers and will rent these properties immediately after your purchase to start making you High ROI immediately!",
    },
    {
      title: "You can keep making High ROI & reinvesting!",
      content:
        "We can start reinvesting your income from these invested properties to acquire more properties with minimum or no investments from your side.",
    },
  ];
  const inclusions = [
    "FREE Consulting",
    "FREE Property Curation",
    "Property Negotiation",
    "Investment Structure",
    "Custome ROI Calculator",
    "Mortgage from UAE",
    "Paperwork closure",
    "Registration support",
    "Post Purchase Servicing",
    "On-boarding our Tanent",
    "Activating High Monthly Rentals",
    "Property Management",
    "Customer Service",
    "Property Capatalisation",
    "Redeployment of Capital",
    "Property Portfolio Growth",
  ];
  return (
    <div className="flex flex-col gap-20 w-full">
      <div className="flex flex-col gap-4">
        <VideoBanner text="Make your money work for you and make you more money!" />
        <div className="mt-10">
          <h1 className="text-display font-semibold text-secondary">
            Steps to become a High ROI Real Estate Investor in UAE
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row mt-10">
          {/* Left Side - Steps */}
          <div className="lg:w-1/3 border-b lg:border-b-0 lg:border-r lg:pr-4">
            {steps.map((step, index) => (
              <div
                key={index}
                onClick={() => setSelectedStep(index)}
                className={`cursor-pointer p-4 border-b last:border-b-0 lg:last:border-b ${
                  index === selectedStep
                    ? "bg-gray-100 font-semibold"
                    : "hover:bg-gray-50"
                }`}
              >
                {index + 1} - {step.title}
              </div>
            ))}
          </div>

          {/* Right Side - Content */}
          <div className="lg:w-2/3 pl-0 lg:pl-6 pt-6 lg:pt-0">
            <div className="text-4xl font-bold mb-4">{selectedStep + 1}</div>
            <h2 className="text-2xl font-semibold mb-2">
              {steps[selectedStep].title}
            </h2>
            <p className="text-gray-700 text-lg">
              {steps[selectedStep].content}
            </p>
          </div>
        </div>
        <div className="mt-12">
          <InclusionsCard inclusions={inclusions} />
        </div>
        <div className="py-12 px-6 lg:px-16 rounded-md mt-10 bg-[#f5f3f1]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Heading */}
            <div>
              <h2 className="text-display font-semibold text-secondary leading-snug">
                Helping you make{" "}
                <span className="italic font-medium">confident</span>
                <br />
                property decisions
              </h2>
              <div className="flex items-center gap-2 mt-6 text-small font-medium text-secondary-light">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                WHY CHOOSE BRIDG?
              </div>
            </div>

            {/* Right Side - Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-secondary">
              <div className="flex gap-4 items-start">
                <div className="text-xl">🌟</div>
                <div>
                  <p className="font-bold tracking-wide text-small">
                    OVER 10 YEARS
                  </p>
                  <p className="text-body">of Real Estate Expertise</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="text-xl">🏘️</div>
                <div>
                  <p className="font-bold tracking-wide text-small">
                    5,000+ VILLAS SOLD
                  </p>
                  <p className="text-body">across Dubai</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="text-xl">⭐</div>
                <div>
                  <p className="font-bold tracking-wide text-small">
                    5/5 ★ GOOGLE RATING
                  </p>
                  <p className="text-body">Trusted by homebuyers</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="text-xl">🧑‍💼</div>
                <div>
                  <p className="font-bold tracking-wide text-small">
                    CERTIFIED CONSULTANTS
                  </p>
                  <p className="text-body">with local market expertise</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
