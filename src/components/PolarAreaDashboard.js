import React from 'react';
import { PolarArea } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

function PolarAreaChart({ dogData }) {
  
  const data = {
    labels: ['Shedding', 'Grooming', 'Drooling', 'Coat Length'],
    datasets: [
      {
        label: 'Rating (1-5)',
        data: [
          dogData?.shedding || 0,
          dogData?.grooming || 0,
          dogData?.drooling || 0,
          dogData?.coat_length || 0
        ],
        backgroundColor: [
        'rgba(66, 74, 51, 1)',
        'rgba(84, 95, 64, 1)',
        'rgba(147, 166, 114, 1)',
        'rgba(187, 213, 143, 1)'
        ],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      r: {
        suggestedMin: 0,
        suggestedMax: 5,
        ticks: { display: false } 
      }
    },
    plugins: {
      legend: {
        position: 'bottom',
        labels: { color: '#F4E3D9' }
      }
    }
  };

  return <PolarArea data={data} options={options} />;
}

export default PolarAreaChart;