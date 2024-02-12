import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


//sm : ( gives greater than and equal to sm not less than sm)

function App() {
  return <>
  

  <div style={{display:'flex', justifyContent:'space-between'}}>
    <div style={{backgroundColor:'red'}}>
      hi
    </div>
    <div style={{backgroundColor:'blue'}}>
      hi
    </div>
    <div style={{backgroundColor:'green'}}>
      hi
    </div>

  </div>

  <div className='flex justify-between'>
  <div className='bg-red-400'>
      hi
    </div>
    <div style={{backgroundColor:'blue'}}>
      hi
    </div>
    <div style={{backgroundColor:'green'}}>
      hi
    </div>
  </div>





  <div className='grid grid-cols-12'>
    <div className='bg-red-500 col-span-5'>hi</div>
    <div className='bg-green-500'>hi baby</div>
    <div className='bg-pink-500'>hi from inda</div>
    <div className='bg-pink-500'>hi from inda</div>
    <div className='bg-pink-500'>hi from inda</div>
  </div>


<div>

  <div className='bg-red-500 md:bg-blue-500'>
  Jai shree ram

  </div>

 

  </div>

  <div className='flex justify-between grid grid-cols-1 md:grid-cols-3'>
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </div>

  </>
  
  
}

export default App
