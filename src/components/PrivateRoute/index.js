import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const index = () => {
  const token = localStorage.getItem("Token");
  return token === "true" ? <Outlet /> : <Navigate to="/signin" />;
};

export default index;
