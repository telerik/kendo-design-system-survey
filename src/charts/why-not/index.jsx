import * as React from "react";
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartLegend,
  ChartTooltip,
  ChartArea
} from "@progress/kendo-react-charts";

export default function WhyNot () {

  const series = [
    {
      category: "Designs keep changing afterwards and it's hard to track them",
      value: 65,
    },
    {
      category: 'I need to ask many questions',
      value: 50,
    },
    {
      category: 'Processes are not followed closly, causing confusion',
      value: 31,
    },
    {
      category: 'Other',
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
        type="donut"
        data={series}
        field="value"
        categoryField="category"
      />
    </ChartSeries>
  </Chart>
  )
};