import React from "react";
import { BiCheck } from "react-icons/bi"; // React Icons

const InfoItem = ({ title, description }) => {
  return (
    <div className="flex items-center gap-4 py-4 border-t border-white/20 px-4">
      {/* Perfect Circle Fix */}
      <div className="w-6 h-6 flex items-center justify-center border border-white/50 rounded-full flex-shrink-0">
        <BiCheck className="text-white text-sm" />
      </div>
      {/* Text content */}
      <p className="text-white text-sm leading-relaxed">
        <span className="font-semibold">{title}</span> - {description}
      </p>
    </div>
  );
};

export default InfoItem;
