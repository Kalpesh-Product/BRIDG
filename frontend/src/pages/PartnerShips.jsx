import React from "react";
import {
  Button,
  MenuItem,
  Select,
  TextField,
  Typography,
  InputLabel,
  FormControl,
  Autocomplete,
} from "@mui/material";
import { MuiTelInput } from "mui-tel-input";
import { useForm, Controller } from "react-hook-form";
import { useState, useEffect } from "react";

export default function PartnerShip() {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      country: "",
      phone: "",
      profile: "",
      message: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    reset();
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
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex flex-col justify-start">
          <h1  className="text-display md:text-hero lg:text-hero">
            Partner with us to activate passive high secondary income.
          </h1>
          <p className="text-base mt-8">
            We offer a discreet, end-to-end partnership model designed for
            professionals and high-net-worth individuals seeking secure and
            scalable passive income through premium real estate opportunities in
            the UAE.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 gap-y-6">
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
            <Controller
              name="country"
              control={control}
              rules={{ required: "Country is required" }}
              render={({ field, fieldState }) => (
                <Autocomplete
                  options={countries}
                  getOptionLabel={(option) => option.text || ""}
                  onChange={(_, data) => field.onChange(data?.text || "")}
                  value={countries.find((c) => c.text === field.value) || null}
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

            <Controller
              name="phone"
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
            <FormControl fullWidth required>
              <InputLabel>Your Profile?</InputLabel>
              <Controller
                name="profile"
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
                  className="col-span-2"
                />
              )}
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              className="col-span-2 font-bold"
            >
              PARTNER WITH US
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
