import { useState } from "react";
import { FaMoneyBillAlt, FaEye } from "react-icons/fa";
import { HiOutlineHome } from "react-icons/hi";
import { RiBuilding2Line } from "react-icons/ri";
import { BiUser } from "react-icons/bi";
import { GiWorld } from "react-icons/gi";
import { TbPercentage } from "react-icons/tb";
import { BsCalendarMonth } from "react-icons/bs";
import { MdOutlineVerifiedUser } from "react-icons/md";
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
            <div className="relative" onClick={() => handleCardClick(property)}>
              <img
                src={property.image}
                alt="Property"
                className="h-48 w-full object-cover"
              />
              <button
                className="absolute top-4 right-4 bg-white text-sm font-medium rounded-full px-4 py-1 shadow hover:bg-gray-100 flex items-center gap-1"
                onClick={(e) => e.stopPropagation()}
              >
                View Demo
                <FaEye className="text-sm" />
              </button>
            </div>

            <div className="p-4 flex flex-col flex-grow space-y-3">
              {/* Location */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {property.propertyLocation}
                </h2>
                <p className="text-sm text-gray-500">{property.city}</p>
              </div>

              {/* Property Details */}
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Property Details
                </h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex items-center gap-2">
                    <FaMoneyBillAlt className="text-gray-400" />
                    <span>Purchase Price: {property.purchasePrice}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <HiOutlineHome className="text-gray-400" />
                    <span>Purchase Type: {property.purchaseType}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <RiBuilding2Line className="text-gray-400" />
                    <span>Property Status: {property.propertyStatus}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BsCalendarMonth className="text-gray-400" />
                    <span>Rental Term: {property.rentalTerm}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaMoneyBillAlt className="text-gray-400" />
                    <span>Monthly Rental: {property.monthlyRental}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TbPercentage className="text-gray-400" />
                    <span>ROI: {property.roi}</span>
                  </div>
                </div>
              </div>

              {/* Investor Details */}
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Investor Details
                </h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex items-center gap-2">
                    <BiUser className="text-gray-400" />
                    <span>
                      Investor: <span className="blur-sm">{property.investorName}</span>
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <GiWorld className="text-gray-400" />
                    <span>Country: {property.investorCountry}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaMoneyBillAlt className="text-gray-400" />
                    <span>
                      Investment on Platform: {property.investmentOnPlatform}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BsCalendarMonth className="text-gray-400" />
                    <span>
                      Next Fresh Investment: {property.nextFreshInvestment}
                    </span>
                  </div>
                </div>
              </div>

              {/* Dubai Residency */}
              <div className="mt-6 flex items-center gap-2 text-green-600 text-sm font-semibold">
                <MdOutlineVerifiedUser className="text-xl" />
                Dubai Residency: {property.dubaiResidencyStatus}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <PropertyModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        property={selectedProperty}
      />
    </section>
  );
};

export default PropertyCards;
