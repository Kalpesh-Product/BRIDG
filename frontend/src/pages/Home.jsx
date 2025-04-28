import AnimatedCard from "../components/AnimatedCard/AnimatedCard";
import TextCard from "../components/TextCard/TextCard";
import WorldMap from "../assets/media/images/world-map-bridg-pica.png";
import TestimonialCard from "../components/Testimonials/TestimonialCard";
import { useKeenSlider } from "keen-slider/react";
import { useNavigate } from "react-router-dom";
import VideoBanner from "../components/VideoBanner";
import { Avatar } from "@mui/material";
import Abrar from "../assets/abrar.jpg";
import profileimage3 from "../assets/profile3.jpg";
import profileimage2 from "../assets/profile2.jpg";
import Dubai from "../assets/media/videos/dubai-main.webm";
import { ReactFitty } from "react-fitty";
import { BiCheck } from "react-icons/bi";
import { useEffect } from "react";

const Home = () => {
  const navigate = useNavigate();
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slides: {
      perView: 2,
      spacing: 16,
    },

    breakpoints: {
      "(max-width: 768px)": {
        slides: { perView: 1 },
      },
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      slider?.current.next();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [slider]);
  //---------------------------------------------------Publishers array----------------------------------------------//
  //---------------------------------------------------Publishers array----------------------------------------------//
  //---------------------------------------------------Features array----------------------------------------------//

  const missions = [
    {
      id: 1,
      content:
        "BRIDG to become the easiest platform to invest for Non-Residents in UAE Real Estate.",
    },
    {
      id: 2,
      content:
        "Curate the highest ROI Real Estate Properties for your investment.",
    },
    {
      id: 3,
      content: "On-board a Tanent for immediate ROI by the time you invest.",
    },
    {
      id: 4,
      content:
        "Structure and organise for mortgage if required for your investment.",
    },
    {
      id: 5,
      content:
        "Ensure timely and monthly returns with annual escalations and compliances.",
    },
    {
      id: 6,
      content:
        "Manage your property and maintain the same with highest standards.",
    },
    {
      id: 7,
      content:
        "Design an Exit if required for any of your properties invested via us if you need immediate liquidity.",
    },
  ];

  const features = [
    {
      id: 1,
      title: "Trusted Across Asia, Europe & Middle East",
      image: "geography",
      content: [
        "High Networth Individuals",
        "Family Offices & Funds",
        "Investment Bankers",
      ],
    },
    {
      id: 2,
      title: "Secured Investment with Highest ROI",
      image: "roi",
      content: [
        "Direct Investment on your name",
        "Highest Appreciation & ROI",
        "ROI deployment for new investments",
      ],
    },
    {
      id: 3,
      title: "End-To-End BRIDG",
      image: "endToEndBridg",
      content: [
        "Highly curated and opportunistic",
        "Secured monthly returns",
        "Fully managed & serviced with Tech",
      ],
    },
  ];
  //---------------------------------------------------Features array----------------------------------------------//
  //---------------------------------------------------Testimonials array----------------------------------------------//
  const testimonials = [
    {
      initials: "DD",
      name: "Dariha",
      rating: 5,
      review:
        "The market has a huge gap on a one-stop shop with personalized service. The team delivered an end-to-end service.",
    },
    {
      initials: "MS",
      name: "Maxime S.",
      rating: 5,
      review:
        "Purchasing a property in Dubai can be challenging. We worked with Levent Tensel, senior mortgage consultant at Huspy, for...",
    },
    {
      initials: "KK",
      name: "Karan",
      rating: 5,
      review:
        "They got the best rates from the banks with the competitive rates from rest of the market.",
    },
    {
      initials: "AA",
      name: "Alexandar",
      rating: 5,
      review:
        "[Huspy] guided us through all the process with a lot of patience and professionalism.",
    },
  ];
  //---------------------------------------------------Testimonials array----------------------------------------------//

  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-4">
        {/* Video Section */}
        <VideoBanner
          video={Dubai}
          text="An Easy BRIDG for Non-Residents"
          subtext="to invest in High ROI Real Estate in UAE"
        />

        {/* Button Section */}
        <div className="flex flex-wrap md:flex-nowrap sm:flex-wrap gap-4  items-center">
          <div
            className="w-full md:w-1/2"
            onClick={() => {
              navigate("/real-estate");
            }}
          >
            <TextCard
              title={"DUBAI REAL ESTATE STATISTICS"}
              description={
                "Contact us for FREE advice to invest in UAE from any counrty"
              }
            />
          </div>
          <div
            className="w-full md:w-1/2"
            onClick={() => {
              navigate("/how-it-works");
            }}
          >
            <TextCard
              title={"HOW IT WORKS"}
              description={
                "How easy it is via our BRIDG to make a High ROI Real Estate Protfolio"
              }
            />
          </div>
        </div>
      </div>

      <hr />
      <div className="flex flex-col gap-4">
        <ReactFitty>OUR MISSION AND VISION FOR OUR INVESTORS</ReactFitty>
        {missions.map((text) => (
          <div key={text.id} className="flex gap-1 items-center">
            <BiCheck size="20" />
            <p className="text-base md:text-body">{text.content}</p>
          </div>
        ))}
      </div>

      <hr />

      {/* Text Section */}
      <div className="flex flex-col gap-4">
        <p className="text-headline md:text-display">
          Starting from finding the highest ROI Real Estate Property for
          investment along with its tenant for immediate monthly ROI. To getting
          you mortgage if required and maintaining your property.
        </p>
        <p className="text-headline md:text-display">
          And finally if required we also work in a structured manner to get you
          an exit if required for any of your properties invested via us if you
          need immediate liquidity.
        </p>
      </div>

      <hr />

      {/* Three Cards section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-20">
        {features.map((item) => (
          <AnimatedCard
            key={item.id}
            title={item.title}
            description={item.content}
            imageSrc={item.image}
          />
        ))}
      </div>

      <hr />

      {/* World Map Image */}
      <div className="h-[30vh] md:h-[60vh] lg:h-[80vh] w-full flex flex-col gap-4 ">
        <ReactFitty>TOP 10 COUNTRIES INVESTING IN UAE</ReactFitty>
        <div className="h-full w-full p-4 border border-gray-300 rounded-lg">
          <img
            src={WorldMap}
            alt="world-map"
            className="w-full h-full object-contain   rounded-lg"
          />
        </div>
      </div>

      <hr />

      {/* Testionial Section */}
      <div className="flex flex-col gap-4">
        <p className="text-display">What our investors say about us!</p>
        <div className=" rounded-lg flex flex-wrap md:flex-wrap lg:flex-nowrap items-start gap-4 h-full">
          <div className="w-full md:w-full lg:w-[70%] overflow-x-auto ">
            <div ref={sliderRef} className="keen-slider">
              {testimonials.map((item, index) => (
                <div className="keen-slider__slide w-full" key={index}>
                  <TestimonialCard
                    initials={item.initials}
                    name={item.name}
                    review={item.review}
                    rating={item.rating}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col lg:w-[30%] h-full lg:h-96 justify-between items-center text-start bg-[#525d72] rounded-xl p-4 gap-4">
            {/* Headline */}
            <h2 className="text-white text-start self-start text-headline font-semibold leading-tight">
              Speak to our Investment Experts today!
            </h2>

            {/* Consultant Avatars */}
            <div className="flex -space-x-4 w-full">
              <Avatar
                alt="Consultant 1"
                src={Abrar}
                sx={{ width: 64, height: 64, border: "2px solid white" }}
              />
              <Avatar
                alt="Consultant 2"
                src={profileimage3}
                sx={{ width: 64, height: 64, border: "2px solid white" }}
              />
              <Avatar
                alt="Consultant 3"
                src={profileimage2}
                sx={{ width: 64, height: 64, border: "2px solid white" }}
              />
            </div>

            {/* Description */}
            <p className="text-white text-sm">
              With over 25 years of experience, our colleagues can provide
              guidance and knowledge on the entire UAE Real Estate High ROI
              Portfolio Structures and template process seamlessly.
            </p>

            {/* Contact Button */}
            <button
              className="w-full bg-primary rounded-3xl py-[0.75rem]"
              onClick={() => navigate("/contact")}
            >
              Contact us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
