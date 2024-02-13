import React, { useEffect } from "react";
import "../Dashboard/Dashboard.css";
import { DataProvider, useData } from "../../context/csvContext";

export const Analysis = () => {
  return (
    <DataProvider>
      <AnalysisContent />
    </DataProvider>
  );
};

const AnalysisContent = () => {
  const { data, error, loading } = useData();

  useEffect(() => {
    if (Array.isArray(data)) {
      // remove the last empty row
      console.log(data.slice(0, -1));
    }
  }, [data]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div className="main-box">
        <h1>CSV Data Display</h1>
        <table className="styled-table">
          <thead>
            {data.length > 0 && (
              <tr>
                {Object.keys(data.slice(0, -1)[0]).map((header) => (
                  <th key={header}>{header}</th>
                ))}
              </tr>
            )}
          </thead>
          <tbody>
            {data.slice(0, -1).map((row, index) => (
              <tr key={index}>
                {Object.values(row).map((value, colIndex) => (
                  <td key={colIndex}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
