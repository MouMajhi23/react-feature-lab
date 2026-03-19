import { useState } from "react";

const SearchFilter = ()=>{
    const appBodyStyle = {
    display: "flex",
    backgroundColor: "#bbdaf0",
    ["align-items"]: "center",
    ["justify-content"]: "center",
    ["flex-direction"]: "column",
    ["min-height"]: "100vh",
  };
  const headingStyle = {
    ["font-size"] : "20px",
    ["font-family"] : "monospace",
  }
  const inputStyle ={
    "width" : "30%",
    "padding" : "5px 10px",
    "background" : "transparent",
    ["border"]: "1px solid gray",
    ["border-radius"]: "10px",
  }
  const listStyle = {
    ["list-style"]: "none",
    ["font-size"]: "20px",
    "padding": "10px 10px",
    "margin" : "5px 0px",
    "border-bottom" : "1px solid #7389a4"
  }
  const names = [
    { id: 1, name: "alex" },
    { id: 2, name: "john" },
    { id: 3, name: "lana" },
    { id: 4, name: "arijit" },
    { id: 5, name: "jaspreet" },
    { id: 6, name: "lexi" },
    { id: 7, name: "alex" },
    { id: 8, name: "kiara"},
    { id: 9, name: "debjit"},
    { id: 10, name: "zyla"}
  ]
  const [item,setItem] = useState("");
  const result = names.filter((ele)=>{
    return(
        ele.name.toLowerCase().includes(item.toLowerCase()) && item.toLowerCase().length > 0
    )})
// Please note : A common mistake is using useEffect to update a filteredList state whenever the search input changes. This approach is discouraged because:
// It causes unnecessary re-renders (one for the input change, one for the effect).
// It makes the code harder to maintain.
// Derived State is faster and keeps the component "stateless" regarding the filtered data.
    return(
        <div style={appBodyStyle}>
          <h2 style={headingStyle}>Search Filter</h2>
          <input 
            style={inputStyle}
            type="text"
            name="search" 
            placeholder="search here...." 
            value={item}
            onChange={(e)=>setItem(e.target.value)}
            />
            
          <ul style={{"width":"30%"}}>
          {result.map((user)=>(
            <li 
            style={listStyle} 
            key={user.id}>
                {user.name}
            </li>
          )
            )}
        </ul>
        </div>
    )
}
export default SearchFilter;