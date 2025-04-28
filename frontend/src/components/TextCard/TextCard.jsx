import { ArrowUpRight } from "lucide-react";

const TextCard = ({ title, description, link }) => {
  return (
    <button className="flex justify-between w-full items-start text-start p-4 bg-primary rounded-xl shadow-md hover:shadow-lg transition cursor-pointer border-[0.3px] border-gray-200">
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-500 text-sm">{description}</p>
      </div>
      <div className="p-2 bg-gray-100 rounded-full hover:bg-gray-600 transition-all text-gray-600 hover:text-gray-100">
        <ArrowUpRight className="w-5 h-5  transition-all" />
      </div>
    </button>
  );
};

export default TextCard;
