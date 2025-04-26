import React from "react";
import { CircularProgress } from "@mui/material"; // Import MUI Spinner

const PrimaryButton = ({
  title,
  handleSubmit,
  type,
  fontSize,
  externalStyles,
  disabled,
  padding,
  className,
  isLoading, // New prop for showing the spinner
}) => {
  return (
    <button
      disabled={disabled || isLoading} // Disable if loading
      type={type}
      className={`flex uppercase rounded-full items-center justify-center gap-2 ${
        disabled || isLoading ? "bg-gray-400" : "bg-secondary"
      }  text-primary ${
        fontSize ? fontSize : "text-content leading-5"
      } ${externalStyles} ${padding ? padding : "px-8 py-3"} ${className}`}
      onClick={handleSubmit}
    >
      {isLoading && <CircularProgress size={16} color="#fffff" />}{" "}
      {/* Spinner */}
      <span className="whitespace-nowrap">
        {isLoading ? `${title}` : title}
      </span>
    </button>
  );
};

export default PrimaryButton;
