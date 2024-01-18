import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Papa from "papaparse";
import { useLocation } from "react-router-dom";
import "./displayCsv.css";

export const DisplayCsv = () => {
  const location = useLocation();
  const apikey = location.state?.apikey;

  const [csvData, setCsvData] = useState([]);

  useEffect(() => {
    axios
      .post("http://localhost:3001/mongoCsv/latest", {
        apikey
      })
      .then((response) => {
        const parsedData = parseCsv(response.data.content);
        // Limit the displayed rows to the first 50
        setCsvData(parsedData.slice(0, 50));
      })
      .catch((err) => {
        console.log(err);
      });

      console.log(apikey);
  }, [apikey]);

  const parseCsv = (csvContent) => {
    const parsedData = Papa.parse(csvContent, { header: true });
    return parsedData.data;
  };

  return (<>
    <div>
      <h1>CSV Data Display</h1>
      <table className="styled-table">
        <thead>
          {csvData.length > 0 && (
            <tr>
              {Object.keys(csvData[0]).map((header) => (
                <th key={header}>{header}</th>
              ))}
            </tr>
          )}
        </thead>
        <tbody>
          {csvData.map((row, index) => (
            <tr key={index}>
              {Object.values(row).map((value, colIndex) => (
                <td key={colIndex}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </>);
};
