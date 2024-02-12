import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return <div>
  <CardWrapper prop = {<TextComponent/>}/>
  <CardWrapper prop = {<TextComponent2/>}/>
  </div>
}
function TextComponent(){
  return <div>
    hi there
  </div>
}
function TextComponent2(){
  return <div>
    hi there2
  </div>
}


function CardWrapper({prop}){
  return(
    <div  style={{border:"2px solid black",padding:"10px"}} >
      
      
    {prop}
      
    </div>
  )

}
export default App
