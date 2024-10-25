import * as React from "react";
import { useState, useEffect } from 'react';
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartLegend,
  ChartTooltip,
  ChartArea
} from "@progress/kendo-react-charts";

export default function DesignSystemAI () {

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let position

  if (width < 500) {
    position = 'bottom'
  } else {
    position = 'right'
  }

  const series = [
    {
      category: "Yes",
      value: 7,
    },
    {
      category: "Not yet",
      value: 37,
    },
    {
      category: "No",
      value: 56,
    }
  ];

return (
  <Chart>
    <ChartArea background="rgba(0,0,0,0)" height={300}/>
    <ChartTooltip format="{0}%"/>
    <ChartLegend position={position} orientation="]vertical" />
    <ChartSeries>
      <ChartSeriesItem
        type="pie"
        data={series}
        field="value"
        categoryField="category"
      />
    </ChartSeries>
  </Chart>
  )
};