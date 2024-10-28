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
        [19, 17, 16, 13, 10, 7, 7, 6, 6, 0, 1]
      ];

const categories = ["Improved consistency", "Better UX", "Faster process", "Faster time-to-market", "Better collaboration", "Improved accessibility", "Scalability",  "Single source of truth", "Improved legal compliance",  "Enabled creativity", "Other",];

const itemLabels = {visible: true, color: 'black', background: 'rgba(0,0,0,0)', padding: 5, format: "{0}%"};

return (
  <Chart>

    <ChartArea background="rgba(0,0,0,0)" height={300}/>
    <ChartValueAxis>
      <ChartValueAxisItem labels={{visible: false}}/>
    </ChartValueAxis>
    <ChartCategoryAxis >
      <ChartCategoryAxisItem categories={categories}>
      </ChartCategoryAxisItem>
    </ChartCategoryAxis>
    <ChartSeries>
      <ChartSeriesItem type="bar" data={firstSeries} labels={itemLabels} />
    </ChartSeries>
  </Chart>
  )
};