import React from "react";
const ThemeButton = ({ handleTheme, theme }) => {
    console.log("Theme Component Rendered")
    return (
        <>
            <button onClick={handleTheme}>
                {theme}
            </button>
        </>
    )

}

export default React.memo(ThemeButton);