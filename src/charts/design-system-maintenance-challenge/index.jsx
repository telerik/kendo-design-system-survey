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

export default function DesignSystemMaintenanceChallenge () {

const [firstSeries] = [
        [55, 43, 32, 20, 18, 16, 7]
      ];

const categories = ["Keeping it up-to-date", "Scope creep", "Adoption", "Allocation of resources", "Limiting creativity", "Added logistical work", "Other"];

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