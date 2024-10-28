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

export default function DesignSystemBlockers () {

  const [firstSeries] = [[39, 23, 19, 16, 13, 16]];

  const categories = ["Lack of buy-in \n\ from management", "Too time-consuming \n\ to build","Too expensive\n\ to build","People won't\n\ use it", "Other team members \n\ don't see value", "Other"
  ];

  const itemLabels = {visible: true, color: 'black', background: 'rgba(0,0,0,0)', padding: 5, format: "{0}%"};

return (
  <Chart>
    <ChartAxisDefaults majorGridLines={{color: 'rgba(0,0,0, 0.2'}} />
    <ChartArea background="rgba(0,0,0,0)" height={300}/>
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