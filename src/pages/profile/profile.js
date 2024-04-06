import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./profile.css";
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

  return (
    <>
      <div className="white-box">
        <nav className="fixed-top nav-css bg-primary">
          <h4 style={{ margin: "2vh" }}>My Profile</h4>
          <div className="nextToEachOther">
            <Link to={"/dashboard"} className="btn btn-light">
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

        <h2>
          Username :{" "}
          <span
            className="btn btn-primary fw-bold"
            style={{
              textAlign: "center",
              fontSize: "5vh",
            }}
          >
            {username}
          </span>
        </h2>
        {apikey ? (
          <>
            <h4>
              API key:{" "}
              <span
                className="btn btn-success fw-bold"
                style={{
                  textAlign: "center",
                  fontSize: "3vh",
                }}
              >
                {apikey}
              </span>
            </h4>
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
        <Logout />
      </div>
    </>
  );
};
