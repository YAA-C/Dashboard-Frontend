import React from "react";
import { Pie } from "react-chartjs-2";
import chroma from "chroma-js"; // Import chroma-js library

export const PieChart = (props) => {
  const numSegments = props.labels.length;

  // Generate a color scale with n distinct colors
  const colorScale = chroma
    .scale(["#007bff", "#28a745", "#ffc107", "#dc3545"])
    .mode("lch")
    .colors(numSegments);

  const chartData = {
    labels: props.labels,
    datasets: [
      {
        data: props.data,
        backgroundColor: colorScale.map((color) => chroma(color).alpha(0.6).css()), // Set background colors with transparency
        borderColor: colorScale.map((color) => chroma(color).css()),
        borderWidth: 1,
        hoverBackgroundColor: colorScale.map((color) => chroma(color).alpha(0.8).css()), // Set hover background colors with transparency
        hoverBorderColor: colorScale.map((color) => chroma(color).css()),
      },
    ],
  };

  const chartOptions = {
    plugins: {
      legend: {
        display: false, // Hide legends in the chart box
      },
    },
  };

  return (
    <div
      style={{
        width: "48vw", // 5/8 of 30vw
        height: "30vw", // 5:8 aspect ratio of 30vw
        minWidth: "320px",
        minHeight: "320px",
        backgroundColor: "grey",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start", // Align items at the start of the cross axis (vertical axis)
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
          height: "calc(1/8*100% - 2px)", // 1:8 aspect ratio for the inner title box
          backgroundColor: "#ffffff20",
          padding: "10px",
          borderBottom: "2px solid #ccc",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <h3 style={{ margin: 0 }}>Pie Chart</h3>
      </div>
      <div
        style={{
          width: "100%",
          height: "calc(6/8*100% - 2px)", // 4:6 aspect ratio for the chart and legends box
          display: "flex",
          justifyContent: "center",
          alignItems: "stretch", // Make the legend box stretch vertically
        }}
      >
        <div
          style={{
            width: "calc(4/6*100% - 2px)", // 4:6 aspect ratio for the chart
            height: "100%",
            padding: "5%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Pie data={chartData} options={chartOptions} style={{ height: "100%", width: "100%" }} />
        </div>
        <div
          style={{
            width: "calc(2/6*100% - 2px)", // 4:2 aspect ratio for the legends box
            backgroundColor: "#ffffff20",
            padding: "10px",
            borderLeft: "2px solid #ccc",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            fontSize: "14px", // Set a maximum font size
            overflow: "auto", // Enable scrolling
            scrollbarWidth: "thin", // Thin scrollbar
            scrollbarColor: "rgba(255, 255, 255, 0.5) rgba(0, 0, 0, 0.1)", // Scrollbar color
            height: "118%", // Extend to the bottom
          }}
        >
          {props.labels.map((label, index) => (
            <div key={index} style={{ marginBottom: "5px" }}>
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  backgroundColor: colorScale[index],
                  marginRight: "5px",
                  display: "inline-block",
                }}
              ></div>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PieChart;
