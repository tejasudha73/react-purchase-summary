import React from "react";
import {pickupSavingToolTip } from "../constants";

const payment = props => {
  return (
    <div className="row">
      <div
        className={"summaryName col-7 " + props.underLineStyle}
        title={pickupSavingToolTip}
      >
        {" "}
        {props.name}{" "}
      </div>
      <strong className={"summaryAmount col-5 " + props.amountTextColor}>
        <span> {props.amount} </span>
      </strong>
    </div>
  );
};

export default payment;
