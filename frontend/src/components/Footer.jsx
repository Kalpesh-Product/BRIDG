const Footer = () => {
  const footerSections = [
    {
      heading: "Corporate",
      links: ["Investor Sign in", "ROI", "About", "How It Works"],
    },
    {
      heading: "Services",
      links: [
        "Property Search",
        "Portfolio Management",
        "Legal Support",
        "Rental Assistance",
      ],
    },
    {
      heading: "Resources",
      links: ["FAQs", "Blog", "Case Studies", "News"],
    },
    {
      heading: "Support",
      links: ["Contact", "Live Chat", "Privacy Policy", "Terms of Service"],
    },
  ];

  return (
    <footer className="bg-white/10 text-secondary backdrop-blur-md shadow-md flex flex-col justify-center items-center gap-20 py-16 px-4 rounded-lg border-[0.5px] border-gray-300">
      <div className="w-full flex justify-between items-end p-4">
        <div className="flex flex-col">
          <h1 className="text-[5rem] ">BRIDG</h1>
          <p className="">Bridg for Unaccepted Founders!</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4  gap-10">
          {footerSections.map((section, idx) => (
            <div key={idx} className="flex flex-col space-y-2">
              <h3 className="font-semibold text-lg mb-2">{section.heading}</h3>
              {section.links.map((link, i) => (
                <span
                  key={i}
                  className="text-sm text-secondary hover:text-black cursor-pointer"
                >
                  {link}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="w-[75%] h-[0.3px]  bg-secondary">

      </div>
      <div className="w-full text-center flex flex-col">
        <span>&copy; Copyright 2023-2024 by BRIDG. All rights reserved</span>
        <span>Privacy Policy | Terms and Conditions</span>
      </div>
    </footer>
  );
};

export default Footer;
