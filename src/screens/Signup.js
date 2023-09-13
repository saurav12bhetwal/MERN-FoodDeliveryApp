import React from 'react'
import {Link} from "react-router-dom"
import { useState } from 'react'
const Signup = () => {
  const [signup, setsignup] = useState({name:"",location:"",email:"",password:""})
  const onchange=(e)=>{
    setsignup({...signup,[e.target.name]:e.target.value})
  }
    const handler=async (e)=>{
        e.preventDefault()
        const response=await fetch("http://localhost:5000/signup",{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify({name:signup.name,location:signup.location,password:signup.password,email:signup.email})
        })
        const json=await response.json()
        if(json){
          console.log(json.success)
          alert("data added suucessfully")
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
    <label htmlFor="name">User Name</label>
    <input type="text" className="form-control" id="name" aria-describedby="emailHelp" placeholder="User Name" name='name' value={signup.name} onChange={onchange}/>
   
  </div>
  
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name='email' value={signup.email} onChange={onchange}/>
   
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name='password' value={signup.password} onChange={onchange}/>
  </div>
  <div className="form-group">
    <label htmlFor="address">Address</label>
    <input type="text" className="form-control" id="address" aria-describedby="emailHelp" placeholder="address" name='location' value={signup.location} onChange={onchange}/>
   
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
  <Link to="/login" className='m-3 btn btn-success'>Already a user</Link>
</form>
    </div>
    </>
  )
}

export default Signup
