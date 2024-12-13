"use client";

import React from "react";
import { Line, Pie } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import { color } from "framer-motion";
const Workoutgraph = () => {
  Chart.register(ArcElement);

  return (
    <div
      className="
        flex
        flex-col
        justify-center
        items-center
        w-[30%]
        sm:w-[100%]
        shadow-md
        rounded-lg
        bg-green-light
        
        px-5
        py-5
        h-[300px]
        gap-5
        "
    >
      <Pie
        data={{
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [
            {
              label: "# of Votes",
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],

              borderWidth: 1,
            },
          ],
        }}
      />
    </div>
  );
};

export default Workoutgraph;
