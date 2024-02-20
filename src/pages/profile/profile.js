import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./profile.css";
import { Logout } from "../../components/Logout";

export const Profile = () => {
  const [username, setUsername] = useState("");
  const [apikey, setApiKey] = useState("");
  // const navigate = useNavigate();

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

  // const displayCSV = (apikey) => {
  //   navigate("/displayCsv", { state: { apikey } });
  // };

  return (
    <>
      <div className="white-box">
        <nav className="fixed-top nav-css bg-primary">
          <h4 style={{ margin: "2vh" }}>My Profile</h4>
          {/* NAVBAR THINGS */}
          <div className="nextToEachOther">
            <Link to={"/dashboard"} className="btn btn-info">
              Dashboard
            </Link>
            <div className="nav-item dropdown" style={{ margin: "2vh" }}>
              <span
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="profile-size bi bi-person-circle"></i>
              </span>
              <ul className="dropdown-menu">
                <li>
                  <div className="dropdown-item">
                    <Logout />
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* NAVBAR THINGS */}
        </nav>

        <h2>USERNAME :{username}</h2>
        {apikey ? (
          <>
            <h4>API key: {apikey}</h4>
            <button className="btn btn-primary" onClick={modifyApiKey}>
              Update API key
            </button>
            {/* <button className="btn btn-info" onClick={() => displayCSV(apikey)}>
              Display CSV data
            </button> */}
          </>
        ) : (
          <>
            <button className="btn btn-primary" onClick={modifyApiKey}>
              Create API key
            </button>
          </>
        )}
        <Logout />
      </div>
    </>
  );
};
