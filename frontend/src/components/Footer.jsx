import { Link } from "react-router-dom";
import Logo from "../assets/media/images/logo-transparent.png";

const Footer = () => {
  const footerSections = [
    {
      heading: "Corporate",
      links: [
        { name: "Investor Sign in", link: "/login" },
        { name: "ROI", link: "/roi" },
        { name: "About", link: "/partnerships" },
        { name: "How It Works", link: "/how-it-works" },
      ],
    },
    {
      heading: "Services",
      links: [
        { name: "Property Search", link: "/buy" },
        { name: "Portfolio Management", link: "" },
        { name: "Legal Support", link: "" },
        { name: "Rental Assistance", link: "" },
      ],
    },
    {
      heading: "Resources",
      links: [
        { name: "FAQs", link: "" },
        { name: "Blog", link: "" },
        { name: "Case Studies", link: "" },
        { name: "News", link: "" },
      ],
    },
    {
      heading: "Support",
      links: [
        { name: "Contact", link: "/contact" },
        { name: "Live Chat", link: "" },
        { name: "Privacy Policy", link: "" },
        { name: "Terms of Service", link: "" },
      ],
    },
  ];

  return (
    <footer className="w-full bg-white text-secondary backdrop-blur-md border-t flex flex-col justify-center items-center gap-10 pb-10 pt-8 px-10 ~border-[0.5px] shadow-lg border-gray-300 ">
      <div className="w-full flex flex-wrap md:flex-wrap lg:flex-nowrap justify-between items-end p-4">
        <div className="flex flex-col md:flex-1 md:justify-center md:items-center lg:justify-start lg:items-start">
          <div className="w-70 md:w-80 h-30">
            <img
              src={Logo}
              alt="logo"
              className="h-full w-full object-contain"
            />
            <p className="text-center">
              Axis 2, Dubai Silicon Oasis, Dubai, UAE
            </p>
          </div>
        </div>
        <div className="w-full md:w-full lg:w-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pt-8">
          {footerSections.map((section, idx) => (
            <div
              key={idx}
              className="flex flex-col space-y-2 justify-center items-center text-start lg:justify-start lg:items-center"
            >
              <h3 className="font-semibold text-lg mb-2">
                {section.heading.toUpperCase()}
              </h3>
              {section.links.map((linkObj, i) => (
                <Link
                  key={i}
                  to={linkObj.link}
                  className="text-sm  text-secondary opacity-80 hover:opacity-100 hover:text-black transition-all duration-200 cursor-pointer"
                >
                  {linkObj.name}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="w-[95%] h-[0.3px] bg-secondary" />
      <div className="w-full text-center flex flex-col">
        <div className="flex justify-center flex-col md:flex-row lg:flex-row gap-2 text-small md:text-base">
          <span>
            &copy; Copyright {new Date().getFullYear()}-
            {(new Date().getFullYear() + 1).toString().slice(-2)}
          </span>{" "}
          <span>BRIDG. </span>
          <span>All rights reserved</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
