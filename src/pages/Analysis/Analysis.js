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

      <table
        className="table table-bordered table-sm"
        style={{ marginTop: "12vh" }}
      >
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
                <td className={`${
                    info.isCheating === false
                        ?"green"
                      : "red"
                  } `}>{info.steamid}</td>
                <td
                  className={`${
                    info.isCheating === false
                        ?"green"
                      : "red"
                  } `}
                >
                  {info.playerName}
                </td>
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
            title="Report 1 : Most used Weapon"
          />
        </div>

        <div className="charts">
          <BarChart
            labels={data.chartsData.r2Data?.labels}
            data={data.chartsData.r2Data?.data}
            title="Report 2 : Mostly targeted body part"
          />
        </div>

        <div className="charts">
          <PieChart
            labels={data.chartsData.r3Data?.labels}
            data={data.chartsData.r3Data?.data}
            title="Report 3 : Most used Weapon Category"
          />
        </div>
        <div className="charts">
          <PieChart
            labels={data.chartsData.r4Data?.labels}
            data={data.chartsData.r4Data?.data}
            title="Report 4 : Movement preferred during fights"
          />
        </div>
        <div className="charts">
          <PieChart
            labels={data.chartsData.r6Data?.labels}
            data={data.chartsData.r6Data?.data}
            title="Report 6 : When Player could not see but shot landed on target "
          />
        </div>

        <div className="charts">
          <Histogram
            labels={data.chartsData.r7Data?.labels}
            data={data.chartsData.r7Data?.data}
            title=" Report 7 : Where do players see vertically"
          />
        </div>

        <div className="charts">
          <BarChart
            labels={data.chartsData.r8Data?.labels}
            data={data.chartsData.r8Data?.data}
            title=" Report 8 : Average Utility uses"
          />
        </div>

        <div className="charts">
          <PieChart
            labels={data.chartsData.r9Data.r9Ar.labels}
            data={data.chartsData.r9Data.r9Ar.data}
            title="Report 9 : Do players play with scope on or off for ARs"
          />
        </div>

        <div className="charts">
          <PieChart
            labels={data.chartsData.r9Data.r9Sniper.labels}
            data={data.chartsData.r9Data.r9Sniper.data}
            title="Report 10 : Do players play with scope on or off for SNIPERs"
          />
        </div>

        <div className="charts">
          <PieChart
            labels={data.chartsData.r10Data?.labels}
            data={data.chartsData.r10Data?.data}
            title="Report 11 : Was Player blind during fights"
          />
        </div>
      </div>
    </>
  );
};
