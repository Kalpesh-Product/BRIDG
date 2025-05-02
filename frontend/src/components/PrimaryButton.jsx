import { CircularProgress } from "@mui/material"; // Import MUI Spinner
import { motion } from "motion/react";

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
    <motion.button
      whileHover={{ scale: 1.05 }} 
      whileTap={{ scale: 0.95 }} 
      disabled={disabled || isLoading} // Disable if loading
      type={type}
      className={`flex uppercase rounded-full items-center cursor-pointer justify-center gap-2 ${
        disabled || isLoading ? "bg-gray-400" : "bg-secondary"
      }  text-primary ${
        fontSize ? fontSize : "text-content leading-5"
      } ${externalStyles} ${padding ? padding : "px-8 py-3"} ${className}`}
      onClick={handleSubmit}
    >
      {isLoading && <CircularProgress size={16} color="#fffff" />}{" "}
      {/* Spinner */}
      <span className="text-center h-4">{isLoading ? `${title}` : title}</span>
    </motion.button>
  );
};

export default PrimaryButton;
