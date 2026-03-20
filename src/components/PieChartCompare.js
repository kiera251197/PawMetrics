import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

function PieChart({ dogData }) {
  const data = {
    labels: ['Shedding', 'Drooling', 'Coat Length', 'Grooming'],
    datasets: [
      {
        label: 'Rating (1-5)',
        data: [
          dogData?.shedding || 0,
          dogData?.drooling || 0,
          dogData?.coat_length || 0,
          dogData?.grooming || 0,
        ],
        backgroundColor: [
          'rgba(34, 60, 65, 1)',
          'rgba(46, 84, 92, 1)',
          'rgba(70, 118, 128, 1)',
          'rgba(217, 238, 243, 1)',
        ],
        borderColor: [
          'rgba(34, 60, 65, 1)',
          'rgba(46, 84, 92, 1)',
          'rgba(70, 118, 128, 1)',
          'rgba(217, 238, 243, 1)',
         ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: { color: '#F4E3D9', font: { size: 12, fontFamily: "Montserrat" } }
      },
    },
  };

  return <Pie data={data} options={options} />;
}

export default PieChart;