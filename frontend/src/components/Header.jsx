import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const headerLinks = [
    { id: crypto.randomUUID(), text: "ROI", to: "/roi" },
    { id: crypto.randomUUID(), text: "Buy", to: "/buy" },
    { id: crypto.randomUUID(), text: "Sell", to: "/sell" },
    { id: crypto.randomUUID(), text: "Mortgages", to: "/mortgages" },
    { id: crypto.randomUUID(), text: "Contact", to: "/contact" },
    { id: crypto.randomUUID(), text: "Partnerships", to: "/partnerships" },
    { id: crypto.randomUUID(), text: "Investor Login", to: "/login" },
  ];
  return (
    <header className="flex justify-between py-2 px-2 my-2 border border-gray-300 rounded-xl bg-white/10 backdrop-blur-md shadow-md">
      <Link to="/" className=" text-secondary p-4 rounded-lg">
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
