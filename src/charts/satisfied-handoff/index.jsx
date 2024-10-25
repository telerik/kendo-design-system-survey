import * as React from "react";
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartLegend,
  ChartTooltip,
  ChartArea
} from "@progress/kendo-react-charts";

export default function SatisfiedHandoff () {

  const series = [
    {
      category: "Yes",
      value: 73,
    },
    {
      category: 'No',
      value: 27,
    }
  ];

return (
  <Chart>
    <ChartArea background="rgba(0,0,0,0)" height={260}/>
    <ChartTooltip format="{0}%"/>
    <ChartLegend position="bottom" orientation="vertical"/>
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