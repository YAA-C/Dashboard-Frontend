import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";

export const LandingPage = () => {
  return (
    <div className="main-box">
      <h1>Landing Page</h1>
      <Link to={"/auth"}>
        <button className="increase btn btn-primary">Login / Sign Up</button>
      </Link>
    </div>
  );
};
