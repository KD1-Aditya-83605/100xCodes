import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//app is component

//todo
//todo
//{
  //todos:[{title:'todo1',description:'first todo',completed:'false'}]

//}



function App() {
  const[toods,setTodos] = useState([{
    title: "Go to gtm",
    description: "7 to 9 gym",
    completed : false,
  },{
    title: "study dsa",
    description: "9 to 11 DSA",
    completed : true,

  },{
    title: "study github",
    description: "11 to 12 git",
    completed : true,

  }])

  function addTodo() {
    // [1, 2]
    // [...todos, 3] => [1, 2, 3]
    setTodos([...toods, {
      title: "new Todo",
      description: "desc of new todo"
    }])
  }

  return(
    <div>
      {/* <Todo title= {toods[0].title} description={toods[0].description}></Todo>
      <Todo title= {toods[1].title} description={toods[1].description}></Todo> */}
       <button onClick={addTodo}>Add a random todo</button>
      {toods.map((todo)=>{
        return(
          <Todo title = {todo.title} description = {todo.description}></Todo>
        )

      })}
     
    </div>
  )
}

function Todo(props){
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
}

export default App
