import { useState } from "react";
import { FiDownload } from "react-icons/fi";
import { FaMoneyBillAlt } from "react-icons/fa";
import { HiOutlineCalendar } from "react-icons/hi";
import { RiBuilding2Line } from "react-icons/ri";
import image from "../assets/image1.jpg";
import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";



const PropertyCards = ({properties}) => {
  const [interest, setInterest] = useState({});

    properties = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    name: ["Ghaf Woods", "Square X Residences", "Muraba Veil"][i % 3],
    image: [image, image, image][i % 3],
    location: ["Ghaf Woods Phase 2", "JVC", "Al Wasl"][i % 3],
    price: ["AED 1.3M", "To be announced", "AED 18M"][i % 3],
    handover: ["Q4 2028", "Contact for details", "Q4 2028"][i % 3],
    plan: ["60/40", "Contact for details", "50/50"][i % 3],
  }));

  return (
    <section className="bg-[#f4f4f5] min-h-screen py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {properties.map((property) => (
          <div
            key={property.id}
            className="bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col transition hover:shadow-md"
          >
            <div className="relative">
              <img
                src={property.image}
                alt={property.name}
                className="h-48 w-full object-cover"
              />
              <button className="absolute top-4 right-4 bg-white text-sm font-medium rounded-full px-4 py-1 shadow hover:bg-gray-100 flex items-center gap-1">
                See the brochure <FiDownload className="text-sm" />
              </button>
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold text-gray-900">
                {property.name}
              </h3>
              <p className="text-sm text-gray-500 mt-1">{property.location}</p>

              <div className="mt-4 space-y-2 text-sm text-gray-700">
                <div className="flex items-center gap-2 text-gray-600">
                  <FaMoneyBillAlt className="text-base text-gray-400" />
                  <span className="font-medium">Starting price:</span>{" "}
                  {property.price}
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <HiOutlineCalendar className="text-base text-gray-400" />
                  <span className="font-medium">Handover:</span>{" "}
                  {property.handover}
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <RiBuilding2Line className="text-base text-gray-400" />
                  <span className="font-medium">Payment plan:</span>{" "}
                  {property.plan}
                </div>
              </div>

              <div className="mt-6 border-t pt-4">
                <FormControl fullWidth size="small">
                  <InputLabel id={`interest-label-${property.id}`}>
                    Interested?
                  </InputLabel>
                  <Select
                    sx={{
                      borderRadius: "30px",
                    }}
                    labelId={`interest-label-${property.id}`}
                    value={interest[property.id] || ""}
                    onChange={(e) =>
                      setInterest((prev) => ({
                        ...prev,
                        [property.id]: e.target.value,
                      }))
                    }
                    label="Interested?"
                  >
                    <MenuItem value="yes">Yes, I'm interested</MenuItem>
                    <MenuItem value="no">No, I'm not interested</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PropertyCards;
