import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Chart from "../types/interfaces/chart";
import { Librarie } from "../types/enums/libraries";

function Chart(chart: Chart) {
  switch (chart.library) {
    case Librarie.highcharts:
      return (
        <div>
          <HighchartsReact highcharts={Highcharts} options={chart.chartSpec} />
        </div>
      );
    default:
      return <a>Chart library not supported</a>;
  }
}
export default Chart;
