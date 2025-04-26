import VideoBanner from "../components/VideoBanner";
import { useState } from "react";
import InclusionsCard from "../components/Inclusions/InclusionsCard";
import InfoBox from "../components/BlackInfoBox/InfoBox";
import HowItWorksVid from "../assets/media/videos/how-it-works.mp4";
import HowItWorksImage from "../assets/how-it-works.webp"

export default function HowItWorks() {
  const [selectedStep, setSelectedStep] = useState(0);
  const infoData = [
    {
      title: "Tax Heaven",
      description: "Zero income tax and supportive regulations.",
    },
    {
      title: "Thriving Economy",
      description: "One of the fastest growing Economy",
    },
    {
      title: "High Property ROI",
      description:
        "Most lecurative and liqued investemt with recurring High ROI",
    },
    {
      title: "2nd Residency Opportunity",
      description:
        "Option to have a Resident Visa to have a 2nd option in life",
    },
    {
      title: "Luxurious Lifestyle",
      description: "Top communities and amenities.",
    },
    {
      title: "Global Community",
      description: "Investors from across the world are investing in UAE",
    },
  ];
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
    "Mortgage From UAE",
    "Paperwork Closure",
    "Registration Support",
    "Post Purchase Servicing",
    "On-Boarding Our Tanent",
    "Activating High Monthly Rentals",
    "Property Management",
    "Customer Service",
    "Property Capatalisation",
    "Redeployment Of Capital",
    "Property Portfolio Growth",
  ];
  return (
    <div className="flex flex-col gap-20 w-full">
      <div className="flex flex-col gap-4">
        <VideoBanner video={HowItWorksVid} width={"lg:w-[80%]"} text={"Make your money work for you"} subtext={"and make you more money!"}  />
        <div className="mt-10">
          <h1 className="text-display font-semibold text-secondary">
            Steps to become a High ROI Real Estate Investor in UAE
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row mt-10">
          {/* Left Side - Steps */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-1 lg:w-1/3 lg:pr-4 gap-4 md:gap-0">
            {steps.map((step, index) => (
              <div
                key={index}
                onClick={() => setSelectedStep(index)}
                className={`cursor-pointer p-4 border-b lg:last:border-b ${
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
        <div
          className="relative w-full flex flex-wrap md:flex-wrap lg:flex-nowrap gap-4 items-center justify-between px-8 lg:px-24 overflow-hidden rounded-lg p-2 lg:p-4 md:justify-center"
          style={{
            backgroundImage: `url(${HowItWorksImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/40 z-0"></div>

          {/* Content Left */}
          <div className="z-10 max-w-2xl text-white">
            <h1 className="text-white text-[30px] md:text-[40px] leading-tight">
              Most ideal geography in the world to invest in Real Estate Dubai.
            </h1>
          </div>

          {/* InfoBox Right */}
          <div className="z-10">
            <InfoBox title="Why invest in Dubai?" items={infoData} />
          </div>
        </div>
      </div>
    </div>
  );
}
