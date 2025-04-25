  import Dubai1 from "../assets/media/videos/dubai-main.webm";
import AnimatedCard from "../components/AnimatedCard/AnimatedCard";
import TextCard from "../components/TextCard/TextCard";
import WorldMap from "../assets/media/images/world-map-bridg.png";
import TestimonialCard from "../components/Testimonials/TestimonialCard";
import { useKeenSlider } from "keen-slider/react"
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate()
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
    { id: 1, title: "Trusted by Investors in Asia, Europe & Middle East",
      image:"geography",
      content:["High Networth Individuals",
      "Family Offices & Funds",
      "Investment Bankers",

      ]
     },
    { id: 2, title: "Secured Investment with Highest ROI",
      image:"roi",
      content:["Direct Investment on your name",
        "Highest Appreciation & ROI",
      "ROI deployment for new investments"]
     },
    { id: 3, title: "End-To-End BRIDG",
      image:"endToEndBridg",
      content:["Highly curated and opportunistic","Secured monthly returns",
      "Fully managed & serviced with Tech"
      ]
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
        <div className="h-[70vh] mt-4 sm:mt-0 relative border-[0.5px] border-gray-300 rounded-lg overflow-hidden">
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
            <div className="w-full p-4 pr-0 col-span-2 flex justify-center items-end mb-8">
              <p className="text-title md:text-hero lg:text-hero text-white text-start px-2">
                An Easy BRIDG for Non-Residents to invest in High ROI Real
                Estate in UAE
              </p>
            </div>
          </div>
        </div>

        {/* Button Section */}
        <div className="flex flex-wrap md:flex-nowrap sm:flex-wrap gap-4  items-center">
         <div  
         className="w-full md:w-1/2"
         onClick={()=>{
              navigate("/partnerships")
            }}>
         <TextCard
            title={"Connect With Us"}
            description={
              "Contact us for FREE advice to invest in UAE from any counrty"
            }
          />
         </div>
         <div
         className="w-full md:w-1/2">
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-4">
        {features.map((item) => (
           
             <AnimatedCard key={item.id} title={item.title} description={item.content} imageSrc={item.image}/>
            
         
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
          <div className="w-full h-80 md:w-full lg:w-[30%] sm:full">
            <div className="flex flex-col justify-between bg-[#525d72] rounded-lg border-2  h-full p-4">
              <h2 className="text-title text-primary">
                Speak with our property consultants
              </h2>
              <p className="text-base  text-white">
                With over 20 years of experience working for some of the biggest
                banks in the UAE, they re here to support you every step of the
                way and make sure your clients get their mortgage approved & you
                get your commission.
              </p>
              <button className="w-full bg-primary rounded-lg py-4" onClick={()=>navigate('/contact')}>
                Contact us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
