import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const index = () => {
  const token = localStorage.getItem("Token");
  return token === "true" ? <Navigate to="/" /> : <Outlet />;
};

export default index;
