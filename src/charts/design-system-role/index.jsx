import * as React from "react";
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartLegend,
  ChartTooltip,
  ChartArea
} from "@progress/kendo-react-charts";

export default function DesignSystemRole () {

  const series = [
    {
      category: "I contributed (design/development)",
      value: 48,
    },
    {
      category: "I was consulted during kick-off",
      value: 38,
    },
    {
      category: "I was part of the core team",
      value: 29
    },
    {
      category: "I made key decisions",
      value: 21
    },
    {
      category: "I wasn't involved",
      value: 23
    },
    {
      category: "Other",
      value: 2
    }
  ];

return (
  <Chart>
    <ChartArea background="rgba(0,0,0,0)" height={300}/>
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