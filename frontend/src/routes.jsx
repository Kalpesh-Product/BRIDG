import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import TestingPageAllan from "./pages/TestingPageAllan";
import Buy from "./pages/Buy";
import PartnerShip from "./pages/PartnerShips";
import LoginPage from "./pages/Login";
import Contact from "./pages/Contact";
import Roi from "./pages/Roi";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
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
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/roi",
        element: <Roi />,
      },
    ],
  },
]);

export default router;
