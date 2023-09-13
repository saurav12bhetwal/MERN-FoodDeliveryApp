import React ,{useState,useEffect}from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
const Mycart = () => {
    const [data, setdata] = useState()
    useEffect(() => {
    async function sa(){
        let email=localStorage.getItem("email")
        const response=await fetch("http://localhost:5000/myorder",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({email:email})
          })
          const data=await response.json()
          if(data.orderData.length===0){
            alert("cart is empty")
          }
          else{
            let c=data.orderData[0].orderDetail.reverse()
            console.log(c)
            setdata(c)
          }
        
    }
     sa() 
    }, [])
    
  return (
    <>
     <div style={{marginBottom:"100px"}}><Navbar></Navbar></div>
      <div className="container">
     {
     data?
     data.map((e)=>{
        let d
       if(typeof e==="object"){
         d=e.map((event,i)=>{
            return <div key={event._id}>{event.orderDate?<div>
                <h1>{event.orderDate}</h1>
            </div>:<div>
            <div className="card m-3" style={{width:" 18rem"}}>
  <div className="card-body">
    <h5 className="card-title">{event.name}</h5>
    <h6 className="card-subtitle mb-2 text-body-secondary">{event.Category} </h6>
    <p className="card-text">{event.size} Quantity:{event.qty} </p>
   
  </div>
</div>
               </div>}</div>
         })
      return d
       }
       return d
     }) 
     :""
     }
     </div>
     {/* <div style={{marginTop:"100px"}}>"hello</div> */}
     <div><Footer></Footer></div>
    </>
  )
}

export default Mycart
