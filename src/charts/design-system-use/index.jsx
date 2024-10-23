import * as React from "react";
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartLegend,
  ChartTooltip,
  ChartArea
} from "@progress/kendo-react-charts";

export default function DesignSystemUse () {

  const series = [
    {
      category: "I use it everyday",
      value: 61,
    },
    {
      category: "I use it occasionally",
      value: 33,
    },
    {
      category: "I don't use it",
      value: 6
    }
  ];

return (
  <Chart>
    <ChartArea background="rgba(0,0,0,0)" height={250}/>
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