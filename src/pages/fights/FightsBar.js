import axios from "axios";
import { useLocation } from "react-router-dom";
import { PlayerTargetAnimation } from "./FightsWindow";
import { useState, useEffect } from "react";
import Dropdown from "../../components/dropdown";
import { Navbar } from "../../components/Navbar/Navbar";

export const FightsBar = () => {
  const match = useLocation();
  const matchId = match.state?.matchId;

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [num, setNum] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:3001/fights/" + matchId + "/" + num)
      .then((res) => {
        setData(res.data.fights);
        setTotal(res.data.totalFights);
        setLoading(false);
      })
      .catch((err) => {
        setError("Error fetching data.");
        console.error(err);
        setLoading(false);
      });
  }, [matchId, num]);

  const handleDropdownChange = (selectedNum) => {
    setNum(selectedNum);
  };

  if (loading) {
    return (
      <>
        <div className="loader-container">
          <div className="loader"></div>
          <h2>Loading data...</h2>
          <br />
          <h2>Please wait...</h2>
        </div>
      </>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Navbar title="Fights Analysis" />
      <center style={{ marginTop: "10vh" }}>
        <Dropdown total={total} onSelect={handleDropdownChange} />
      </center>
      <PlayerTargetAnimation data={data} />
    </>
  );
};

export default FightsBar;
