import React from "react";

const TestimonialCard = ({ initials, name, rating, review }) => {
  return (
    <div className="bg-white rounded-lg p-6 w-full h-80 text-center border-[0.3px] border-gray-300">
      {/* User initials */}
      <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-gray-800 text-white text-lg font-bold">
        {initials}
      </div>

      {/* User name */}
      <h3 className="mt-4 text-lg font-semibold">{name}</h3>

      {/* Star rating */}
      <div className="flex justify-center mt-2">
        {Array.from({ length: rating }, (_, i) => (
          <span key={i} className="text-yellow-500 text-xl">
            ★
          </span>
        ))}
      </div>

      {/* Review text */}
      <p className="text-gray-600 mt-2 text-sm text-start">{review}</p>
    </div>
  );
};

export default TestimonialCard;
