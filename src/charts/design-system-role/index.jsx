import * as React from "react";
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
  ChartValueAxis,
  ChartValueAxisItem,
  ChartAxisDefaults,
  ChartArea
} from "@progress/kendo-react-charts";

export default function DesignSystemRole () {

  const [firstSeries] = [[48, 38, 29, 21, 23,2]];

  const categories = [
  "I contributed \n\ (design/development)", "I was consulted during kick-off", "I was part of the core team","I made key decisions","I wasn't involved","Other",
  ];
  const itemLabels = {visible: true, color: 'black', background: 'rgba(0,0,0,0)', padding: 5, format: "{0}%"};

  return (
    <Chart>
      <ChartAxisDefaults majorGridLines={{color: 'rgba(255,255,255, 0.2'}} />
      <ChartArea background="rgba(0,0,0,0)" height={400}/>
      <ChartCategoryAxis >
        <ChartCategoryAxisItem categories={categories} >
        </ChartCategoryAxisItem>
      </ChartCategoryAxis>
      <ChartValueAxis>
        <ChartValueAxisItem labels={{visible: false}} />
      </ChartValueAxis>
      <ChartSeries>
        <ChartSeriesItem type="bar" data={firstSeries} labels={itemLabels}/>
      </ChartSeries>
    </Chart>
    )
  };