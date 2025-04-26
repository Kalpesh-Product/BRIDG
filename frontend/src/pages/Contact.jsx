import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import {
  MdOutlineLocationOn,
  MdOutlineMail,
  MdOutlinePhone,
} from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import logo from "../assets/media/images/logo-transparent.png";

export default function Contact() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Left Side - Map */}
      <div className="md:col-span-2">
        <iframe
          width="100%"
          height="400"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          className="w-full h-[500px] rounded shadow"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Axis%202%20-%20Dubai%20Silicon%20Oasis%20-%20Dubai%20-%20United%20Arab%20Emirates+(Bridg)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.gps.ie/collections/drones/">drones ireland</a>
        </iframe>
      </div>

      {/* Right Side - Contact Info */}
      <article className="w-full flex flex-col md:w-full md:justify-start md:items-start rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
        <div className="p-6 flex justify-center w-full">
          <div className="">
            <img src={logo} width={100} height={100} />
          </div>
        </div>

        <section className="p-6 space-y-5">
          <div className="flex items-center gap-3 group hover:bg-gray-50 p-2 rounded-md transition-colors duration-200">
            <div className="text-black shrink-0">
              <MdOutlineMail size={24} />
            </div>
            <div>
              <span className="text-gray-500 text-sm">Email</span>
              <p className="font-medium text-gray-800">contact@thebridg.com</p>
            </div>
          </div>

          <div className="flex items-center gap-3 group hover:bg-gray-50 p-2 rounded-md transition-colors duration-200">
            <div className="text-black shrink-0">
              <MdOutlinePhone size={24} />
            </div>
            <div>
              <span className="text-gray-500 text-sm">Mobile</span>
              <p className="font-medium text-gray-800">+971-55-123-4567</p>
            </div>
          </div>

          <div className="flex items-center gap-3 group hover:bg-gray-50 p-2 rounded-md transition-colors duration-200">
            <div className="text-black shrink-0">
              <MdOutlineLocationOn size={24} />
            </div>
            <div>
              <span className="text-gray-500 text-sm">Address</span>
              <p className="font-medium text-gray-800">
                Axis 2, Dubai Silicon Oasis, Dubai, UAE
              </p>
            </div>
          </div>
        </section>

        <footer className="flex w-full justify-center gap-4 px-6 py-4">
          <a
            href="https://linkedin.com/company/bridg"
            className="text-black hover:text-gray-600 transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://twitter.com/bridg"
            className="text-black hover:text-gray-600 transition-colors duration-200"
            aria-label="Twitter"
          >
            <FaXTwitter size={24} />
          </a>
          <a
            href="https://instagram.com/bridg"
            className="text-black hover:text-gray-600 transition-colors duration-200"
            aria-label="Instagram"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://facebook.com/bridg"
            className="text-black hover:text-gray-600 transition-colors duration-200"
            aria-label="Facebook"
          >
            <FaFacebook size={24} />
          </a>
        </footer>
      </article>
    </div>
  );
}
