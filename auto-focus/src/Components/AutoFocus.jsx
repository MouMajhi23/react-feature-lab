import {use, useEffect, useRef, useState } from "react";
//In this example we will undestand how a input field get autoFocused
//1. When app loads for the first time - result-> Input feild get focus only once & clicking on count won't effect the focus of input feild.
//2. When there is no dependency array - result-> Input field get focus everytime user click on count button.
//3. when a count value is even - result-> When count is even then only input feild get focused.

const AutoFocus = ()=>{
    const inputRef = useRef(null);
    const [count, setCount] = useState(0);
    // Implementation for logic - 1 
    // useEffect(()=>{
    //     if(inputRef.current){
    //         inputRef.current.focus();
    //     }
    // },[])
    // const handleCount = ()=>{
    //         setCount(count+1)
    // }
    // useEffect(()=>{
    //     console.log("Counter Rendered!")
    // },[count])
    // //Implementaion of logic - 2 
    // useEffect(()=>{
    //     if(inputRef.current){
    //         inputRef.current.focus();
    //     }
    // })
    // const handleCount = ()=>{
    //         setCount(count+1)
    // }
    // useEffect(()=>{
    //     console.log("Counter Rendered!")
    // },[count])
     //Implementaion of logic - 3 
    const handleCount = ()=>{
                setCount(count+1)
    }
    useEffect(()=>{
        if(count % 2 === 0){
                inputRef.current.focus();
        }
    },[count])
    return(
        <div>
            <p>This is a dummy input feild; just to demonstrate input focus</p>
            <input 
                type="text"
                placeholder="enter your text..."
                ref={inputRef}
            />
            <p>{count}</p>
            <button onClick={handleCount}>Click me</button>
        </div>
    )
}
export default AutoFocus;