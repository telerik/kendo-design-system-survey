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
  ChartValueAxisTitle
} from "@progress/kendo-react-charts";

export default function Description () {

const [firstSeries] = [
        [31, 22, 15, 11, 9, 6, 6]
      ];

const categories = ["Not development-related", "Independent software vendor (SV)", "Small development shop", "Consultancy", "Solo dev/entrepreneur", "Web/Digital agency", "System integrator"];

return (
  <Chart>
    <ChartTooltip format="{0}%"/>
    <ChartValueAxis>
      <ChartValueAxisItem format="{0}%">
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