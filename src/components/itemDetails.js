import React from "react";

import Item from "./item";
import * as product from "../products/chair.json"

const ViewItemDetails = props => {
  return (
    <div id="ViewItemDetails">
      <div className="card">
        <div className="card-header">
          <button
            className="btn btn-link collapsed"
            data-toggle="collapse"
            data-target="#details"
            aria-expanded="true"
            onClick={props.click}
          >
            {props.btnName}
          </button>
        </div>
        <div id="details" className="collapse">
          <div className="card-body">
            <Item
              name="Essentials by OFM ESS-3085 Racing Style Leather"
              reducedPrice={"$" + product.reducedPrice}
              originalPrice={"$" + product.originalPrice}
              quantity="1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewItemDetails;
