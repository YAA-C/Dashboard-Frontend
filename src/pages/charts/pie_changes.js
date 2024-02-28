import React from "react";
import { Pie } from "react-chartjs-2";

export const PieChart = ({ labels, data }) => {
  const chartData = {
    labels: labels,
    datasets: [
      {
        data: data,
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
        position: 'top', // Align legend to the top
        labels: {
          color: 'black' // Adjust legend font color if needed
        }
      }
    }
  };

  return (
    <div>
      <Pie data={chartData} options={chartOptions} height={1000} width={500} />
    </div>
  );
};
