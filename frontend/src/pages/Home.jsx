import Dubai1 from "../assets/media/videos/dubai-main.webm";

const Home = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* Video Section */}
      <div className="h-[60vh] border-[0.5px] border-gray-300 rounded-lg overflow-hidden">
        <video
          src={Dubai1}
          controls
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover rounded-lg pointer-events-none"
        />
      </div>

      {/* Button Section */}
      <div className="flex justify-between items-center">
      
      </div>
    </div>
  );
};

export default Home;
