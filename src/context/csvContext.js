import React, { createContext, useContext, useEffect, useState } from "react";
import Papa from "papaparse";
import axios from "axios";

export const CsvDataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .post("http://localhost:3001/mongoCsv/latest", {
        apikey: "F_J6LWYUoKk.PDo5k/XqvBcVQjYh1uA",
      })
      .then((response) => {
        const parsedData = parseCsv(response.data.content);
        setData(parsedData);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const parseCsv = (csvContent) => {
    const parsedData = Papa.parse(csvContent, { header: true });
    return parsedData.data;
  };

  return (
    <CsvDataContext.Provider value={{ data, loading, error }}>
      {children}
    </CsvDataContext.Provider>
  );
};

export const useData = () => {
  return useContext(CsvDataContext);
};
