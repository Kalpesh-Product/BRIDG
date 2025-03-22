import Dubai1 from "../assets/media/videos/dubai-main.webm";
import AnimatedCard from "../components/AnimatedCard/AnimatedCard";
import TextCard from "../components/TextCard/TextCard";
import WorldMap from "../assets/media/images/world-map-bridg.png";
import TestimonialCard from "../components/Testimonials/TestimonialCard";

const Home = () => {
  //---------------------------------------------------Publishers array----------------------------------------------//
  const publishers = [
    { id: 1, publisher: "Forbes" },
    { id: 2, publisher: "Fast Company" },
    { id: 3, publisher: "Entrepreneur" },
  ];
  //---------------------------------------------------Publishers array----------------------------------------------//
  //---------------------------------------------------Features array----------------------------------------------//
  const features = [
    { id: 1, title: "Trusted by Investors in Asia, Europe & Middle East" },
    { id: 2, title: "Secured Investment with Highest ROI" },
    { id: 3, title: "End-To-End BRIDG" },
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
    <div className="flex flex-col gap-16">
      <div className="flex flex-col gap-4">
        {/* Video Section */}
        <div className="h-[70vh] relative border-[0.5px] border-gray-300 rounded-lg overflow-hidden">
          <video
            src={Dubai1}
            controls
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover rounded-lg pointer-events-none"
          />

          <div className="absolute inset-0 bg-black/10  grid grid-cols-2 rounded-lg">
            <div className="w-full p-4">
              <p className="text-hero text-white">
                An Easy BRIDG for
                <br /> Non-Residents to invest in High ROI Real Estate in UAE
              </p>
            </div>
            <div className="w-full"></div>
            <div className="w-full flex gap-4 p-4 justify-start items-end">
              {publishers.map((item) => (
                <p key={item.id} className="text-white">
                  {item.publisher}
                </p>
              ))}
            </div>
            <div className="w-full"></div>
          </div>
        </div>

        {/* Button Section */}
        <div className="flex gap-4  items-center">
          <TextCard
            title={"Connect With Us"}
            description={
              "Contact us for FREE advice to invest in UAE from any counrty"
            }
          />
          <TextCard
            title={"Connect With Us"}
            description={
              "Contact us for FREE advice to invest in UAE from any counrty"
            }
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="flex flex-col">
        <p className="text-display">
          Starting from finding the highest ROI Real Estate Property for
          investment to mortgage if required to monthly property maintenance and
          monthly
        </p>
        <p className="text-display text-gray-600">
          ROI till Exit and again Fresh Investments! our dream a reality.
        </p>
      </div>

      {/* Three Cards section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {features.map((item) => (
          <AnimatedCard key={item.id} title={item.title} />
        ))}
      </div>

      {/* World Map Image */}
      <div>
        <div className="h-full w-full p-4 border-[0.5px] border-gray-300 rounded-lg">
          <img src={WorldMap} alt="world-map" />
        </div>
      </div>

      {/* Testionial Section */}
      <div className="overflow-x-auto w-full flex gap-4">
        {testimonials.map((item, index) => (
          <TestimonialCard
            key={index}
            initials={item.initials}
            name={item.name}
            review={item.review}
            rating={item.rating}
          />
        ))}
      </div>
      <Test/>
    </div>
  );
};

export default Home;
