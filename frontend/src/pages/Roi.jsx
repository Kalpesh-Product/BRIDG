import {
  property1Images,
  property2Images,
  property3Images,
  property4Images,
  property5Images,
  property6Images,
  property7Images,
  property8Images,
  property9Images,
} from "../utils/property_images";
import PropertyCards from "../components/PropertyCards";
import VideoBanner from "../components/VideoBanner";
import RoiVideo from "../assets/media/videos/roi.webm";
import { ReactFitty } from "react-fitty";
import PrimaryButton from "../components/PrimaryButton";
import { useNavigate } from "react-router-dom";
import useIsMobile from "../hooks/useIsMobile";

export const properties = [
  {
    id: 4,
    propertyLocation: "Jumeirah Village Circle (JVC)",
    city: "Dubai",
    purchasePrice: "AED 9,80,000",
    purchaseType: "100% Cash",
    propertyStatus: "Rented",
    rentalTerm: "24 Months",
    monthlyRental: "AED 5,600",
    roi: "7%",
    investorName: "Ishaan Khurana",
    investorCountry: "India",
    investmentOnPlatform: "1st Investment",
    nextFreshInvestment: "FY 2025-26",
    dubaiResidencyStatus: "Activated",
    image: property5Images[0],
    images: property5Images,
  },
  {
    id: 1,
    propertyLocation: "Dubai Silicon Oasis",
    city: "Dubai",
    purchasePrice: "AED 9,90,000",
    purchaseType: "100% Cash",
    propertyStatus: "Rented",
    rentalTerm: "24 Months",
    monthlyRental: "AED 5,700",
    roi: "7%",
    investorName: "Diya Kapoor",
    investorCountry: "India",
    investmentOnPlatform: "1st Investment",
    nextFreshInvestment: "FY 2025-26",
    dubaiResidencyStatus: "Activated",
    image: property2Images[0],
    images: property2Images,
  },
  {
    id: 2,
    propertyLocation: "Dubai Marina",
    city: "Dubai",
    purchasePrice: "AED 12,70,000",
    purchaseType: "70% Cash + 30% Mortgage",
    propertyStatus: "Rented",
    rentalTerm: "36 Months",
    monthlyRental: "AED 7,200",
    roi: "7%",
    investorName: "Rohan Shah",
    investorCountry: "India",
    investmentOnPlatform: "1st Investment",
    nextFreshInvestment: "FY 2025-26",
    dubaiResidencyStatus: "Activated",
    image: property3Images[0],
    images: property3Images,
  },
  {
    id: 3,
    propertyLocation: "Dubai Sports City",
    city: "Dubai",
    purchasePrice: "AED 9,10,000",
    purchaseType: "75% Cash + 25% Mortgage",
    propertyStatus: "Rented",
    rentalTerm: "24 Months",
    monthlyRental: "AED 5,200",
    roi: "7%",
    investorName: "Neha Sinha",
    investorCountry: "India",
    investmentOnPlatform: "1st Investment",
    nextFreshInvestment: "FY 2025-26",
    dubaiResidencyStatus: "Activated",
    image: property4Images[0],
    images: property4Images,
  },
  {
    id: 0,
    propertyLocation: "Dubai Silicon Oasis",
    city: "Dubai",
    purchasePrice: "AED 8,90,000",
    purchaseType: "100% Cash",
    propertyStatus: "Rented",
    rentalTerm: "24 Months",
    monthlyRental: "AED 5,200",
    roi: "7%",
    investorName: "Aarav Mehta",
    investorCountry: "India",
    investmentOnPlatform: "1st Investment",
    nextFreshInvestment: "FY 2025-26",
    dubaiResidencyStatus: "Activated",
    image: property1Images[0],
    images: property1Images,
  },
  {
    id: 5,
    propertyLocation: "Jumeirah Beach Residence (JBR)",
    city: "Dubai",
    purchasePrice: "AED 14,70,000",
    purchaseType: "70% Cash + 30% Mortgage",
    propertyStatus: "Rented",
    rentalTerm: "24 Months",
    monthlyRental: "AED 8,050",
    roi: "7%",
    investorName: "Simran Bhatia",
    investorCountry: "India",
    investmentOnPlatform: "1st Investment",
    nextFreshInvestment: "FY 2025-26",
    dubaiResidencyStatus: "Activated",
    image: property6Images[0],
    images: property6Images,
  },
  {
    id: 6,
    propertyLocation: "Dubai Silicon Oasis",
    city: "Dubai",
    purchasePrice: "AED 10,70,000",
    purchaseType: "100% Cash",
    propertyStatus: "Rented",
    rentalTerm: "24 Months",
    monthlyRental: "AED 6,250",
    roi: "7%",
    investorName: "Vivaan Arora",
    investorCountry: "India",
    investmentOnPlatform: "1st Investment",
    nextFreshInvestment: "FY 2025-26",
    dubaiResidencyStatus: "Activated",
    image: property7Images[0],
    images: property7Images,
  },
  {
    id: 7,
    propertyLocation: "Livan",
    city: "Dubai",
    purchasePrice: "AED 8,70,000",
    purchaseType: "100% Cash",
    propertyStatus: "Rented",
    rentalTerm: "24 Months",
    monthlyRental: "AED 5,100",
    roi: "7%",
    investorName: "Anaya Nair",
    investorCountry: "India",
    investmentOnPlatform: "1st Investment",
    nextFreshInvestment: "FY 2025-26",
    dubaiResidencyStatus: "Activated",
    image: property8Images[0],
    images: property8Images,
  },
  {
    id: 8,
    propertyLocation: "Damac Hills",
    city: "Dubai",
    purchasePrice: "AED 12,20,000",
    purchaseType: "80% Cash + 20% Mortgage",
    propertyStatus: "Rented",
    rentalTerm: "24 Months",
    monthlyRental: "AED 6,900",
    roi: "7%",
    investorName: "Karan Malhotra",
    investorCountry: "India",
    investmentOnPlatform: "1st Investment",
    nextFreshInvestment: "FY 2025-26",
    dubaiResidencyStatus: "Activated",
    image: property9Images[0],
    images: property9Images,
  },
];

export default function Roi() {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  return (
    <div className="flex flex-col gap-4">
      <div className="md:mb-5 lg:mb-0">
        {!isMobile ? (
          <VideoBanner
            text="Exclusive Platfrom for Non Residents"
            subtext="Invest In High ROI Dubai Real Estate"
            underText={""}
            video={RoiVideo}
          />
        ) : (
          <VideoBanner
            text="Exclusive Platfrom for Non Residents"
            subtext="Invest In High ROI Dubai Real Estate "
            video={RoiVideo}
          />
        )}
      </div>
      <hr />
      <div className="flex flex-col gap-4">
        {!isMobile ? (
          <ReactFitty>OUR EXISTING INVESTORS & INVESTMENTS</ReactFitty>
        ) : (
          <ReactFitty>
            OUR EXISTING INVESTORS <br /> & INVESTMENTS
          </ReactFitty>
        )}
        <PropertyCards properties={properties} />
        <div className="flex justify-center items-center mt-6">
          <PrimaryButton
            title="Connect With Us"
            handleSubmit={() => navigate("/contact")}
          />
        </div>
      </div>
    </div>
  );
}
