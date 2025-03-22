import Dubai1 from "../assets/media/videos/dubai-main.webm";
import TextCard from "../components/TextCard/TextCard";

const Home = () => {
  const publishers = [
    {id : 1, publisher : 'Forbes'},
    {id : 2, publisher : 'Fast Company'},
    {id : 3, publisher : 'Entrepreneur'},
  ]
  return (
    <div className="flex flex-col gap-16">
      {/* Video Section */}
      <div className="h-[60vh] relative border-[0.5px] border-gray-300 rounded-lg overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover rounded-lg pointer-events-none z-0 relative"
        >
          <source src={Dubai1} type="video/mp4"/>
        </video>

        <div className="absolute inset-0 bg-black/10  grid grid-cols-2 rounded-lg">
          <div className="w-full p-4">
            <p className="text-hero text-white">
              An Easy BRIDG for<br/> Non-Residents to invest in High ROI Real Estate
              in UAE
            </p>
          </div>
          <div className="w-full"></div>
          <div className="w-full flex gap-4 p-4 justify-start items-end">
            {publishers.map((item)=>(
              <p key={item.id} className="text-white">{item.publisher}</p>
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

      {/* Text Section */}
      <div>
        <p className="text-headline">Starting from finding the highest ROI Real Estate Property for investment
        to mortgage if required to monthly property maintenance and monthly</p>
      </div>
    </div>
  );
};

export default Home;
