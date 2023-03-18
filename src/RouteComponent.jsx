import React from "react";
import { Routes, Route, useParams } from "react-router-dom";
import PageNotFound from "./CommonComponent/Pagenotfound";
import loader from "./assets/image/react.svg";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Learn from "./Pages/Learn";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Blog from "./Pages/Blog";
import Dashboard from "./Pages/Dashboard";
import ResetPassword from "./Pages/ResetPassword";

const RouteComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/learn" element={<Learn />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/blog/:id" element={<Blog />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/resetpassword" element={<ResetPassword />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default RouteComponent;
