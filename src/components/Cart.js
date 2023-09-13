import React,{useContext} from 'react'
import { CartReducer,CartState } from './ContexReducer'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const Cart = () => {
 const dispatch=useContext(CartReducer)
  const state=useContext(CartState)

   let totalPrice=state.reduce((p,e)=>{
    return p+e.price},0)
  
   
  const handler=async (e,i)=>{
//  console.log(totalPrice)
  await dispatch({type:"Remove",index:i})
  }

  const handleorder=async()=>{
    let email=localStorage.getItem("email")
    console.log(state)
    const response=await fetch("http://localhost:5000/order",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({email:email,orderDetail:state,orderDate:new Date().toDateString()})
    })
    const json=await response.json()
    if(json){
      dispatch({type:"Drop"})
    }
  }
  return (
    <>
    <div><Navbar></Navbar></div>
    {
  (state.length===0)?<div className='container'style={{marginTop:"100px"}}>
   <div className='m-5 w-100 text-center fs-5'> <h1>The Cart is Empty!</h1></div>
    <div><Link to="/"><button className='btn bg-success text-white m-5 w-10 text-center fs-5'> Go Back</button></Link></div>
   </div>
:
    <div style={{marginTop:"100px"}}>
      <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Quantity</th>
      <th scope="col">Option</th>
      <th scope="col">Amount</th>
    </tr>
  </thead>
  <tbody>{
    state.map((food,i)=>{
        return(
    <tr key={i}>
    <th scope="row">{i+1}</th>
    <td>{food.name}</td>
    <td>{food.qty}</td>
    <td>{food.size}</td>
    <td>{food.price}</td>
    <td><button type='button' className='btn py-1 px-3 bg-success text-white'onClick={()=>{handler(food,i)}}>✖</button></td>
  </tr>)
    })}
  </tbody>
</table>
<h1>Total Price=₹{totalPrice}/-</h1>
<div><Link to="/"><button className='btn bg-success text-white m-5 w-10 text-center fs-5'> Go Back</button></Link></div>

    </div>
    
}
<div><button className='btn bg-success text-white m-5 w-10 text-center fs-5' onClick={handleorder}> Check Out</button></div>
    </>
  )
}

export default Cart
