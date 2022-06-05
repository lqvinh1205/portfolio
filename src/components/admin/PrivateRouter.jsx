import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRouter = (props) => {
  if (localStorage.getItem("user")) {
    const checkUser = JSON.parse(localStorage.getItem("user")).user.role;
    if (checkUser !== 1) {
      return <Navigate to="/" />;
    }
  } else {
    return <Navigate to="/login" />;
  }
  return props.children;
};

export default PrivateRouter;
