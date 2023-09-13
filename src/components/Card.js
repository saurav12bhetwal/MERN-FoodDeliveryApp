import React ,{useContext,useState,useRef,useEffect}from 'react'
import { CartReducer,CartState } from './ContexReducer'
const Card = (props) => {
  const priceSize = useRef()
  const dispatch=useContext(CartReducer)
  const state=useContext(CartState)
  const [qty, setqty] = useState(1)
  const [size, setsize] = useState("")
  const options=props.options
  const keyOption=Object.keys(options)
  const handler=async ()=>{
  let food= []
  for (const item of state){
    // console.log(state)
      if((item.id===props.foodItem._id)&&(item.size===size)){
        // console.log(food)
      food=item
      // console.log(food)
      // console.log(size,"is")
      // console.log(item.size,"itemis",parseInt(item.qty))
      break
      }
  }
  if(food !== []){
    if(food.size===size){
      // console.log(food.size,"food.size")
      await dispatch({type:"Update",id:props.foodItem._id,qty:qty,price:price,size:size})
      return
    }
    else if(food.size!==size){
      await dispatch({type:"Add",id:props.foodItem._id,name:props.foodItem.name,CategoryName:props.foodItem.CategoryName,size:size,qty:qty,price:price})
      return
    }
    return
  }
   await dispatch({type:"Add",id:props.foodItem._id,name:props.foodItem.name,CategoryName:props.foodItem.CategoryName,size:size,qty:qty,price:price})
 }
 useEffect(() => {
   setsize(priceSize.current.value)
 }, [])
 const price=qty* parseInt(options[size])
//  console.log(options.size)
  return (
    <>
      <div className="card m-3" style={{width: "18rem"}}>
  <img src={props.foodItem.img} className="card-img-top" alt="" style={{height: "10rem"}}/>
  <div className="card-body">
    <h5 className="card-title">{props.foodItem.name}</h5>
    <p className="card-text fs-5">Saurav Restaurant</p>
    <div className="container w-1000">
        <select className='m-2 h-100 bg-success rounded text-light'onChange={((e)=>{setqty(e.target.value)})}>
           {Array.from(Array(6),(e,i)=>{
            return(
                <option key={i+1} value={i+1}>{i+1}</option>
            )
           })}
        </select>
        <select className='m-2 h-100  bg-success rounded text-light'ref={priceSize} onChange={((e)=>{setsize(e.target.value)})}>
        {keyOption.filter((e)=>{
          return e!=="_id"
        }).map((data)=>{
            return <option key={data} value={data}>{data}</option>
          })
        }
         
        
        </select>
        <div className="d-inline fs-5"><strong>₹{price}</strong></div>
    </div>
     <hr />
  <button className='btn btn-success justify-center ms-2' onClick={handler}>Add to Cart</button>
  </div>

</div>
    </>
  )
}

export default Card
