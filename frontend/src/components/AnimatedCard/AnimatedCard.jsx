import image from "../../assets/image1.jpg";
import geography from "../../assets/geography-second.jpg";
import roi from "../../assets/roi.jpg";
import endToEndBridg from "../../assets/bridg.avif";
import resident from "../../assets/resident_mortgages.webp";
import nonResident from "../../assets/non_resident_mortgages.webp";
import equity from "../../assets/equity_mortgages.webp";
import { BiCheck } from "react-icons/bi";
import { useLocation } from "react-router-dom";

const imageMap = {
  geography,
  roi,
  endToEndBridg,
  resident,
  nonResident,
  equity,
  default: "",
};

const AnimatedCard = ({ imageSrc, title, description, page }) => {
  const resolvedImage = imageMap[imageSrc] || imageMap["default"];
  const location = useLocation();
  console.log(location);

  return (
    <div className="bg-white rounded-xl shadow-md text-start flex flex-col justify-center p-6 w-full lg:w-full h-full gap-4">
      <div className="flex justify-center w-full items-center h-52 rounded-xl overflow-hidden">
        <img
          src={resolvedImage}
          style={{ imageRendering: "auto" }}
          alt="Card Icon"
          className="h-full w-full object-contain scale-125"
        />
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-lg md:text-lg font-semibold leading-snug">
          {title}
        </h3>
        {Array.isArray(description) ? (
          <ul className="mt-1 space-y-1">
            {description?.map((text, i) => (
              <li key={i} className="flex gap-1">
                <BiCheck />
                <p className="text-gray-500 text-sm md:text-base">{text}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>{description}</p>
        )}
      </div>
    </div>
  );
};

export default AnimatedCard;
