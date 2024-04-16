import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./profile.css";
import profileImg from "./profile.png";
import { Logout } from "../../components/Logout";

export const Profile = () => {
  const [username, setUsername] = useState("");
  const [apikey, setApiKey] = useState("");

  useEffect(() => {
    axios
      .post("http://localhost:3001/user/getUser", {
        id: window.localStorage.getItem("userID"),
      })
      .then((res) => {
        setUsername(res.data.user.username);
        setApiKey(res.data.user.apikey);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const modifyApiKey = async () => {
    await axios
      .patch("http://localhost:3001/user/createApiKey", {
        id: window.localStorage.getItem("userID"),
      })
      .then((res) => {
        if (res.data.success) {
          setApiKey(res.data.newApiKey);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(apikey)
      .then(() => {
        alert("API key copied to clipboard");
      })
      .catch((err) => {
        console.error("Failed to copy API key to clipboard", err);
      });
  };

  return (
    <>
      <div className="white-box">
        <nav className="fixed-top nav-css bg-primary">
          <span style={{ margin: "2vh" }} className="btn btn-light fw-bold">
            My Profile
          </span>
          <div className="nextToEachOther">
            <Link to={"/dashboard"} className="btn btn-light fw-bold">
              Dashboard
            </Link>
            <div className="nav-item dropdown" style={{ margin: "2vh" }}>
              <Link
                to="/profile"
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="profile-size bi bi-person-circle"></i>
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <div className="dropdown-item">
                    <Logout />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <img
          src={profileImg}
          height={250}
          width={250}
          style={{ marginTop: "10vh", borderRadius: "30%" }}
          alt="User Profile"
        />

        <span
          className="btn btn-danger fw-bold"
          style={{
            textAlign: "center",
            fontSize: "5vh",
          }}
        >
          Username = | {username} |
        </span>
        {apikey ? (
          <>
            <div>
              <span
                className="btn btn-success fw-bold"
                style={{
                  textAlign: "center",
                  fontSize: "4vh",
                }}
              >
                API key = | {apikey} |
              </span>
              <button
                className="btn btn-success fw-bold"
                style={{
                  textAlign: "center",
                  fontSize: "3vh",
                  border: "none",
                  marginLeft: "1vw",
                  textDecoration: "none",
                }}
                onClick={copyToClipboard}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-clipboard2"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.5 2a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-12a.5.5 0 0 0-.5-.5H12a.5.5 0 0 1 0-1h.5A1.5 1.5 0 0 1 14 2.5v12a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-12A1.5 1.5 0 0 1 3.5 1H4a.5.5 0 0 1 0 1z" />
                  <path d="M10 .5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5V2a.5.5 0 0 0 .5.5h5A.5.5 0 0 0 11 2v-.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5" />
                </svg>
              </button>
            </div>
            <button
              className="btn btn-primary fw-bold"
              style={{
                textAlign: "center",
                fontSize: "3vh",
              }}
              onClick={modifyApiKey}
            >
              Update API key
            </button>
          </>
        ) : (
          <>
            <button
              className="btn btn-primary"
              style={{
                textAlign: "center",
                fontSize: "3vh",
              }}
              onClick={modifyApiKey}
            >
              Create API key
            </button>
          </>
        )}
        <button className="btn btn-danger fw-bold">Log out</button>
      </div>
    </>
  );
};
