import InclusionsCard from "./InclusionsCard";

const includedServices = [
  "FREE Consulting",
  "FREE Property Curation",
  "Property Negotiation",
  "Investment Structure",
  "Custom ROI Calculator",
  "Mortgage from Dubai",
  "Paperwork Closure",
  "Registration Support",
  "Post Purchase Servicing",
  "On-boarding our Tenant",
  "Activating High Monthly Rentals",
  "Property Management",
  "Customer Service",
  "Property Capitalisation",
  "Redeployment of Capital",
  "Property Portfolio Growth",
];

export default function InclusionsSection() {
  return (
    <div className="flex justify-center p-6">
      <InclusionsCard inclusions={includedServices} />
    </div>
  );
}
