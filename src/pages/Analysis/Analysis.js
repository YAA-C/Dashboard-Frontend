import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./Analysis.css";

import { Chart, registerables } from "chart.js";

import "../Dashboard/Dashboard.css";

import { Navbar } from "../../components/Navbar/Navbar";

import { PieChart } from "../../components/charts/pie";
import { BarChart } from "../../components/charts/bar";
import { Histogram } from "../../components/charts/histogram";

export const Analysis = () => {
  const match = useLocation();
  const matchId = match.state?.matchId;

  Chart.register(...registerables);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3001/analysis/" + matchId)
      .then((res) => {
        setData(res.data);
        console.log(res.data.chartsData.r1Data?.labels);
        console.log(res.data.chartsData.r1Data?.data);

        setLoading(false);
      })
      .catch((err) => {
        setError("Error fetching data.");
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <>
        <div className="loader-container">
          <div className="loader"></div>
          <h2>Loading data...</h2>
          <br />
          <h2>Please wait...</h2>
        </div>
      </>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // const L = [
  //   "m4a1",
  //   "mp9",
  //   "awp",
  //   "famas",
  //   "ak47",
  //   "p90",
  //   "aug",
  //   "usp_silencer",
  //   "deagle",
  //   "m4a1_silencer",
  //   "bizon",
  //   "mp7",
  //   "m249",
  //   "ump45",
  //   "ssg08",
  //   "p250",
  //   "scar20",
  //   "hkp2000",
  //   "negev",
  //   "elite",
  //   "glock",
  //   "xm1014",
  //   "galilar",
  //   "mag7",
  //   "nova",
  //   "mac10",
  //   "fiveseven",
  //   "tec9",
  //   "sg556",
  //   "cz75a",
  // ];

  // const D = [
  //   14468, 12077, 11941, 8270, 8073, 7416, 7191, 4623, 4436, 3713, 2912, 2627,
  //   2307, 2302, 2250, 1923, 1827, 1806, 1404, 1350, 1213, 1171, 811, 711, 453,
  //   359, 224, 196, 117, 66,
  // ];

  return (
    <>
      <Navbar title="ANALYSIS" />
      <div>
        <div className="container">
          <div className="charts">
            {" "}
            <BarChart
              labels={data.chartsData.r1Data?.labels}
              data={data.chartsData.r1Data?.data}
            />
          </div>

          <div className="charts">
            {" "}
            <BarChart
              labels={data.chartsData.r2Data?.labels}
              data={data.chartsData.r2Data?.data}
            />
          </div>
        </div>
      </div>
    </>
  );
};
