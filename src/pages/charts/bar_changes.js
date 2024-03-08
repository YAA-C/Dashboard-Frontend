import React from "react";
import { Bar } from "react-chartjs-2";

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
    plugins: {
      legend: {
        position: 'top', // Align legend to the top
        align: 'end', // Align legend to the end (right)
        labels: {
          color: 'rgba(255, 255, 255, 1)' // Bright white legend font color
        }
      }
    },
    scales: {
      y: {
        type: "linear",
        beginAtZero: true,
        ticks: {
          color: 'rgba(255, 255, 255, 1)' // Bright white y-axis tick color
        },
        title: {
          display: true,
          text: 'Value',
          color: 'rgba(255, 255, 255, 1)' // Bright white y-axis label color
        }
      },
      x: {
        title: {
          display: true,
          text: 'Category',
          color: 'rgba(255, 255, 255, 1)' // Bright white x-axis label color
        },
        ticks: {
          color: 'rgba(255, 255, 255, 1)' // Bright white x-axis tick color
        }
      }
    }
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