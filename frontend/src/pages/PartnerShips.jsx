import React from "react";
import {
  Button,
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
import Spinner from "../components/Spinner";
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
      message: "",
    },
  });

  const { mutate: submitPartnership, isPending: isPartnershipPending } =
    useMutation({
      mutationFn: async (data) => {
        const response = await axios.post(
          "http://localhost:3000/api/partnership/new-partnership-lead",
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
    <div className="h-screen md:h-[70vh] flex justify-center items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
        <div className="flex flex-col justify-start">
          <ReactFitty className="text-headline md:text-hero flex w-full text-justify">
            Partner with us to activate
            <br /> passive high secondary income.
          </ReactFitty>

          <div className="text-base mt-8 leading-8">
            <ReactFitty className="">
              We offer a discreet, end-to-end partnership model designed <br />{" "}
              for professionals and high-net-worth individuals seeking <br />{" "}
              secure and scalable passive income through premium <br /> real
              estate opportunities in the UAE.
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
                      <MenuItem value="Investment Banker">
                        Investment Banker
                      </MenuItem>
                      <MenuItem value="Chartered Accountant">
                        Chartered Accountant
                      </MenuItem>
                      <MenuItem value="HNI Network Manager">
                        HNI Network Manager
                      </MenuItem>
                      <MenuItem value="Real Estate Consultant">
                        Real Estate Consultant
                      </MenuItem>
                      <MenuItem value="Press">Press</MenuItem>
                      <MenuItem value="Will share when we speak">
                        Will share when we speak
                      </MenuItem>
                    </Select>
                  )}
                />
              </FormControl>
            </div>

            <div className="col-span-2">
              <Controller
                name="message"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Message Box"
                    fullWidth
                    multiline
                    rows={3}
                    variant="standard"
                  />
                )}
              />
            </div>

            <div className="col-span-2">
              <PrimaryButton
                externalStyles={"col-span-2 w-full"}
                type={"submit"}
                disabled={isPartnershipPending}
                title={`${
                  isPartnershipPending ? <Spinner /> : "PARTNER WITH US"
                }`}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
