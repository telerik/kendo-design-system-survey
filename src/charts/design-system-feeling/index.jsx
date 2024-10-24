import * as React from "react";
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartLegend,
  ChartTooltip,
  ChartArea
} from "@progress/kendo-react-charts";

export default function DesignSystmFeelings () {

  const series = [
    {
      category: "Great! Solved so many problems",
      value: 51,
    },
    {
      category: "Solved some problems, but created others",
      value: 45,
    },
    {
      category: "Created too many issues",
      value: 3,
    }
  ];

return (
  <Chart>
    <ChartArea height={300}/>
    <ChartTooltip format="{0}%"/>
    <ChartLegend position="right" />
    <ChartSeries>
      <ChartSeriesItem
        type="pie"
        data={series}
        field="value"
        categoryField="category"
      />
    </ChartSeries>
  </Chart>
  )
};