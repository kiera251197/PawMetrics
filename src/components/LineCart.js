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
import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const data = {
 labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
 datasets: [
   {
     label: "Attendance",      
     data: [20, 25, 22, 28, 30],
     borderWidth: 2             
   }
 ]
};

const LineChart = () => {
 return (
   <div>
     <h2>Weekly Attendance</h2>
     <Line data={data} />
   </div>
 );
};

export default LineChart;

import {
 Chart as ChartJS,
 CategoryScale,
 LinearScale,
 PointElement,
 LineElement
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
 CategoryScale,
 LinearScale,
 PointElement,
 LineElement
);

const data = {
 labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
 datasets: [
   {
     label: "Attendance",
     data: [20, 25, 22, 28, 30],
     borderWidth: 2
   }
 ]
};

const LineChart = () => {
 return (
   <div>
     <h2>Weekly Attendance</h2>
     <Line data={data} />
   </div>
 );
};

export default LineChart;
