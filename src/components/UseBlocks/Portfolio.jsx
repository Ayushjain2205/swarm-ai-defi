import React, { useState, useEffect, useRef } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import Loader from "../UI/Loader";
import UseThinking from "../UI/UseThinking";
import UseBlock from "../Layout/UseBlock";

const Portfolio = ({ addNextNode }) => {
  const [stateIndex, setStateIndex] = useState(0);
  const addNextNodeCalled = useRef(false);

  // Sample data for the chart with dramatic fluctuations in predicted values
  const data = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
    ],
    datasets: [
      {
        label: "Portfolio Value",
        data: [100, 150, 200, 250, 300, 350, 400, 450, 475, 500],
        borderColor: "#742774",
        tension: 0.3, // Slight curve
      },
      {
        label: "Predicted Value",
        data: [120, 180, 160, 220, 290, 270, 380, 360, 490, 450], // More fluctuation
        borderColor: "#4287f5",
        borderDash: [5, 5], // Dashed line for predicted
        tension: 0.4, // Smoother curve
      },
    ],
  };

  const options = {
    scales: {
      x: {
        grid: {
          display: false, // Hide x-axis grid lines
        },
        ticks: {
          display: false, // Hide x-axis labels
        },
      },
      y: {
        grid: {
          display: false, // Hide y-axis grid lines
        },
        ticks: {
          callback: function (value) {
            return "$" + value; // Format y-axis ticks as dollar amounts
          },
        },
      },
    },
    elements: {
      point: {
        radius: 0, // Hide points on the line
      },
    },
    plugins: {
      tooltip: {
        enabled: true, // Enable tooltips
        mode: "index",
        intersect: false,
        callbacks: {
          label: function (context) {
            return `${context.dataset.label}: $${context.parsed.y}`;
          },
        },
      },
      legend: {
        display: false, // Optionally hide the legend if not required
      },
    },
  };

  const states = [
    {
      component: (
        <>
          <Loader isRunning={true} />
          <UseThinking question="Reading onchain data..." />
        </>
      ),
      duration: 5000,
    },
    {
      component: (
        <>
          <Loader isRunning={true} />
          <UseThinking question="Analyzing portfolio..." />
        </>
      ),
      duration: 5000,
    },
    {
      component: (
        <>
          <UseThinking question="Your portfolio" />
          <Line data={data} options={options} />
          <div className="flex flex-row items-center px-[5px] border border-[#6E5B98] animate-pulse h-[45px] rounded-[6px] bg-[#6E5B9850]">
            <p className="font-[500]"> Sold $25 SHIB</p>
          </div>
        </>
      ),
      duration: 1000,
    },
  ];

  useEffect(() => {
    if (states[stateIndex].duration) {
      const timer = setTimeout(() => {
        if (stateIndex === states.length - 1) {
          if (!addNextNodeCalled.current) {
            addNextNode();
            addNextNodeCalled.current = true;
          }
        } else {
          setStateIndex((prevIndex) => prevIndex + 1);
        }
      }, states[stateIndex].duration);

      return () => clearTimeout(timer);
    }
  }, [stateIndex, states, addNextNode]);

  return (
    <UseBlock label="Portfolio" label_color="#6E5B98">
      {states[stateIndex].component}
    </UseBlock>
  );
};

export default Portfolio;
