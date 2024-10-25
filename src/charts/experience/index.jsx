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
  ChartValueAxisTitle,
  ChartAxisDefaults,
  ChartArea
} from "@progress/kendo-react-charts";

export default function Experience () {

const [firstSeries] = [
        [7, 20, 19, 17, 37]
      ];

const categories = ["Less than a year", "1-5 years", "6-10 years", "11-20 years", "20+ years"];
const itemLabels = {visible: true, color: 'black', background: 'rgba(0,0,0,0)', padding: 5, format: "{0}%"};

return (
  <Chart>
    <ChartArea background="rgba(0,0,0,0)" height={200}/>
    <ChartValueAxis>
      <ChartValueAxisItem labels={{visible: false}} />
    </ChartValueAxis>
    <ChartCategoryAxis >
      <ChartCategoryAxisItem categories={categories}>
      </ChartCategoryAxisItem>
    </ChartCategoryAxis>
    <ChartSeries>
      <ChartSeriesItem type="bar" gap={0.5} data={firstSeries} labels={itemLabels}/>
    </ChartSeries>
  </Chart>
  )
};