import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useEffect, useState } from 'react';
import { fetchDataFromApi } from './core';
import * as Core from './core';
import * as Vars from './vars';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
      labels: {
        font: {
          family: 'Ubuntu, sans-serif',
          size: -1,
          color: '_black',
        },
      },
    },
  },
};

export function ChartDstLastMonth() {
  const [chartData, setChartData] = useState({
    labels: Core.getDaysInPreviousMonth(),
    datasets: [
      {
        label: '',
        data: [],
        borderColor: 'rgb(255, 93, 23)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  });

  useEffect(() => {
    fetchDataFromApi(Vars.Urls.LastMonthDstUrl)
      .then((apiData) => {
        setChartData({
          ...chartData,
          datasets: [{ ...chartData.datasets[0], data: apiData }],
        });
      })
      .catch((error) => {
        console.error('error fetching data:', error);
      });
  }, []);

  return <Line options={options} data={chartData} />;
}
