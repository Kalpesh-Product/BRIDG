import React from "react";
import {
  Box,
  Button,
  MenuItem,
  Select,
  TextField,
  Typography,
  InputLabel,
  FormControl,
  Stack,
} from "@mui/material";
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
    <div>
      <div>
        <Typography variant="h5" gutterBottom>
          Book your <em>Free</em> and <em>Personalized</em> Property
          Consultation!
        </Typography>
        <Typography variant="body1" mb={3}>
          Fill in your details, so one of our advisors can contact you to
          discuss your needs and help you find your perfect home or investment.
        </Typography>
      </div>

      <form className="grid grid-cols-1 md:grid-cols-2">
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
      </form>

      <Stack direction={{ xs: "column", sm: "row" }} spacing={2} mb={2}>
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
              helperText={fieldState.error?.message}
            />
          )}
        />

        <Controller
          name="phone"
          control={control}
          rules={{ required: "Phone number is required" }}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              label="Phone"
              type="tel"
              fullWidth
              required
              placeholder="e.g: 52 123 4567"
              error={!!fieldState.error}
              variant="standard"
              helperText={fieldState.error?.message}
            />
          )}
        />
      </Stack>

      <Box mb={3}>
        <FormControl fullWidth required>
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
                <MenuItem value="Buy a property">Buy a property</MenuItem>
                <MenuItem value="Investment opportunity">
                  Investment opportunity
                </MenuItem>
                <MenuItem value="Rental inquiry">Rental inquiry</MenuItem>
                <MenuItem value="Mortgage assistance">
                  Mortgage assistance
                </MenuItem>
              </Select>
            )}
          />
        </FormControl>
      </Box>

      <Button type="submit" variant="contained" fullWidth size="large">
        GET FREE CONSULTATION
      </Button>

      <Typography mt={3} variant="body2">
        We are committed to protecting and respecting your privacy, and we will
        never share your data. One of our agents will contact you as soon as
        possible.
      </Typography>
    </div>
  );
}
