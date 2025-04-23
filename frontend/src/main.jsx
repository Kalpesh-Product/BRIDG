import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "keen-slider/keen-slider.min.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import router from "./routes.jsx";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: [
      "Elmessiri",
      "Elmessiri-Regular",
      "Elmessiri-SemiBold",
      "Elmessiri-Bold",
      "Roboto",
      "Helvetica Neue",
      "Arial",
      "sans-serif",
    ].join(","),
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </RouterProvider>
  </StrictMode>
);
