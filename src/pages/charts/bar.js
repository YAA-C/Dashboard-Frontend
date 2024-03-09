import React from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

export const BarChart = ({ labels, data }) => {
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Weapon Usage",
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(75,192,192,0.6)",
        hoverBorderColor: "rgba(75,192,192,1)",
        data: data,
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        type: "linear",
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <Bar
        data={chartData}
        options={chartOptions}
        style={{ height: "80vh", width: "80vw" }}
      />
    </div>
  );
};

