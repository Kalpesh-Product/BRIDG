import image from "../../assets/image1.jpg";
import geography from "../../assets/geography.png"
import roi from "../../assets/roi.png"
import endToEndBridg from "../../assets/end-to-end-bridg.png"

const imageMap = {
  geography,
  roi,
  endToEndBridg,
  default: "",
};

const AnimatedCard = ({ imageSrc, title, description }) => {
  const resolvedImage = imageMap[imageSrc] || imageMap["default"];

  return (
    <div className="bg-white rounded-xl shadow-md text-start flex flex-col justify-start items-stretch p-6 w-full h-full">
      <div className="flex justify-center items-center h-[50%]">
        <img
          src={resolvedImage}
          alt="Card Icon"
          className="h-full w-auto object-contain"
        />
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-lg md:text-xl font-semibold leading-snug">{title}</h3>
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
