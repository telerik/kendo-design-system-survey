import * as React from "react";
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartLegend,
  ChartTooltip,
  ChartArea
} from "@progress/kendo-react-charts";

export default function DesignSystemBlockers () {

  const series = [
    {
      category: "Lack of buy-in from management",
      value: 39,
    },
    {
      category: "Too time-consuming to build",
      value: 23,
    },
    {
      category: "Too expensive to build",
      value: 19
    },
    {
      category: "People won't use it",
      value: 16
    },
    {
      category: "Other team members don't see value",
      value: 13
    },
    {
      category: "Other",
      value: 16
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