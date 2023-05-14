import React from "react";
import { Routes, Route } from "react-router-dom";
import BMI from "./BMI";
import LandingPage from "./Home/Home";
import UserDashBoard from "./UserDashboard";
import Bmichat from "./BMI/BMIChat";
import Login from "./Login";
import { Signup } from "./Signup";
import GroupsPage from "./Group/Group";
import DietNWorkOut from "./Diet";

const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/bmi" element={<BMI />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/dashboard" element={<UserDashBoard />} />
        <Route path="/bmichart" element={<Bmichat />} />
        <Route path="/dietNworkout" element={<DietNWorkOut />} />
        <Route path="/group" element={<GroupsPage />} />
      </Routes>
    </div>
  );
};
export default Allroutes;
