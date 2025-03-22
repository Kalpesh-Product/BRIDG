import { ArrowUpRight } from "lucide-react";

const TextCard = ({ title, description, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex justify-between items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition cursor-pointer w-80"
    >
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-500 text-sm">{description}</p>
      </div>
      <div className="p-2 bg-gray-100 rounded-full">
        <ArrowUpRight className="w-5 h-5 text-gray-600" />
      </div>
    </a>
  );
};

export default TextCard;
