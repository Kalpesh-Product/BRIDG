import React from "react";
import { ReactFitty } from "react-fitty";
import { BiCheck } from "react-icons/bi";

const GraphCard = ({ data, reverse }) => {
  return (
    <div className="flex flex-col items-center gap-20">
      <div
        className={`flex flex-col md:flex-row gap-10 md:gap-4 lg:gap-4 ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Image without fixed height */}
        <div className="w-full md:w-[40%] lg:w-[50%] h-[33rem] overflow-hidden">
          <img
            src={data.imageSrc}
            alt="image"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text section with fixed height */}
        <div className="flex flex-1 flex-col h-[30rem] items-stretch">
          <ReactFitty className="font-semibold">{data.title}</ReactFitty>
          
          <div className="flex-1 flex flex-col justify-between">
            {data.items.map((item, index) => (
              <div key={index} className="flex items-start gap-2">
                <BiCheck size={20} />
                <p className="text-subtitle">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphCard;
