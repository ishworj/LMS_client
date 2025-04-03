import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";


ChartJS.register(ArcElement, CategoryScale, Title, Tooltip, Legend);


  const data = {
    labels: [
      "Fiction - Available",
      "Fiction - Borrowed",
      "Mystery - Available",
      "Mystery - Borrowed",
      "Romance - Available",
      "Romance - Borrowed",
      "Sci-Fi - Available",
      "Sci-Fi - Borrowed",
      "Fantasy - Available",
      "Fantasy - Borrowed",
    ],
    datasets: [
      {
        label: "Genre",
        data: [6, 4, 5, 5, 7, 3, 8, 2, 9, 1],
        backgroundColor: [
          "#FF6384", // Fiction Available
          "#FF9F40", // Fiction Borrowed
          "#36A2EB", // Mystery Available
          "#FFCD56", // Mystery Borrowed
          "#4BC0C0", // Romance Available
          "#FF65B3", // Romance Borrowed
          "#36A2EB", // Sci-Fi Available
          "#FF9F40", // Sci-Fi Borrowed
          "#FF6384", // Fantasy Available
          "#FF9F40", // Fantasy Borrowed
        ],
        borderColor: [
          "#FF6384", // Fiction Available
          "#FF9F40", // Fiction Borrowed
          "#36A2EB", // Mystery Available
          "#FFCD56", // Mystery Borrowed
          "#4BC0C0", // Romance Available
          "#FF65B3", // Romance Borrowed
          "#36A2EB", // Sci-Fi Available
          "#FF9F40", // Sci-Fi Borrowed
          "#FF6384", // Fantasy Available
          "#FF9F40", // Fantasy Borrowed
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Book distribution by genre",
      },
    },
  };

const GenrePieChart = () => {
  return <Pie data={data} options={options} className="p-3 card m-3"  style={{maxWidth:"700px", maxHeight:"700px"} }/>;
};

export default GenrePieChart;
