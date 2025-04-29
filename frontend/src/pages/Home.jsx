import AnimatedCard from "../components/AnimatedCard/AnimatedCard";
import TextCard from "../components/TextCard/TextCard";
import WorldMap from "../assets/media/images/world-map-final-the-last-map.png";
import TestimonialCard from "../components/Testimonials/TestimonialCard";
import { useKeenSlider } from "keen-slider/react";
import { useNavigate } from "react-router-dom";
import { Avatar, Skeleton } from "@mui/material";
import Abrar from "../assets/abrar.jpg";
import Kashif from "../assets/media/images/kashif.jpg";
import profileimage3 from "../assets/profile3.jpg";
import profileimage2 from "../assets/profile2.jpg";
import Dubai from "../assets/media/videos/dubai-main.webm";
import { ReactFitty } from "react-fitty";
import { lazy, Suspense } from "react";
const VideoBanner = lazy(() => import("../components/VideoBanner"));
import { BiCheck } from "react-icons/bi";
import { useEffect } from "react";
import useIsMobile from "../hooks/useIsMobile";

const Home = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
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
    }, 4000);

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
        "BRIDG to become the easiest platform to invest for Non-Residents in Dubai Real Estate.",
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
        "Bridg guided us through all the process with a lot of patience and professionalism.",
    },
  ];
  //---------------------------------------------------Testimonials array----------------------------------------------//

  return (
    <div className="flex flex-col gap-8 md:gap-12 lg:gap-12">
      <div className="flex flex-col gap-4">
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
            video={Dubai}
            text="An Easy BRIDG for Non-Residents"
            subtext="to invest in High ROI Real Estate in Dubai"
            objectPosition={"object-center"}
          />
        </Suspense>

        {/* Button Section */}
        <div className="flex flex-wrap md:flex-nowrap sm:flex-wrap gap-2  items-center">
          <div
            className="w-full md:w-1/2"
            onClick={() => {
              navigate("/real-estate");
            }}
          >
            <TextCard
              title={"DUBAI REAL ESTATE STATISTICS"}
              description={
                "Contact us for FREE advice to invest in Dubai from any country"
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
      <div className="flex flex-col flex-1 gap-4">
        <div className="font-semibold">
          {!isMobile ? (
            <ReactFitty>MISSION AND VISION FOR OUR INVESTORS</ReactFitty>
          ) : (
            <ReactFitty>
              MISSION AND VISION <br /> FOR OUR INVESTORS
            </ReactFitty>
          )}
        </div>
        <div className="flex flex-col w-full justify-center items-start md:items-center lg:items-center text-start">
          <div className="w-full md:w-[70%]">
            {missions.map((text) => (
              <div key={text.id} className="flex gap-2 items-start mb-2">
                <BiCheck size="20" />
                <p className="text-base md:text-subtitle">{text.content}</p>
              </div>
            ))}
          </div>
        </div>
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
      <div className="h-[30vh] md:h-[60vh] lg:h-[45rem] w-full flex flex-col gap-4 ">
        {!isMobile ? (
          <ReactFitty className="font-semibold">
            TOP 10 CROSSBORDER INVESTORS COUNTRIES{" "}
          </ReactFitty>
        ) : (
          <ReactFitty className="font-semibold">
            TOP 10 CROSSBORDER <br /> INVESTORS COUNTRIES{" "}
          </ReactFitty>
        )}
        <div className="h-full w-full p-4 border border-gray-300 rounded-lg overflow-hidden bg-white">
          <img
            src={WorldMap}
            alt="world-map"
            className="w-full h-full object-contain rounded-lg scale-110"
          />
        </div>
      </div>

      <hr />

      {/* Testionial Section */}
      <div className="flex flex-col gap-4">
        <div className="uppercase font-semibold">
          {!isMobile ? (
            <ReactFitty>What our investors say about us!</ReactFitty>
          ) : (
            <ReactFitty>
              What our investors <br /> say about us!
            </ReactFitty>
          )}
        </div>
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
              Speak with your Personal Guide today!
            </h2>

            {/* Consultant Avatars */}
            <div className="flex -space-x-4 w-full">
              <Avatar
                alt="Consultant 1"
                src={Abrar}
                sx={{
                  width: 103,
                  height: 103,
                  border: "2px solid white",
                  "& img": {
                    transform: "scale(1.1)",
                    transformOrigin: "center center",
                    objectFit: "contain", // ✅ important
                  },
                }}
              />
              <Avatar
                alt="Consultant 2"
                src={Kashif}
                sx={{
                  width: 103,
                  height: 103,
                  border: "2px solid white",
                  "& img": {
                    transform: "scale(1.5) translate(0px, 10px)", // ✅ move the image UP a bit
                    transformOrigin: "center",
                    objectFit: "contain",
                  },
                }}
              />

              <Avatar
                alt="Consultant 3"
                src={profileimage2}
                sx={{
                  width: 103,
                  height: 103,
                  border: "2px solid white",
                  "& img": {
                    transform: "scale(1.5)",
                    transformOrigin: "center center",
                    objectFit: "contain", // ✅ important
                  },
                }}
              />
            </div>

            {/* Description */}
            <p className="text-white text-sm">
              The BRIDG Team is very patient and will ensure that we provide you
              with the most honest and appropriate Property Purchase and High
              ROI strategy and closure. If you don’t succeed … BRIDG don’t
              succeed!
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
