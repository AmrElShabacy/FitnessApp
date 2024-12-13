"use client";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Tooltip,
  PointElement,
  LineElement,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register ChartJS components using ChartJS.register
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);
const Lineworkout = () => {
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
            bg-base-primary
            opacity-80
            px-5
            h-[300px]
            py-5
            gap-5
            "
    >
      <Line
        data={{
          labels: [
            "2023-01",
            "2023-02",
            "2023-03",
            "2023-04",
            "2023-05",
            "2023-06",
            "2023-07",
          ],
          xLabels: [],
          yLabels: [],

          datasets: [
            {
              data: [100, 120, 115, 134, 168, 132, 200],
              backgroundColor: "green",
              borderColor: "green",

              borderWidth: 2,
              showLine: true,
              pointHoverBackgroundColor: "green",
              pointHoverBorderColor: "green",
            },
          ],
        }}
      />
    </div>
  );
};

export default Lineworkout;
