import * as React from 'react';
import { 
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
  ChartTooltip,
  ChartValueAxis,
  ChartValueAxisItem,
  ChartValueAxisTitle,
  ChartArea,
  ChartAxisDefaults } 
    from '@progress/kendo-react-charts';

export default function Location () {

const [firstSeries] = [[36, 13, 4, 3, 3, 3, 2, 2, 2, 2, 30]];

const categories = ["US", "India", "UK", "Germany", "Mexico", "Australia", "Bulgaria", "Canada", "Italy", "Nigeria", "Other"];

const labels = {color: 'white'}; 
const itemLabels = {visible: true, color: 'black', background: 'rgba(0,0,0,0)', padding: 5, format: "{0}%"};

return (
  <Chart>
    <ChartAxisDefaults majorGridLines={{color: 'rgba(0,0,0, 0.2'}} />
    <ChartArea background="rgba(0,0,0,0)" height={350}/>
    <ChartValueAxis>
      <ChartValueAxisItem labels={{visible: false}} />
    </ChartValueAxis>
    <ChartCategoryAxis >
      <ChartCategoryAxisItem categories={categories}>
      </ChartCategoryAxisItem>
    </ChartCategoryAxis>
    <ChartSeries>
      <ChartSeriesItem type="bar" data={firstSeries} labels={itemLabels} />
    </ChartSeries>
  </Chart>
  )
};