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

export default function SatisfiedTooling () {

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
      category: "Rather satisfied: \n\ output can be used with minimal modification",
      value: 37,
    },
    {
      category: 'Moderately satisfied: \n\ output needs to be heavily modified',
      value: 17,
    },
    {
      category: 'Dissatisfied: \n\ tools wastes more time than it saves',
      value: 8,
    }
  ];

return (
  <Chart>
    <ChartArea height={300}/>
    <ChartTooltip format="{0}%"/>
    <ChartLegend position={position} orientation="vertical"/>
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