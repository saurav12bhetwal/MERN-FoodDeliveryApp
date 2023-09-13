import React,{useContext}from 'react'
import { Link,useNavigate } from "react-router-dom"
import { CartState } from "./ContexReducer"
const Navbar = () => {
  const state=useContext(CartState)
  const navigate=useNavigate()
  const logout=()=>{
    localStorage.removeItem("token")
    navigate("/login")
  }
  return (
    <>
     <nav className="navbar navbar-expand-lg bg-success navbar-dark fixed-top ">
  <div className="container-fluid">
    <Link className="navbar-brand fs-1" ><strong><em>goFood</em></strong></Link >
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active fs-5" aria-current="page" to="/">Home</Link >
        </li>
        {(localStorage.getItem("token"))?<li className="nav-item">
          <Link className="nav-link active fs-5" aria-current="page" to="/myorder">My order</Link >
        </li>:""}
      </ul>
      
        {
          (!localStorage.getItem("token")?<div className="d-flex"><Link className="btn bg-white text-success mx-2" to="/login">Login</Link >
          <Link className="btn bg-white text-success mx-2" to="/signup">SignUp</Link ></div>:
          <div><Link to="/mycart">
            <button type="button" className="btn bg-white text-success position-relative">
             My Cart<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{state.length}</span></button></Link>
            <div className="btn bg-white text-danger mx-2" onClick={logout}>Logout</div>
          </div>
          )
        }
          
          
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
