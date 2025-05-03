import { ReactFitty } from "react-fitty";
import FitText from "./FitText/FitText";

export default function VideoBanner({
  text,
  subtext,
  video,
  underText,
  width,
  objectPosition,
  placeholder,
}) {
  return (
    <div className="h-[40vh] lg:h-[68vh] relative border-gray-300 rounded-lg overflow-hidden mb-2">
      <video
        autoPlay
        muted
        loop
        poster={placeholder ? placeholder : ""}
        playsInline
        className={`w-full h-full object-cover rounded-lg pointer-events-none ${
          objectPosition ? objectPosition : "object-bottom"
        } `}
      >
        <source src={video} />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black grid grid-cols-2 rounded-lg">
        <div className="w-full"></div>
        <div className="w-full"></div>
        <div className="w-full p-4 col-span-2 flex items-end">
          <div className="flex w-full">
            <div
              className={`px-2 text-white text-start flex w-full md:w-[80%] ${
                width ? width : "lg:w-[60%]"
              }  flex-col gap-1`}
            >
              <FitText className="text-title md:text-hero lg:text-hero">
                {text}
              </FitText>
              <div className="flex flex-col gap-2 md:flex-row md:w-full lg:flex-row lg:w-full">
                {subtext && <FitText>{subtext}</FitText>}
                {underText && <FitText>{underText}</FitText>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
