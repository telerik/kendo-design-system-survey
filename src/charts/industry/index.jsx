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

export default function Industry () {

const [firstSeries] = [
        [16, 13, 12, 12, 7, 6, 5, 5, 5, 3, 1, 1, 1, 1, 1, 1, 1]
      ];

const categories = ["Education", "Government/Military", "Finance/Banking", "Manufacturing", "Healthcare", "Printing/Publishing", "Engineering/Architecture", "Insurance", "Professional Services", "Chemicals", "Agriculture/Forest/Fishing", "Entertainment", "Online IT services", "Retail", "Telecommunication", "Transportation", "Wholesale"];

const labels = {color: 'white'}; 

return (
  <Chart>
    <ChartAxisDefaults majorGridLines={{color: 'rgba(255,255,255, 0.2'}} />
    <ChartArea background="rgba(0,0,0,0)" height={350}/>
    <ChartTooltip format="{0}%" />
    <ChartValueAxis>
      <ChartValueAxisItem format="{0}%" labels={labels}>
        <ChartValueAxisTitle text="Percentage" color="white"/>
      </ChartValueAxisItem>
    </ChartValueAxis>
    <ChartCategoryAxis >
      <ChartCategoryAxisItem categories={categories} labels={labels}>
      </ChartCategoryAxisItem>
    </ChartCategoryAxis>
    <ChartSeries>
      <ChartSeriesItem type="bar" data={firstSeries} />
    </ChartSeries>
  </Chart>
  )
};