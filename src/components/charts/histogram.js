import React from "react";
import { Bar } from "react-chartjs-2";

export const Histogram = (props) => {
  const chartData = {
    labels: props.labels,
    datasets: [
      {
        label: "Count",
        backgroundColor: "rgba(0, 0, 139, 0.4)", // Dark blue color
        borderColor: "rgba(0, 0, 139, 1)", // Dark blue color
        borderWidth: 1,
        hoverBackgroundColor: "rgba(0, 0, 139, 0.6)", // Dark blue color
        hoverBorderColor: "rgba(0, 0, 139, 1)", // Dark blue color
        data: props.data,
      },
    ],
  };

  const chartOptions = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        type: "linear",
        position: "bottom",
        title: {
          display: true,
          text: "Pitch",
          color: "rgba(255, 255, 255, 1)",
        },
        ticks: {
          color: "rgba(255, 255, 255, 1)",
        },
      },
      y: {
        type: "logarithmic",
        beginAtZero: true,
        title: {
          display: true,
          text: "Count",
          color: "rgba(255, 255, 255, 1)",
        },
        ticks: {
          callback: function (value, index, values) {
            if (value === 1 || value === 10 || value === 100 || value === 1000) {
              return value;
            }
            return null;
          },
          color: "rgba(255, 255, 255, 1)",
        },
      },
    },
  };

  return (
    <div
      style={{
        width: "48vw",
        height: "30vw",
        minWidth: "320px",
        minHeight: "320px",
        backgroundColor: "grey",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        border: "2px solid #ccc",
        borderRadius: "12px",
        padding: "1px",
        marginBottom: "0px",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "calc(1/8*100% - 2px)",
          backgroundColor: "#ffffff20",
          padding: "10px",
          borderBottom: "2px solid #ccc",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <h3 style={{ margin: 0, color: "black" }}>Histogram</h3>
      </div>
      <div
        style={{
          width: "100%",
          height: "calc(7/8*100% - 2px)",
          display: "flex",
          flex: "1",
        }}
      >
        <div
          style={{
            width: "calc(6/8*100% - 2px)",
            height: "100%",
            padding: "5%",
            justifyContent: "center",
            display: "flex",
            justifyContent: "center", 
            alignItems: "center"
          }}
        >
          <Bar
            data={chartData}
            options={chartOptions}
            style={{ height: "100%", width: "100%"}}
          />
        </div>
        <div
          style={{
            width: "calc(3/8*100% - 2px)",
            height: "100%",
            backgroundColor: "#ffffff20",
            padding: "10px",
            borderLeft: "2px solid #ccc",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            fontSize: "14px",
          }}
        >
          <div style={{ marginBottom: "5px", display: "flex", alignItems: "center"}}>
            <div
              style={{
                width: "20px",
                height: "20px",
                backgroundColor: "rgba(0, 0, 139, 0.4)", // Dark blue color
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
