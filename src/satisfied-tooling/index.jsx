import * as React from "react";
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartLegend,
  ChartTooltip
} from "@progress/kendo-react-charts";

export default function SatisfiedTooling () {

  const series = [
    {
      category: "Rather satisfied – output can be used with minimal modification",
      value: 37,
    },
    {
      category: 'Moderately satisfied – output needs to be heavily modified',
      value: 17,
    },
    {
      category: 'Dissatisfied – tools wastes more time than it saves',
      value: 8,
    }
  ];

return (
  <Chart>
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