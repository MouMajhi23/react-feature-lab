import { useState } from "react";

const CharacterCounter = ()=>{
    const appBodyStyle = {
        display:"flex",
        backgroundColor:"#bbdaf0",
        ["align-items"]:"center",
        ["justify-content"]:"center",
        ["flex-direction"]:"column",
        ["min-height"]:"100vh"
        
    }
    const paraStyle = {
        ["font-family"]:"math",
        ["font-size"]:"15px",
        ["font-weight"]:"800",
        color:"#362c8c"
    }
    const alertParaStyle = {
        ...paraStyle,
        color:"#f22c4d"
    }
    const [userInput, setUserInput] = useState("");
    const maxLen = 200;
    const remaining = maxLen - userInput.length;
    return(
        <div style={appBodyStyle}>
            <h2 style={{background:"#52a3eb", fontSize:"24px", color:"white", padding:"5px 10px"}}>Character Counter App</h2>
            <p style={{fontSize:"20px"}}>Type your text below</p>
            <textarea type="textarea" placeholder="type your text here..." maxLength={maxLen}
            rows="4" cols="50"
            value={userInput}
            onChange={(e)=>{
                setUserInput(e.target.value);
            }}/>
            <p style={ remaining < 10 ? alertParaStyle : paraStyle}>Remaining Character: {remaining}</p>
        </div>
    )
}
export default CharacterCounter;