import { memo } from "react";
const Child = ({value})=>{
    console.log("Child Re-renders")
   const calculation = (iterations)=>{
    let sum = 0 ;
    for(let i = 0 ; i < iterations ; i++){
        sum += i;
    }
    return sum;
   }
   const result = calculation(value);
   console.log("Result: ",result)
    return(
        <>
        <h3>This is Child Element</h3>
        <p>Sum of first n integer: {result}</p>

        </>
    )
}
export default memo(Child);
