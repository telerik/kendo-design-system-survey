import * as React from 'react';
import { 
    Chart, 
    ChartSeries, 
    ChartSeriesItem, 
    ChartValueAxis, 
    ChartValueAxisItem, 
    ChartArea,
    ChartLegend,
    ChartTooltip } 
    from '@progress/kendo-react-charts';

export default function DesignSystemBenefit () {

const [yes, partially, no] = [[28], [51], [21]];

const itemLabels = {visible: true, color: 'black', background: 'rgba(0,0,0,0)',format: "{0}%", position: 'center'};

return (
  <>
    <Chart style={{height: 200}}>
      <ChartLegend position="bottom" orientation="horizontal" visible={true}/>
      <ChartSeries>
        <ChartSeriesItem type="bar" stack={{
            type: "100%",
          }} data={yes} labels={itemLabels}/>
        <ChartSeriesItem type="bar" data={partially} labels={itemLabels} />
        <ChartSeriesItem type="bar" data={no} labels={itemLabels} />
    </ChartSeries>
  </Chart>

          <div className='legend'>
            <div className='wrapper'>
              <div className='color' style={{backgroundColor: '#75C1FF'}}></div>
              <p>Yes</p>
            </div>

            <div className='wrapper'>
              <div className='color' style={{backgroundColor: '#FFAD1B'}}></div>
              <p>Partially</p>
            </div>

          <div className='wrapper'>
              <div className='color' style={{backgroundColor: '#0a827f'}}></div>
              <p>No</p>
            </div>
          </div>
  </>
  )
};


