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
import Spinner from "../components/Spinner";

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

  const { mutate: submitConsultation, isPending: isConsultationPending } =
    useMutation({
      mutationFn: async (data) => {
        const response = await axios.post(
          "http://localhost:3000/api/consultation/free-consultation",
          { ...data, mobile: data.mobile.replace(/\s+/g, "") },
          { headers: { "Content-Type": "application/json" } }
        );
        return response.data;
      },
      onSuccess: (data) => {
        console.log(data.message);
        toast.success(data.message);
        reset();
      },
      onError: (error) => {
        toast.error(error.response.data.message);
      },
    });

  const onSubmit = (data) => {
    submitConsultation(data);
    reset();
  };

  return (
    <div className="h-screen md:h-[70vh] flex justify-center items-center py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="">
          <h1 className=" sm:text-hero text-headline">
            Book your <em>Free</em> and <em>Personalized</em> Property
            Consultation!
          </h1>
          <p className="text-base mt-8">
            Fill in your details, so one of our advisors can contact you to
            discuss your needs and help you find your perfect home or
            investment.
          </p>
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
                  label="Email address"
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
            <FormControl fullWidth required className="col-span-2">
              <InputLabel>
                What is your primary reason for contacting?
              </InputLabel>
              <Controller
                name="reason"
                control={control}
                rules={{ required: "This field is required" }}
                render={({ field, fieldState }) => (
                  <Select
                    {...field}
                    label="What is your primary reason for contacting?"
                    error={!!fieldState.error}
                    variant="standard"
                  >
                    <MenuItem value="have queries and want to know if BRIDG can help me">
                      Have queries and want to know if BRIDG can help me
                    </MenuItem>
                    <MenuItem value="Just exploring an investment possibility">
                      Just exploring an investment possibility
                    </MenuItem>
                    <MenuItem value="Want to buy an apartment">
                      Want to buy an apartment
                    </MenuItem>
                    <MenuItem value="Want to sell an apartment">
                      Want to sell an apartment
                    </MenuItem>
                    <MenuItem value="Need mortgage">Need mortgage</MenuItem>
                    <MenuItem value="Other reasons">Other reasons</MenuItem>
                  </Select>
                )}
              />
            </FormControl>

            <PrimaryButton
              padding={"0.5rem"}
              type="submit"
              variant="contained"
              disabled={isConsultationPending}
              fullWidth
              className="col-span-2"
            >
              {isConsultationPending ? <Spinner /> : "Get Free consultation"}
            </PrimaryButton>
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
