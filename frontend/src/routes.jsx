import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import TestingPageAllan from "./pages/TestingPageAllan";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        index: true,
        element: <Home />,
      },
      {
        path: "test-allan",

        element: <TestingPageAllan />,
      },
    ],
  },
]);

export default router;
