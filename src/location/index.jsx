import * as React from 'react';
import { 
    Chart, 
    ChartSeries, 
    ChartSeriesItem, 
    ChartValueAxis, 
    ChartValueAxisItem, 
    ChartArea } 
    from '@progress/kendo-react-charts';

export default function Location () {

const [us, india, uk, germany, mexico, australia, bulgaria, canada, italy, nigeria, other] = [[36], [13], [4], [3], [3], [3], [2], [2], [2], [2], [30]];

return (
    <Chart style={{height: 200}}>
    <ChartSeries>
      <ChartSeriesItem type="bar" stack={{
          type: "100%",
        }} data={us} />
      <ChartSeriesItem type="bar" data={india} />
      <ChartSeriesItem type="bar" data={uk} />
      <ChartSeriesItem type="bar" data={germany} />
      <ChartSeriesItem type="bar" data={mexico} />
      <ChartSeriesItem type="bar" data={australia} />
      <ChartSeriesItem type="bar" data={bulgaria} />
      <ChartSeriesItem type="bar" data={canada} />
      <ChartSeriesItem type="bar" data={italy} />
      <ChartSeriesItem type="bar" data={nigeria} />
      <ChartSeriesItem type="bar" data={other} />

      <ChartValueAxis>
        <ChartValueAxisItem visible={false}/>
      </ChartValueAxis>

      <ChartArea height={0} />
    </ChartSeries>
  </Chart>
  )
};


