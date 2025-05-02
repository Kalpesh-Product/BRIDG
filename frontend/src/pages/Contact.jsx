import { Controller, useForm } from "react-hook-form";
import { FormControl, MenuItem, TextField } from "@mui/material";
import PrimaryButton from "../components/PrimaryButton";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import { BiCheck } from "react-icons/bi";
import { ReactFitty } from "react-fitty";
import useIsMobile from "../hooks/useIsMobile";

export default function Contact() {
  // const partnershipTypes = [
  //   "B2B SaaS Technology Licensing",
  //   "Landlord Partnerships",
  //   "Investment Related",
  //   "Coffee meeting to know us better",
  // ];

  const partnershipTypes = [
    "Non-Resident Real Estate Investor",
    "Resident Real Estate Investor",
    "Investment Banker",
    "Real Estate Consultant",
    "Chartered Accountant",
    "HNI Network Manager",
    "General Consultant",
    "Press",
    "Other",
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
      partnership: "",
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

  const points = [
    "BRIDG to become the easiest platform for Non-Residents to invest in High ROI Dubai Real Estate.",
    "Curate the highest ROI Real Estate Properties for your investment.",
    "On-board a Tenant for immediate ROI by the time you invest.",
    "Structure and organise for mortgage if required for your investment.",
    "Ensure timely and monthly returns with annual escalations and compliances.",
    "Manage your property and maintain the same with the highest standards.",
    "Design an Exit if required for any of your properties invested via us if you need immediate liquidity.",
  ];
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col lg:flex-row gap-8 md:gap-14 lg:gap-28 mb-5 ">
        {/* Left Section */}
        <div className="flex flex-col gap-4 md:gap-8 lg:gap-10 flex-1 w-full ">
          {!isMobile ? (
            <h1 className="uppercase w-full text-start text-headline font-semibold">
              about us. our vision & mission!
            </h1>
          ) : (
            <div>
              <ReactFitty className="uppercase font-semibold">
                about us
              </ReactFitty>
              <ReactFitty className="uppercase font-semibold">
                our vision & mission!
              </ReactFitty>
            </div>
          )}
          <div className="flex flex-col gap-4">
            <p className="text-base">
              ​BRIDG is a seamless Platform for Non Residents of Dubai to easily
              and immediately invest in High ROI Real Estate within Dubai.
            </p>

            <div className="flex flex-col gap-0 w-full">
              {points.map((point, index) => (
                <div
                  key={index}
                  className="flex items-start gap-2 text-base leading-7"
                >
                  <div>
                    <BiCheck size={20}/>
                  </div>
                  <p>{point}</p>
                </div>
              ))}
            </div>
            <p className="text-base">We offer a discreet, end-to-end partnership model designed for high-net-worth individual investors, professionals, family offices, funds, consultants, cross border agencies and others seeking secure and scalable passive income through premium real estate opportunities in the Dubai.</p>
             
             <p className="text-base">We ensure we go beyond our servicing levels to get you maximum ROI.</p>
          </div>
        </div>
        {isMobile && <hr />}

        {/* Right Section */}
        <div className="flex flex-col gap-2 md:gap-4 lg:gap-6 w-full lg:w-1/3">
          {!isMobile ? (
            <h1 className="uppercase w-full text-start text-headline font-semibold">
              connect with us.
            </h1>
          ) : (
            <div>
              <ReactFitty className="uppercase font-semibold">
                connect with us.
              </ReactFitty>
            </div>
          )}

          <form
            className="flex flex-col gap-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
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
            </div>

            <div>
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
            </div>

            <div>
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
            </div>

            <div>
              <FormControl fullWidth>
                <Controller
                  name="partnership"
                  control={control}
                  rules={{ required: "Required" }}
                  render={({ field, fieldState }) => (
                    <TextField
                      {...field}
                      label="Type of Partnership"
                      select
                      error={!!fieldState.error}
                      variant="standard"
                    >
                      <MenuItem value="" disabled>
                        Select an option
                      </MenuItem>
                      {partnershipTypes.map((type) => (
                        <MenuItem
                          sx={{ textWrap: "wrap" }}
                          value={type}
                          key={type}
                        >
                          <div className="flex items-center gap-2">
                            <BiCheck size={20} />
                            <span>{type}</span>
                          </div>
                        </MenuItem>
                      ))}
                    </TextField>
                  )}
                />
              </FormControl>
            </div>

            <div>
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
                    multiline
                    minRows={1}
                  />
                )}
              />
            </div>

            <div className="flex justify-center mt-6">
              <PrimaryButton
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
        <div className="md:col-span-1 flex flex-col">
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
          <div className="flex justify-center items-center w-full">
            <p className="text-body bg-white h-auto md:h-28 lg:h-20 p-3 shadow-md w-full">
              DUBAI OFFICE - BRIDG DUBAI , AXIS 2, DUBAI SILICON OASIS, DUBAI
            </p>
          </div>
        </div>
        <div className="md:col-span-1 flex flex-col">
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
          <div className="flex justify-center items-center">
            <p className="text-body bg-white shadow-md p-3">
              INDIA OFFICE - BRIDG, BIZ NEST CO-WORKING, SUNTECK KANAKA
              CORPORATE PARK, 701 - B, PATTO CENTRE, PANJIM, GOA - 403001
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
