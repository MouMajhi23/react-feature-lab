import { memo } from "react";
const ChildComponent = memo (function({handleIncrease, value}){
    console.log("Child Rendered!")
    return(
        <>  
            <p>{value}</p>
            <button onClick={handleIncrease}>Increase</button>
        </>
    )
})
export default ChildComponent;