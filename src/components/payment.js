import React from "react";

const payment = props => {
  return (
    <div className="row">
      <div
        className={"summaryName col-7 " + props.underLineStyle}
        title={props.toolTipTitle}
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
