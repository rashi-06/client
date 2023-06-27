import React from 'react'
import { useState , useEffect } from 'react';
import Axios from "axios";

const AllTodos = () => {
    const [all, setAll] = useState([]);
    const [todo , setTodo] = useState("");

    const addTodo = ()=>{
        Axios.post("http://localhost:2000/addTodo" , {
            todo
        }).then((result)=>{
            console.log("New todo added...");
        
        })
    }

    useEffect(() => {
    
        Axios.get("http://localhost:2000/getTodos").then((res)=>{
           setAll(res.data);
           console.log(all);
        }).catch((err)=>{
            console.log(err);
        })  
        
    }, []);
    
   
    
   
   
    
    

    return (
    <div>
        <div>
            <input type='text'
                name='todo' 
                onChange={(e)=>{
                setTodo(e.target.value);
            }} placeholder='abc def ijk lmo pqr stu'/>
            <button onClick={addTodo}>Add</button>
        </div>

        <div>
            <div>
                {all.map((e)=>{
                    return(
                        <>
                            <h3>{e.todo}</h3>
                            <button>Edit</button>
                            <button>Delete</button>
                        </>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default AllTodos