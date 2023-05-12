import React from "react";
import { Routes, Route } from "react-router-dom";
import BMI from "./BMI";
import LandingPage from "./Home";
import UserDashBoard from "./UserDashboard";
import ChartExample from "./Chart";

const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/bmi" element={<BMI />} />
        <Route path="/dashboard" element={<UserDashBoard/>}/>
        <Route path="/bmichart" element={  <ChartExample/>}/>
      </Routes>
    </div>
  );
};
export default Allroutes;
