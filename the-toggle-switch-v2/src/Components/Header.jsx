import ToggleButton from "./ToggleButton";

const Header = () => {
    console.log("Header Rendered")
    return(
        <>  
            <nav className="navbar">
                <ul>
                    <li 
                        onClick={()=>console.log("To replicate real time demo; on click this console would appear")}>
                        Home
                    </li>
                    <li 
                        onClick={()=>console.log("To replicate real time demo; on click this console would appear")}>
                        Contact us
                    </li>
                    <ToggleButton />
                </ul>
            </nav>
        </>
    )
}
export default Header;