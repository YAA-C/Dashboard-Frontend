import React from "react";
import { Bar } from "react-chartjs-2";

export const Histogram = ({ hist, edges }) => {
  const chartData = {
    labels: edges,
    datasets: [
      {
        label: "Count",
        backgroundColor: "rgba(75, 192, 192, 0.4)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(75, 192, 192, 0.6)",
        hoverBorderColor: "rgba(75, 192, 192, 1)",
        data: hist,
      },
    ],
  };

  const chartOptions = {
    scales: {
      x: {
        type: "linear",
        position: "bottom",
        title: {
          display: true,
          text: "Pitch",
        },
      },
      y: {
        type: "logarithmic",
        beginAtZero: true,
        title: {
          display: true,
          text: "Count",
        },
      },
    },
  };

  return (
    <div>
      <h1>Histogram of Pitch</h1>
      <Bar data={chartData} options={chartOptions} height={500} width={1000} />
    </div>
  );
};

