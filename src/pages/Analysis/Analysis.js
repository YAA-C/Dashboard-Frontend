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
      </div>
    </>
  );
};
