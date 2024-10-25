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

export default function Collaboration () {

const [firstSeries] = [
        [23, 23, 16, 11, 7, 4, 16]
      ];

const categories = ["Daily", "Several times a week", "Once a week", "A few times a month", "Once a month or less", "No direct collaboration", "No one to collaborate with"];

const itemLabels = {visible: true, color: 'black', background: 'rgba(0,0,0,0)', padding: 5, format: "{0}%"};

return (
  <Chart>

    <ChartArea background="rgba(0,0,0,0)" height={200}/>
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