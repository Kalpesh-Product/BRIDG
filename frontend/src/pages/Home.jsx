import AnimatedCard from "../components/AnimatedCard/AnimatedCard";
import TextCard from "../components/TextCard/TextCard";
import WorldMap from "../assets/media/images/world-map-bridg.png";
import TestimonialCard from "../components/Testimonials/TestimonialCard";
import { useKeenSlider } from "keen-slider/react";
import { useNavigate } from "react-router-dom";
import VideoBanner from "../components/VideoBanner";
import { Avatar } from "@mui/material";
import Abrar from "../assets/abrar.jpg"

const Home = () => {
  const navigate = useNavigate();
  const [sliderRef] = useKeenSlider({
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
  //---------------------------------------------------Publishers array----------------------------------------------//
  //---------------------------------------------------Publishers array----------------------------------------------//
  //---------------------------------------------------Features array----------------------------------------------//
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
    <div className="flex flex-col gap-20">
      <div className="flex flex-col gap-4">
        {/* Video Section */}
        <VideoBanner
          text="An Easy BRIDG for Non-Residents"
          subtext="to invest in High ROI Real Estate in UAE"
        />

        {/* Button Section */}
        <div className="flex flex-wrap md:flex-nowrap sm:flex-wrap gap-4  items-center">
          <div
            className="w-full md:w-1/2"
            onClick={() => {
              navigate("/partnerships");
            }}
          >
            <TextCard
              title={"Connect With Us"}
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
              title={"How It Works"}
              description={
                "How easy it is via our BRIDG to make a High ROI Real Estate Protfolio"
              }
            />
          </div>
        </div>
      </div>

      {/* Text Section */}
      <div className="flex flex-col">
        <p className="text-headline md:text-display">
          Starting from finding the highest ROI Real Estate Property for
          investment to mortgage if required to monthly property maintenance and
          monthly
        </p>
        <p className="text-headline md:text-display text-gray-600">
          ROI till Exit and again Fresh Investments! our dream a reality.
        </p>
      </div>

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

      {/* World Map Image */}
      <div className="h-[30vh] md:h-[60vh] lg:h-[80vh] w-full  overflow-hidden">
        <div className="h-full w-full p-4 border border-gray-300 rounded-lg">
          <img
            src={WorldMap}
            alt="world-map"
            className="w-full h-full object-contain   rounded-lg"
          />
        </div>
      </div>

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
          <div className="flex flex-col lg:w-[30%] h-96 justify-between items-center text-start bg-[#525d72] rounded-xl p-4 gap-4">
        

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
                src="https://randomuser.me/api/portraits/men/32.jpg"
                sx={{ width: 64, height: 64, border: "2px solid white" }}
              />
              <Avatar
                alt="Consultant 3"
                src="https://randomuser.me/api/portraits/men/65.jpg"
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
