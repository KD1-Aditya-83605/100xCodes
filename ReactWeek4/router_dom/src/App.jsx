import {Suspense, lazy} from 'react'
import {BrowserRouter,Routes,Route, useNavigate} from 'react-router-dom'
import './App.css'
const  Dashboard = lazy(()=> import( './Components/Dashboard'))
const  Landing  =  lazy(()=> import('./Components/Landing'))
import React from 'react'

function App() {

   return (

    <>

    
    <BrowserRouter>
    <Appbar/>

    <Routes>
      <Route path = '/dashboard' element={<Suspense fallback={'loading...'}><Dashboard/></Suspense>} />
      <Route path='/' element={<Suspense fallback={'loading..'}><Landing/></Suspense>} />
    </Routes>

    </BrowserRouter>
      
        
    </>
  )
}

function Appbar(){
  const navigate = useNavigate();

  return (
    <div>



  <div style={{backgroundColor:"black",color:"wheat"}}>

    <button onClick={()=>{
      // window.location.href= '/' //not correct way to do client side routing (reloads whole html)
      navigate('/')


    }}>Landing</button>

     <button onClick={()=>{
      // window.location.href = '/dashboard'
      navigate('/dashboard')

     }}>Dashboard</button>
    </div>

    </div>
  )

}

export default App
