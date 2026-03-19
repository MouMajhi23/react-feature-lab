import { useEffect } from "react";
import { useState } from "react";

const FetchDisplay = () => {
  const appBodyStyle = {
    display: "flex",
    backgroundColor: "#bbdaf0",
    ["align-items"]: "center",
    ["justify-content"]: "center",
    ["flex-direction"]: "column",
    ["min-height"]: "100vh",
  };
  const headingStyle = {
    ["font-size"]: "24px",
    ["font-family"]: "sans-serif",
  };
  const listStyle = {
    ["list-style"]: "none",
    ["font-size"]: "20px",
    "padding": "10px 10px",
    "margin" : "5px 0px",
    "border-bottom" : "1px solid #7389a4"
  }
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(()=>{
    const fetchData = async ()=> {
        try{
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`)
            if(!response.ok)
                throw new Error(`HTTP error: Status ${response.status}`)
            const result = await response.json();
            setData(result);
            setError(null);
        }catch(err){
            setError(err.message);
            setData(null)
        }finally{
            setLoading(false)
        }
    }
    fetchData();
  },[])
  console.log("Data", data)
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div style={appBodyStyle}>
      <h2 style={headingStyle}>Posts</h2>
      <ul>
        {data.map((post)=>(
            <li style={listStyle} key={post.id}>
                <h3>{post.title}</h3>
                <p>
                    {post.body}
                </p>
                
                </li>
        ))}
      </ul>
    </div>
  );
};
export default FetchDisplay;
