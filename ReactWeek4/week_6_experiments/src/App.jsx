import { useState } from 'react'


let counter = 4;

function App() {

  const[todos,setTodos] = useState([{
    id: 1,
    title:"Go to gym",
    description:"7pm"
  },
  {
    id: 2,
    title:"Go to moive",
    description:"8pm"
  },
  {
    id: 3,
    title:"Go to dinner",
    description:"9pm"
  },
  
])

function addTodo(){
  setTodos([...todos,{
    id:counter++,
    title:Math.floor(Math.random()*10),
    description:Math.floor(Math.random()*100)
  }])

  // const newTodos = [];
  // for(let i = 0;i<todos.length;i++){
  //   newTodos.push(todos[i])

  // }
  // newTodos.push({
  //   id:4,
  //   title:Math.random()*10,
  //   description:Math.random()*100
    
  // })
  // setTodos(newTodos)
}
  return(
    <div>
      <button onClick={(addTodo)}>Add A todo</button>
    {todos.map(todo=> <Todo key={todo.id }title={todo.title} description={todo.description}/>)}


    {/* {todos.map(function(todo){
      return <Todo title={todo.title} description={todo.description} />
    })} */}

    </div>

  )

  
}

function Todo({title,description}){
  return (
    <div>
      <h1>{title}</h1>
      <h4>{description}</h4>
    </div>
  )
}



export default App
