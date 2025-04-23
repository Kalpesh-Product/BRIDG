import { TextField, Button, Link } from "@mui/material";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center flex-col gap-4 md:h-[60vh] lg:h-[80vh] border-gray-300 rounded-lg border-[1px]">
        <h1 className="text-hero">Login</h1>
      <div className="w-full max-w-sm space-y-6">
        <TextField
          label="Email"
          variant="standard"
          fullWidth
        />
        <TextField
          label="Password"
          variant="standard"
          type="password"
          fullWidth
        />
        <div className="text-sm">
          <Link href="#" underline="hover" className="text-black">
            Forgot Password?
          </Link>
        </div>
        <Button
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
        </Button>
      </div>
    </div>
  );
}
