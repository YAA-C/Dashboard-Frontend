import React, { useEffect } from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import { Logout } from "../../components/Logout";
import { DataProvider, useData } from "../../context/csvContext";

export const Dashboard = () => {
  return (
    <DataProvider>
      <DashboardContent />
    </DataProvider>
  );
};

const DashboardContent = () => {
  const { data, error, loading } = useData();

  useEffect(() => {
    if (Array.isArray(data)) {
      console.log(data);
    }
  }, [data]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
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
      <h1>Data is available in using useContext [useData()] in data.</h1>
      <h4>Look in console</h4>
    </div>
  );
};
