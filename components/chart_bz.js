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

export function ChartBz6h() {
  const [chartData, setChartData] = useState({
    labels: Core.getLastSixHours(),
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
    fetchDataFromApi(Vars.Urls.Bz6hUrl)
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

export function ChartBz1d() {
  const [chartData, setChartData] = useState({
    labels: Core.getLast24H(),
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
    fetchDataFromApi(Vars.Urls.Bz1dUrl)
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

export function ChartBz3d() {
  const [chartData, setChartData] = useState({
    labels: Core.getHoursInLastThreeDays(),
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
    fetchDataFromApi(Vars.Urls.Bz3dUrl)
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

export function ChartBz7d() {
  const [chartData, setChartData] = useState({
    labels: Core.getLast7DaysInHours(),
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
    fetchDataFromApi(Vars.Urls.Bz7dUrl)
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
