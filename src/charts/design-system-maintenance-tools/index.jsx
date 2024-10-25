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
  ChartArea,
ChartAxisDefaults
} from "@progress/kendo-react-charts";

export default function DesignSystemMaintenanceTools () {

const [firstSeries] = [
        [31, 36, 3,  4, 4, 7, 1, 1, 1,  3, 3, 3]
      ];

const categories = ["Figma", "VS/VS Code","Storybook",  "Confluence", "Miro", "Adobe XD","Zeroheight","Penpot", "Zeplin",    "Unsure", "None", "Other"];

const itemLabels = {visible: true, color: 'black', background: 'rgba(0,0,0,0)', padding: 5, format: "{0}%"};

return (
  <Chart>

    <ChartArea background="rgba(0,0,0,0)" height={350}/>
    <ChartAxisDefaults majorGridLines={{color: 'rgba(0,0,0, 0.2'}} />
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