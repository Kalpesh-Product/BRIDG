import React from "react";
import {
  Button,
  MenuItem,
  Select,
  TextField,
  Typography,
  InputLabel,
  FormControl,
} from "@mui/material";
import { MuiTelInput } from "mui-tel-input";
import { useForm, Controller } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import axios from "axios";
import PrimaryButton from "../components/PrimaryButton";
import useIsMobile from "../hooks/useIsMobile";
import { ReactFitty } from "react-fitty";
import { BiCheck } from "react-icons/bi";

export default function Buy() {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      reason: "",
    },
  });

  const isMobile = useIsMobile();

  const { mutate: submitConsultation, isPending: isConsultationPending } =
    useMutation({
      mutationFn: async (data) => {
        const response = await axios.post(
          import.meta.env.VITE_ENV === "PRODUCTION"
            ? `${
                import.meta.env.VITE_API_PRODUCTION_URL
              }/consultation/free-consultation`
            : `${
                import.meta.env.VITE_API_DEVELOPMENT_URL
              }/consultation/free-consultation`,
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
    submitConsultation(data);
    reset();
  };

  return (
    <div className="h-screen md:h-[70vh] flex flex-col justify-start items-center gap-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-8">
        <div className="mb-4 md:mb-2 lg:mb-0 col-span-1 lg:col-span-2 font-semibold flex w-full">
          {!isMobile ? (
            <ReactFitty>
              CONNECT WITH US TO INVEST IN HIGH ROI REAL ESTATE IN DUBAI
            </ReactFitty>
          ) : (
            <ReactFitty>
              CONNECT WITH US TO INVEST IN <br /> HIGH ROI REAL ESTATE IN DUBAI
            </ReactFitty>
          )}
        </div>
        <div className="flex flex-col gap-4 md:gap-4 lg:gap-2 w-full">
          <div className="flex w-full">
            {!isMobile ? (
              <ReactFitty className="text-headline leading-tight">
                Book your Free and Personalized
                <br /> Property Consultation!
              </ReactFitty>
            ) : (
              <ReactFitty className="text-headline leading-tight">
                Book your Free and Personalized
                <br /> Property Consultation!
              </ReactFitty>
            )}
          </div>
          <div className="flex w-full">
            {!isMobile ? (
              <ReactFitty className="text-subtitle lg:mt-8">
                Fill in your details, so one of our advisors can contact you to
                discuss <br /> your needs and help you find your perfect home or
                investment.
              </ReactFitty>
            ) : (
              <p className="text-subtitle lg:mt-8 text-wrap">
                Fill in your details, so one of our advisors can contact you to
                discuss your needs and help you find your perfect home or
                investment.
              </p>
            )}
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 gap-y-8">
            <Controller
              name="firstName"
              control={control}
              rules={{ required: "First name is required" }}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  label="First Name"
                  fullWidth
                  required
                  error={!!fieldState.error}
                  variant="standard"
                  className="md:col-span-1 col-span-2"
                  helperText={fieldState.error?.message}
                />
              )}
            />
            <Controller
              name="lastName"
              control={control}
              rules={{ required: "Last name is required" }}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  label="Last Name"
                  fullWidth
                  required
                  error={!!fieldState.error}
                  variant="standard"
                  helperText={fieldState.error?.message}
                />
              )}
            />
            <Controller
              name="email"
              control={control}
              rules={{ required: "Email is required" }}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  label="Email Address"
                  type="email"
                  fullWidth
                  required
                  variant="standard"
                  error={!!fieldState.error}
                  className="md:col-span-1 col-span-2"
                  helperText={fieldState.error?.message}
                />
              )}
            />

            <Controller
              name="mobile"
              control={control}
              render={({ field, fieldState }) => (
                <MuiTelInput
                  {...field}
                  label="Mobile"
                  fullWidth
                  required
                  defaultCountry="IN" // Set a default country if needed
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                  variant="standard"
                  className="md:col-span-1 col-span-2"
                  onChange={(value) => field.onChange(value)} // Ensure proper update in react-hook-form
                />
              )}
            />
            <FormControl fullWidth className="col-span-2">
              <InputLabel sx={{ textTransform: "capitalize" }}>
                What is your reason for contacting us?
              </InputLabel>
              <Controller
                name="reason"
                control={control}
                render={({ field, fieldState }) => (
                  <Select
                    {...field}
                    label="What is your reason for contacting?"
                    error={!!fieldState.error}
                    variant="standard"
                  >
                    <MenuItem
                      sx={{ textWrap: "wrap" }}
                      value="have queries and want to know if BRIDG can help me"
                    >
                      <div className="flex items-start gap-2">
                        <BiCheck size={20} />
                        <span>
                          Have queries and want to know if BRIDG can help me
                        </span>
                      </div>
                    </MenuItem>
                    <MenuItem
                      sx={{ textWrap: "wrap" }}
                      value="Just exploring an investment possibility"
                    >
                      <div className="flex items-start gap-2">
                        <BiCheck size={20} />
                        <span>Just exploring an investment possibility</span>
                      </div>
                    </MenuItem>
                    <MenuItem value="Want to buy real estate">
                      <div className="flex items-start gap-2">
                        <BiCheck size={20} />
                        <span>Want to buy real estate</span>
                      </div>
                    </MenuItem>
                    <MenuItem value="Want to sell real estate">
                      <div className="flex items-start gap-2">
                        <BiCheck size={20} />
                        <span>Want to sell real estate</span>
                      </div>
                    </MenuItem>
                    <MenuItem value="Need mortgage">
                      <div className="flex items-start gap-2">
                        <BiCheck size={20} />
                        <span>Need mortgage</span>
                      </div>
                    </MenuItem>
                    <MenuItem value="Other reasons">
                      <div className="flex items-start gap-2">
                        <BiCheck size={20} />
                        <span>Other reasons</span>
                      </div>
                    </MenuItem>
                  </Select>
                )}
              />
            </FormControl>

            <PrimaryButton
              externalStyles={"col-span-2"}
              type={"submit"}
              isLoading={isConsultationPending}
              disabled={isConsultationPending}
              title={"Get free consultation"}
            />
            <Typography variant="body2" className="col-span-2">
              We are committed to protecting and respecting your privacy, and we
              will never share your data. One of our agents will contact you as
              soon as possible.
            </Typography>
          </div>
        </form>
      </div>
    </div>
  );
}
