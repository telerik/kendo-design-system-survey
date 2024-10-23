import * as React from "react";
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartLegend,
  ChartTooltip,
  ChartArea
} from "@progress/kendo-react-charts";

export default function DesignSystem () {

  const series = [
    {
      category: "Yes, we have a design system currently in place",
      value: 32,
    },
    {
      category: "We've just started creating our design system",
      value: 20,
    },
    {
      category: "Not yet, but we're planning to create one in the near future",
      value: 10,
    },
    {
      category: "No, and we're not planning to create one",
      value: 23
    }, 
    {
      category: "I don't know",
      value: 15
    }
  ];

return (
  <Chart>
    <ChartArea height={300}/>
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