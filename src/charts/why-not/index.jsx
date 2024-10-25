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

export default function WhyNot () {

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
      category: "Designs keep changing afterwards \n\ and it's hard to track them",
      value: 65,
    },
    {
      category: 'I need to ask many questions',
      value: 50,
    },
    {
      category: 'Processes are not followed \n\ closly, causing confusion',
      value: 31,
    },
    {
      category: 'Other',
      value: 15
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