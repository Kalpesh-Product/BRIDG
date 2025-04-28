import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import {
  MdOutlineLocationOn,
  MdOutlineMail,
  MdOutlinePhone,
} from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import logo from "../assets/media/images/logo-transparent.png";
import { Controller, useForm } from "react-hook-form";
import { MenuItem, TextField } from "@mui/material";
import PrimaryButton from "../components/PrimaryButton";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";

export default function Contact() {
  const partnershipTypes = [
    "B2B SaaS Technology Licensing",
    "Landlord Partnerships",
    "Investment Related",
    "Coffee meeting to know us better",
  ];

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      mobile: "",
      partnership: partnershipTypes,
      message: "",
    },
  });

  const { mutate: submitContactInfo, isPending: isContactInfoPending } =
    useMutation({
      mutationFn: async (data) => {
        const response = await axios.post(
          import.meta.env.VITE_ENV === "PRODUCTION"
            ? `${import.meta.env.VITE_API_PRODUCTION_URL}/contact/contact-info`
            : `${
                import.meta.env.VITE_API_DEVELOPMENT_URL
              }/contact/contact-info`,
          { ...data, mobile: data.mobile.replace(/\s+/g, "") },
          { headers: { "Content-Type": "application/json" } }
        );
        return response.data;
      },
      onSuccess: (data) => {
        toast.success(data.message);
        reset();
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });

  const onSubmit = (data) => {
    submitContactInfo(data);
    reset();
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        <div className="flex flex-col gap-4">
          <h3 className="uppercase w-full text-start text-title md:text-headline lg:text-headline">
            about us
          </h3>
          <p className="text-body">
            ​BRIDG is a seamless Platform for Non Residents of UAE to easily and
            immediately invest in High ROI Real Estate within UAE.
          </p>
          <h3 className="uppercase w-full text-start text-title md:text-headline lg:text-headline">
            Our VISION & MISSION!
          </h3>
          <ul className="list-disc list-outside leading-7 text-body flex flex-col gap-0">
            <li className="">
              BRIDG to become the easiest platform for Non-Residents to invest
              in High ROI UAE Real Estate.
            </li>
            <li className="text-body">
              Curate the highest ROI Real Estate Properties for your investment.
            </li>
            <li>On-board a Tenant for immediate ROI by the time you invest.</li>
            <li className="text-body">
              Structure and organise for mortgage if required for your
              investment.
            </li>
            <li className="text-body">
              Ensure timely and monthly returns with annual escalations and
              compliances.
            </li>
            <li className="text-body">
              Manage your property and maintain the same with the highest
              standards.
            </li>
            <li className="text-body">
              Design an Exit if required for any of your properties invested via
              us if you need immediate liquidity.
            </li>
            <li className="text-body">
              We offer a discreet, end-to-end partnership model designed for
              ​high-net-worth individual investors, professionals, family
              offices, funds, consultants, cross border agencies and others
              seeking secure and scalable passive income through premium real
              estate opportunities in the UAE.
            </li>
            <li className="text-body">
              We ensure we go beyond our servicing levels to get you maximum
              ROI.
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-6">
          <h3 className="uppercase w-full text-center text-title md:text-headline lg:text-headline">
            connect with us
          </h3>
          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Controller
              name="name"
              control={control}
              rules={{ required: "Name is required" }}
              render={({ field }) => (
                <TextField
                  label={"Name"}
                  {...field}
                  variant="standard"
                  fullWidth
                />
              )}
            />
            <Controller
              name="email"
              control={control}
              rules={{ required: "Email is required" }}
              render={({ field }) => (
                <TextField
                  label={"Email"}
                  {...field}
                  variant="standard"
                  fullWidth
                />
              )}
            />
            <Controller
              name="mobile"
              control={control}
              rules={{ required: "Mobile Number is required" }}
              render={({ field }) => (
                <TextField
                  label={"Mobile Number"}
                  {...field}
                  variant="standard"
                  fullWidth
                />
              )}
            />
            <Controller
              name="partnership"
              control={control}
              rules={{ required: "Required" }}
              render={({ field }) => (
                <TextField
                  label={"Type of Partnership"}
                  {...field}
                  variant="standard"
                  fullWidth
                  select
                >
                  <MenuItem value="" disabled>
                    Select an option
                  </MenuItem>
                  {partnershipTypes.map((type) => (
                    <MenuItem value={type}>{type}</MenuItem>
                  ))}
                </TextField>
              )}
            />
            <div className="col-span-2">
              <Controller
                name="message"
                control={control}
                rules={{ required: "Message is required" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label={"Message"}
                    variant="standard"
                    fullWidth
                  />
                )}
              />
            </div>
            <div className="col-span-2 flex justify-center">
              <PrimaryButton
                externalStyles={"col-span-2"}
                type={"submit"}
                isLoading={isContactInfoPending}
                disabled={isContactInfoPending}
                title={"Connect"}
              />
            </div>
          </form>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Side - Map */}
        <div className="md:col-span-1 flex flex-col gap-4">
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
          <p className="text-body">DUBAI OFFICE - BRIDG DUBAI , AXIS 2, DUBAI SILICON OASIS, DUBAI, UAE

</p>
        </div>
        <div className="md:col-span-1 flex flex-col gap-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3844.7765664747362!2d73.83261987495516!3d15.496445985103028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfc1d2e05cbef3%3A0xa643703ebcc4db43!2sBIZ%20Nest%20-%20Co-Working%20Space%2C%20Workations%20%26%20Meeting%20Zone%20in%20Goa!5e0!3m2!1sen!2sin!4v1723627911486!5m2!1sen!2sin"
            width="100%"
            height="400"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[500px] rounded shadow"
            title="map"
          >
            <a href="https://www.gps.ie/collections/drones/">drones ireland</a>
          </iframe>
          <p className="text-body">INDIA OFFICE - BRIDG, BIZ NEST CO-WORKING, SUNTECK KANAKA CORPORATE PARK, 701 - B, PATTO CENTRE, PANJIM, GOA - 403001</p>
        </div>

        {/* <div className="col-span-2 p-4 border-t-[1px] border-b-[1px] border-gray-400 flex gap-4 flex-wrap md:flex-wrap lg:flex-nowrap justify-between">
          <p className="font-medium">
            Email : <span className="font-light">contact@thebridg.com</span>
          </p>
          <p className="font-medium">
            Mobile : <span className="font-light">+971-55-123-4567</span>
          </p>
          <p className="font-medium">
            Address : <span className="font-light">Axis 2, Dubai Silicon Oasis, Dubai, UAE</span>
          </p>
        </div> */}
      </div>
    </div>
  );
}
