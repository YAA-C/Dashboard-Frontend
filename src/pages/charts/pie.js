import React from "react";
import { Pie } from "react-chartjs-2";
import chroma from "chroma-js"; // Import chroma-js library

export const PieChart = (props) => {
  const numSegments = props.labels.length;

  // Generate a color scale with n distinct colors
  const colorScale = chroma.scale(["#007bff", "#28a745", "#ffc107", "#dc3545"]).mode('lch').colors(numSegments);

  const chartData = {
    labels: props.labels,
    datasets: [
      {
        data: props.data,
        backgroundColor: colorScale.map(color => chroma(color).alpha(0.6).css()), // Set background colors with transparency
        borderColor: colorScale.map(color => chroma(color).css()),
        borderWidth: 1,
        hoverBackgroundColor: colorScale.map(color => chroma(color).alpha(0.8).css()), // Set hover background colors with transparency
        hoverBorderColor: colorScale.map(color => chroma(color).css()),
      },
    ],
  };

  const chartOptions = {
    plugins: {
      legend: {
        position: "top", 
        align: "end", 
        labels: {
          color: "rgba(255, 255, 255, 1)",
          textAlign: "left", 
        },
      },
    },
  };

  return (
    <div
      style={{
        width: "30vw",
        height: "30vw",
        minWidth: "320px",
        minHeight: "320px",
        backgroundColor: "grey",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        border: "2px solid #ccc",
        borderRadius: "12px",
        padding: "1px",
        marginBottom: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "calc(25% - 2px)",
          backgroundColor: "#ffffff20",
          padding: "10px",
          borderBottom: "2px solid #ccc",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center"
        }}
      >
        <h3 style={{ margin: 0 }}>Pie Chart</h3> 
      </div>
      <div
        style={{
          width: "100%",  
          height: "calc(75% - 2px)",
          padding: "5%", 
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Pie data={chartData} options={chartOptions} style={{ height: "100%", width: "100%" }} />
      </div>
    </div>
  );
};

export default PieChart;
