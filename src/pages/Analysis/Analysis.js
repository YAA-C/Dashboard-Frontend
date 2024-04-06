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
  const [player, setPlayer] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/analysis/" + matchId)
      .then((res) => {
        setData(res.data);

        axios
          .post("http://localhost:3001/analysis/getPlayers", {
            id: matchId,
          })
          .then((res) => {
            setPlayer(res.data.player.players);
            setLoading(false);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        setError("Error fetching data.");
        console.error(err);
        setLoading(false);
      });
  }, [matchId]);

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

  return (
    <>
      <Navbar title="ANALYSIS" />

      <table className="table table-bordered table-striped table-sm table-hover">
        <thead>
          <tr>
            <th className="sticky-header">
              <center>Steam ID</center>
            </th>
            <th className="sticky-header">
              <center>Player Name</center>
            </th>
          </tr>
        </thead>

        <tbody>
          {player.map((info) => {
            return (
              <tr key={info._id}>
                <td>{info.steamid}</td>
                <td>{info.playerName}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="container">
        <div className="charts">
          <BarChart
            labels={data.chartsData.r1Data?.labels}
            data={data.chartsData.r1Data?.data}
          />
        </div>

        <div className="charts">
          <BarChart
            labels={data.chartsData.r2Data?.labels}
            data={data.chartsData.r2Data?.data}
          />
        </div>

        <div className="charts">
          <PieChart
            labels={data.chartsData.r3Data?.labels}
            data={data.chartsData.r3Data?.data}
          />
        </div>
        <div className="charts">
          <PieChart
            labels={data.chartsData.r4Data?.labels}
            data={data.chartsData.r4Data?.data}
          />
        </div>
        <div className="charts">
          <PieChart
            labels={data.chartsData.r6Data?.labels}
            data={data.chartsData.r6Data?.data}
          />
        </div>

        <div className="charts">
          <Histogram
            labels={data.chartsData.r7Data?.labels}
            data={data.chartsData.r7Data?.data}
          />
        </div>

        <div className="charts">
          <BarChart
            labels={data.chartsData.r8Data?.labels}
            data={data.chartsData.r8Data?.data}
          />
        </div>

        <div className="charts">
          <PieChart
            labels={data.chartsData.r9Data.r9Ar.labels}
            data={data.chartsData.r9Data.r9Ar.data}
          />
        </div>

        <div className="charts">
          <PieChart
            labels={data.chartsData.r9Data.r9Sniper.labels}
            data={data.chartsData.r9Data.r9Sniper.data}
          />
        </div>

        <div className="charts">
          <PieChart
            labels={data.chartsData.r10Data?.labels}
            data={data.chartsData.r10Data?.data}
          />
        </div>
      </div>
    </>
  );
};
