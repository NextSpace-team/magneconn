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

export function ChartPlasmaRealTime() {
  const [chartData, setChartData] = useState({
    labels: Core.getLastFiveMinutes(),
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
    fetchDataFromApi(Vars.Urls.PlasmaNowUrl)
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

export function ChartPlasma3d() {
  const [chartData, setChartData] = useState({
    labels: Core.getLast3DaysInMinutesArray(),
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
    fetchDataFromApi(Vars.Urls.Plasma3dUrl)
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

export function ChartPlasme7d() {
  const [chartData, setChartData] = useState({
    labels: Core.getLastSevenDays(),
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
    fetchDataFromApi(Vars.Urls.Plasma7dUrl)
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

export function ChartPlasma6h() {
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
    fetchDataFromApi(Vars.Urls.Plasma6hUrl)
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


export function ChartPlasma2h() {
  const [chartData, setChartData] = useState({
    labels: Core.getLast2HoursInMinutes(),
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
    fetchDataFromApi(Vars.Urls.Plasma2hUrl)
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


export function ChartPlasma1d() {
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
    fetchDataFromApi(Vars.Urls.Plasma1dUrl)
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
