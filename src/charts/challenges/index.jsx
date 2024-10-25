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

export default function Challenges () {

  const [firstSeries] = [
    [28, 17, 14, 6, 21, 33]
  ];

  const categories = ["Slow time-to-market / delivery", 'Conflict between team members', 'Low quality of delivery', 'Low morale', 'Other', 'No challenges'  ];

  const itemLabels = {visible: true, color: 'black', background: 'rgba(0,0,0,0)', padding: 5, format: "{0}%"};

  return (
    <Chart>
      <ChartAxisDefaults majorGridLines={{color: 'rgba(0,0,0, 0.2'}} />
      <ChartArea background="rgba(0,0,0,0)" height={260}/>
      <ChartValueAxis>
        <ChartValueAxisItem labels={{visible: false}} />
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