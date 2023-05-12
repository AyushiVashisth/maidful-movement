import React from "react";
import { Routes, Route } from "react-router-dom";
import BMI from "./BMI";
import LandingPage from "./Home";
// import LandingPage from "./Home";

const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/bmi" element={<BMI />} />
      </Routes>
    </div>
  );
};
export default Allroutes;
