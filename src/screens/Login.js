import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const navigate=useNavigate()
  const [signup, setsignup] = useState({email:"",password:""})
  // console.log(signup.email)
  const onchange=(e)=>{
    setsignup({...signup,[e.target.name]:e.target.value})
  }
    const handler=async (e)=>{
        e.preventDefault()
        const response=await fetch("http://localhost:5000/login",{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify({password:signup.password,email:signup.email})
        })
        const json=await response.json()
        if(json){
          // console.log(json)
          localStorage.setItem("token",json.token)
          localStorage.setItem("email",signup.email)
          // console.log(localStorage.getItem("token"))
          // alert("suucessfully login")
          navigate("/")
        }
        else{
          alert("something wrong")
        }
        
    }
  return (
    <>
    <div className='container'>
      <form onSubmit={handler} >
  
  
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name='email' value={signup.email} onChange={onchange}/>
   
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name='password' value={signup.password} onChange={onchange}/>
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
  <Link to="/signup" className='m-3 btn btn-success'>Create Account</Link>
</form>
    </div>
    </>
  )
}

export default Login
