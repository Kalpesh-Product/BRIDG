import { TextField, Button } from "@mui/material";
import PrimaryButton from "../components/PrimaryButton";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center flex-col gap-4 md:h-[60vh] lg:h-[80vh] border-gray-300 rounded-lg border-[1px] p-8">
      <h1 className="text-hero">Login</h1>
      <div className="w-full max-w-sm space-y-6">
        <TextField label="Email" variant="standard" fullWidth />
        <TextField
          label="Password"
          variant="standard"
          type="password"
          fullWidth
        />
        {/* <Button
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: "black",
            borderRadius: "9999px",
            paddingY: "0.75rem",
            "&:hover": {
              backgroundColor: "#333",
            },
          }}
        >
          Login
        </Button> */}
        <PrimaryButton title={"Login"} externalStyles={"w-full"} />

        <p className="text-center">
          New to BRIDG?&nbsp;{" "}
          <span className="underline">
            <Link to="/signup">Sign Up</Link>
          </span>
        </p>
      </div>
    </div>
  );
}
