import React from 'react';
import { Line } from 'react-chartjs-2';
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function LifeExpectancyChart({ dogData }) {
  
  const data = {
    labels: ['Minimum Years', 'Maximum Years'], 
    datasets: [
      {
        label: 'Lifespan (Years)',
        data: [
          dogData?.min_life_expectancy || 0, 
          dogData?.max_life_expectancy || 0
        ],
        borderColor: '#D9EEF3',
        backgroundColor: 'rgb(217, 238, 243)',
        pointBackgroundColor: '#D9EEF3',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: false,
        ticks: { color: '#F4E3D9' },
        title: { display: true, text: 'Age', color: '#F4E3D9' }
      },
      x: {
        ticks: { color: '#F4E3D9', font: {size: 14 }}
      }
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return <Line data={data} options={options} />;
}

export default LifeExpectancyChart;