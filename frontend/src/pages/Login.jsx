import { TextField, Button } from "@mui/material";
import PrimaryButton from "../components/PrimaryButton";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center flex-col gap-14 h-[55vh] md:h-[60vh] lg:h-[75vh] border-gray-300 rounded-lg p-8">
      <div className="w-full max-w-4xl space-y-6">
        <h1 className="text-hero text-center">Login</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TextField label="Email / Phone" variant="standard" fullWidth />
          <TextField
            label="Password"
            variant="standard"
            type="password"
            fullWidth
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <PrimaryButton title={"Login"}  />
        </div>
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
