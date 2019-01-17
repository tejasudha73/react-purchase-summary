
import * as product from "../products/chair.json"

//calculating total with 10%
export function getDiscountedPrice(discount){
    var estTotal = getEstimateTotal();
    return estTotal - (estTotal / discount)
}

//calculating estimate total
export function getEstimateTotal(){
    return product.originalPrice + product.savings + product.tax;
}