import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import TestingPageAllan from "./pages/TestingPageAllan";
import Buy from "./pages/Buy";
import PartnerShip from "./pages/PartnerShips";

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
        path: "/buy",
        element: <Buy />,
      },
      {
        path: "/partnerships",
        element: <PartnerShip />,
      },
      {
        path: "test-allan",
        element: <TestingPageAllan />,
      },
    ],
  },
]);

export default router;
