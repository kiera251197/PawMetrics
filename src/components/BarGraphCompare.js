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
        label: 'Rating (1-5)',
        data: [
          dogData?.energy || 0,
          dogData?.trainability || 0,
          dogData?.barking || 0,
        ],
        backgroundColor: [
          '#BBD58F', 
          '#D2B0DC', 
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
        ticks: { color: '#F4E3D9' }
      },
      x: {
        ticks: { color: '#F4E3D9' }
      }
    },
    plugins: {
      legend: { display: false },
    },
  };

  return <Bar data={data} options={options} />;
}

export default BarChart;