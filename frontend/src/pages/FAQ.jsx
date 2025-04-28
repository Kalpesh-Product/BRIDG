import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import React from 'react'
import { ReactFitty } from 'react-fitty';
import { FaChevronDown } from 'react-icons/fa';

const FAQ = () => {

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
       <div className="flex flex-col gap-8">
          <ReactFitty className="-mt-2">
            Frequently Asked Questions
          </ReactFitty>
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
  )
}

export default FAQ
