import * as React from "react";
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartLegend,
  ChartTooltip,
  ChartArea
} from "@progress/kendo-react-charts";

export default function DesignSystemAI () {

  const series = [
    {
      category: "Yes",
      value: 7,
    },
    {
      category: "Not yet",
      value: 37,
    },
    {
      category: "No",
      value: 56,
    }
  ];

return (
  <Chart>
    <ChartArea background="rgba(0,0,0,0)" height={300}/>
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