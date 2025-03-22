import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className=" flex flex-col">
      <div className="fixed w-full z-50">
        <div className="px-4 md:px-36 md:block">
          <Header />
        </div>
      </div>
      <div className="md:py-28 p-2 md:px-36 sm:px-4 flex flex-col gap-4 bg-primary">
        <Outlet />
      </div>
      <div className="px-4 md:px-36 sm:px-4 mb-4">
        <Footer />
      </div>
    </div>
  );
};

export default App;
