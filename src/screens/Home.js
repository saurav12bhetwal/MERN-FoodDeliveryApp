import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
// import Carousel from '../components/Carousel'
import { useEffect,useState } from 'react'
const Home = () => {
  const [food, setfood] = useState([])
  const [search, setsearch] = useState("")
  const [foodCat, setfoodCat] = useState([])
  const loadData=async()=>{
    const response=await fetch("http://localhost:5000/foodData",{
        method:"POST",
        headers:{"Content-Type":"application/json"}
    })
    const json=await response.json()
    // console.log(json[0])
    // console.log(json[1])
     setfood(json[0])

   setfoodCat(json[1])
  }
  useEffect(() => {
   loadData()
  }, [])
  // console.log(foodCat)
  return (
    <>
      <div><Navbar/></div>
      <div> <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel" >
  <div className="carousel-inner" style={{
        maxHeight:"500px",objectFit:"fill"
      }} >
    <div className="carosuel-caption" style={{zIndex:"10",position:"absolute",bottom:"20px",width:"50%",left:"25%"}}>
      
  <form className="d-flex justify-content-center" >
        <input className="form-control me-2 text-white" type="search" placeholder="Search" aria-label="Search" style={{color:"white",backgroundColor:"black",filter:"brightness(80%)"}} value={search} onChange={(e)=>{setsearch(e.currentTarget.value)}}/>
        {/* <button className="btn btn-outline-success bg-success text-white" type="submit">Search</button> */}
      </form></div>
    <div className="carousel-item active" data-bs-interval="8000">
      <img src="https://img.freepik.com/free-photo/close-up-delicious-pizza_23-2150702787.jpg?t=st=1693503036~exp=1693506636~hmac=54f920c98b8148425ef196ffc60dbf8fba9cf661438b3f158849365e202e2a24&w=740" className="d-block w-100" alt="..." style={{filter:"brightness(50%)",objectFit:"fill",height: "45rem"}}/>
    </div>
    <div className="carousel-item" data-bs-interval="8000">
      <img src="https://cdn.pixabay.com/photo/2014/10/19/20/59/hamburger-494706_1280.jpg" className="d-block w-100" alt="..." style={{filter:"brightness(50%)",objectFit:"fill",height: "45rem"}}/>
    </div>
    <div className="carousel-item" data-bs-interval="8000">
      <img src="https://cdn.pixabay.com/photo/2022/02/12/15/00/biryani-7009110_1280.jpg" className="d-block w-100" alt="..." style={{filter:"brightness(50%)",objectFit:"fill",height: "45rem"}}/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon " aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon " aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div></div>
     <div style={{display:"flex",justifyContent:"space-around",}}>
      <div className=' container m-3 ' >
        
        {
        foodCat.length!==0?
          foodCat.map((category,i)=>{
            return(<div key={i} className='row ' >
              <div key={category._id} className='fs-3 m-3'>
                {category.CategoryName}
              </div>
              <hr/>
              {food.length!==0?
                food.filter((data)=>{
                  return (data.CategoryName===category.CategoryName)&&(data.name.toLowerCase().includes(search.toLowerCase()))
                }).map((foodItem,i)=>{
                  return <div key={foodItem._id} className='col-sm-12 col-md-6 col-lg-3'>
                 <Card foodItem={foodItem} options={foodItem.options[0]} ></Card>
                  </div>
                }):""
              }
              </div>
              )
          }):<div> hello</div>
        
        
        }
        </div> 
        </div>
      <div><Footer/></div>
     
      </>
  )
}

export default Home
