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
  ChartArea
} from "@progress/kendo-react-charts";

export default function DesignSystemAdoption () {

const [firstSeries] = [
        [49, 49, 37, 33, 24, 16, 12, 8, 3, 8]
      ];

const categories = ["Aligning design/development", "Establishing processes", "Documentation", "Evidence of benefit", "Education", "Enforcement", "Incentives", "Limited creativity", "Internal champions", "Other"];

return (
  <Chart>

    <ChartArea background="rgba(0,0,0,0)" height={300}/>
    <ChartTooltip format="{0}%"/>
    <ChartValueAxis>
      <ChartValueAxisItem format="{0}%" >
        <ChartValueAxisTitle text="Percentage" />
      </ChartValueAxisItem>
    </ChartValueAxis>
    <ChartCategoryAxis >
      <ChartCategoryAxisItem categories={categories}>
      </ChartCategoryAxisItem>
    </ChartCategoryAxis>
    <ChartSeries>
      <ChartSeriesItem type="bar" data={firstSeries} />
    </ChartSeries>
  </Chart>
  )
};