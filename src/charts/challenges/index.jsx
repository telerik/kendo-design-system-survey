import * as React from "react";
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartLegend,
  ChartTooltip,
  ChartArea
} from "@progress/kendo-react-charts";

export default function Challenges () {

  const series = [
    {
      category: "Slow time-to-market / delivery",
      value: 28,
    },
    {
      category: 'Conflict between team members',
      value: 17,
    },
    {
      category: 'Low quality of delivery',
      value: 14,
    },
    {
      category: 'Low morale',
      value: 6,
    },
    {
      category: 'Other',
      value: 21,
    },
    {
      category: 'No challenges',
      value: 33
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