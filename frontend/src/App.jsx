import React, { useRef, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Toaster } from 'react-hot-toast';

const App = () => {
  const location = useLocation();
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.pathname]);

  return (
    <div className="flex flex-col">
      <div className="fixed w-full z-50">
        <div className="md:block">
          <Header />
        </div>
      </div>

      <div
        ref={contentRef}
        className="md:py-28 py-24 px-4 md:px-10 sm:px-4 flex flex-col gap-4 bg-primary"
      >
        <Outlet />
        <Toaster />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
