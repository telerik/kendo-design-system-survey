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

export default function Implementation () {

const [firstSeries] = [
        [69, 58, 56, 25, 12]
      ];

const categories = ["Product Managers", "Developers", "Designers", "Marketing", "Other"];

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