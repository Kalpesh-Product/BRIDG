import React, { useState } from "react";

const Careers = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sections = [
    {
      title: "Product & Tech Development",
      items: [
        {
          title: "Full Stack React Developer",
          email: "hr@example.com",
          details: "Full Time | On-Site | Goa",
        },
        {
          title: "Jr. UI/UX Developer (HTML, CSS, Javascript, React, React Native)",
          email: "hr@example.com",
          details: "Full Time | On-Site | Goa",
        },
        {
          title: "PHP Developer",
          email: "hr@example.com",
          details: "Full Time | On-Site | Goa",
        },
        {
          title: "Web Developer Intern",
          email: "hr@example.com",
          details: "Full Time | On-Site | Goa",
        },
        {
          title: "Marketing Analytics (SEO/Google Analytics)",
          email: "hr@example.com",
          details: "Full Time | On-Site | Goa",
        },
      ],
    },
    {
      title: "Networking & IT",
      items: [],
    },
    {
      title: "Finance",
      items: [],
    },
    {
      title: "Human Resource & EA",
      items: [],
    },
    {
      title: "Sales & Business Development",
      items: [],
    },
    {
      title: "Marketing",
      items: [],
    },
    {
      title: "Civil & Maintenance",
      items: [],
    },
    {
      title: "Legal",
      items: [],
    },
    {
      title: "Administration & Front Office",
      items: [],
    },
    {
      title: "Service & Maintenance",
      items: [],
    },
  ];

  return (
    <div className="max-w-2xl mx-auto p-4">
      {sections.map((section, index) => (
        <div key={index} className="mb-2 border rounded-lg overflow-hidden">
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full text-left p-4 bg-gray-100 hover:bg-gray-200 focus:outline-none"
          >
            {section.title}
          </button>
          {openIndex === index && (
            <div className="p-4 bg-white">
              {section.items.length > 0 ? (
                section.items.map((item, i) => (
                  <div key={i} className="mb-3">
                    <a
                      href={`mailto:${item.email}?subject=Application for ${item.title}`}
                      className="text-blue-600 hover:underline"
                    >
                      {item.title}
                    </a>
                    <p className="text-sm text-gray-600">{item.details}</p>
                  </div>
                ))
              ) : (
                <p className="text-gray-600">No items available.</p>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Careers;