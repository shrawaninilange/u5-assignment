import  {   useState } from "react"
 import React from "react"
import App from "../App.css"
  const Todo = () =>{


    const [inputdata,setinput] = useState("")
    const [items,setitem] = useState([])
    const additem =()=>{
        const all = {id :new Date().getTime().toString,name:inputdata}
        setitem([...items,inputdata])
        setinput("")
    }
    
    return (
        <>
        <div className="main-div">
           <div className="child-div">
                 <h1>Add Ttems Here</h1>

                <div className="add">
                    <input type="text" placeholder="Enter additems..." value={inputdata} onChange={(e)=>  setinput(e.target.value)} />
                    <button    onClick={additem}>add</button>
                </div>
                <div className="show">

                    {
                        items.map((e) =>{
                           return( <div className="each" key ={e.id}> 
                        <h3>{e}   <button className="BTN"  >remove</button> </h3>  
                         
                    </div>
                           )
 
                        })
                    }
                     
                </div>
                <div className="check">
                    <button>check-list</button>
                </div>
           </div>
        </div>
        </>
    )
}

export default Todo