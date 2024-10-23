import * as React from "react";
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartLegend,
  ChartTooltip,
  ChartArea
} from "@progress/kendo-react-charts";

export default function DesignSystemAge () {

  const series = [
    {
      category: "Less than a year",
      value: 9,
    },
    {
      category: "1-2 years",
      value: 48,
    },
    {
      category: "3-5 years",
      value: 32,
    },
    {
      category: "5+ years",
      value: 11
    }
  ];

return (
  <Chart>
    <ChartArea height={230}/>
    <ChartTooltip format="{0}%"/>
    <ChartLegend position="bottom" />
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