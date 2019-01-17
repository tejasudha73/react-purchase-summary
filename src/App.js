import React, { Component } from "react";
import { connect } from "react-redux";

import Payment from "./components/payment";
import ViewItemDetails from "./components/itemDetails";
import UsePromoCode from "./components/promo";
import {applyPromoCodeLabel,hidePromoCodeLabel,seeItemDetailsLable,hideItemDetailsLable} from "./constants"
import * as product from "./products/chair.json"
import {DISCOUNT,NODISCOUNT } from "./constants";

 class AppComponent extends Component {

  //state object to maintain total,discount and other information
    state = {
    promoBtnName: applyPromoCodeLabel,
    isPromoOpen: false,
    seeItemBtnName: seeItemDetailsLable,
    isSeeItemOpen: false,
    estimatedTotal: product.originalPrice + product.savings + product.tax,    
    //discount: this.props.discount,
    promoInput: "",
  };

  //Event to handle change the name for expand collapse
  changeBtnName = btn => {
    console.log(btn);
    switch (btn) {
      case "promo":
        this.setState({
          isPromoOpen: !this.state.isPromoOpen
        });
        if (this.state.isPromoOpen) {
          this.setState({
            promoBtnName: applyPromoCodeLabel 
          });
        } else {
          this.setState({
            promoBtnName: hidePromoCodeLabel
          });
        }
        break;
      case "seeItem":
        this.setState({
          isSeeItemOpen: !this.state.isSeeItemOpen
        });
        if (this.state.isSeeItemOpen) {
          this.setState({
            seeItemBtnName: seeItemDetailsLable
          });
        } else {
          this.setState({
            seeItemBtnName: hideItemDetailsLable
          });
        }
        break;
      default:
        return null;
    }
  };

  //setting state on event change
  onChangeHandler = event => {
    let inputVal = event.target.value;
    this.setState({ promoInput: inputVal });
  };

  //apply discount
  CalculateDiscount = () => {
    let promoCode = this.state.promoInput;
    if (promoCode === "DISCOUNT") {
      this.props.disc();
      this.setState({ estimatedTotal:this.props.estimatedTotal });
    }
  };

  render() {
    return (
      <div className="container">
        <Payment
          name="Subtotal"
          amount={"$" + product.originalPrice}
        />

        <Payment
          name="Pickup Savings"
          toolTipTitle={this.state.toolTipTitle}
          amount={
            product.savings > 0
              ? "$" + product.savings
              : "-$" + -product.savings
          }
          underLineStyle="underline"
          amountTextColor={
            product.savings < 0 ? "amountTextColor" : ""
          }
        />
        <Payment
          name="EST.taxes&fees (Based on 94085)"
          amount={"$" + product.tax}
        />
        <hr />
        <h4>
          <strong>
            <Payment
              name="Est.total"
              amount={"$" + this.state.estimatedTotal}
            />
          </strong>
        </h4>
        <div className="row">
          <div className="col">
            <ViewItemDetails
              btnName={this.state.seeItemBtnName}
              click={this.changeBtnName.bind(this, "seeItem")}
              underLineStyle="underline"
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <UsePromoCode
              btnName={this.state.promoBtnName}
              click={this.changeBtnName.bind(this, "promo")}
              onClickApply={this.CalculateDiscount}
              change={this.onChangeHandler}
              underLineStyle="underline"
            />
          </div>
        </div>
      </div>
    );
  }  
}

const mapStateToProps = state => {
  return {    
    estimatedTotal: state.payload
  };
};

const mapDispatchToProps = dispatch => {
  return {     
     disc: () =>{ 
                dispatch({type: DISCOUNT }) 
              },
     nodisc: () => dispatch({type: NODISCOUNT})
   };   
  }  

export default connect(mapStateToProps,mapDispatchToProps,)(AppComponent);
