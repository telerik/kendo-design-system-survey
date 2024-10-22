import * as React from "react";
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartLegend,
  ChartTooltip,
  ChartArea
} from "@progress/kendo-react-charts";

export default function RelationshipImprovement () {

  const series = [
    {
      category: 'Developers were brought into the design process earlier',
      value: 46,
    },
    {
      category: 'Developers knew more about the principles of design',
      value: 41,
    },
    {
      category: 'Developers knew more about design tools',
      value: 15,
    },
    {
      category: 'Designers understood development technical constraints',
      value: 56
    },
    {
      category: 'Designers knew more about development processes',
      value: 13
    },
    {
      category: 'There were clear processes in place / processes were followed closely',
      value: 21
    },
    {
      category: 'Timelines of designers and developers were aligned',
      value: 31
    },
    {
      category: 'Other',
      value: 8
    }
  ];

return (
  <Chart>
    <ChartArea background="rgba(0,0,0,0"/>
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