import React from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export const Logout = () => {
  const [, , removeCookie] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const logout = () => {
    removeCookie("access_token", { path: "/", domain: "localhost" });
    localStorage.removeItem("userID");
    navigate("/auth");
  };
  return (
    <>
      <button className="btn btn-danger fw-bold" onClick={logout}>
        Logout
      </button>
    </>
  );
};
