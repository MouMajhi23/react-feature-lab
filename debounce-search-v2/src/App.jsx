import { useEffect, useState } from "react"

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchId, setSearchId] = useState(null)
  const [debounceId, setDebounceId] = useState(null);
  console.log("Search ID: ", searchId);
  useEffect(()=>{
    console.log("First Use Effect")
    const timeOut = setTimeout(()=>{
      setDebounceId(searchId);
      console.log("Debounce ID: ", debounceId)
    },500)
    return(()=>clearTimeout(timeOut)) 
  },[searchId])
  useEffect(()=>{

    const fetchData =async()=>{
      try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/comments?email=${debounceId}`);
        if(!response.ok){
          throw new Error (`HTTP error: Status ${response.status}`)
        }
          const result = await response.json();
          setData(result)
          setError(null)
      }catch(err){
        console.log("Error: ",err)
        setError(err.message)
      }finally{
        setLoading(false)
      }
    }
    fetchData();

  },[debounceId])
  console.log("Data", data);
  console.log("")
  if(loading) return <p>Loadingg....</p>
  if(error) return <p>Error: {error}</p>
  return (
    <div className="main">
      <input className="inputField"
        type="text"
        name="email"
        placeholder="Enter email to search.."
        value={searchId}
        onChange={(e)=>setSearchId(e.target.value)}
        />
      <h2><u>User Data</u></h2>
      <ul>
        {data.map((details)=>(
          <li key={details.id}>{details.body}</li>
        ))}
      </ul>

    </div>
  )
}

export default App
