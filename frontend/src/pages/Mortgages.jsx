import Mortgage from "../assets/media/videos/mortgage.webm";
import AnimatedCard from "../components/AnimatedCard/AnimatedCard";
import { ReactFitty } from "react-fitty";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Skeleton,
} from "@mui/material";
import { FaChevronDown } from "react-icons/fa";
import { lazy, Suspense } from "react";
const VideoBanner = lazy(() => import("../components/VideoBanner"));

const Mortgages = () => {
  const cardData = [
    {
      id: 1,
      image: "resident",
      title: "Resident Mortgage",
      description:
        "We can provide easy and fast mortages to residents of Dubai from multiple channels and low rates using our extensive knowledge of the Dubai home loan market and property transaction network.",
    },
    {
      id: 2,
      image: "nonResident",
      title: "Non-Resident Mortgage",
      description:
        "We are experts and w can provide even more seamless and extra fast morrage to Non-Residents of Dubai. No matter which country you are from we can get you a home loan from several of our channels.",
    },
    {
      id: 3,
      image: "equity",
      title: "Equity Release / Buyouts",
      description:
        "We can help you unlock equity from a property you already own, or refinance an existing mortgage if you're currently paying too much.",
    },
  ];
  const faqData = [
    {
      question: "Who can get a mortgage in the Dubai?",
      answer:
        "Getting a mortgage in the Dubai is possible for most people, including Dubai Nationals, Dubai Residents (expats living in Dubai), and non-residents. The process, particularly rates and terms, will differ depending on your residency status.",
    },
    {
      question:
        "Can BRIDG support in providing Mortgage to Non-Residents of Dubai?",
      answer:
        "Yes, and in fact we specialise in providing mortgage to Non-Residents of Dubai.",
    },
    {
      question: "Which Country Citizens can invest in Real Estate in Dubai?",
      answer: "Any Country Citizen can invest in Dubai Real Estate.",
    },
    {
      question: "Which Country Citizen can get a mortgage in Dubai?",
      answer: "Any Country Citizen can get a mortgage in Dubai.",
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
      <div className="flex flex-col gap-8 md:gap-12 lg:gap-12">
        {/* Video Section */}

        <Suspense
          fallback={
            <div className="h-[70vh] w-full">
              <Skeleton
                variant="rectangular"
                width="100%"
                height="100%"
                animation="wave"
              />
            </div>
          }
        >
          <VideoBanner
            video={Mortgage}
            text="Dubai Resident ? Non Resident ?"
            subtext="this dosen't matter to us as we provide"
            underText={"MORTGAGE to all types of customers!"}
          />
        </Suspense>

        <hr />
        {/* Cards */}
        <div className="flex flex-col gap-8">
          <div className="w-full text-start md:text-center lg:text-center">
            <ReactFitty>We can help you with following services</ReactFitty>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cardData.map((item) => (
              <AnimatedCard
                key={item.id}
                imageSrc={item.image}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
        <hr />
        {/* FAQ */}
        <div className="flex flex-col gap-8">
          <ReactFitty>Frequently Asked Questions</ReactFitty>
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
