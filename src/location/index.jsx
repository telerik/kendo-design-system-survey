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

export default function Location () {

const [us, india, uk, germany, mexico, australia, bulgaria, canada, italy, nigeria, other] = [[36], [13], [4], [3], [3], [3], [2], [2], [2], [2], [30]];

return (
  <>
    <Chart style={{height: 200}}>
      <ChartTooltip format="{0}%"/>
      <ChartLegend position="bottom" orientation="horizontal" visible={true}/>
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
    </ChartSeries>
  </Chart>

          <div className='legend'>
            <div className='wrapper'>
              <div className='color' style={{backgroundColor: '#75C1FF'}}></div>
              <p>US</p>
            </div>

            <div className='wrapper'>
              <div className='color' style={{backgroundColor: '#FFAD1B'}}></div>
              <p>India</p>
            </div>

            <div className='wrapper'>
              <div className='color' style={{backgroundColor: '#0CA39F'}}></div>
              <p>UK</p>
            </div>
            <div className='wrapper'>
              <div className='color' style={{backgroundColor: '#4B4CF6'}}></div>
              <p>Germany</p>
            </div>

            <div className='wrapper'>
              <div className='color' style={{backgroundColor: '#89A1F1'}}></div>
              <p>Mexico</p>
            </div>

            <div className='wrapper'>
              <div className='color' style={{backgroundColor: 'rgb(255, 88, 146)'}}></div>
              <p>Australia</p>
            </div>

            <div className='wrapper'>
              <div className='color' style={{backgroundColor: '#bae0ffff'}}></div>
              <p>Bulgaria</p>
            </div>

            <div className='wrapper'>
              <div className='color' style={{backgroundColor: '#ffcf79ff'}}></div>
              <p>Canada</p>
            </div>

            <div className='wrapper'>
              <div className='color' style={{backgroundColor: '#88cfcdff'}}></div>
              <p>Italy</p>
            </div>

            <div className='wrapper'>
              <div className='color' style={{backgroundColor: 'rgb(143, 144, 252)'}}></div>
              <p>Nigeria</p>
            </div>

            <div className='wrapper'>
              <div className='color' style={{backgroundColor: '#aabcfaff'}}></div>
              <p>Other</p>
            </div>
          </div>
  </>
  )
};


