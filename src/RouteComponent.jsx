import React from "react";
import { Routes, Route } from "react-router-dom";
import PageNotFound from "./CommonComponent/Pagenotfound";
import loader from "./assets/image/react.svg";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Learn from "./Pages/Learn";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

const RouteComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/learn" element={<Learn />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default RouteComponent;
