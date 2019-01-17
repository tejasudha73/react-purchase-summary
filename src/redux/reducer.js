import {getDiscountedPrice,getEstimateTotal} from "../helpers/productCalc";
import {DISCOUNT,NODISCOUNT } from "../constants";

//initial state value 
const initialState= {
  type:NODISCOUNT,
  payload:getEstimateTotal()
}

//reducer
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case DISCOUNT:
          return {
            type:DISCOUNT,
            payload:getDiscountedPrice(10)
          };

    case NODISCOUNT:
          return {
            type:NODISCOUNT,
            payload:getEstimateTotal()
          };

          default:
        return initialState;
        }
  };

export default reducer;
