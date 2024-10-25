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

export default function Tools () {

const [firstSeries] = [
        [22, 18, 13, 2, 1, 4, 7, 41, 11]
      ];

const categories = ["Figma plugins", "Figma Code Connect", "Progress ThemeBuilder", "Builder.io", "Anima", "Other", "Internally built tool", "No tools", "What are \n\ design-to-code tools?"];

const itemLabels = {visible: true, color: 'black', background: 'rgba(0,0,0,0)', padding: 5, format: "{0}%"};

return (
  <Chart>
    <ChartArea background="rgba(0,0,0,0)" height={250}/>
    <ChartValueAxis>
      <ChartValueAxisItem labels={{visible: false}}/>
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