import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  { question: "Who can get a mortgage in the UAE?", answer: "Anyone meeting the UAE mortgage eligibility criteria." },
  { question: "Does Huspy only offer support on new mortgages?", answer: "Huspy provides support for both new and existing mortgages." },
  { question: "What type of properties can be mortgaged?", answer: "Apartments, villas, and commercial properties can be mortgaged." },
  { question: "What is the minimum downpayment required?", answer: "The minimum downpayment varies depending on the property type and borrower profile." },
  { question: "Can my downpayment be paid from the mortgage or with another type of finance?", answer: "Some lenders allow flexible downpayment options, but terms vary." },
];

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-8xl mx-auto py-12">
      <h2 className="text-3xl font-semibold mb-6">Frequently asked questions</h2>
      <div className="border rounded-lg shadow-md">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b last:border-none">
            <button
              className="w-full flex justify-between items-center py-4 px-6 text-left text-lg font-medium transition-all duration-300 hover:bg-gray-100"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? "max-h-[200px] opacity-100 py-2 px-6" : "max-h-0 opacity-0"
              }`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Accordion;
