import image from "../../assets/image1.jpg"
 

const AnimatedCard = ({ imageSrc, title, description }) => {
    return (
      <div className="bg-white rounded-xl shadow-md p-6 text-center w-80 flex flex-col items-center">
        <img src={image} alt="Card Icon" className="h-20 w-20 object-contain mb-4" />
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-500 text-sm mt-2">{description}</p>
      </div>
    );
};

export default AnimatedCard;


  