import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../assets/media/images/logo-transparent.png";
import { Drawer } from "@mui/material";
import { IoCloseSharp } from "react-icons/io5";

const Header = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleNavigation = (path) => {
    navigate(path);
    setOpen(false);
  };
  const headerLinks = [
    { id: 1, text: "ROI", to: "/roi" },
    { id: 2, text: "Buy", to: "/buy" },
    { id: 3, text: "Sell", to: "/sell" },
    { id: 4, text: "Mortgages", to: "/mortgages" },
    { id: 5, text: "Contact", to: "/contact" },
    { id: 6, text: "Partnerships", to: "/partnerships" },
    { id: 7, text: "Investor Login", to: "/login" },
  ];
  return (
    <div className="flex justify-between items-center py-2 px-2 my-2 border border-gray-300 rounded-xl bg-white/10 backdrop-blur-md shadow-md">
      <div
        onClick={() => navigate("/")}
        className="h-16 w-20 overflow-x-hidden rounded-lg flex justify-between items-center cursor-pointer"
      >
        <img src={Logo} alt={"logo"} className="w-full h-full object-contain" />
      </div>
      <div className="h-full px-2">
        <button
          onClick={() => setOpen(true)}
          className="hamburger-menu rounded-lg text-title"
        >
          ☰
        </button>
      </div>
      <ul className="hidden md:hidden lg:hidden xl:flex sm:hidden gap-4">
        {headerLinks.map((item) => (
          <li key={item.id} className="flex items-center">
            <div className="p-4 px-8 ">
              <Link to={item.to}>{item.text}</Link>
            </div>
            <div className="w-[0.3px] h-1/4 bg-gray-400"></div>
          </li>
        ))}
      </ul>

      <Drawer
        sx={{
          "& .MuiDrawer-paper": {
            width: {
              xs: "75%", // Mobile
              sm: "400px", // Default desktop/tablet
            },
          },
        }}
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
      >
        <ul className="flex md:flex lg:flex xl:hidden flex-col gap-4 p-4 ">
          <div>
            <span className="text-title" onClick={() => setOpen(false)}>
              <IoCloseSharp />
            </span>
          </div>
          {headerLinks.map((item) => (
            <li key={item.id} className="items-center text-center">
              <div
                onClick={() => handleNavigation(item.to)}
                className="py-4"
              >
                <p className="text-secondary">{item.text}</p>
              </div>
              <div className="h-[0.2px] bg-gray-300"></div>
            </li>
          ))}
        </ul>
      </Drawer>
    </div>
  );
};

export default Header;
