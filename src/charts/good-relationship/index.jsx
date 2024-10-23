import * as React from "react";
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartLegend,
  ChartTooltip,
  ChartArea
} from "@progress/kendo-react-charts";

export default function GoodRelationship () {

  const series = [
    {
      category: 'Developers were in the design process earlier',
      value: 70,
    },
    {
      category: 'Developers knew more about design principles',
      value: 51,
    },
    {
      category: 'Developers knew more about design tools',
      value: 39,
    },
    {
      category: 'Designers understood development technical constraints',
      value: 58
    },
    {
      category: 'Designers knew more about development processes',
      value: 48
    },
    {
      category: 'There were clear processes being followed',
      value: 38
    },
    {
      category: 'Timelines of designers and developers were aligned',
      value: 51
    },
    {
      category: 'Other',
      value: 5
    }
  ];

return (
  <Chart>
    <ChartArea background="rgba(0,0,0,0" height={400}/>
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