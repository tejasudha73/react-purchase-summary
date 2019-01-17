import React from "react";

const usePromoCode = props => {
  return (
    <div id="PromoCode">
      <div className="card">
        <div className="card-header">
          <CustomButton click={props.click} nameBtn={props.btnName} />
        </div>
        <div id="promoInput" className="collapse">
          <div className="card-body">
            <label>Promo Code</label>
            <br />
            <input type="text" name="promoCode" onChange={props.change} />
            <button name="apply" onClick={props.onClickApply} value>
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const CustomButton = props => {
  return (
    <button
      className="btn btn-link collapsed"
      data-toggle="collapse"
      data-target="#promoInput"
      aria-expanded="true"
      onClick={props.click}
    >
      {props.nameBtn} <i className="fal fa-plus" />
    </button>
  );
};

export default usePromoCode;
