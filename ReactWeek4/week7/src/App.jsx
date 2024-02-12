import { useContext } from "react";
import { createContext } from "react";
import { useState } from "react"

const countContext = createContext(0)

function App() {
  const [count, setCount] = useState(0);
  

  
  return (
    <div>
      <countContext.Provider value={count}>

      <Count  setCount={setCount} />
      


      </countContext.Provider>
      
    </div>
  )
}

function Count({setCount}) {
  console.log('re-render');
  return <div>
    <CountRenderer  />
    <Buttons setCount={setCount} />
  </div>
}

function CountRenderer() {
  const count = useContext(countContext);
  return <div>
    {count}
  </div>
}

function Buttons({setCount}) {
  const count = useContext(countContext)
  return <div>
    <button onClick={() => {
      setCount(count + 1)
    }}>Increase</button>

    <button onClick={() => {
      setCount(count - 1)
    }}>Decrease</button>
  </div>
}

export default App