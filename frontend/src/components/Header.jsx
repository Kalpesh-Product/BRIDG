import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const headerLinks = [
    { id: 1, text: "ROI", to: "/roi" },
    { id: 2, text: "Buy", to: "/buy" },
    { id: 3, text: "Sell", to: "/sell" },
    { id: 4, text: "Mortgages", to: "/mortgages" },
    { id: 5, text: "Partnerships", to: "/partnerships" },
    { id: 6, text: "Investor Login", to: "/login" },
  ];
  return (
    <header className="flex justify-between py-2 px-2 my-2 border border-gray-300 rounded-xl bg-white/10 backdrop-blur-md shadow-md">
      <Link to="/" className="bg-secondary text-white p-4 rounded-lg">
        <span className="uppercase text-headline font-bold">Bridg</span>
      </Link>
      <ul className="flex gap-4">
        {headerLinks.map((item) => (
          <li key={item.id} className="flex items-center">
            <div className="p-4 px-8 ">
              <Link to={item.to}>{item.text}</Link>
            </div>
            <div className="w-[0.3px] h-1/4 bg-gray-400"></div>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
