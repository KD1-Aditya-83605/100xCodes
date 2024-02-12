import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//1st code



// function App() {
//   const[todos,setTodos] = useState([]);

//   useEffect(()=>{
//     fetch('https://sum-server.100xdevs.com/todos')
//     .then(async(res)=>{
//       const data = await res.json()
//       setTodos(data.todos)
//     })
//   },[])  // if not useEffect this runs infinetly

//   return(
//    <div>
//     {todos.map((todo)=> <Todo title={todo.title} description={todo.description}/>)}
//    </div>
   
   

//   )
// }

// function Todo({title,description}){
//   return(
//     <div>
//       <h1>{title}</h1>
//       <h2>{description}</h2>
//     </div>
//   )

// }


// end


// 2nd code

// function App(){
//   return(
//     <div>
//       <Todo id={3}/>
//     </div>
//   )

// }


// function Todo({id}){

//   const[todo,setTodos] = useState({})


//   useEffect(()=>{
//     fetch(`https://sum-server.100xdevs.com/todo?id=${id}`)
//     .then(async (res)=>{
//       const data = await res.json();
      
//       setTodos(data.todo);

//     })
//   },[])
//   return(
//     <div>
//       <h1>{todo.title}</h1>
//       <h2>{todo.description}</h2>

//     </div>
//   )
// }



//end



//3rd code use MEMO

// function App(){
//   const[count,setCount] = useState(0);
//   const[inputValue,setInputValue] = useState(1);
//   const[finalValue,setFinalValue] = useState(0);



//   useEffect(()=>{

    
//   let counter = 0;

//   for(let i = 0 ;i<=inputValue;i++){
//     counter = counter+i;
//   }
//   setFinalValue(counter)

//   },[inputValue])


//   return(
    

  
//     <div>

//       <input onChange={(e)=>{
//         setInputValue(e.target.value);

//       }}placeholder={'Find sum 1 to n'}></input> 

//       Sum from 1 to {inputValue} is {finalValue}
//       <button onClick={()=>
//         setCount(count+1)
//       }>Counter {count}</button>

//     </div>
//   )

// }


// end


//4th code




  




export default App;

