import { ChartType } from "../enums/chartTypes"
import { Librarie } from "../enums/libraries"
import { SpecType } from "./specType";
import DataTable from "./dataTable";

export default interface Chart {
    chartType: ChartType;
    chartName: string;
    library: Librarie;
    chartSpec: SpecType;
    dataTable: DataTable;
}