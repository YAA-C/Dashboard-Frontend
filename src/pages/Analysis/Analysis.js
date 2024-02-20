import React, { useEffect } from "react";
import "../Dashboard/Dashboard.css";
// import { DataProvider, useData } from "../../context/csvContext";

import { BarChart } from "../charts/bar";
import { Histogram } from "../charts/histogram";
import { PieChart } from "../charts/pie";

export const Analysis = () => {
  return (
    // <DataProvider>
    <AnalysisContent />
    //  </DataProvider>
  );
};

const AnalysisContent = () => {
  // const { data, error, loading } = useData();

  // useEffect(() => {
  //   if (Array.isArray(data)) {
  //     // remove the last empty row
  //     console.log(data.slice(0, -1));
  //   }
  // }, [data]);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }

  // Static data for sample testing

  const weaponLabels = [
    "weapon_ak47",
    "weapon_m4a1_silencer",
    "weapon_awp",
    "weapon_usp_silencer",
    "weapon_mp9",
    "weapon_deagle",
    "weapon_mac10",
    "weapon_galilar",
    "weapon_m4a1",
    "weapon_glock",
    "weapon_p250",
    "weapon_famas",
    "weapon_elite",
    "weapon_tec9",
    "weapon_fiveseven",
  ];

  const weaponData = [
    6170, 5536, 3089, 1922, 1898, 1143, 1066, 904, 881, 845, 671, 401, 331, 255,
    58,
  ];

  const secondLabel = [
    "CHEST",
    "HEAD",
    "STOMACH",
    "RIGHTARM",
    "RIGHTLEG",
    "LEFTARM",
    "LEFTLEG",
    "GEAR",
  ];

  const secondData = [251, 91, 81, 40, 16, 13, 8, 2];

  const thirdLabel = ["ar", "pistol", "sniper", "smg"];
  const thirdData = [13892.0, 5225.0, 3089.0, 2964.0];

  const fourthLabel = ["No Movement", "Crouching"];
  const fourthData = [26349.0, 11632.0];

  const sixthLabel = ["Obstructed Shots", "Non-Obstructed Shots"];
  const sixthData = [2957, 35024];

  const hist = [
    54, 5, 48, 20, 17, 6, 7, 3, 4, 3, 3, 80, 140, 247, 128, 364, 520, 787, 1248,
    1397, 2741, 3569, 4514, 3982, 4268, 2649, 2474, 1847, 1608, 1266, 1131, 713,
    595, 324, 253, 159, 72, 48, 66, 59, 66, 50, 1, 34, 9, 5, 5, 12, 33, 20, 13,
    10, 20, 11, 3, 8, 1, 5, 4, 3,
  ];
  const edges = [
    -22.4395751953125, -21.4395751953125, -20.4395751953125, -19.4395751953125,
    -18.4395751953125, -17.4395751953125, -16.4395751953125, -15.4395751953125,
    -14.4395751953125, -13.4395751953125, -12.4395751953125, -11.4395751953125,
    -10.4395751953125, -9.4395751953125, -8.4395751953125, -7.4395751953125,
    -6.4395751953125, -5.4395751953125, -4.4395751953125, -3.4395751953125,
    -2.4395751953125, -1.4395751953125, -0.4395751953125, 0.5604248046875,
    1.5604248046875, 2.5604248046875, 3.5604248046875, 4.5604248046875,
    5.5604248046875, 6.5604248046875, 7.5604248046875, 8.5604248046875,
    9.5604248046875, 10.5604248046875, 11.5604248046875, 12.5604248046875,
    13.5604248046875, 14.5604248046875, 15.5604248046875, 16.5604248046875,
    17.5604248046875, 18.5604248046875, 19.5604248046875, 20.5604248046875,
    21.5604248046875, 22.5604248046875, 23.5604248046875, 24.5604248046875,
    25.5604248046875, 26.5604248046875, 27.5604248046875, 28.5604248046875,
    29.5604248046875, 30.5604248046875, 31.5604248046875, 32.5604248046875,
    33.5604248046875, 34.5604248046875, 35.5604248046875, 36.5604248046875,
  ];

  const eightLabel = [
    "Average Utility Damage Done",
    "Average Support Utility Used",
  ];
  const eightData = [4.058597476942648, 0.6611099332131878];

  const tenthLabel = ["Not Blind Shots", "Blind Shots"];
  const tenthData = [37540, 61];

  return (
    <>
      <div className="analysis-css">
        <h1>Analysis Charts</h1>

        <h2>Q. No. 1</h2>
        <BarChart labels={weaponLabels} data={weaponData} />

        <h2>Q. No. 2</h2>
        <BarChart labels={secondLabel} data={secondData} />

        <h2>Q. No. 3</h2>
        <PieChart labels={thirdLabel} data={thirdData} />

        <h2>Q. No. 4</h2>
        <PieChart labels={fourthLabel} data={fourthData} />

        <h2>Q. No. 6</h2>
        <PieChart labels={sixthLabel} data={sixthData} />

        <h2>Q. No. 7</h2>
        <Histogram hist={hist} edges={edges} />

        <h2>Q. No. 8</h2>
        <BarChart labels={eightLabel} data={eightData} />

        <h2>Q. No. 10</h2>
        <PieChart labels={tenthLabel} data={tenthData} />
      </div>
    </>
  );
};
