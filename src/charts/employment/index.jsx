import * as React from "react";
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartLegend,
  ChartTooltip,
  ChartArea
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
    <ChartArea background="rgba(0,0,0,0" height={200}/>
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