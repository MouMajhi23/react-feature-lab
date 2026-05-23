import { memo } from "react"
import React from "react"
const ListCard = ({task, handleDelete, id})=>{
    console.log("Child Rendered!")
    return(
        <>
            <li>
                {task}
            </li>
            <button onClick={()=>handleDelete(id)}>Delete</button>
        </>
    )
}
export default React.memo(ListCard);