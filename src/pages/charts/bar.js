import React from "react";
import { Bar } from "react-chartjs-2";
import chroma from "chroma-js"; // Import chroma-js library

export const BarChart = (props) => {
  console.log(props.labels)
  const numSegments = props.labels.length;

  // Generate a color scale with n distinct colors
  const colorScale = chroma.scale(["#007bff", "#28a745", "#ffc107", "#dc3545"]).mode('lch').colors(numSegments);

  const chartData = {
    labels: props.labels,
    datasets: [
      {
        label: props.labels,
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
          color: "rgba(255, 255, 255, 1)", // Bright white color for legend labels
          textAlign: "left", 
        },
      },
    },
    scales: {
      y: {
        type: "linear",
        beginAtZero: true,
        ticks: {
          color: "rgba(255, 255, 255, 1)", // Bright white y-axis tick color
        },
        title: {
          display: true,
          text: "Value",
          color: "rgba(255, 255, 255, 1)", // Bright white y-axis label color
        },
      },
      x: {
        title: {
          display: true,
          text: "Category",
          color: "rgba(255, 255, 255, 1)", // Bright white x-axis label color
        },
        ticks: {
          color: "rgba(255, 255, 255, 1)", // Bright white x-axis tick color
        },
      },
    },
  };

  return (
    <div
      style={{
        width: "30vw",
        height: "30vw", // 1:1 aspect ratio for the outer square box
        minWidth: "320px",
        minHeight: "320px",
        backgroundColor: "grey",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        border: "2px solid #ccc", // Add border
        borderRadius: "12px", // Add border radius
        padding: "1px", // Add padding
        marginBottom: "20px", // Add margin bottom for spacing
      }}
    >
      <div
        style={{
          width: "100%",
          height: "calc(25% - 2px)", // 1:4 aspect ratio for the inner upper rectangular box
          backgroundColor: "#ffffff20",
          padding: "10px",
          borderBottom: "2px solid #ccc",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <h3 style={{ margin: 0, color: "black" }}>Bar Chart</h3>{" "}
        {/* Title Text */}
      </div>
      <div
        style={{
          width: "100%",
          height: "calc(75% - 2px)", // 3:4 aspect ratio for the chart box
          padding: "5%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Bar
          data={chartData}
          options={chartOptions}
          style={{ height: "100%", width: "100%" }}
        />
      </div>
    </div>
  );
};

export default BarChart;
