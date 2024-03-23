import React from "react";
import { Bar } from "react-chartjs-2";

export const Histogram = (props) => {
  const chartData = {
    labels: props.labels,
    datasets: [
      {
        label: "Count",
        backgroundColor: "rgba(75, 192, 192, 0.4)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(75, 192, 192, 0.6)",
        hoverBorderColor: "rgba(75, 192, 192, 1)",
        data: props.data,
      },
    ],
  };

  const chartOptions = {
    plugins: {
      legend: {
        display: true,
        position: 'top', // Position legend at the top
        align: 'end', // Align legend to the end (right)
        labels: {
          color: 'rgba(255, 255, 255, 1)' // Bright white legend font color
        }
      },
    },
    scales: {
      x: {
        type: "linear",
        position: "bottom",
        title: {
          display: true,
          text: "Pitch",
          color: "rgba(255, 255, 255, 1)" // Bright white color for x-axis title
        },
        ticks: {
          color: "rgba(255, 255, 255, 1)" // Bright white color for x-axis ticks
        }
      },
      y: {
        type: "logarithmic",
        beginAtZero: true,
        title: {
          display: true,
          text: "Count",
          color: "rgba(255, 255, 255, 1)" // Bright white color for y-axis title
        },
        ticks: {
          callback: function (value, index, values) {
            if (value === 1 || value === 10 || value === 100 || value === 1000) {
              return value;
            }
            return null;
          },
          color: 'rgba(255, 255, 255, 1)' // Bright white color for y-axis ticks
        }
      },
    },
  };

  return (
    <div
      style={{
        width: "30vw",
        height: "30vw", // 1:1 aspect ratio for the outer square box
        minWidth:"320px",
        minHeight:"320px",
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
          alignItems: "center"
        }}
      >
        <h3 style={{ margin: 0, color: "black" }}>Histogram</h3> {/* Title Text */}
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
