import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className=" flex flex-col">
      <div className="fixed w-full">
        <div className="px-36">
          <Header />
        </div>
      </div>
      <div className="py-28 px-36 flex flex-col gap-4 bg-primary">
        <Outlet />
      </div>
      <div className="px-36 mb-4">
        <Footer />
      </div>
    </div>
  );
};

export default App;
