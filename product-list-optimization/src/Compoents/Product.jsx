import { useCallback, useState } from "react";
import ProductList from "./ProductList";

const Product = ()=>{
    console.log("Parent Re-renders")
    const productList = [
        {productId : 1, productName : "Chocolate", productCost: 23},
        {productId : 2, productName : "Perfume", productCost: 27},
        {productId : 3, productName : "Lipstick", productCost: 89},
        {productId : 4, productName : "Hair oil", productCost: 99},
        {productId : 5, productName : "Serum", productCost: 109},
    ]
    const [currency, setCurrency] = useState("INR");
    const handleOnChangeCurrency = (event)=>{
        console.log("event", event);
        console.log("Value", event.target.value)
        setCurrency(event.target.value)
    }
    //initially no product is selected 
    const [selectedProduct, setSelectedProduct] = useState(null);
    const handleSelect =useCallback((productId)=>{
        setSelectedProduct(productId)

    },[])
    const [user, setUser] = useState("guestuser");
    const [login, setLogin] = useState(false);
    const handleLogin = ()=>{
        setLogin(true)
    }
    return(
        <div>
            <div>
                <input type="text" placeholder="Enter Name" value={user} onChange={(e)=>setUser(e.target.value)}/>
                <button onClick={handleLogin}>Login</button>
            </div>
           {!login ?  <p>Please login</p> : `Welcome ${user}`}
           <br />
            <label>
                SelectCurrency
                <select value={currency} onChange={handleOnChangeCurrency}>
                    <option value="INR">INR</option>
                    <option value="USD">USD</option>
                </select>

            </label>
            <ul>
                {
                    productList.map((product)=>(
                            <ProductList
                                product={product}
                                key={product.productId} 
                                handleSelect={handleSelect}
                                currency={currency}
                                />
                    ))
                }
            </ul>
            

        </div>
    )
}

export default Product;