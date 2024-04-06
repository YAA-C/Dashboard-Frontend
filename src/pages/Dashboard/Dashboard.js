import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import { Navbar } from "../../components/Navbar/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const [matches, setMatches] = useState([]);
  const [dataAvail, setDataAvail] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .post("http://localhost:3001/dashboard/getMatches", {
        id: window.localStorage.getItem("userID"),
      })
      .then((res) => {
        if (res.data.success) {
          setDataAvail(true);
          setMatches(res.data.found);
        } else {
          setDataAvail(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const displayCharts = (matchId) => {
    navigate("/analysis", { state: { matchId } });
  };

  return (
    <>
      <div>
        <Navbar title="DASHBOARD" />

        <div
          style={{ height: "75vh", width: "100vw" }}
          className="matchDisplay"
        >
          {dataAvail ? (
            <>
              <ul className="match-list">
                {matches.map((match, index) => {
                  let dateStr = match.createdAt;
                  let dateObj = new Date(dateStr);

                  let options = {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                    second: "numeric",
                  };
                  let formattedDate = dateObj.toLocaleDateString(
                    "en-US",
                    options
                  );

                  return (
                    <li key={index}>
                      <span className="fw-bold">Match #{match._id} </span>
                      <span className="btn btn-dark fw-bold">
                        {formattedDate}
                      </span>
                      <button
                        className="fw-bold"
                        onClick={() => displayCharts(match._id)}
                      >
                        View Analysis
                      </button>
                    </li>
                  );
                })}
              </ul>
            </>
          ) : (
            <>
              <div>
                <h1>No matches for this account found</h1>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
