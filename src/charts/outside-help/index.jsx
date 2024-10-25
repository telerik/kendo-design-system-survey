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

export default function OutsideHelp () {

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
      category: "We work with internal teams only",
      value: 72,
    },
    {
      category: 'We assign both internal and external specialists',
      value: 22,
    },
    {
      category: "We hire external consultant(s)",
      value: 4,
    },
    {
      category: 'We outsource to an external agency',
      value: 2,
    }
  ];

return (
  <Chart>
    <ChartArea height={300}/>
    <ChartTooltip format="{0}%"/>
    <ChartLegend position={position} orientation="vertical" />
    <ChartSeries>
      <ChartSeriesItem
        type="donut"
        data={series}
        field="value"
        categoryField="category"
      />
    </ChartSeries>
  </Chart>
  )
};