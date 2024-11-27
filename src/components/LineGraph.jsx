import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const LineGraph = () => {
  const sampleData = [10, 27, 50, 70, 23, 40, 60];

  const canvasData = {
    datasets: [
      {
        label: "Home",
        borderColor: "#0E9CFF",
        pointRadius: 2,
        fill: true,
        backgroundColor: "transparent",
        lineTension: 0,
        data: sampleData,
        borderWidth: 3,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        // grid: {
        //   display: false,
        // },
        labels: [12.06, 18.06, "03.07", 13.07, 14.07, 20.07, 24.07],
        ticks: {
          color: "#333333",
          font: {
            family: "Nunito",
            size: 12,
          },
        },
      },
      y: {
        // grid: {
        //   display: false,
        // },
        border: {
          display: false,
        },
        min: 0,
        max: 100,
        ticks: {
          stepSize: 25,
          color: "#333333",
          font: {
            family: "Nunito",
            size: 12,
          },
        },
      },
    },
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
  };

  const graphStyle = {
    minHeight: "193px",
    maxWidth: "333px",
    width: "100%",
    // border: "1px solid #C4C4C4",
    borderRadius: "0.375rem",
    padding: "0.5rem",
  };

  return (
    <div style={graphStyle}>
      <Line id="home" options={options} data={canvasData} />
    </div>
  );
};

export default LineGraph;
