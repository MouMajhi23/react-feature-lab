import { useContext } from "react";
import React from "react";
import { ThemeContext } from "../App";
const ToggleButton = () => {
    const {theme, handleToggle} = useContext(ThemeContext);
    return(
        <>
            <button onClick={handleToggle}>{theme}</button>
        </>
    )
}

export default React.memo(ToggleButton);