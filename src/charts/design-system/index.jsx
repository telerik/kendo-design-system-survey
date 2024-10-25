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
      category: "Yes, we have a design system \n\ currently in place",
      value: 32,
    },
    {
      category: "We've just started creating our design system",
      value: 20,
    },
    {
      category: "Not yet, but we're planning to \n\ create one in the near future",
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

  const itemLabels = {visible: true, color: 'black', background: 'rgba(0,0,0,0)',format: "{0}%"};

return (
  <Chart>
    <ChartArea height={300}/>
    <ChartLegend position="bottom" orientation="vertical" />
    <ChartSeries>
      <ChartSeriesItem
        type="pie"
        data={series}
        field="value"
        categoryField="category"
        labels={itemLabels}
      />
    </ChartSeries>
  </Chart>
  )
};