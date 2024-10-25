import * as React from "react";
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartLegend,
  ChartTooltip,
  ChartArea
} from "@progress/kendo-react-charts";

export default function SatisfiedDesign () {

  const series = [
    {
      category: "Yes, it's beautiful",
      value: 26,
    },
    {
      category: "No, developers make changes \n\ that don't involve design",
      value: 37,
    },
    {
      category: "End result is passable",
      value: 37
    }
  ];

return (
  <Chart>
    <ChartArea background="rgba(0,0,0,0)" height={275}/>
    <ChartTooltip format="{0}%"/>
    <ChartLegend position="bottom" orientation="vertical" />
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