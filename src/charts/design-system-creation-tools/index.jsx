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

export default function DesignSystemCreationTools () {

const [firstSeries] = [
        [41, 14, 30, 5, 0, 0, 5, 0, 2, 0, 2, 2]
      ];

const categories = ["Figma", "Storybook", "VS/VS Code", "Confluence", "Penpot", "Zeplin", "Miro", "Zeroheight", "Adobe XD", "Unsure", "None", "Other"];

const itemLabels = {visible: true, color: 'black', background: 'rgba(0,0,0,0)', padding: 5, format: "{0}%"};

return (
  <Chart>

    <ChartArea background="rgba(0,0,0,0)" height={350}/>
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