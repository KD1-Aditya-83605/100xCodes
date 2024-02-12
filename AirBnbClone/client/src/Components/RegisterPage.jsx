import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'


export default function RegisterPage(){

    const[name,setName] = useState('')
    const[email,setEmail] =  useState('')
    const[password , setPassword] = useState('')

    function registerUser(){
        axios.get('http://localhost:3000/test')

    


    }


    return(
        <div className="mt-4 grow flex items-center justify-around">

        <div className="mb-16">

        <h1 className="text-4xl text-center mb-4">Sign In</h1>
        <form className="max-w-md mx-auto " onSubmit={registerUser}>
            <input type="text" placeholder='Enter Name'id="" value={name} onChange={ev=> setName(ev.target.value)} />
            <input type="email" placeholder='Enter the email id' value={email} onChange={ev=> setEmail(ev.target.value)}/>
            <input type="password" placeholder="Enter password" value={password} onChange={e=> setPassword(e.target.value)} />
            <button className="primary">Sign In</button>



            <div className="text-center py-2 text-gray-500">
                Already a member?<Link className="underline text-black" to={'/login'}>Login</Link>
            </div>
        </form>


        </div>
     
    </div>
    )
}