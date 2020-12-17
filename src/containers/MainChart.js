import React from "react";
import { Line } from "@ant-design/charts";
import { useAppContext } from "../libs/contextLib";

export default function MainChart() {
  const { yearlyIncome, yearlyExpenses, currentSaving } = useAppContext();
  const yearlyIncrement = yearlyIncome - yearlyExpenses;

  const data = [{ year: "year 0", value: currentSaving }];

  let year = 1;
  while (year < 25) {
    data.push({
      year: "year " + year,
      value: currentSaving + yearlyIncrement * year,
    });
    year++;
  }

  const config = {
    data,
    height: 400,
    xField: "year",
    yField: "value",
    point: {
      size: 5,
      shape: "diamond",
    },
    label: {
      style: {
        fill: "#aaa",
      },
    },
  };
  return <Line {...config} />;
}
