import Chart from "../types/interfaces/chart";
import { Component } from "react";
import EditActionProps from "./editActionComponents/interfaces/editActionProps";

export function getEditActions(chart: Chart, setSpec: () => void): Component<EditActionProps>[] {
    return [];
}


