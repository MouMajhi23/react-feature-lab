import { useState } from "react";
import ExpensiveCalculation from "./ExpensiveCalculation";

const Input = ()=>{
    const [text, setText] = useState("")
    console.log("Text: ",text)
    return(
        <>
        <input 
            type="text" 
            placeholder="Type here.. "
            value={text}
            onChange={(e)=>setText(e.target.value)}/>
            <ExpensiveCalculation value={10000000}/>
        </>
    )
}
export default Input;
