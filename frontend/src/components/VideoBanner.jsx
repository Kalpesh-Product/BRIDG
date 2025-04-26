import Dubai1 from "../assets/media/videos/dubai-main.webm";
import { ReactFitty } from "react-fitty";

export default function VideoBanner({ text, subtext }) {
  return (
    <div className="h-[70vh] relative border-gray-300 rounded-lg overflow-hidden">
      <video
        src={Dubai1}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover rounded-lg pointer-events-none"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black grid grid-cols-2 rounded-lg">
        <div className="w-full"></div>
        <div className="w-full"></div>
        <div className="w-full p-4 col-span-2 flex items-end mb-8">
          <div className="flex w-full">
            <div className="px-2 text-white text-start flex w-full md:w-[60%] lg:w-[60%] flex-col gap-2">
              <ReactFitty className="text-title md:text-hero lg:text-hero">{text}</ReactFitty>
              {subtext && (
                <ReactFitty className="text-subtitle md:text-title lg:text-display">
                  {subtext}
                </ReactFitty>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
