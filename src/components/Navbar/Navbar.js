import { useEffect, useState } from "react";
import { Logout } from "../Logout";
import axios from "axios";
import { Link } from "react-router-dom";

export const Navbar = (props) => {
  const [user, setUser] = useState("USER");

  useEffect(() => {
    axios
      .post("http://localhost:3001/user/getUser", {
        id: window.localStorage.getItem("userID"),
      })
      .then((res) => {
        setUser(res.data.user.username);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <nav className="fixed-top nav-css bg-primary">
        <h4 style={{ margin: "2vh", color: "white" }} className="fw-bold">
          <span className="btn btn-success fw-bold">Welcome | {user} </span>
        </h4>
        <button
          className="btn btn-light fw-bold"
          style={{ margin: "2vh", fontSize: "2.5vh" }}
        >
          {props.title} section
        </button>

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
              <Link to="/profile" className="dropdown-item">
                <button className="btn btn-primary">profile</button>
              </Link>
            </li>
            <li>
              <div className="dropdown-item">
                <Logout />
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
