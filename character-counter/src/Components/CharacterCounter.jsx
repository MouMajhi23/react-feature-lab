import { use, useState } from "react";

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
        ["font-size"]:"12px",
        color:"#2c9ff2"
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
            <h2>Character Counter App</h2>
            <p>Type your text below</p>
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