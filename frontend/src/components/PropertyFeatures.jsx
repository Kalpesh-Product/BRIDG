import { FaStar } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { BsChatSquareQuote } from "react-icons/bs";
import { MdOutlineBadge } from "react-icons/md";

const ContentHighlight = () => {
  return (
    <section className="bg-[#DBD8D5] py-8 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-4 gap-8">
        {/* Left Content */}
        <div className="col-span-1">
          <h2 className="text-4xl font-serif font-light leading-snug">
            Helping you make <span className="italic font-semibold">confident</span> property decisions
          </h2>
          <div className="mt-4 flex items-center text-gray-600 font-medium cursor-pointer hover:underline">
            <FaStar className="mr-2 text-gray-400" /> WHY CHOOSE NOMAD HOMES?
          </div>
        </div>

        {/* Right Content */}
        <div className="col-span-3 grid grid-cols-2 gap-6 border-l pl-8">
          <div className="space-y-10">
            <div className="flex items-start">
              <FaStar className="mr-3 text-gray-400 text-xl" />
              <div>
                <h3 className="font-semibold">OVER 10 YEARS</h3>
                <p className="text-gray-600 text-sm">of Real Estate Expertise</p>
              </div>
            </div>
            <div className="flex items-start">
              <IoHomeOutline className="mr-3 text-gray-400 text-xl" />
              <div>
                <h3 className="font-semibold">5,000+ VILLAS SOLD</h3>
                <p className="text-gray-600 text-sm">across Dubai</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-start">
              <BsChatSquareQuote className="mr-3 text-gray-400 text-xl" />
              <div>
                <h3 className="font-semibold">5/5 • GOOGLE RATING</h3>
                <p className="text-gray-600 text-sm">Trusted by homebuyers</p>
              </div>
            </div>
            <div className="flex items-start">
              <MdOutlineBadge className="mr-3 text-gray-400 text-xl" />
              <div>
                <h3 className="font-semibold">CERTIFIED CONSULTANTS</h3>
                <p className="text-gray-600 text-sm">with local market expertise</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentHighlight;