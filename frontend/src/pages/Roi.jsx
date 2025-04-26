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

const allProperties = [
  {
    images: property1Images,
  },
  {
    images: property2Images,
  },
  {
    images: property3Images,
  },
  {
    images: property4Images,
  },
  {
    images: property5Images,
  },
  {
    images: property6Images,
  },
  {
    images: property7Images,
  },
  {
    images: property8Images,
  },
  {
    images: property9Images,
  },
];

export const properties = allProperties.map((property, index) => ({
  id: index,
  propertyLocation: "Dubai Silicon Oasis",
  city: "Dubai",
  purchasePrice: "AED 9,20,000",
  purchaseType: "Full Cash",
  propertyStatus: "Rented",
  rentalTerm: "24 Months",
  monthlyRental: "AED 5,500",
  roi: "7%",
  investorName: "Blurr",
  investorCountry: "India",
  investmentOnPlatform: "1st Investment",
  nextFreshInvestment: "FY 2025-26",
  dubaiResidencyStatus: "Activated",
  image: property.images[0],
  images: property.images,
}));

export default function Roi() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-mega">OUR EXISTING INVESTORS & INVESTMENTS</h1>
      <PropertyCards properties={properties} />
    </div>
  );
}
