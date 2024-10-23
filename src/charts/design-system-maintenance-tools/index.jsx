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

export default function DesignSystemMaintenanceTools () {

const [firstSeries] = [
        [31, 3, 36, 4, 1, 1, 4, 1, 7, 3, 3, 3]
      ];

const categories = ["Figma", "Storybook", "VS/VS Code", "Confluence", "Penpot", "Zeplin", "Miro", "Zeroheight", "Adobe XD", "Unsure", "None", "Other"];

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