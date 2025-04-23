import Dubai1 from "../assets/media/videos/dubai-main.webm";
import AnimatedCard from "../components/AnimatedCard/AnimatedCard";
import image from "../assets/image1.jpg";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import { FaChevronDown } from "react-icons/fa";

const Mortgages = () => {
  const cardData = [
    {
      id: 1,
      image: image,
      title: "Resident Mortgages",
      description:
        "We can provide easy and fast mortages to residents of UAE from multiple channels and low rates using our extensive knowledge of the UAE home loan market and property transaction network.",
    },
    {
      id: 2,
      image: image,
      title: "Non-Resident Mortgages",
      description:
        "We are experts and w can provide even more seamless and extra fast morrage to Non-Residents of UAE. No matter which country you are from we can get you a home loan from several of our channels.",
    },
    {
      id: 3,
      image: image,
      title: "Equity Release / Buyouts",
      description:
        "We can help you unlock equity from a property you already own, or refinance an existing mortgage if you're currently paying too much.",
    },
  ];
  const faqData = [
    {
      question: "Who can get a mortgage in the UAE?",
      answer:
        "Getting a mortgage in the UAE is possible for most people, including UAE Nationals, UAE Residents (expats living in UAE), and non-residents. The process, particularly rates and terms, will differ depending on your residency status.",
    },
    {
      question:
        "Can BRIDG support in providing Mortgage to Non-Residents of UAE?",
      answer:
        "Yes, and in fact we specialise in providing mortgage to Non-Residents of UAE.",
    },
    {
      question: "Which Country Citizens can invest in Real Estate in UAE?",
      answer: "Any Country Citizen can invest in UAE Real Estate.",
    },
    {
      question: "Which Country Citizen can get a mortgage in UAE?",
      answer: "Any Country Citizen can get a mortgage in UAE.",
    },
    {
      question: "What type of properties can be mortgaged?",
      answer:
        "Any type of property can be mortgaged i.e. New Apartment, Resale Apartment, Land, Plots, Commercial Property, Buildings etc.",
    },
    {
      question: "What is the minimum downpayment required?",
      answer:
        "Downpayment could range from 15% to 40% depending on the profile and structure of the deal.",
    },
    {
      question:
        "Who will help me in finding the correct mortgage and paperwork and disbursement?",
      answer:
        "BRIDG will support you from start till end and do all your work related to your mortgage.",
    },
  ];
  return (
    <div>
      <div className="flex flex-col gap-20">
        {/* Video Section */}
        <div className="h-[70vh] relative border-[0.5px] border-gray-300 rounded-lg overflow-hidden">
          <video
            src={Dubai1}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover rounded-lg pointer-events-none"
          />

          <div className="absolute inset-0 bg-black/20  grid grid-cols-2 rounded-lg">
            <div className="w-full"></div>
            <div className="w-full"></div>
            <div className="w-full p-4 col-span-2 flex flex-col gap-4 justify-end items-start mb-8">
              <p className="text-title md:text-display  lg:text-hero text-white text-start">
                UAE Resident ? Non Resident ?
              </p>
              <p className="text-title md:text-display  lg:text-hero text-white text-start">
                This dosen't matter to us as we provide MORTGAGE to all types of
                customers!
              </p>
            </div>
          </div>
        </div>
        {/* Cards */}
        <div className="flex flex-col gap-8">
        <div className="w-full text-start md:text-center lg:text-center">
          <h2 className="text-headline md:text-display  lg:text-display font-semibold">
            We can help you with following services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cardData.map((item) => (
            <AnimatedCard
              key={item.id}
              imageSrc={image}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
        </div>
        {/* FAQ */}
        <div className="flex flex-col gap-8">
          <h2 className="text-headline md:text-display  lg:text-display font-semibold mb-4 w-full  text-start md:text-center lg:text-center">
            Frequently Asked Questions
          </h2>
          <div>
            {faqData.map((faq, index) => (
              <Accordion
                key={index}
                className="bg-white rounded-lg mb-2 shadow-none"
                sx={{
                  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.08)",
                  "&::before": {
                    display: "none",
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={<FaChevronDown />}
                  aria-controls={`panel${index}-content`}
                  id={`panel${index}-header`}
                >
                  <p className="font-medium text-body">{faq.question}</p>
                </AccordionSummary>
                <AccordionDetails>
                  <p className="text-base py-4 border-t-[0.5px] border-gray-300">
                    {faq.answer}
                  </p>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mortgages;
