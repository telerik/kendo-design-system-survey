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

export default function DesignSystemGoals () {

const [firstSeries] = [
        [17, 8, 17, 24, 7, 0, 0, 11, 9, 6, 3]
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