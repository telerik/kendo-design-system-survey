import * as React from "react";
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
  ChartAxisDefaults
} from "@progress/kendo-react-charts";

export default function WhyNot () {

  const [firstSeries] = [
    [65, 50, 31, 15]
  ];

  const categories = [ "Designs keep changing afterwards \n\ and it's hard to track them", 'I need to ask many questions', 'Processes are not followed \n\ closly, causing confusion', 'Other',
    
  ];

  const labels = {color: 'white'}; 
  const itemLabels = {visible: true, color: 'black', background: 'rgba(0,0,0,0)', padding: 5, format: "{0}%"};

  return (
    <Chart>
      <ChartAxisDefaults majorGridLines={{color: 'rgba(0,0,0, 0.2'}} />
      <ChartArea background="rgba(0,0,0,0)" height={200}/>
      <ChartValueAxis>
        <ChartValueAxisItem labels={{visible: false}} />
      </ChartValueAxis>
      <ChartCategoryAxis >
        <ChartCategoryAxisItem categories={categories} >
        </ChartCategoryAxisItem>
      </ChartCategoryAxis>
      <ChartSeries>
        <ChartSeriesItem type="bar" data={firstSeries} labels={itemLabels} />
      </ChartSeries>
    </Chart>
    )
  };