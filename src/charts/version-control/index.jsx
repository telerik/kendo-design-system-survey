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

export default function VersionControl () {

const [firstSeries] = [
        [37, 49, 5, 7, 2]
      ];

const categories = ["Software changes and design", "Software changes only", "Design files only", "No version history", "Other"];

const labels = {color: 'white'}; 

return (
  <Chart>
    <ChartAxisDefaults majorGridLines={{color: 'rgba(255,255,255, 0.2'}} />
    <ChartArea background="rgba(0,0,0,0)"/>
    <ChartTooltip format="{0}%"/>
    <ChartValueAxis>
      <ChartValueAxisItem format="{0}%" labels={labels}>
        <ChartValueAxisTitle text="Percentage" color="white" />
      </ChartValueAxisItem>
    </ChartValueAxis>
    <ChartCategoryAxis >
      <ChartCategoryAxisItem categories={categories} labels={labels}>
      </ChartCategoryAxisItem>
    </ChartCategoryAxis>
    <ChartSeries>
      <ChartSeriesItem type="bar" data={firstSeries} />
    </ChartSeries>
  </Chart>
  )
};