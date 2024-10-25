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
        [24, 17, 17, 11, 9, 8, 7, 6, 3, 0, 0]
      ];

const categories = ["Better UX", "Faster process", "Improved consistency", "Improved accessibility", "Better collaboration", "Faster time-to-market", "Scalability", "Single source of truth", "Enabled creativity", "Improved legal compliance", "Other" ];

const itemLabels = {visible: true, color: 'black', background: 'rgba(0,0,0,0)', padding: 5, format: "{0}%"};

return (
  <Chart>

    <ChartArea background="rgba(0,0,0,0)" height={300}/>
    <ChartValueAxis>
      <ChartValueAxisItem labels={{visible: false}} />
    </ChartValueAxis>
    <ChartCategoryAxis >
      <ChartCategoryAxisItem categories={categories}>
      </ChartCategoryAxisItem>
    </ChartCategoryAxis>
    <ChartSeries>
      <ChartSeriesItem type="bar" data={firstSeries} labels={itemLabels}/>
    </ChartSeries>
  </Chart>
  )
};