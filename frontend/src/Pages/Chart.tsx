import React, { useState } from "react";
import { AgChartsReact } from "ag-charts-react";
import { time } from "ag-charts-community";
import { useAppSelector } from "../Redux/store";
import { LoginRes } from "../utils/type";
import { useSelector } from "react-redux";
interface DataItem {
  date: Date;
  bmi: number;
}

function getData(): DataItem[] {
  return [
    { date: new Date(2023, 0, 7), bmi: 39.5 },
    { date: new Date(2023, 0, 14), bmi: 119.53 },
    { date: new Date(2023, 0, 21), bmi: 119.12 },
    { date: new Date(2023, 0, 28), bmi: 119.29 },
    { date: new Date(2023, 1, 4), bmi: 119.13 },
    { date: new Date(2023, 1, 11), bmi: 118.97 },
    { date: new Date(2023, 1, 18), bmi: 119.05 },
    { date: new Date(2023, 1, 25), bmi: 119.22 },
    { date: new Date(2023, 2, 4), bmi: 119.72 },
    { date: new Date(2023, 2, 11), bmi: 120.1 },
    { date: new Date(2023, 2, 18), bmi: 120.48 },
    { date: new Date(2023, 2, 25), bmi: 120.83 },
    { date: new Date(2023, 3, 1), bmi: 121.7 },
    { date: new Date(2023, 3, 8), bmi: 122.75 },
    { date: new Date(2023, 3, 15), bmi: 124.06 },
    { date: new Date(2023, 3, 22), bmi: 125.43 },
    { date: new Date(2023, 3, 29), bmi: 126.36 },
    { date: new Date(2023, 4, 6), bmi: 127.5 },
    { date: new Date(2023, 4, 13), bmi: 127.97 },
    { date: new Date(2023, 4, 20), bmi: 128.51 },
    { date: new Date(2023, 4, 27), bmi: 129.14 },
    { date: new Date(2023, 5, 3), bmi: 129.41 },
    { date: new Date(2023, 5, 10), bmi: 128.89 },
    { date: new Date(2023, 5, 17), bmi: 127.66 },
    { date: new Date(2023, 5, 24), bmi: 126.66 },
    { date: new Date(2023, 6, 1), bmi: 126.49 },
    { date: new Date(2023, 6, 8), bmi: 126 },
  ];
}

const ChartExample: React.FC = () => {
  const data = useAppSelector(
    (store) => store.loginReducer.data[0].weeklyReports
  );
  console.log(data);
  const newData = [
    {
      date: "2019-01-07T00:00:00.000Z",
      bmi: 39.5,
    },
    {
      date: "2019-01-14T00:00:00.000Z",
      bmi: 119.53,
    },
    {
      date: "2019-01-21T00:00:00.000Z",
      bmi: 119.12,
    },
    {
      date: "2019-01-28T00:00:00.000Z",
      bmi: 119.29,
    },
    {
      date: "2019-02-04T00:00:00.000Z",
      bmi: 119.13,
    },
    {
      date: "2019-02-11T00:00:00.000Z",
      bmi: 118.97,
    },
    {
      date: "2019-02-18T00:00:00.000Z",
      bmi: 119.05,
    },
    {
      date: "2019-02-25T00:00:00.000Z",
      bmi: 119.22,
    },
    {
      date: "2019-03-04T00:00:00.000Z",
      bmi: 119.72,
    },
    {
      date: "2019-03-11T00:00:00.000Z",
      bmi: 120.1,
    },
    {
      date: "2019-03-18T00:00:00.000Z",
      bmi: 120.48,
    },
    {
      date: "2019-03-25T00:00:00.000Z",
      bmi: 120.83,
    },
    {
      date: "2019-04-01T00:00:00.000Z",
      bmi: 121.7,
    },
    {
      date: "2019-04-08T00:00:00.000Z",
      bmi: 122.75,
    },
    {
      date: "2019-04-15T00:00:00.000Z",
      bmi: 124.06,
    },
    {
      date: "2019-04-22T00:00:00.000Z",
      bmi: 125.43,
    },
    {
      date: "2019-04-29T00:00:00.000Z",
      bmi: 126.36,
    },
    {
      date: "2019-05-06T00:00:00.000Z",
      bmi: 127.5,
    },
    {
      date: "2019-05-13T00:00:00.000Z",
      bmi: 127.97,
    },
    {
      date: "2019-05-20T00:00:00.000Z",
      bmi: 128.51,
    },
    {
      date: "2019-05-27T00:00:00.000Z",
      bmi: 129.14,
    },
    {
      date: "2019-06-03T00:00:00.000Z",
      bmi: 129.41,
    },
    {
      date: "2019-06-10T00:00:00.000Z",
      bmi: 128.89,
    },
    {
      date: "2019-06-17T00:00:00.000Z",
      bmi: 127.66,
    },
    {
      date: "2019-06-24T00:00:00.000Z",
      bmi: 126.66,
    },
    {
      date: "2019-07-01T00:00:00.000Z",
      bmi: 126.49,
    },
    {
      date: "2019-07-08T00:00:00.000Z",
      bmi: 126.86,
    },
  ];

  const [options, setOptions] = useState<any>({
    autoSize: true,
    data: newData,
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

const dateFormatter = new Intl.DateTimeFormat("en-IN");
const tooltip = {
  renderer: ({ title, xValue, yValue }: any) => ({
    title,
    content: `${dateFormatter.format(xValue)}: ${yValue}`,
  }),
};
export default ChartExample;
