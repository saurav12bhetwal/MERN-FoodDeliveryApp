import React from 'react'
import { createContext,useReducer} from 'react'
const CartReducer=createContext()
const CartState=createContext()
const reducer=(state,action)=>{
    if(action.type==="Add"){
        return [...state,{id:action.id,Category:action.CategoryName,name:action.name,size:action.size,qty:action.qty,price:action.price}]
    }
    else if(action.type==="Remove"){
        const next=[...state]
      next.splice(action.index,1)
      return next
    }
    else if(action.type==="Update"){
      let arr=[...state]
      // console.log(arr)
      arr.find((food,index)=>{
        // console.log(food.size,action.size,"action.size")
        // console.log(food)
        if((food.id===action.id)&&(food.size===action.size)){
          // console.log(parseInt(food.qty),parseInt(action.qty),food.price,action.price,food.size,action.size)
        arr[index]={...food,qty:parseInt(food.qty)+parseInt(action.qty),price:food.price+action.price}
        }
      
      })
      return arr
     
    }
    else if(action.type==="Drop"){
      let newarr=[]
      return newarr
    }
//   return state
}
export const ContexReducer = ({children}) => {
    const [state, dispatch] = useReducer(reducer,[])
  return (
    <div>
      <CartReducer.Provider value={dispatch}>
    <CartState.Provider value={state}>
        {children}
    </CartState.Provider>
      </CartReducer.Provider>
    </div>
  )
}
export {CartReducer,CartState};

  
