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
        display: false, // Remove legend from the chart box
      },
    },
    scales: {
      x: {
        type: "linear",
        position: "bottom",
        title: {
          display: true,
          text: "Pitch",
          color: "rgba(255, 255, 255, 1)", // Bright white color for x-axis title
        },
        ticks: {
          color: "rgba(255, 255, 255, 1)", // Bright white color for x-axis ticks
        },
      },
      y: {
        type: "logarithmic",
        beginAtZero: true,
        title: {
          display: true,
          text: "Count",
          color: "rgba(255, 255, 255, 1)", // Bright white color for y-axis title
        },
        ticks: {
          callback: function (value, index, values) {
            if (value === 1 || value === 10 || value === 100 || value === 1000) {
              return value;
            }
            return null;
          },
          color: "rgba(255, 255, 255, 1)", // Bright white color for y-axis ticks
        },
      },
    },
  };

  return (
    <div
      style={{
        width: "48vw", // 5/8 of 30vw
        height: "30vw", // 4:6 aspect ratio for the inner chart box
        minWidth: "320px",
        minHeight: "384px",
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
          height: "calc(1/8*100% - 2px)", // 1:8 aspect ratio for the upper title box
          backgroundColor: "#ffffff20",
          padding: "10px",
          borderBottom: "2px solid #ccc",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <h3 style={{ margin: 0, color: "black" }}>Histogram</h3>{" "}
        {/* Title Text */}
      </div>
      <div
        style={{
          width: "100%",
          height: "calc(7/8*100% - 2px)", // 7:8 aspect ratio for the chart and legend box
          display: "flex",
        }}
      >
        <div
          style={{
            width: "calc(6/8*100% - 2px)", // 5:8 aspect ratio for the chart box
            height: "100%",
            padding: "5%",
          }}
        >
          <Bar
            data={chartData}
            options={chartOptions}
            style={{ height: "100%", width: "100%" }}
          />
        </div>
        <div
          style={{
            width: "calc(3/8*100% - 2px)", // 7:2 aspect ratio for the legend box
            height: "100%",
            backgroundColor: "#ffffff20",
            padding: "10px",
            borderLeft: "2px solid #ccc",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            fontSize: "14px", // Set a maximum font size
          }}
        >
          <div style={{ marginBottom: "5px", color: "white" }}>
            <div
              style={{
                width: "20px",
                height: "20px",
                backgroundColor: "rgba(75, 192, 192, 0.4)",
                marginRight: "5px",
                display: "inline-block",
              }}
            ></div>
            <span>Count</span>
          </div>
        </div>
      </div>
    </div>
  );
};
