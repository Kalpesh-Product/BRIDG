import { useState } from "react";
import { FiDownload } from "react-icons/fi";
import { FaMoneyBillAlt } from "react-icons/fa";
import { HiOutlineCalendar } from "react-icons/hi";
import { RiBuilding2Line } from "react-icons/ri";
import { BiUser } from "react-icons/bi";
import { GiWorld } from "react-icons/gi";
import { TbPercentage } from "react-icons/tb";
import { BsCalendarMonth } from "react-icons/bs";
import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import PropertyModal from "./PropertyModal";

const PropertyCards = ({ properties }) => {
  const [interest, setInterest] = useState({});
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const handleCardClick = (property) => {
    setSelectedProperty(property);
    setOpenModal(true);
  };

  return (
    <section className="flex justify-center items-center">
      <div className="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {properties.map((property) => (
          <div
            key={property.id}
            className="cursor-pointer bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col transition hover:shadow-md"
          >
            <div className="relative"
            onClick={() => handleCardClick(property)}>
              <img
                src={property.image}
                alt={property.name}
                className="h-48 w-full object-cover"
              />
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

              <div className="mt-4 pt-4 border-t border-gray-100">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  Investor Details
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <BiUser className="text-base text-gray-400" />
                    <p className="font-medium">Investor: <span className="blur-sm">{property.investorName}</span></p>{" "}

                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <GiWorld className="text-base text-gray-400" />
                    <span className="font-medium">Country:</span>{" "}
                    {property.investorCountry}
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <FaMoneyBillAlt className="text-base text-gray-400" />
                    <span className="font-medium">Monthly Rental:</span>{" "}
                    {property.monthlyRentals}
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <TbPercentage className="text-base text-gray-400" />
                    <span className="font-medium">ROI:</span> {property.roi}
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <BsCalendarMonth className="text-base text-gray-400" />
                    <span className="font-medium">Booked for:</span>{" "}
                    {property.bookingDuration}
                  </div>
                  {property.payingForNewProperty && (
                    <div className="mt-2 bg-green-50 text-green-700 px-3 py-2 rounded-lg text-xs font-medium">
                      Property paying for NEW Property!
                    </div>
                  )}
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
                     {
                     
                      setInterest((prev) => ({
                        ...prev,
                        [property.id]: e.target.value,
                      }))
                      
                     }
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

      {/* Modal with Image Slider */}
      <PropertyModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        property={selectedProperty}
      />
    </section>
  );
};

export default PropertyCards;
