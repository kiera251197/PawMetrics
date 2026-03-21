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
    labels: ['Minimum Years', 'Maximum Years', 'Trainability', "Barking", "Playfulness", "Good with Children", "Good with Other Dogs" ], 
    datasets: [
      {
        label: 'Lifespan (Years)',
        data: [
          dogData?.min_life_expectancy || 0, 
          dogData?.max_life_expectancy || 0,
          dogData?.trainability || 0,
          dogData?.barking || 0,
          dogData?.playfulness || 0,
          dogData?.good_with_children || 0,
          dogData?.good_with_other_dogs || 0,
        ],
        borderColor: '#D9EEF3',
        backgroundColor: 'rgb(217, 238, 243)',
        pointBackgroundColor: '#D9EEF3',
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks: { color: '#F4E3D9' },
        title: { display: true, text: 'Age', color: '#F4E3D9' }
      },
      x: {
        ticks: { color: '#F4E3D9' }
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