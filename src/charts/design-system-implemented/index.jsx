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

export default function DesignSystemImplemented () {

const [firstSeries] = [
        [16, 13, 19, 17, 6, 1, 6, 7, 10, 7, 0]
      ];

const categories = ["Faster process", "Faster time-to-market", "Improved consistency", "Better UX", "Single source of truth", "Other", "Improved legal compliance", "Improved accessibility", "Better collaboration", "Scalability", "Enabled creativity"];

return (
  <Chart>

    <ChartArea background="rgba(0,0,0,0)"/>
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