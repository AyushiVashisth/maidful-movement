import React from "react";
import { Routes, Route } from "react-router-dom";
import BMI from "./BMI";
import LandingPage from "./Home";
import UserDashBoard from "./UserDashboard";
// import ChartExample from "./Chart";

// import ChartExample from "./Chart";
import Login from "./Login";
import { Signup } from "./Signup";
import Bmichat from "./BMIChat";
import Underweight from "./UnderWeight";

const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/bmi" element={<BMI />} />
        <Route path="/dashboard" element={<UserDashBoard />} />
        <Route path="/bmichart" element={<Bmichat />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
};
export default Allroutes;
