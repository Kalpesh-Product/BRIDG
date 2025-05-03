import React from "react";
import { ReactFitty } from "react-fitty";
import WorldMap from "../assets/media/images/world-map-final-the-last-map.png";
import GraphCard from "../components/GraphCard";

import totalSalesTransactions from "../assets/graphImages/total-sales-transactions.png";
import totalSalesBreakdown from "../assets/graphImages/sales-breakdown.png";
import totalSalesVolume from "../assets/graphImages/sales-volume.png";
import avgSalesPrice from "../assets/graphImages/avg-png.png";
import buyerProfile from "../assets/graphImages/bh-buy-final.png";
import cashVsMortgage from "../assets/graphImages/bh-mortage.png";
import transaction from "../assets/graphImages/image 5.png";
import transactionFinal from "../assets/graphImages/image 4.png";
import salesBreakdownGraph from "../assets/graphImages/sales-breakdown-1.png";
import salesBreakdownCard from "../assets/graphImages/sales-breakdown-2.png";
import salesBreakdownCard2 from "../assets/graphImages/sales-breakdown-3.png";
import { BiCheck } from "react-icons/bi";
import useIsMobile from "../hooks/useIsMobile";
import FitText from "../components/FitText/FitText";

const RealEstate = () => {
  const salesData = [
    {
      title: "TOTAL SALES TRANSACTIONS",
      imageSrc: totalSalesTransactions,
      items: [
        "2024 marked another record-breaking year for Dubai's Real Estate market, with the highest-ever transactions in the city's history.",
        "2024 Dubai registered an unprecedented 168,405 sales transactions.",
        "Valued at AED 423.36 billion, positioning itself as a Global Real Estate Powerhouse.",
        "The impressive 30% year-on-year (YoY) growth in transaction value and 40% increase in transaction volume underscore the sector's exceptional performance amid surging investor confidence and robust demand.",
        "This reflects the increasing participation of mid-market and first-time buyers and indicates a more balanced market where affordability plays a key role alongside luxury demand.",
      ],
    },
    {
      title: "APARTMENT SALES IN DUBAI",
      imageSrc: totalSalesVolume,
      items: [
        "2024, off-plan apartment transactions reached an all-time high of 94,455, growing substantially compared to 56,146 in 2023. ",
        "2024, the secondary market also saw an increase, rising to 41,984 transactions, up from 36,153 in 2023.",
        "Apartments have consistently outperformed villas in transaction volumes over the years.",
        "The preference for apartments can be attributed to their relatively affordable ticket size, making them more accessible to a larger pool of buyers.",
        "In 2024, 45% of all apartment transactions were for 1 bedroom units, with an average price of AED 1,703 per sq ft.",
        "Over 70% of the apartment sales were for properties priced below AED 2 million, reflecting strong demand for affordable living spaces driven by both end-users and investors.",
      ],
    },
    {
      title: "BUYER PROFILE DETAILS",
      imageSrc: buyerProfile,
      items: [
        "The 2024 uptick in investor activity aligns with the recovery in global markets, the launch of high-demand off-plan projects, and the growing perception of Dubai as a stable investment hub.",
        "Investors have consistently represented the majority of buyers from 2019 to 2024.",
        "This resurgence in investor activity highlights the growing interest in Dubai's real estate market as a lucrative investment avenue.",
        "High-net-worth individuals (HNWIs) and family offices are increasingly allocating capital towards Dubai for long-term portfolio diversification.",
        "Buyers are showing a preference for luxury and waterfront properties, reflecting confidence in premium real estate segments.",
      ],
    },

    {
      title: "CASH Vs MORTGAGE BUYING",
      imageSrc: cashVsMortgage,
      items: [
        "Mortgage buyers have traditionally dominated transactions in the past, but over the past two years, cash buyers have emerged in majority because interest rates have gone up.",
        "This shift has been driven by an increasing influx of high-net- worth individuals and global investors who favour cash purchases to expedite transactions and eliminate financing costs.",
        "In 2023, the disparity was particularly striking, with mortgage buyers accounting for only 35% of transactions compared to 65% for cash buyers.",
        "However, this gap has narrowed significantly in 2024, resulting in an almost equal split between the two groups.",
      ],
    },
  ];

  const transactionData = [
    "In 2024, Dubai recorded a remarkable 528,476 total rental transactions, valued at AED 44.23 billion, underscoring the city's thriving residential rental market.",
    "This milestone reflects a balanced and maturing market, with both tenants and landlords showing a strong preference for stability and long—term planning.",
    "In 2024, renewal contracts accounted for 60% of all rental agreements, maintaining the upward trend observed in recent years.",
    "This highlights tenants' increasing inclination to lock in favourable rental terms and avoid the inconvenience of frequent relocations.",
    "For landlords, these renewals provide the advantage of reduced void periods, ensuring steady income streams in a gradually stabilising rental market.",
  ];

  const countriesData = [
    "India and the UK have consistently dominated the buyer charts, maintaining their positions as the top two nationalities purchasing properties.",
    "Followed by China, Saudi Arabia, Russia, Italy and UAE themselves in the top 7 nationalities purchasing properties.",
    "Their sustained interest highlights the enduring appeal of Dubai's real estate market for these demographics.",
    "Meanwhile, France, Poland & United States complete the 10 positions, replacing. This change underscores Dubai's growing allure among diverse European markets.",
  ];
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-col gap-10 md:gap-12 lg:gap-16">
      {!isMobile ? (
        <FitText className="font-semibold">
          NOTICABLE STATISTICS FOR INVESTING IN DUBAI REAL ESTATE
        </FitText>
      ) : (
        <div>
          <FitText className="font-semibold">
            NOTICABLE STATISTICS FOR
          </FitText>
          <FitText className="font-semibold">
            INVESTING IN DUBAI REAL ESTATE
          </FitText>
        </div>
      )}
      <GraphCard data={salesData[0]} reverse={true} height={"h-[13rem]"} />
      <hr />
      <div className="flex items-center gap-4 flex-wrap lg:flex-nowrap overflow-hidden">
        <div className="h-full md:h-full lg:h-[33rem] w-full lg:w-[50%] flex-none overflow-hidden bg-[#F4F3F3]">
          <img
            src={salesBreakdownGraph}
            alt="image"
            className="h-full w-full object-cover lg:object-contain"
          />
        </div>
        <div className="h-full md:h-full lg:h-[33rem] w-full lg:w-[25%]  overflow-hidden">
          <img
            src={salesBreakdownCard}
            alt="image"
            className="h-full w-full object-fill"
          />
        </div>
        <div className="h-full md:h-full lg:h-[33rem] w-full lg:w-[25%]  overflow-hidden">
          <img
            src={salesBreakdownCard2}
            alt="image"
            className="h-full w-full object-fill"
          />
        </div>
      </div>

      <hr />
      <GraphCard data={salesData[1]} reverse={false} height={"h-[15rem]"} />
      <hr />
      <div>
        {!isMobile ? (
          <FitText className="text-headline">
            AVERAGE SALES PRICE PER SQ FT (AED)
          </FitText>
        ) : (
          <FitText className="text-headline leading-tight">
            AVERAGE SALES PRICE <br /> PER SQ FT (AED)
          </FitText>
        )}
        <div className="lg:h-full w-full overflow-hidden">
          <img
            src={avgSalesPrice}
            alt="image"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <hr />
      <GraphCard data={salesData[2]} reverse={true} height={"15rem"}/>
      <hr />
      <GraphCard data={salesData[3]} reverse={false} height={"15rem"} />
      <hr />

      <div className="flex flex-col gap-4">
        <FitText className="font-semibold">
          TOTAL RENTAL TRANSACTIONS
        </FitText>
        {isMobile && (
          <div className="flex flex-wrap md:flex-wrap lg:flex-nowrap items-center gap-4">
            <div className="h-full md:h-[33rem] lg:h-[35rem] w-full">
              <img
                src={transaction}
                alt="transaction"
                className="w-full h-full object-contain md:object-cover lg:object-cover object-top rounded-lg"
              />
            </div>
            <div className="h-full md:h-[33rem] lg:h-[35rem] w-full  ">
              <img
                src={transactionFinal}
                alt="transaction-2"
                className="w-full h-full object-contain md:object-cover lg:object-cover object-top rounded-lg"
              />
            </div>
          </div>
        )}
        {transactionData.map((data) => (
          <div className="flex gap-2 items-start mb-2">
            <div>
              <BiCheck size={20} />
            </div>
            <p className="text-subtitle">{data}</p>
          </div>
        ))}
        {!isMobile && (
          <div className="flex flex-wrap md:flex-nowrap lg:flex-nowrap items-center gap-4">
            <div className="h-full md:h-[33rem] lg:h-[35rem] w-full p-4 ">
              <img
                src={transaction}
                alt="transaction"
                className="w-full h-full object-contain md:object-cover lg:object-contain object-top bg-[#F4F3F3]  rounded-lg"
              />
            </div>
            <div className="h-full md:h-[33rem] lg:h-[35rem] w-full p-4 ">
              <img
                src={transactionFinal}
                alt="transaction-2"
                className="w-full h-full object-contain md:object-cover lg:object-contain object-top bg-[#F4F3F3] rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
      <hr />

      <div className="flex flex-col gap-4">
        <div className="h-full md:h-full lg:h-full w-full flex flex-col gap-4">
          {!isMobile ? (
            <FitText>
              GLOBAL INVESTORS & COUNTRIES FROM WHERE THEY ARE INVESTING
            </FitText>
          ) : (
            <FitText>
              GLOBAL INVESTORS & COUNTRIES <br /> FROM WHERE THEY ARE INVESTING
            </FitText>
          )}
          {isMobile && (
            <div className="h-full w-full p-4 border border-gray-300 rounded-lg bg-white overflow-hidden">
              <img
                src={WorldMap}
                alt="world-map"
                className="w-full h-full object-contain   rounded-lg scale-[1.2]"
              />
            </div>
          )}
          <ul>
            {countriesData.map((data) => (
              <div className="flex gap-2 items-start mb-6">
                <div>
                  <BiCheck size={20} />
                </div>
                <p className="text-subtitle">{data}</p>
              </div>
            ))}
          </ul>
          {!isMobile && (
            <div className="h-full w-full p-4 border border-gray-300 rounded-lg bg-white overflow-hidden">
              <img
                src={WorldMap}
                alt="world-map"
                className="w-full h-full object-contain   rounded-lg md:scale-[1.2]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RealEstate;
