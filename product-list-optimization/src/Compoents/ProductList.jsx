import React from "react";
const ProductList = ({product, handleSelect, currency})=>{
    console.log("Child Re-renders")
    return(
        <li onClick={()=>handleSelect(product.productId)}>
            <span>{product.productName}</span> - 
            <span>{currency === "INR" ? product.productCost : product.productCost*80}{currency}</span>
        </li>
    )
}
export default React.memo(ProductList);
