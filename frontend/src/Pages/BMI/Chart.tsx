import { AgChartsReact } from "ag-charts-react";
import { useState } from "react";
import * as agCharts from "ag-charts-community";
import { useAppSelector } from "../../Redux/store";

// const newData = [
//   {
//     date: "2019-01-07T00:00:00.000Z",
//     bmi: 39.5,
//   },
//   {
//     date: "2019-01-14T00:00:00.000Z",
//     bmi: 119.53,
//   },
//   {
//     date: "2019-01-21T00:00:00.000Z",
//     bmi: 119.12,
//   },
//   {
//     date: "2019-01-28T00:00:00.000Z",
//     bmi: 119.29,
//   },
//   {
//     date: "2019-02-04T00:00:00.000Z",
//     bmi: 119.13,
//   },
//   {
//     date: "2019-02-11T00:00:00.000Z",
//     bmi: 118.97,
//   },
//   {
//     date: "2019-02-18T00:00:00.000Z",
//     bmi: 119.05,
//   },
//   {
//     date: "2019-02-25T00:00:00.000Z",
//     bmi: 119.22,
//   },
//   {
//     date: "2019-03-04T00:00:00.000Z",
//     bmi: 119.72,
//   },
//   {
//     date: "2019-03-11T00:00:00.000Z",
//     bmi: 120.1,
//   },
//   {
//     date: "2019-03-18T00:00:00.000Z",
//     bmi: 120.48,
//   },
//   {
//     date: "2019-03-25T00:00:00.000Z",
//     bmi: 120.83,
//   },
//   {
//     date: "2019-04-01T00:00:00.000Z",
//     bmi: 121.7,
//   },
//   {
//     date: "2019-04-08T00:00:00.000Z",
//     bmi: 122.75,
//   },
//   {
//     date: "2019-04-15T00:00:00.000Z",
//     bmi: 124.06,
//   },
//   {
//     date: "2019-04-22T00:00:00.000Z",
//     bmi: 125.43,
//   },
//   {
//     date: "2019-04-29T00:00:00.000Z",
//     bmi: 126.36,
//   },
//   {
//     date: "2019-05-06T00:00:00.000Z",
//     bmi: 127.5,
//   },
//   {
//     date: "2019-05-13T00:00:00.000Z",
//     bmi: 127.97,
//   },
//   {
//     date: "2019-05-20T00:00:00.000Z",
//     bmi: 128.51,
//   },
//   {
//     date: "2019-05-27T00:00:00.000Z",
//     bmi: 129.14,
//   },
//   {
//     date: "2019-06-03T00:00:00.000Z",
//     bmi: 129.41,
//   },
//   {
//     date: "2019-06-10T00:00:00.000Z",
//     bmi: 128.89,
//   },
//   {
//     date: "2019-06-17T00:00:00.000Z",
//     bmi: 127.66,
//   },
//   {
//     date: "2019-06-24T00:00:00.000Z",
//     bmi: 126.66,
//   },
//   {
//     date: "2019-07-01T00:00:00.000Z",
//     bmi: 126.49,
//   },
//   {
//     date: "2019-07-08T00:00:00.000Z",
//     bmi: 126.86,
//   },
// ];

const ChartExample: React.FC = () => {
  const data = useAppSelector((store) => store.loginReducer.data);
  console.log("data", data);

  const [options, setOptions] = useState<any>({
    autoSize: true,
    data: data,
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
        tooltip: {
          enabled: true,
          renderer: function (params: any) {
            return `<div>${params.datum.date}: ${params.datum.bmi}</div>`;
          },
        },

        yName: "BMI",
        yMin: 10,
        yMax: 140,
      },
    ],
    xAxis: {
      type: "time",
      tick: {
        count: agCharts.time.month,
        size: 20,
      },
    },
    legend: {
      enabled: true,
    },
  });

  return <AgChartsReact options={options} />;
};
export default ChartExample;
