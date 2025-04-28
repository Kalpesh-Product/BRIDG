import VideoBanner from "../components/VideoBanner";
import { useState } from "react";
import InclusionsCard from "../components/Inclusions/InclusionsCard";
import InfoBox from "../components/BlackInfoBox/InfoBox";
import HowItWorksVid from "../assets/media/videos/how-it-works.mp4";
import HowItWorksImage from "../assets/how-it-works.webp";
import useIsMobile from "../hooks/useIsMobile";
import PrimaryButton from "../components/PrimaryButton";
import { useNavigate } from "react-router-dom";

export default function HowItWorks() {
  const [selectedStep, setSelectedStep] = useState(0);
  const navigate = useNavigate();
  const isMobile = useIsMobile();
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
      title: "Connect with us and talk!",
      content: `Connect with us and talk!
  Register your interest to kick off your Real Estate investment in UAE. Receive personalized consultation with a dedicated Real Estate Advisor.
  Sign up and schedule your call at a convenient time for you.`,
    },
    {
      title: "We will share an Investment Strategy",
      content: `A detailed strategy shall be shared with you for your investment in Dubai Real Estate.
  A long-term ROI strategy with anytime exit will be designed and shared.
  All compliances and ways to manage your investment shall be shared.`,
    },
    {
      title: "We will share the most curated properties for your investment",
      content: `Sharing of curated properties from our side for your investment.
  Designing of transaction papers and details for the purchase of the property.
  Closing of the property transaction post all negotiations and paperwork details.`,
    },
    {
      title: "Structuring of Fund Transfer for Closing Transaction",
      content: `Strategizing and closing the transaction as per your preference of full cash payment or mortgage inclusion.
  In case of mortgage inclusion, we will shortlist and share best Financial Institutes and secure your mortgage.
  Payment to owner and closing of the transaction with end-to-end documentation.`,
    },
    {
      title: "On-boarding Tenant to Ensure Immediate ROI",
      content: `We shall ensure we have a tenant on-boarded immediately by the time you close the Property Purchase.
  Ensure timely and monthly returns with annual escalations and compliances.
  Ensure maximum ROI so that you reinvest in another property due to the ease and high ROI of your investment.`,
    },
    {
      title: "Exit Strategy Available Anytime for Liquidity",
      content: `Design an Exit if required for any of your properties invested via us if you need immediate liquidity.
  Provide liquidity to you in a short notice as and when required.
  Ensure other possible options for immediate liquidity.`,
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
        {!isMobile ? (
          <VideoBanner
            video={HowItWorksVid}
            width={"lg:w-[80%]"}
            text={"Make your money work for you and make you more money!"}
          />
        ) : (
          <VideoBanner
            video={HowItWorksVid}
            width={"lg:w-[80%]"}
            text={"Make your money work"}
            subtext="for you and make you more money!"
          />
        )}

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
            <div className="flex flex-col gap-8">
              <div className="  text-4xl font-bold mb-4">
                {selectedStep + 1}
              </div>
              <h2 className="text-2xl font-semibold mb-2">
                {steps[selectedStep].title}
              </h2>
              <div className="h-full md:h-32">
                <p className="text-gray-700 text-subtitle">
                  {steps[selectedStep].content}
                </p>
              </div>

              <div className="">
                <PrimaryButton
                  title="Sign Up"
                  handleSubmit={() => navigate("/buy")}
                />
              </div>
            </div>
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
              World's most booming and ideal geography to invest in Real Estate.
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
