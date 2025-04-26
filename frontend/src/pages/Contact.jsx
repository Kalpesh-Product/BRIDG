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

export default function Contact() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      mobileNumber: "",
      typeOfPartnership: "",
      message: "",
    },
  });
  return (
    <div className="flex flex-col gap-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        <div className="flex flex-col gap-4">
          <h3 className="uppercase w-full text-start text-title md:text-headline lg:text-headline">
            about us
          </h3>
          <p className="text-body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Praesentium libero blanditiis est labore ut exercitationem eius
            voluptas rerum quod. Dolor maxime aliquam ut quidem itaque odit,
            recusandae distinctio sunt rerum enim nisi eligendi ad quae, earum
            ratione harum vero numquam voluptatum nihil perferendis iste
            deleniti. Voluptatum aperiam a qui perspiciatis vero illo velit
            mollitia, fugit commodi suscipit quis ab nulla deleniti, labore
            ratione autem ipsum veniam alias at sit aliquam rerum dolores. Eaque
            quia tenetur aspernatur labore dolorem alias esse distinctio? Nulla
            enim facere obcaecati harum quam magni eos in, ducimus non, culpa
            asperiores. Repellat architecto placeat autem eum quae!
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <h3 className="uppercase w-full text-center text-title md:text-headline lg:text-headline">
            connect with us
          </h3>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Controller
              name="name"
              control={control}
              rules={{ required: "Name is required" }}
              render={({ fields }) => (
                <TextField
                  label={"Name"}
                  {...fields}
                  variant="standard"
                  fullWidth
                />
              )}
            />
            <Controller
              name="email"
              control={control}
              rules={{ required: "Email is required" }}
              render={({ fields }) => (
                <TextField
                  label={"Email"}
                  {...fields}
                  variant="standard"
                  fullWidth
                />
              )}
            />
            <Controller
              name="mobileNumber"
              control={control}
              rules={{ required: "Mobile Number is required" }}
              render={({ fields }) => (
                <TextField
                  label={"Mobile Number"}
                  {...fields}
                  variant="standard"
                  fullWidth
                />
              )}
            />
            <Controller
              name="typeOfPartnership"
              control={control}
              rules={{ required: "Required" }}
              render={({ fields }) => (
                <TextField
                  label={"Type of Partnership"}
                  {...fields}
                  variant="standard"
                  fullWidth
                  select
                >
                  <MenuItem value="" disabled>
                    Select an option
                  </MenuItem>
                  <MenuItem value=""></MenuItem>
                  <MenuItem value=""></MenuItem>
                  <MenuItem value=""></MenuItem>
                </TextField>
              )}
            />
            <div className="col-span-2">
              <Controller
                name="message"
                control={control}
                rules={{ required: "Message is required" }}
                render={({ fields }) => (
                  <TextField
                    {...fields}
                    label={"Message"}
                    variant="standard"
                    fullWidth
                  />
                )}
              />
            </div>
            <div className="col-span-2 flex justify-center">
              <PrimaryButton title={"Connect"} />
            </div>
          </form>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Side - Map */}
        <div className="md:col-span-1">
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
        <div className="md:col-span-1">
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
