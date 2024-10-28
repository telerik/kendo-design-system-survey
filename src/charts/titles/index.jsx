import * as React from "react";
import {
  Chart,
  ChartArea,
  ChartSeries,
  ChartSeriesItem,
  ChartCategoryAxis,
  ChartCategoryAxisTitle,
  ChartCategoryAxisItem,
  ChartTooltip,
  ChartValueAxis,
  ChartValueAxisItem,
  ChartValueAxisTitle,
  ChartAxisDefaults
} from "@progress/kendo-react-charts";

export default function Titles () {

const [firstSeries] = [
        [41, 17, 13, 9, 4, 4, 3, 2, 1, 1, 1, 1, 1, 1, 1]
      ];

const categories = ["Full-stack developer", "Web developer", "Front-end developer", "UI/UX designer", "Product manager", "CEO/CTO/VP of Engineering", "Engineering manager", "Information Architect", "Product designer", "Design (UI/UX) manager", "Project manager", "Interaction designer", "Design system lead", "Graphic designer", "Other"];

const labels = {color: 'white'}; 
const itemLabels = {visible: true, color: 'white', background: 'rgba(0,0,0,0)', padding: 5, format: "{0}%"};

return (
  <Chart>
    <ChartAxisDefaults majorGridLines={{color: 'rgba(255,255,255, 0.2'}} />
    <ChartArea background="rgba(0,0,0,0)" height={500}/>
    <ChartValueAxis>
      <ChartValueAxisItem labels={{visible: false}} />
    </ChartValueAxis>
    <ChartCategoryAxis >
      <ChartCategoryAxisItem categories={categories} labels={labels} />
    </ChartCategoryAxis>
    <ChartSeries>
      <ChartSeriesItem type="bar" gap={1} spacing={0.25} data={firstSeries} labels={itemLabels} />
    </ChartSeries>
  </Chart>
  )
};