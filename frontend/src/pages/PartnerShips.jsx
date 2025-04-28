import {
  MenuItem,
  Select,
  TextField,
  InputLabel,
  FormControl,
  Autocomplete,
} from "@mui/material";
import { MuiTelInput } from "mui-tel-input";
import { useForm, Controller } from "react-hook-form";
import { useState, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import PrimaryButton from "../components/PrimaryButton";
import { ReactFitty } from "react-fitty";

export default function PartnerShip() {
  const [countries, setCountries] = useState([]);

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      country: "",
      mobile: "",
      yourProfile: "",
    },
  });

  const profileOptions = [
    { "id": 1, "label": "Non Resident who wants to invest in UAE Real Estate" },
    { "id": 2, "label": "Resident who wants to invest in UAE Real Estate" },
    { "id": 3, "label": "Investment Banker" },
    { "id": 4, "label": "Real Estate Consultant" },
    { "id": 5, "label": "Chartered Accountant" },
    { "id": 6, "label": "HNI Network Manager" },
    { "id": 7, "label": "General Consultant" },
    { "id": 8, "label": "Press" },
    { "id": 9, "label": "Other" }
  ]
  
  const reasons = [
    { "id": 1, "label": "Invest in UAE Real Estate as a Non Resident" },
    { "id": 2, "label": "Become a Consultant at BRIDG" },
    { "id": 3, "label": "List your property to Sell at BRIDG" },
    { "id": 4, "label": "Banking & Mortgage Partnership" },
    { "id": 5, "label": "Start your BRIDG Agency in your Country for Cross Boarder Investments" },
    { "id": 6, "label": "Work with BRIDG" },
    { "id": 7, "label": "Other reasons" }
  ]
  

  const { mutate: submitPartnership, isPending: isPartnershipPending } =
    useMutation({
      mutationFn: async (data) => {
        const response = await axios.post(
          import.meta.env.VITE_ENV === "PRODUCTION"
            ? `${
                import.meta.env.VITE_API_PRODUCTION_URL +
                "/partnership/new-partnership-lead"
              }`
            : `${
                import.meta.env.VITE_API_DEVELOPMENT_URL +
                "/partnership/new-partnership-lead"
              }`,
          data,
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
    submitPartnership(data);
  };

  useEffect(() => {
    const getContries = async () => {
      const response = await fetch(
        "https://trial.mobiscroll.com/content/countries.json"
      );
      const countries = await response.json();
      setCountries(countries);
    };
    getContries();
  }, []);

  return (
    <div className="h-screen md:h-[70vh] flex flex-col gap-20 justify-center items-center">
      <ReactFitty>WE ARE ALWAYS OPEN FOR PARTNERSHIPS ACROSS CHANNELS</ReactFitty>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
        <div className="flex flex-col justify-start">
          <ReactFitty className="text-headline md:text-hero flex w-full text-justify">
            Partner with us to activate
            <br /> passive high secondary income.
          </ReactFitty>

          <div className="flex w-full">
            <ReactFitty className="text-subtitle mt-8">
               We are always happy to connect and discuss possibelities with anyone and everyone to work together.<br/>{" "} Please connect with us if you want to invest , sell your property, become a consulting partner,<br/>{" "} list your property, start cross border agency, work with us and for anything which can help and grow the ecosystem. 
               </ReactFitty>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-4 gap-y-6">
            <div className="col-span-2 md:col-span-1">
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
                    helperText={fieldState.error?.message}
                  />
                )}
              />
            </div>

            <div className="col-span-2 md:col-span-1">
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
            </div>

            <div className="col-span-2 md:col-span-1">
              <Controller
                name="email"
                control={control}
                rules={{ required: "Email is required" }}
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    label="Email"
                    type="email"
                    fullWidth
                    required
                    variant="standard"
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message}
                  />
                )}
              />
            </div>

            <div className="col-span-2 md:col-span-1">
              <Controller
                name="country"
                control={control}
                rules={{ required: "Country is required" }}
                render={({ field, fieldState }) => (
                  <Autocomplete
                    options={countries}
                    getOptionLabel={(option) => option.text || ""}
                    onChange={(_, data) => field.onChange(data?.text || "")}
                    value={
                      countries.find((c) => c.text === field.value) || null
                    }
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Country"
                        variant="standard"
                        required
                        fullWidth
                        error={!!fieldState.error}
                        helperText={fieldState.error?.message}
                      />
                    )}
                  />
                )}
              />
            </div>

            <div className="col-span-2 md:col-span-1">
              <Controller
                name="mobile"
                control={control}
                rules={{ required: "Mobile number is required" }}
                render={({ field, fieldState }) => (
                  <MuiTelInput
                    {...field}
                    label="Mobile"
                    fullWidth
                    required
                    defaultCountry="IN"
                    variant="standard"
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message}
                    onChange={(value) => field.onChange(value)}
                  />
                )}
              />
            </div>

            <div className="col-span-2 md:col-span-1">
              <FormControl fullWidth required>
                <InputLabel>Your Profile?</InputLabel>
                <Controller
                  name="yourProfile"
                  control={control}
                  rules={{ required: "Please select your profile" }}
                  render={({ field, fieldState }) => (
                    <Select
                      {...field}
                      label="Your Profile?"
                      variant="standard"
                      error={!!fieldState.error}
                    >
                      {
                        profileOptions.map((profile)=>
                          <MenuItem value={profile.label}>
                        {profile.label}
                      </MenuItem>)
                      }
                    </Select>
                  )}
                />
              </FormControl>
            </div>

            

            <div className="col-span-2 flex w-full justify-center">
              <PrimaryButton
                externalStyles={"col-span-2"}
                type={"submit"}
                isLoading={isPartnershipPending}
                disabled={isPartnershipPending}
                title={"PARTNER WITH US"}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
