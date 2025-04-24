import { Link } from "react-router-dom";
import Logo from '../assets/media/images/logo-transparent.png';

const Footer = () => {
  const footerSections = [
    {
      heading: "Corporate",
      links: [
        { name: "Investor Sign in", link: "/login" },
        { name: "ROI", link: "/roi" },
        { name: "About", link: "/partnerships" },
        { name: "How It Works", link: "/test-allan" },
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
    <footer className="w-full bg-white/10 text-secondary backdrop-blur-md shadow-md flex flex-col justify-center items-center gap-20 py-16 px-4 ~border-[0.5px] border-gray-300">
      <div className="w-full flex flex-wrap md:flex-wrap lg:flex-nowrap justify-between items-end p-4">
        <div className="flex flex-col md:flex-1 md:justify-center md:items-center lg:justify-start lg:items-start">
          <div className='w-80 h-40'>
            <img src={Logo} alt="logo" className='h-full w-full object-contain' />
          </div>
        </div>
        <div className="w-full md:w-full lg:w-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 ">
          {footerSections.map((section, idx) => (
            <div key={idx} className="flex flex-col space-y-2 justify-center items-center text-start lg:justify-start lg:items-center">
              <h3 className="font-semibold text-lg mb-2">{section.heading}</h3>
              {section.links.map((linkObj, i) => (
                <Link
                  key={i}
                  to={linkObj.link}
                  className="text-sm text-secondary hover:text-black cursor-pointer"
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
        <span>&copy; Copyright {new Date().getFullYear()}-{(new Date().getFullYear()+1).toString().slice(-2)} by BRIDG. All rights reserved</span>
        <span>Privacy Policy | Terms and Conditions</span>
      </div>
    </footer>
  );
};

export default Footer;
