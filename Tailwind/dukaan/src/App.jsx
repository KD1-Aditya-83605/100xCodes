import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RevenueCard } from './Components/RevenueCard'

function App() {

  return(
    <>
    <RevenueCard title={'Amount pending'} amount={'2000'} orderCount={12}></RevenueCard>
    </>

  )
}

export default App
