import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import { jobsAtmom, messagingAtom, networkAtom, notificationsAtom, totalNotificationSelector } from './atoms'

function App() {

  return(
    <RecoilRoot>
      <MainMap/>
    </RecoilRoot>
  )
 
}

function MainMap(){
  const networkNotificationCount = useRecoilValue(networkAtom)

  const jobsAtomCount = useRecoilValue(jobsAtmom);
  const notificationAtom = useRecoilValue(notificationsAtom)
  const [messagingsAtom, setMesg] = useRecoilState(messagingAtom)

  const totalViaSelector = useRecoilValue(totalNotificationSelector)



  const total = useMemo(()=>{
    return networkNotificationCount+jobsAtomCount+notificationAtom+messagingsAtom
  },[messagingsAtom,networkNotificationCount,jobsAtomCount,notificationAtom])

  return (
    <>
     <button>Home</button>


     <button>My Network ({networkNotificationCount >= 100 ? '99+':networkNotificationCount})</button>
     <button>Jobs ({jobsAtomCount})</button>
     <button>Messaging ({messagingsAtom})</button>
     <button>Notifications ({notificationAtom})</button>

     

     <button onClick={()=>{
      setMesg(c=>c+1)
     }}>Me</button>

     <button>Total notifications ({total})</button>
    </>
  )
}

export default App
