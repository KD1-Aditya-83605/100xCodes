import { useContext, useMemo, useState } from "react"
import { CountContext } from "./context";
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom } from "./store/atoms/count";

function App() {
  return(
    <div>
      <RecoilRoot>

      <Count/>

      </RecoilRoot>
      
    </div>
  )
 
}

function Count() {
  console.log('re-render');
  return(
    <div>
      <CountRenderer/>
      <Buttons/>
    </div>
  )

}

function CountRenderer() {
  const count = useRecoilValue(countAtom)

  return(
    <div>
      {count}
      <EvenCountRenderer/>
    </div>
  )
  
}

function EvenCountRenderer() {
  const count = useRecoilValue(countAtom)
  return(
    <div>
      {(count%2 == 0) ? 'It is even': null}
    </div>
  )
  
  
}

function Buttons() {
  const [count,setCount] = useRecoilState(countAtom);

  return(
    <div>
      <button onClick={()=>{
        setCount(count+1)
        


        //or use
        //setCount(c=>c+1)
      }}>Increase</button>


<button onClick={()=>{
        setCount(count-1)
        
      }}>Decrese</button>


      
    </div>

  )
  
}

export default App
