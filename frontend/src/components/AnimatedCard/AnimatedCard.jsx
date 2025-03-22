import image from "../../assets/image1.jpg";

const AnimatedCard = ({ imageSrc, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md  text-start  h-80 flex flex-col justify-start items-start overflow-hidden gap-2">
      <div className="h-[60%] w-full overflow-hidden">
        <img
          src={image}
          alt="Card Icon"
          className="h-full w-full object-cover mb-4 rouneded-lg"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-500 text-sm mt-2">{description}</p>
      </div>
    </div>
  );
};

export default AnimatedCard;
