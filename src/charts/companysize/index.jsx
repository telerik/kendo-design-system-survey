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
  ChartAxisDefaults,
  ChartArea
} from "@progress/kendo-react-charts";

export default function CompanySize () {

const [firstSeries] = [
        [9, 12, 6, 6, 8, 8, 16, 9, 4, 6, 11, 5]
      ];

const categories = ["1", "2-5", "6-10", "11-20", "21-50", "51-100", "101-500", "510-1000", "1001-2000", "2000-5000", "5000+", "I don't know"];

const labels = {color: 'white'}; 
const itemLabels = {visible: true, color: 'white', background: 'rgba(0,0,0,0)', padding: 5, format: "{0}%"};


return (
  <Chart>
    <ChartAxisDefaults majorGridLines={{color: 'rgba(255,255,255, 0.2'}} />
    <ChartArea background="rgba(0,0,0,0)" height={400}/>
    <ChartCategoryAxis >
      <ChartCategoryAxisItem categories={categories} labels={labels}>
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