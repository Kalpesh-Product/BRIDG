import React from "react";

const InclusionsCard = ({ inclusions }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full">
      <h3 className="text-lg font-semibold mb-4">All Services Included:</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {inclusions.map((service, index) => (
          <div
            key={index}
            className="px-4 py-2 bg-gray-100 rounded-md text-gray-800 text-sm font-medium text-center">
            {service}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InclusionsCard;
