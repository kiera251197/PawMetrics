import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function BarChart({ dogData }) {
  
  const data = {
    labels: ['Energy', 'Trainability', 'Barking'],
    datasets: [
      {
        label: 'Level (1-5)',
        data: [
          dogData?.energy || 0,
          dogData?.trainability || 0,
          dogData?.barking || 0,
        ],
        backgroundColor: [
          '#467680', 
          '#729DA6', 
          '#D9EEF3', 
        ],
        borderRadius: 8, 
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        max: 5,
        ticks: { color: '#FFFFFF' }
      },
      x: {
        ticks: { color: '#FFFFFF' }
      }
    },
    plugins: {
      legend: { display: false },
    },
  };

  return <Bar data={data} options={options} />;
}

export default BarChart;