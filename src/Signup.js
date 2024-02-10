import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Signup() {
    const [name, setName] = useState()
    const [warning, setWarning] = useState('');

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e)=>{
        e.preventDefault()
        if (!name ||  name.trim() === '') {
          setWarning('Please enter your name.');
        } else {
          // Proceed with form submission
          // setWarning('');
          // Your form submission logic here
          axios.post('http://localhost:5500/register',{name,email,password})
          .then(res=>{console.log(res)
              navigate('/login')
          })
          .catch(err=>console.log(err))
        }
       
    }

  return (
    <>
    <h2>Register</h2>
    <form onSubmit={handleSubmit}>
       name <input type='text' placeholder='enter name' name='email' onChange={(e)=>setName(e.target.value)}/><br/>
       {warning}
       email <input type='email' placeholder='enter email' name='email'onChange={(e)=>setEmail(e.target.value)}/><br/>
       password <input type='password' placeholder='enter password' name='password' onChange={(e)=>setPassword(e.target.value)}/><br/>
       <button type='submit'> Register</button><br/>
       
    </form>
    <p>already have an account</p>
       <Link to="/login">login</Link>
    </>
  )
}

export default Signup