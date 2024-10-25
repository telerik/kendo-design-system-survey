import * as React from "react";
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
  ChartValueAxis,
  ChartValueAxisItem,
  ChartAxisDefaults,
  ChartArea
} from "@progress/kendo-react-charts";

export default function RelationshipImprovement () {
  
  const [firstSeries] = [
    [46, 41, 15, 56, 13, 21, 31, 8]];

  const categories = [
     'Developers were in \n\ the design process earlier',
  'Developers knew more  \n\ about design principles',
    'Developers knew more  \n\ about design tools',
   'Designers understood  \n\ development technical constraints',
   'Designers knew more  \n\ about development processes',
    'There were \n\  clear processes being followed',
  'Timelines of designers and  \n\ developers were aligned',
   'Other',
  ];

  const itemLabels = {visible: true, color: 'black', background: 'rgba(0,0,0,0)', padding: 5, format: "{0}%"};

return (
  <Chart>
    <ChartAxisDefaults majorGridLines={{color: 'rgba(255,255,255, 0.2'}} />
    <ChartArea background="rgba(0,0,0,0)" height={400}/>
    <ChartCategoryAxis >
      <ChartCategoryAxisItem categories={categories} >
      </ChartCategoryAxisItem>
    </ChartCategoryAxis>
    <ChartValueAxis>
      <ChartValueAxisItem labels={{visible: false}} />
    </ChartValueAxis>
    <ChartSeries>
      <ChartSeriesItem type="bar" data={firstSeries} labels={itemLabels}/>
    </ChartSeries>
  </Chart>
  )
};