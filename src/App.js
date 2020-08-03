import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css'


function App() {
const [item, setItem]=useState('')
const [todos,setTodos]=useState([])
const handleInput=(e)=>{setItem(e.target.value)}
 const handleSubmit=(e)=>{
   e.preventDefault() 
   setTodos([...todos,{id:Math.random(),task:item}])
   e.target.reset ()
  }
const removeItem=(id)=>{
    setTodos(todos.filter(el=>el.id!==id))
}
const editItem=(id)=>{
  let x=prompt('give me your new task here !')
  setTodos(todos.map(el=>(el.id===id)?{id:id,task:x}:el))
}
 
return (

<div className="App">
<form onSubmit={handleSubmit}> 
  <input type="text" onChange={handleInput}/> 
    </form>
<ul>
  {todos.map(el=><li key={el.id}>{el.task}
  <button onClick={()=>removeItem(el.id)}>Delete</button>
  <button onClick={()=>editItem(el.id)}>Edit</button></li>)}
</ul>
    </div>
  );
}

export default App;
