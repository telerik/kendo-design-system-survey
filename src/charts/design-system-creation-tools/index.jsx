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
  ChartAxisDefaults,
  ChartArea
} from "@progress/kendo-react-charts";

export default function DesignSystemCreationTools () {

const [firstSeries] = [
        [41, 30, 14, 5, 5, 2, 0, 0, 0,  0, 2, 2]
      ];

const categories = ["Figma", "VS/VS Code", "Storybook", "Confluence", "Miro", "Adobe XD", "Zeroheight", "Penpot", "Zeplin", "Unsure", "None", "Other"];

const itemLabels = {visible: true, color: 'black', background: 'rgba(0,0,0,0)', padding: 5, format: "{0}%"};

return (
  <Chart>
    <ChartAxisDefaults majorGridLines={{color: 'rgba(0,0,0, 0.2'}} />
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