import React from 'react';

import image2 from '../assets/graphImages/image 2.png'
import image3 from '../assets/graphImages/image 3.png'
import image4 from '../assets/graphImages/image 4.png'
import image5 from '../assets/graphImages/image 5.png'

const Card = ({ title, imageSrc, items }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto">
      <div className="flex flex-col items-center">
        {imageSrc && (
          <img src={imageSrc} alt={title} className="w-full max-w-2xl rounded-lg mb-8" />
        )}
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
        <ul className="list-disc list-outside space-y-3 text-gray-700 pl-5">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const GraphCard= ({buyerProfileData}) => {
    buyerProfileData =[
    {
      title: "BUYERS PROFILE",
      imageSrc: image2,
      items: [
        "The 2024 uptick in investor activity aligns with the recovery in global markets, the launch of high-demand off-plan projects, and the growing perception of Dubai as a stable investment hub.",
        "Investors have consistently represented the majority of buyers from 2019 to 2024.",
        "Share has fluctuated over the years, starting at a high of 71% in 2019 and gradually declining to 56% in 2023 before rebounding to 62% in 2024.",
        "This resurgence in investor activity highlights the growing interest in Dubai’s real estate market as a lucrative investment avenue."
      ]
    },
    {
      title: "CASH OR MORTGAGE BUYERS",
      imageSrc: image3,
      items: [
        "Mortgage buyers have traditionally dominated buying transactions.",
        "Over the past two years, cash buyers have emerged as the majority because interest rates have gone up.",
        "The shift to cash buyers has been driven by an increasing influx of high-net-worth individuals and global investors who favor cash purchases to expedite transactions and eliminate financing costs.",
        "In 2023, the disparity was particularly striking, with mortgage buyers accounting for only 35% of transactions compared to 65% for cash buyers.",
        "This gap has narrowed significantly in 2024, resulting in an almost equal split between the two groups."
      ]
    },
    {
      title: "TOTAL ACTUAL RENTAL CONTRACTS",
      imageSrc: image4,
      items: [
        "In 2024, Dubai recorded a remarkable 528,476 total rental transactions.",
        "The total value of rental contracts was AED 44.23 billion, underscoring the city's thriving residential rental market.",
        "This milestone reflects a balanced and maturing market, with both tenants and landlords showing a strong preference for stability and long-term planning."
      ]
    },
    {
      title: "TOTAL ACTUAL NEW & RENEWED CONTRACTS",
      imageSrc: image5,
      items: [
        "In 2024, renewal contracts accounted for 60% of all rental agreements, maintaining the upward trend observed in recent years.",
        "This highlights tenants' increasing inclination to lock in favorable rental terms and avoid the inconvenience of frequent relocations.",
        "For landlords, these renewals provide the advantage of reduced void periods, ensuring steady income streams in a gradually stabilizing rental market."
      ]
    },
  ];

  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-2 gap-6">
      {
        buyerProfileData.map((data)=>{
          return (
            <Card
          title={data.title}
          imageSrc={data.imageSrc}
          items={data.items}
        />
          )
        })
      }
    </div>
  );
};

export default GraphCard;


