import * as React from "react";
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartLegend
} from "@progress/kendo-react-charts";

export default function Employment () {

  const series = [
    {
      category: 'Full-time employee',
      value: 81,
    },
    {
      category: 'Self-employed',
      value: 16,
    },
    {
      category: 'Part-time employee',
      value: 3,
    },
  ];



return (
  <Chart>
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