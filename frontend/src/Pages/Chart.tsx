import React, { useState } from "react";
import { AgChartsReact } from "ag-charts-react";
import { time } from "ag-charts-community";

interface DataItem {
  date: Date;
  bmi: number;
}

function getData(): DataItem[] {
  return [
    { date: new Date(2019, 0, 7), bmi: 39.5 },
    { date: new Date(2019, 0, 14), bmi: 119.53 },
    { date: new Date(2019, 0, 21), bmi: 119.12 },
    { date: new Date(2019, 0, 28), bmi: 119.29 },
    { date: new Date(2019, 1, 4), bmi: 119.13 },
    { date: new Date(2019, 1, 11), bmi: 118.97 },
    { date: new Date(2019, 1, 18), bmi: 119.05 },
    { date: new Date(2019, 1, 25), bmi: 119.22 },
    { date: new Date(2019, 2, 4), bmi: 119.72 },
    { date: new Date(2019, 2, 11), bmi: 120.1 },
    { date: new Date(2019, 2, 18), bmi: 120.48 },
    { date: new Date(2019, 2, 25), bmi: 120.83 },
    { date: new Date(2019, 3, 1), bmi: 121.7 },
    { date: new Date(2019, 3, 8), bmi: 122.75 },
    { date: new Date(2019, 3, 15), bmi: 124.06 },
    { date: new Date(2019, 3, 22), bmi: 125.43 },
    { date: new Date(2019, 3, 29), bmi: 126.36 },
    { date: new Date(2019, 4, 6), bmi: 127.5 },
    { date: new Date(2019, 4, 13), bmi: 127.97 },
    { date: new Date(2019, 4, 20), bmi: 128.51 },
    { date: new Date(2019, 4, 27), bmi: 129.14 },
    { date: new Date(2019, 5, 3), bmi: 129.41 },
    { date: new Date(2019, 5, 10), bmi: 128.89 },
    { date: new Date(2019, 5, 17), bmi: 127.66 },
    { date: new Date(2019, 5, 24), bmi: 126.66 },
    { date: new Date(2019, 6, 1), bmi: 126.49 },
    { date: new Date(2019, 6, 8), bmi: 126 },
  ];
}

const ChartExample: React.FC = () => {
  const [options, setOptions] = useState<any>({
    autoSize: true,
    data: getData(),
    theme: {
      overrides: {
        line: {
          legend: {
            position: "bottom",
          },
          series: {
            highlightStyle: {
              series: {
                strokeWidth: 3,
                dimOpacity: 0.1,
              },
            },
          },
        },
      },
    },
    title: {
      text: "BMI Graph",
      fontSize: 18,
      spacing: 25,
    },
    footnote: {
      text: "Source: Department for Business, Energy & Industrial Strategy",
    },
    series: [
      {
        type: "line",
        xKey: "date",
        yKey: "bmi",
        stroke: "#01c185",
        marker: {
          stroke: "#01c185",
          fill: "#01c185",
        },
        tooltip,
        yName: "BMI",
        yMin: 10,
        yMax: 140, // Increased height range from 130 to 140
        yTicks: {
          count: 14, // Increased tick count from 13 to 14
        },
      },
    ],
    axes: [
      {
        position: "bottom",
        type: "time",
        tick: {
          interval: time.month.every(1 / 2),
        },
        title: {
          text: "Date",
        },
        label: {
          autoRotate: true,
        },
      },
      {
        position: "left",
        type: "number",
        tick: {
          interval: 10, // Changed tick interval from 1 to 10
        },
        title: {
          text: "BMI Range",
        },
        label: {
          autoRotate: true,
        },
      },
    ],
  });

  return <AgChartsReact options={options} />;
};

const dateFormatter = new Intl.DateTimeFormat("en-US");
const tooltip = {
  renderer: ({ title, xValue, yValue }: any) => ({
    title,
    content: `${dateFormatter.format(xValue)}: ${yValue}`,
  }),
};
export default ChartExample;
