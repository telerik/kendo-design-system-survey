import * as React from 'react';
import { 
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
  ChartValueAxis,
  ChartValueAxisItem,
  ChartAxisDefaults,
  ChartArea } 
    from '@progress/kendo-react-charts';

export default function DesignSystemFuture () {

const [firstSeries]= [[38, 52, 6, 1, 2]];

const categories = ["The team finishes \n\ and maintains it", "It becomes a single \n\ source of truth", "It becomes a product used \n\ beyond our team", "It's retired and \n\ not used again", "Other" ]

const itemLabels = {visible: true, color: 'black', background: 'rgba(0,0,0,0)', padding: 5, format: "{0}%"};

return (
  <Chart>
    <ChartAxisDefaults majorGridLines={{color: 'rgba(255,255,255, 0.2'}} />
    <ChartArea background="rgba(0,0,0,0)" height={280}/>
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


