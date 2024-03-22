import React from "react";
import { Bar } from "react-chartjs-2";

export const BarChart = (props) => {
  const chartData = {
    labels: props.labels,
    datasets: [
      {
        label: "Weapon Usage",
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(75,192,192,0.6)",
        hoverBorderColor: "rgba(75,192,192,1)",
        data: props.data,
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
        }
      }
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
        border: "2px solid #ccc", // Add border
        borderRadius: "12px", // Add border radius
        padding: "1px", // Add padding
      }}
    >
      <div
        style={{
          height: "20%",
          backgroundColor: "#ffffff20",
          padding: "10px",
          borderBottom: "1px solid #ccc",
        }}
      >
        <h3 style={{ margin: 0, color: "black" }}>Bar Chart</h3> {/* Title Text */}
      </div>
      <div style={{ height: "calc(80% - 40px)", padding: "20px" }}>
        <Bar
          data={chartData}
          options={chartOptions}
          style={{ height: "100%", width: "100%" }}
        />
      </div>
    </div>
  );
};
