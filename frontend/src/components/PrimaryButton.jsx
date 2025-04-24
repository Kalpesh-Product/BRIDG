import { Button } from "@mui/material";

export default function PrimaryButton({
  padding,
  className,
  children,
  ...props
}) {
  return (
    <Button
      variant="contained"
      fullWidth
      className={className}
      {...props}
      sx={{
        backgroundColor: "black",
        borderRadius: "9999px",
        paddingY: padding || "0.75rem",
        "&:hover": {
          backgroundColor: "#333",
        },
      }}
    >
      {children}
    </Button>
  );
}
