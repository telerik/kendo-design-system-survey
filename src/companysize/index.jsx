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

export default function CompanySize () {

const [firstSeries] = [
        [9, 12, 6, 6, 8, 8, 16, 9, 4, 6, 11, 5]
      ];

const categories = ["1", "2-5", "6-10", "11-20", "21-50", "51-100", "101-500", "510-1000", "1001-2000", "2000-5000", "I don't know"];

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