import image from "../../assets/image1.jpg";
import geography from "../../assets/geography.jpg"
import roi from "../../assets/roi.png"
import endToEndBridg from "../../assets/end-to-end-bridg.png"
import resident from "../../assets/resident_mortgages.webp"
import nonResident from "../../assets/non_resident_mortgages.webp"
import equity from "../../assets/equity_mortgages.webp"

const imageMap = {
  geography,
  roi,
  endToEndBridg,
  resident,
  nonResident,
  equity,
  default: "",
};

const AnimatedCard = ({ imageSrc, title, description }) => {
  const resolvedImage = imageMap[imageSrc] || imageMap["default"];

  return (
    <div className="bg-white rounded-xl shadow-md text-start flex flex-col justify-center p-6 w-full lg:w-full h-full gap-4">
      <div className="flex justify-center items-center h--40 rounded-xl overflow-hidden">
        <img
          src={resolvedImage}
          alt="Card Icon"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-lg md:text-lg font-semibold leading-snug">{title}</h3>
        {Array.isArray(description)? <ul className="mt-1 space-y-1">
          {description?.map((text, i) => (
            <li key={i} className="text-gray-500 text-sm md:text-base">
              {text}
            </li>
          ))}
        </ul>:
        <p>{description}</p>}
      </div>
    </div>
  );
};





export default AnimatedCard;