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

export default function Industry () {

const [firstSeries] = [
        [16, 13, 12, 12, 7, 6, 5, 5, 5, 3, 1, 1, 1, 1, 1, 1, 1]
      ];

const categories = ["Education", "Government/Military", "Finance/Banking", "Manufacturing", "Healthcare", "Printing/Publishing", "Engineering/Architecture", "Insurance", "Professional Services", "Chemicals", "Agriculture/Forest/Fishing", "Entertainment", "Online IT services", "Retail", "Telecommunication", "Transportation", "Wholesale"];

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