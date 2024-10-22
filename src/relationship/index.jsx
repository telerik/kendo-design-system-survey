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

export default function Relationship () {

const [one, two, three, four, five, six, seven, eight, nine, ten] = [[1],[3], [10], [12],[22],[23],[11],[16]];

return (
  <>
    <Chart style={{height: 200}}>
      <ChartTooltip format="{0}%"/>
      <ChartLegend position="bottom" orientation="horizontal" visible={true}/>
      <ChartSeries>
        <ChartSeriesItem type="bar" stack={{
            type: "100%",
          }} data={one} />
        <ChartSeriesItem type="bar" data={two} />
        <ChartSeriesItem type="bar" data={three} />
        <ChartSeriesItem type="bar" data={four} />
        <ChartSeriesItem type="bar" data={five} />
        <ChartSeriesItem type="bar" data={six} />
        <ChartSeriesItem type="bar" data={seven} />
        <ChartSeriesItem type="bar" data={eight} />
        <ChartSeriesItem type="bar" data={nine} />
        <ChartSeriesItem type="bar" data={ten} />
    </ChartSeries>
  </Chart>

          <div className='legend'>
            <div className='wrapper'>
              <div className='color' style={{backgroundColor: '#75C1FF'}}></div>
              <p>1 (Complete breakdown)</p>
            </div>

            <div className='wrapper'>
              <div className='color' style={{backgroundColor: '#FFAD1B'}}></div>
              <p>2</p>
            </div>

            <div className='wrapper'>
              <div className='color' style={{backgroundColor: '#0CA39F'}}></div>
              <p>3</p>
            </div>
            <div className='wrapper'>
              <div className='color' style={{backgroundColor: '#4B4CF6'}}></div>
              <p>4</p>
            </div>

            <div className='wrapper'>
              <div className='color' style={{backgroundColor: '#89A1F1'}}></div>
              <p>5</p>
            </div>

            <div className='wrapper'>
              <div className='color' style={{backgroundColor: 'rgb(255, 88, 146)'}}></div>
              <p>6</p>
            </div>

            <div className='wrapper'>
              <div className='color' style={{backgroundColor: '#bae0ffff'}}></div>
              <p>7</p>
            </div>

            <div className='wrapper'>
              <div className='color' style={{backgroundColor: '#88cfcdff'}}></div>
              <p>8</p>
            </div>

            <div className='wrapper'>
              <div className='color' style={{backgroundColor: 'rgb(143, 144, 252)'}}></div>
              <p>9</p>
            </div>

            <div className='wrapper'>
              <div className='color' style={{backgroundColor: '#aabcfaff'}}></div>
              <p>10 (Perfect relationship)</p>
            </div>
          </div>
  </>
  )
};


