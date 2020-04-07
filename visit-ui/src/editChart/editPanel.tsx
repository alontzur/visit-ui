import React, { Component } from "react";
import Chart from "../types/interfaces/chart";
import { getEditActions } from "./chartTypeEditActionsMapper";

interface Props {
  chart: Chart;
  setSpec: () => void;
}
interface State {}

export default class EditPanel extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const editActionsComponents = getEditActions(this.props.chart, this.props.setSpec);
    return (
      <div>{editActionsComponents.map((component) => ({ component }))}</div>
    );
  }
}
