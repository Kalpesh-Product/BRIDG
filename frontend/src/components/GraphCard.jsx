import React from 'react';

import image1 from '../assets/graphImages/image 1.png'
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

const GraphCard= () => {
  const buyerProfileData =[
    {
      title: "BUYERS PROFILE",
      imageSrc: image1,
      items: [
        "The 2024 uptick in investor activity aligns with the recovery in global markets, the launch of high-demand off-plan projects, and the growing perception of Dubai as a stable investment hub.",
        "Investors have consistently represented the majority of buyers from 2019 to 2024.",
        "Share has fluctuated over the years, starting at a high of 71% in 2019 and gradually declining to 56% in 2023 before rebounding to 62% in 2024.",
        "This resurgence in investor activity highlights the growing interest in Dubai’s real estate market as a lucrative investment avenue."
      ]
    },
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
      title: "BUYERS PROFILE",
      imageSrc: image2,
      items: [
        "The 2024 uptick in investor activity aligns with the recovery in global markets, the launch of high-demand off-plan projects, and the growing perception of Dubai as a stable investment hub.",
        "Investors have consistently represented the majority of buyers from 2019 to 2024.",
        "Share has fluctuated over the years, starting at a high of 71% in 2019 and gradually declining to 56% in 2023 before rebounding to 62% in 2024.",
        "This resurgence in investor activity highlights the growing interest in Dubai’s real estate market as a lucrative investment avenue."
      ]
    },
  ];

  return (
    <div>
      {
        buyerProfileData.map((data)=>(
          <Card
        title={data.title}
        imageSrc={data.imageSrc}
        items={data.items}
      />
        ))
      }
    </div>
  );
};

export default GraphCard;


