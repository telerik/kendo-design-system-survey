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

export default function DesignSystemContributor () {

const [firstSeries] = [
        [42, 47, 3, 8]
      ];

const categories = ["Everyone contributes", "Designated internal team", "Designated external team", "Other"];

const labels = {color: 'white'}; 
const itemLabels = {visible: true, color: 'white', background: 'rgba(0,0,0,0)', padding: 5, format: "{0}%"};

return (
  <Chart>
    <ChartAxisDefaults majorGridLines={{color: 'rgba(255,255,255, 0.2'}} />
    <ChartArea background="rgba(0,0,0,0)" height={150}/>
    <ChartValueAxis>
      <ChartValueAxisItem labels={{visible: false}}/>
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