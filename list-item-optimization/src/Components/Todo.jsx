import { useCallback, useState } from "react";
import ListCard from "./ListCard";

const Todo = () => {
    const todos = [
        { id: "todo-1", task: "clean Room" },
        { id: "todo-2", task: "Study" },
        { id: "todo-3", task: "Buy Grocery" },
        { id: "todo-4", task: "Gas filling" },
        { id: "todo-5", task: "Apply Remote Jobs" }
    ]
    const [items, setItems] = useState(todos)
   
    const handleDelete = useCallback((id) => {
        console.log("Button clicked", id);
        setItems((prevItems)=>prevItems.filter((item)=> item.id !== id))
    },[])
    
    return (
        <>
            {
                items.map((item) => (
                    <div className="rowItem" key={item.id}>
                        <ListCard 
                            task={item.task} 
                            handleDelete={handleDelete} 
                            id={item.id} />
                    </div>
                ))
            }
        </>
    )
}
export default Todo;