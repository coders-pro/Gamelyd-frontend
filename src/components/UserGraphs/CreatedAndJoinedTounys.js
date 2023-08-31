import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export default function Chart(props) {
  const data = {
    labels: ["", "Joined", "Created"],
    datasets: [
      {
        label: "Tournament Activities",
        data: [0, props.data.joined, props.data.created],
        backgroundColor: "rgba(11, 192, 180, 0.515)",
        borderColor: "rgb(11, 192, 180)",
        borderWidth: 2,
      },
    ],
  };
  return <Radar data={data} />;
}
