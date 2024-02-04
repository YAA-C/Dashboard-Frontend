import React from "react";
import "./Dashboard.css";
import { Link, useNavigate } from "react-router-dom";
import { Logout } from "../../components/Logout";
import { DataProvider,useData} from "../../context/csvContext";

export const Dashboard = () => {
  const { data,error,loading } = useData();
  console.log(data)

  return (
    <>
      <DataProvider>
        <div className="main-box">
          <nav className="fixed-top nav-css bg-primary">
            <h4 style={{ margin: "2vh" }}>Welcome </h4>
            {/* NAVBAR THINGS */}
            <div className="nav-item dropdown" style={{ margin: "2vh" }}>
              <a
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="profile-size bi bi-person-circle"></i>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link to={"/profile"} className="dropdown-item">
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
            {/* NAVBAR THINGS */}
          </nav>
          <h3>User match 1</h3>
          <Link to={"/analysis"} className="btn btn-warning fw-bold">
            View Analysis
          </Link>
        </div>
      </DataProvider>
    </>
  );
};
