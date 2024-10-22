import * as React from "react";
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartLegend,
  ChartTooltip
} from "@progress/kendo-react-charts";

export default function OutsideHelp () {

  const series = [
    {
      category: "We work with internal teams only",
      value: 72,
    },
    {
      category: 'We assign both internal and external specialists',
      value: 22,
    },
    {
      category: "We hire external consultant(s)",
      value: 4,
    },
    {
      category: 'We outsource to an external agency',
      value: 2,
    }
  ];

return (
  <Chart>
    <ChartTooltip format="{0}%"/>
    <ChartLegend position="bottom" />
    <ChartSeries>
      <ChartSeriesItem
        type="donut"
        data={series}
        field="value"
        categoryField="category"
      />
    </ChartSeries>
  </Chart>
  )
};