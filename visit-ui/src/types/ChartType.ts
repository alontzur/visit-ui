import { EditAction } from "./ChartEditAction";

export default interface ChartType{
    typeName: string;
    editActions: EditAction[];
}