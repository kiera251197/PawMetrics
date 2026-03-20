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
          'rgba(34, 60, 65, 1)',
          'rgba(46, 84, 92, 1)',
          'rgba(70, 118, 128, 1)',
          'rgba(114, 157, 166, 1)',
          'rgba(217, 238, 243, 1)',
        ],
        borderColor: [
          'rgba(34, 60, 65, 1)',
          'rgba(46, 84, 92, 1)',
          'rgba(70, 118, 128, 1)',
          'rgba(114, 157, 166, 1)',
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