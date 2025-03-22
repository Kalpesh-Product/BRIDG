import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const headerLinks = [
    { id: 1, text: "ROI", to: "/roi" },
    { id: 2, text: "Buy", to: "/buy" },
    { id: 3, text: "Sell", to: "/sell" },
    { id: 4, text: "Mortgages", to: "/mortgages" },
    { id: 5, text: "Partnerships", to: "/partnerships" },
    { id: 6, text: "Investor Login", to: "/investor-login" },
  ];
  return (
    <div className="flex justify-between py-2 px-2 my-2 border border-gray-300 rounded-xl bg-white/10 backdrop-blur-md shadow-md">
      <div className="bg-secondary text-white p-4 rounded-lg">
        <p className="uppercase text-headline font-bold">Bridg</p>
      </div>
      <div className="flex gap-4">
        {headerLinks.map((item) => (
          <div className="flex items-center">
            <div key={item.id} className="p-4 px-8 ">
              <Link to={item.to}>{item.text}</Link>
            </div>
            <div className="w-[0.3px] h-1/4 bg-gray-400"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
