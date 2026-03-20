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
    labels: ['Playfulness', 'Protectiveness', 'Good with Children', 'Good with Other Dogs', 'Good with Strangers'],
    datasets: [
      {
        label: 'Rating (1-5)',
        data: [
          dogData?.playfulness || 0,
          dogData?.protectiveness || 0,
          dogData?.good_with_children || 0,
          dogData?.good_with_other_dogs || 0,
          dogData?.good_with_strangers || 0,
        ],
        backgroundColor: [
        'rgba(66, 74, 51, 1)',
        'rgba(84, 95, 64, 1)',
        'rgba(101, 115, 76, 1)',
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