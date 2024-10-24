import * as React from "react";
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartLegend,
  ChartTooltip,
  ChartArea
} from "@progress/kendo-react-charts";

export default function DesignSystemCollaborationTools () {

  const series = [
    {
      category: "Yes, absolutely",
      value: 51,
    },
    {
      category: "Partially, room for improvement",
      value: 45,
    },
    {
      category: "Not really",
      value: 3,
    }
  ];

return (
  <Chart>
    <ChartArea background="rgba(0,0,0,0" height={300}/>
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