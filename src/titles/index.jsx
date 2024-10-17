import * as React from "react";
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartCategoryAxis,
  ChartCategoryAxisTitle,
  ChartCategoryAxisItem,
} from "@progress/kendo-react-charts";

export default function Titles () {

const [firstSeries] = [
        [41, 17, 13, 9, 4, 4, 3, 2, 1, 1, 1, 1, 1, 1, 1]
      ];

const categories = ["Full-stack developer", "Web developer", "Front-end developer", "UI/UX designer", "Product manager", "CEO/CTO/VP of Engineering", "Engineering manager", "Information Architect", "Product designer", "Design (UI/UX) manager", "Project manager", "Interaction designer", "Design system lead", "Graphic designer", "Other"];

return (
  <Chart>
    <ChartCategoryAxis>
      <ChartCategoryAxisItem categories={categories}>
        <ChartCategoryAxisTitle text="Titles" />
      </ChartCategoryAxisItem>
    </ChartCategoryAxis>
    <ChartSeries>
      <ChartSeriesItem type="bar" gap={2} spacing={0.25} data={firstSeries} />
    </ChartSeries>
  </Chart>
  )
};