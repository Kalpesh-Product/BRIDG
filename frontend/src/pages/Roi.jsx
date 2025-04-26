import {
  property1Images,
  property2Images,
  property3Images,
  property4Images,
  property5Images,
  property6Images,
} from "../utils/property_images";
import PropertyCards from "../components/PropertyCards";

const allProperties = [
  {
    name: "Ghaf Woods",
    location: "Ghaf Woods Phase 2",
    price: "AED 1.3M",
    handover: "Q4 2028",
    plan: "60/40",
    investorName: "John Doe",
    investorCountry: "UAE",
    monthlyRentals: "AED 8,500",
    roi: "8.5%",
    bookingDuration: "24 Months",
    images: property1Images,
  },
  {
    name: "Square X Residences",
    location: "JVC",
    price: "To be announced",
    handover: "Contact for details",
    plan: "Contact for details",
    investorName: "Sarah Smith",
    investorCountry: "UK",
    monthlyRentals: "AED 12,000",
    roi: "7.2%",
    bookingDuration: "12 Months",
    images: property2Images,
  },
  {
    name: "Muraba Veil",
    location: "Al Wasl",
    price: "AED 18M",
    handover: "Q4 2028",
    plan: "50/50",
    investorName: "Ali Ahmed",
    investorCountry: "USA",
    monthlyRentals: "AED 95,000",
    roi: "6.4%",
    bookingDuration: "24 Months",
    images: property3Images,
  },
  {
    name: "The Ritz-Carlton Residences",
    location: "Dubai Creek",
    price: "AED 6.5M",
    handover: "Q1 2026",
    plan: "70/30",
    investorName: "Fatima Noor",
    investorCountry: "Saudi Arabia",
    monthlyRentals: "AED 45,000",
    roi: "7.8%",
    bookingDuration: "24 Months",
    images: property4Images,
  },
  {
    name: "Palm Beach Towers",
    location: "Palm Jumeirah",
    price: "AED 4.2M",
    handover: "Q3 2027",
    plan: "50/50",
    investorName: "David Zhang",
    investorCountry: "China",
    monthlyRentals: "AED 35,000",
    roi: "7.0%",
    bookingDuration: "12 Months",
    images: property5Images,
  },
  {
    name: "Sobha Hartland",
    location: "Meydan",
    price: "AED 1.8M",
    handover: "Q4 2025",
    plan: "80/20",
    investorName: "Maria Gonzales",
    investorCountry: "Spain",
    monthlyRentals: "AED 9,500",
    roi: "7.5%",
    bookingDuration: "24 Months",
    images: property6Images,
  },
];

export const properties = allProperties.map((property, index) => ({
  id: index,
  name: property.name,
  image: property.images[0], // first image as thumbnail
  images: property.images, // full set for the modal/slider
  location: property.location,
  price: property.price,
  handover: property.handover,
  plan: property.plan,
  investorName: property.investorName,
  investorCountry: property.investorCountry,
  monthlyRentals: property.monthlyRentals,
  roi: property.roi,
  bookingDuration: property.bookingDuration,
  payingForNewProperty: true, // assuming all are true for now
}));

export default function Roi() {
  return (
    <div>
      <PropertyCards properties={properties} />
    </div>
  );
}
