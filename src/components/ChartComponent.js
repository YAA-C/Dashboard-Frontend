import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import Papa from 'papaparse';

const ChartComponent = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('CSV_files/cheating.csv');
        const text = await response.text();

       
        const parsedData = Papa.parse(text, { header: true });

      
        const groupedData = parsedData.data.reduce((acc, entry) => {
          const weapon = entry.weaponUsed;
          const damage = parseInt(entry.dmgDone, 10);

          if (!acc[weapon]) {
            acc[weapon] = 0;
          }

          acc[weapon] += damage;

          return acc;
        }, []);

   
        const chartLabels = Object.keys(groupedData);
        const chartValues = Object.values(groupedData);

        const chartData = {
          labels: chartLabels,
          datasets: [
            {
              label: 'Total Damage Done',
              data: chartValues,
              backgroundColor: 'rgba(75,192,192,0.2)',
              borderColor: 'rgba(75,192,192,1)',
              borderWidth: 1,
            },
          ],
        };

        setChartData(chartData);
      } catch (error) {
        console.error('Error fetching or parsing data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Weapon Damage Visualization</h2>
      <Line data={chartData} />
    </div>
  );
};

export default ChartComponent;
