import ChartType from "./ChartType"
import { SpecType } from "./specType";

export default interface Chart{
    chartType: ChartType;
    chartName: string;
    library: string;
    chartSpec: SpecType;
}