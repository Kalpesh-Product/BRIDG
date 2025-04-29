import React from "react";
import { ReactFitty } from "react-fitty";
import WorldMap from "../assets/media/images/world-map-final.png";

const RealEstate = () => {
  return (
    <div className="flex flex-col gap-16">
      <ReactFitty>
        NOTICABLE STATISTICS FOR INVESTING IN DUBAI REAL ESTATE
      </ReactFitty>
      <div className="h-[30vh] md:h-[60vh] lg:h-[80vh] w-full flex flex-col gap-4">
        <ReactFitty className="text-headline">TOP 10 COUNTRIES INVESTING IN UAE</ReactFitty>
        <div className="h-full w-full p-4 border border-gray-300 rounded-lg bg-white">
          <img
            src={WorldMap}
            alt="world-map"
            className="w-full h-full object-contain   rounded-lg"
          />
        </div>
      </div>
      <p className="text-headline">
        TOTAL DUBAI REAL ESTATE SALES VALUE & VOLUME{" "}
      </p>
    </div>
  );
};

export default RealEstate;
