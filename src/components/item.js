import React from "react";
import chairImg from "../images/chair.jpeg"

const item = props => {
  return (
    <div className="item">
      <img alt="chair" src={chairImg} />
      <p className="itemName"> {props.name} </p>
      <small className="reducedPrice"> {props.reducedPrice} </small>
      <small className="quantity">Qty: {props.quantity}</small>
      <br />
      <small className="originalPrice"> {props.originalPrice} </small>
    </div>
  );
};

export default item;
