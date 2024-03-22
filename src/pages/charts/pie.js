import React from "react";
import { Pie } from "react-chartjs-2";

export const PieChart = (props) => {
  const chartData = {
    labels: props.labels,
    datasets: [
      {
        data: props.data,
        backgroundColor: ["rgba(75,192,192,0.4)", "rgba(255,99,132,0.4)"],
        borderColor: ["rgba(75,192,192,1)", "rgba(255,99,132,1)"],
        borderWidth: 1,
        hoverBackgroundColor: ["rgba(75,192,192,0.6)", "rgba(255,99,132,0.6)"],
        hoverBorderColor: ["rgba(75,192,192,1)", "rgba(255,99,132,1)"],
      },
    ],
  };

  const chartOptions = {
    plugins: {
      legend: {
        position: "top", // Change legend position to bottom for better spacing
        align: "end", // Align legends to the center
        labels: {
          color: "rgba(255, 255, 255, 1)",
        },
      },
    },
  };

  return (
    <div
      style={{
        width: "30vw",
        display: "inline-block",
        marginRight: "20px",
        border: "2px solid #ccc", // Add border
        borderRadius: "12px", // Add border radius
        padding: "1px", // Adjust padding for the outer box
      }}
    >
      <div
        style={{
          height: "20%",
          backgroundColor: "#ffffff20",
          padding: "10px",
          borderBottom: "1px solid #ccc", // Add border bottom
        }}
      >
        <h3 style={{ margin: 0 }}>Pie Chart</h3> {/* Title Text */}
      </div>
      <div style={{ height: "calc(80% - 40px)", padding: "40px 40px" }}> {/* Adjust height and padding */}
        <Pie data={chartData} options={chartOptions} height={300} width={300} />
      </div>
    </div>
  );
};
