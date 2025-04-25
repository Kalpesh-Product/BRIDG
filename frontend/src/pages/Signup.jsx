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
import { Link } from "react-router-dom";

export default function Signup() {
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

  const { mutate: submitRegisteration, isPending: isRegisterationPending } =
    useMutation({
      mutationFn: async (data) => {
        const response = await axios.post(
          "http://localhost:3000/api/signup",
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
    submitRegisteration(data);
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
    <div className="flex items-center justify-center   px-4 md:h-[60vh] lg:h-[80vh] ">
    <div className="flex flex-col items-center gap-6   p-8 w-full max-w-4xl">
      <h1 className="text-hero">Signup</h1>
  
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            name="mobile"

            control={control}
            rules={{ required: "Mobile number is required" }}
            render={({ field, fieldState }) => (
              <div className="md:col-span-2">
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
            </div>
            )}
          />
          <div className="md:col-span-2">
            <PrimaryButton
              padding="0.5rem"
              type="submit"
              variant="contained"
              disabled={isRegisterationPending}
              fullWidth
              className="font-bold"
            >
              {isRegisterationPending ? <Spinner /> : "Signup"}
            </PrimaryButton>
            <p className="text-center mt-2">Already have an account?&nbsp; <span className="underline"><Link to="/login">Log In</Link></span></p>
          </div>
        </div>
      </form>
    </div>
  </div>
  
  );
}
