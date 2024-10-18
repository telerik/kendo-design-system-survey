import * as React from "react";
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartCategoryAxis,
  ChartCategoryAxisTitle,
  ChartCategoryAxisItem,
  ChartTooltip,
  ChartValueAxis,
  ChartValueAxisItem,
  ChartValueAxisTitle
} from "@progress/kendo-react-charts";

export default function Experience () {

const [firstSeries] = [
        [7, 20, 19, 17, 37]
      ];

const categories = ["Just starting – less than a year", "Between 1 and 5 years", "Between 6 and 10 years", "Between 11 and 20 years", "More than 20 years"];

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