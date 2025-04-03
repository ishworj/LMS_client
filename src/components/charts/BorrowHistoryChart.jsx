import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement
);


const data = {
  labels: ["week 1", "week 2", "week 3", "week 4"],
  datasets: [
    {
      label: "Borrowing Trends",
      data: [65, 59, 80, 81],
      fill: false,
      borderColor: "rgba(75, 192, 192, 1)",
      tension: 0.1,
    },
  ],
};


const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top", 
    },
    title: {
      display: true,
      text: "Borrowing trends 4 weeks", 
    },
  },
};

const BorrowHistoryChart = () => {
  return (
    <Line
      data={data}
      options={options}
      style={{ maxWidth: "500px", maxHeight: "500px" }}
      className="p-3 card m-3"
    />
  );
};

export default BorrowHistoryChart;
