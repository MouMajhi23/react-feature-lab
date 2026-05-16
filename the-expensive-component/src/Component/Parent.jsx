import { useState } from "react"
import Child from "./Child";

const Parent = ()=>{
    const [count, setCount] = useState(0)
    return(
        <>
            <h3>Hi I am Parent Component</h3>
            <p>Count : {count}</p>
            <button onClick={()=>setCount(prev=>prev+1)}>Increase</button>
            {/* note : props value does not change so child should not re-render.
            but without react.memo it will re-render */}
            <Child value={10}/>

        </>
    )
}
export default Parent;