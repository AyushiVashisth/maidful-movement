import React from "react";
import { Routes, Route } from "react-router-dom";
import BMI from "./BMI";
import LandingPage from "./Home";
import UserDashBoard from "./UserDashboard";

const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/bmi" element={<BMI />} />
        <Route path="/dashboard" element={<UserDashBoard/>}/>
      </Routes>
    </div>
  );
};
export default Allroutes;
