import React from "react";

const Header = () => {
  const headerLinks = [
    { id: 1, text: "ROI" },
    { id: 2, text: "Buy" },
    { id: 3, text: "Sell" },
    { id: 4, text: "Mortgages" },
    { id: 5, text: "Partnerships" },
    { id: 6, text: "Investor Login" },
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
              <p>{item.text}</p>
            </div>
            <div className="w-[0.3px] h-1/4 bg-gray-400"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
