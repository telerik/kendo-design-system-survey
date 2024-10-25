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

export default function Relationship () {

  const [firstSeries] = [
    [0, 0, 1,3,10,12,22,23,11,16]];

    const categories = ['1 – complete breakdown', '2', '3', '4', '5', '6', '7', '8', '9', '10 – perfect relationship']

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