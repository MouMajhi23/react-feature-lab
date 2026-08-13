import { useState } from "react";

const Main = () => {
    const [inputValue, setInputValue] = useState("")
    console.log("Search item")
    return (
        <div className="main">
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, officia sed. Nisi!
            </h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt quasi vel neque nobis, provident repellat, in obcaecati minima commodi soluta voluptatem autem vero dolorem ad reprehenderit numquam illo ratione aspernatur minus eligendi. Nobis rem voluptatum ut dolores quaerat, quis dignissimos aliquid magni veritatis optio! Perspiciatis corrupti pariatur sapiente? Dolorem consequuntur id accusamus accusantium dolore quod aliquam exercitationem delectus modi. Esse doloremque quasi velit. Impedit, a?</p>
            <input 
                placeholder="Search Here... "
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}/>
        </div>
    )
}

export default Main;