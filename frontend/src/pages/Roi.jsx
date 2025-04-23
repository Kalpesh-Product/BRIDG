import PropertyCards from "../components/PropertyCards";
import image from "../assets/image1.jpg";

export default function Roi() {
  const properties = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    name: ["Ghaf Woods", "Square X Residences", "Muraba Veil"][i % 3],
    image: [image, image, image][i % 3],
    location: ["Ghaf Woods Phase 2", "JVC", "Al Wasl"][i % 3],
    price: ["AED 1.3M", "To be announced", "AED 18M"][i % 3],
    handover: ["Q4 2028", "Contact for details", "Q4 2028"][i % 3],
    plan: ["60/40", "Contact for details", "50/50"][i % 3],
    investorName: ["John Doe", "Sarah Smith", "Ali Ahmed"][i % 3],
    investorCountry: ["UAE", "UK", "USA"][i % 3],
    monthlyRentals: ["AED 8,500", "AED 12,000", "AED 95,000"][i % 3],
    roi: ["8.5%", "7.2%", "6.4%"][i % 3],
    bookingDuration: [i % 2 === 0 ? "24 Months" : "12 Months"],
    payingForNewProperty: true,
  }));
  return (
    <div>
      <PropertyCards properties={properties} />
    </div>
  );
}
