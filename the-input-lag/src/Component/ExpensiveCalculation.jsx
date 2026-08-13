import React from "react";
const ExpensiveCalculation = ({value})=>{
    console.log("Value", value);
    const startTime = performance.now();
    let result = 0;
    for(let i = 0 ; i < value ; i++){
        result += i;
    }
    const endTime = performance.now();
    console.log(`Child Rendered in ${(endTime-startTime).toFixed(2)}ms`)
    return(
        <>
            <h2>The Expensive Child</h2>
            <p>Result for the calculation: {result}</p>
        </>
    )
}
export default React.memo(ExpensiveCalculation);