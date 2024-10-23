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

export default function DesignSystemFuture () {

const [finish, truth, product, retired, other] = [[38], [52], [6], [1], [2]];

return (
  <>
    <Chart style={{height: 200}}>
      <ChartTooltip format="{0}%"/>
      <ChartLegend position="bottom" orientation="horizontal" visible={true}/>
      <ChartSeries>
        <ChartSeriesItem type="bar" stack={{
            type: "100%",
          }} data={finish} />
        <ChartSeriesItem type="bar" data={truth} />
        <ChartSeriesItem type="bar" data={product} />
        <ChartSeriesItem type="bar" data={retired} />
        <ChartSeriesItem type="bar" data={other} />
    </ChartSeries>
  </Chart>

          <div className='legend'>
            <div className='wrapper'>
              <div className='color' style={{backgroundColor: '#75C1FF'}}></div>
              <p>Finish design system & maintain it</p>
            </div>

            <div className='wrapper'>
              <div className='color' style={{backgroundColor: '#FFAD1B'}}></div>
              <p>Become the single source of truth and be continuously developed / maintained</p>
            </div>

            <div className='wrapper'>
              <div className='color' style={{backgroundColor: '#0CA39F'}}></div>
              <p>Become a product used beyond our company / team</p>
            </div>
            <div className='wrapper'>
              <div className='color' style={{backgroundColor: '#4B4CF6'}}></div>
              <p>Be retired and never used again</p>
            </div>

            <div className='wrapper'>
              <div className='color' style={{backgroundColor: '#89A1F1'}}></div>
              <p>Other</p>
            </div>
          </div>

  </>
  )
};


