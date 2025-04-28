import React from "react";
import { ReactFitty } from "react-fitty";
import WorldMap from "../assets/media/images/world-map-bridg-pica.png";


const RealEstate = () => {
  return (
    <div className="flex flex-col gap-16">
      <ReactFitty>NOTICABLE STATISTICS FOR INVESTING IN DUBAI REAL ESTATE</ReactFitty>
       <div className="h-[30vh] md:h-[60vh] lg:h-[80vh] w-full flex flex-col gap-4 ">
              <p className="text-headline">TOP 10 COUNTRIES INVESTING IN UAE</p>
              <div className="h-full w-full p-4 border border-gray-300 rounded-lg">
                <img
                  src={WorldMap}
                  alt="world-map"
                  className="w-full h-full object-contain   rounded-lg"
                />
              </div>
            </div>
            <p className="text-headline">TOTAL DUBAI REAL ESTATE SALES VALUE & VOLUME </p>
    </div>
  );
};

export default RealEstate;
