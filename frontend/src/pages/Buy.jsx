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

export default function Buy() {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      reason: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    reset();
  };

  return (
    <div className="h-screen flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
      <div className="">
        <h1 variant="h5" gutterBottom className="text-hero">
          Book your <em>Free</em> and <em>Personalized</em> Property
          Consultation!
        </h1>
        <p className="text-body mt-8">
          Fill in your details, so one of our advisors can contact you to
          discuss your needs and help you find your perfect home or investment.
        </p>
      </div>

      <form>
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
            name="phone"
            control={control}
            render={({ field, fieldState }) => (
              <MuiTelInput
                {...field}
                label="Phone"
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
            <InputLabel>What is your primary reason for contacting?</InputLabel>
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

          <Button
            type="submit"
            variant="contained"
            fullWidth
            className="col-span-1 md:col-span-2 lg:col-span-1"
          >
            Get Free consultation
          </Button>
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
