import React from 'react'
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Colors,
} from "chart.js";

// Register necessary components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ["Funny", "Horror", "fiction", "April", "May"],
  datasets: [
    {
      label: "Genre distribution",
      data: [20, 500, 50, 60, 40],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)", // January - Red
        "rgba(54, 162, 235, 0.2)", // February - Blue
        "rgba(255, 206, 86, 0.2)", // March - Yellow
        "rgba(75, 192, 192, 0.2)", // April - Green
        "rgba(153, 102, 255, 0.2)", // May - Purple
      ],
      borderColor: "rgb(73, 161, 161)",
      borderWidth: 1,
    },
  ],
};

const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Books available per Genre',
      },
    },
  };
const BookGenreChart = () => {
  return <Bar data={data} options={options}  style={{maxWidth:"500px", maxHeight:"500px"}} className='p-3 card m-3'/>
}

export default BookGenreChart