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

return (
  <Chart>

    <ChartArea background="rgba(0,0,0,0)" height={350}/>
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