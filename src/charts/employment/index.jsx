import * as React from "react";
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartLegend,
  ChartTooltip,
  ChartArea
} from "@progress/kendo-react-charts";

export default function Employment () {

  const series = [
    {
      category: 'Full-time employee',
      value: 81,
    },
    {
      category: 'Self-employed',
      value: 16,
    },
    {
      category: 'Part-time employee',
      value: 3,
    },
  ];

  const itemLabels = {visible: true, color: 'black', background: 'rgba(0,0,0,0)',format: "{0}%"};

return (
  <Chart>
    <ChartArea background="rgba(0,0,0,0" height={300}/>

    <ChartLegend position="bottom" orientation="vertical"/>
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