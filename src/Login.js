import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Login() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.post('http://localhost:5500/login',{email,password})
        .then(res=>{
            console.log(res)
            if(res.data === "success"){
                navigate('/home')
            }
            
        })
        .catch(err=>console.log(err))
    }

  return (
    <>
    <h2>Login</h2>
    <form onSubmit={handleSubmit}>
       email <input type='email' placeholder='enter email' name='email'onChange={(e)=>setEmail(e.target.value)}/><br/>
       password <input type='password' placeholder='enter password' name='password' onChange={(e)=>setPassword(e.target.value)}/><br/>
       {/* <button type='submit'> Register</button><br/> */}
       
    </form>
    {/* <p>already have an account</p> */}
       <Link to="/home">login</Link>
    </>
  )
}

export default Login