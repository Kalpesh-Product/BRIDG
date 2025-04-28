import React from "react";
import {
  TextField,
  Autocomplete,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { MuiTelInput } from "mui-tel-input";
import { useForm, Controller } from "react-hook-form";
import { useState, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import PrimaryButton from "../components/PrimaryButton";
import { Link } from "react-router-dom";
import MuiModal from "../components/Modal";

export default function Signup() {
  const [countries, setCountries] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      country: "",
      mobile: "",
    },
  });

  const { mutate: submitRegisteration, isPending: isRegisterationPending } =
    useMutation({
      mutationFn: async (data) => {
        const response = await axios.post(
          import.meta.env.VITE_ENV === "PRODUCTION"
            ? `${import.meta.env.VITE_API_PRODUCTION_URL}/auth/signup`
            : `${import.meta.env.VITE_API_DEVELOPMENT_URL}/auth/signup`,
          { ...data, mobile: data.mobile.replace(/\s+/g, "") },
          { headers: { "Content-Type": "application/json" } }
        );
        return response.data;
      },
      onSuccess: (data) => {
        setOpenModal(true);
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
    <div className="flex items-center justify-center   px-4 md:h-[60vh] lg:h-[80vh] border-gray-300 rounded-lg">
      <div className="flex flex-col items-center gap-6   p-8 w-full max-w-4xl">
        <h1 className="text-hero">Signup</h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="col-span-1">
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

          <div className="col-span-1">
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

          <div className="col-span-1">
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

          <div className="col-span-1">
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
          </div>

          <div className="col-span-1">
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
          <div className="col-span-1">
            <FormControl fullWidth>
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
          </div>

          <div className="col-span-1 md:col-span-2 flex justify-center items-center">
            <PrimaryButton
              type={"submit"}
              isLoading={isRegisterationPending}
              title={"Signup"}
              disabled={isRegisterationPending}
            />
          </div>

          <div className="col-span-1 md:col-span-2">
            <p className="text-center mt-4">
              Already have an account?&nbsp;
              <span className="underline">
                <Link to="/login">Log In</Link>
              </span>
            </p>
          </div>
        </form>

        <MuiModal
          open={openModal}
          onClose={() => setOpenModal(false)}
          title="Registratoin Successfull"
          height="20vh"
          width="30vw"
          color="text-green-500"
        >
          <div className="flex justify-center items-center">
            <p>
              Your request for signup has been activated.
              <br /> One of our advisors will contact you soon.
            </p>
          </div>
        </MuiModal>
      </div>
    </div>
  );
}
