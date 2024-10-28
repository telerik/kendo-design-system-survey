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

export default function Industry () {

const [firstSeries] = [
        [16, 13, 12, 12, 7, 6, 5, 5, 5, 3, 1, 1, 1, 1, 1, 1, 1]
      ];

const categories = ["Education  ", "Government/Military  ", "Finance/Banking  ", "Manufacturing  ", "Healthcare  ", "Printing/Publishing  ", "Engineering/Architecture  ", "Insurance  ", "Professional Services ", "Chemicals  ", "Agriculture/Forest/Fishing  ", "Entertainment  ", "Online IT services  ", "Retail  ", "Telecommunication  ", "Transportation  ", "Wholesale  "];

const labels = {color: 'white'}; 
const itemLabels = {visible: true, color: 'white', background: 'rgba(0,0,0,0)', padding: 5, format: "{0}%"};

return (
  <Chart>
    <ChartAxisDefaults majorGridLines={{color: 'rgba(255,255,255, 0.2'}} />
    <ChartArea background="rgba(0,0,0,0)" height={350}/>
    <ChartValueAxis>
      <ChartValueAxisItem labels={{visible: false}} />
    </ChartValueAxis>
    <ChartCategoryAxis >
      <ChartCategoryAxisItem categories={categories} labels={labels}>
      </ChartCategoryAxisItem>
    </ChartCategoryAxis>
    <ChartSeries>
      <ChartSeriesItem type="bar" data={firstSeries} labels={itemLabels}/>
    </ChartSeries>
  </Chart>
  )
};