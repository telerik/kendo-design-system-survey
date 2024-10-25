import * as React from "react";
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartLegend,
  ChartTooltip,
  ChartArea
} from "@progress/kendo-react-charts";

export default function ProjectNumber () {

  const series = [
    {
      category: "I'm focused on a single project/product",
      value: 22,
    },
    {
      category: '2-5',
      value: 47,
    },
    {
      category: '6-10',
      value: 20,
    },
    {
      category: '11-20',
      value: 7,
    },
    {
      category: '20+ different projects/products',
      value: 4,
    },
  ];

return (
  <Chart>
    <ChartArea height={300}/>
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