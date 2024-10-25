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

export default function DesignSystemAdoption () {

const [firstSeries] = [
        [49, 49, 37, 33, 24, 16, 12, 8, 3, 8]
      ];

const categories = ["Aligning \n\ design/development", "Establishing processes", "Documentation", "Evidence of benefit", "Education", "Enforcement", "Incentives", "Limited creativity", "Internal champions", "Other"];

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
      <ChartSeriesItem type="bar" data={firstSeries} labels={itemLabels} />
    </ChartSeries>
  </Chart>
  )
};