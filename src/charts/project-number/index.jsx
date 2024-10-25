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

export default function ProjectNumber () {

  const [firstSeries] = [[22, 47, 20, 7, 4]];

  const categories = ["I'm focused on \n\ a single project/product", '2-5', '6-10', '11-20', '20+ different \n\ projects/products'];
  
  const itemLabels = {visible: true, color: 'black', background: 'rgba(0,0,0,0)', padding: 5, format: "{0}%"};
  
  return (
    <Chart>
      <ChartAxisDefaults majorGridLines={{color: 'rgba(0,0,0, 0.2'}} />
      <ChartArea background="rgba(0,0,0,0)" height={260}/>
      <ChartValueAxis>
        <ChartValueAxisItem labels={{visible: false}} />
      </ChartValueAxis>
      <ChartCategoryAxis >
        <ChartCategoryAxisItem categories={categories} >
        </ChartCategoryAxisItem>
      </ChartCategoryAxis>
      <ChartSeries>
        <ChartSeriesItem type="bar" data={firstSeries} labels={itemLabels} />
      </ChartSeries>
    </Chart>
    )
  };