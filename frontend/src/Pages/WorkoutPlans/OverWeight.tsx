import React, { useState } from "react";
import { AgChartsReact } from "ag-charts-react";

interface DataType {
  type: string;
  count: number;
}

function getData(): DataType[] {
  return [
    { type: "Protein", count: 10 },
    { type: "Carbohydrates", count: 30 },
    { type: "Fat", count: 40 },
    { type: "Fiber", count: 10 },
    { type: "Other", count: 10 },
  ];
}

export default function OverWeight() {
  const [options, setOptions] = useState<any>({
    autoSize: true,
    data,
    title: {
      text: "OverWeight Breakdown Percentage",
      fontSize: 18,
      spacing: 25,
    },
    footnote: {
      text: "Source: Self",
    },
    series: [
      {
        type: "pie",
        calloutLabelKey: "type",
        fillOpacity: 0.9,
        strokeWidth: 0,
        angleKey: "count",
        sectorLabelKey: "count",
        calloutLabel: {
          enabled: false,
        },
        sectorLabel: {
          color: "white",
          fontWeight: "bold",
          formatter: ({
            datum,
            sectorLabelKey,
          }: {
            datum: any;
            sectorLabelKey: string;
          }) => {
            const value = datum[sectorLabelKey];
            return numFormatter.format(value) + "%";
          },
        },
        title: {
          text: "",
        },
        fills: ["#fb7451", "#57cc8b", "#3988dc"],
        innerRadiusRatio: 0.5,
        innerLabels: [
          {
            text: numFormatter.format(total),
            fontSize: 24,
            fontWeight: "bold",
          },
          {
            text: "Total Calories",
            fontSize: 16,
          },
        ],
        highlightStyle: {
          item: {
            fillOpacity: 0,
            stroke: "#535455",
            strokeWidth: 1,
          },
        },
        tooltip: {
          renderer: ({
            datum,
            calloutLabelKey,
            title,
            sectorLabelKey,
          }: {
            datum: any;
            calloutLabelKey: string;
            title: string;
            sectorLabelKey: string;
          }) => {
            return {
              title,
              content: `${datum[calloutLabelKey]}: ${numFormatter.format(
                datum[sectorLabelKey]
              )} %`,
            };
          },
        },
      },
    ],
  });

  return <AgChartsReact options={options} />;
}

const data: DataType[] = getData();
const numFormatter = new Intl.NumberFormat("en-US");
const total = data.reduce((sum, d) => sum + d["count"], 0);
