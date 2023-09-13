import React from 'react'

const Carousel = () => {
  return (
    <div>
      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel" >
  <div className="carousel-inner" style={{
        maxHeight:"500px",objectFit:"contain"
      }} >
    <div className="carosuel-caption" style={{zIndex:"10",position:"absolute",bottom:"20px",width:"50%",left:"25%"}}>
      
  <form className="d-flex" >
        <input className="form-control me-2 text-white" type="search" placeholder="Search" aria-label="Search" style={{color:"white",backgroundColor:"black",filter:"brightness(80%)"}}/>
        <button className="btn btn-outline-success bg-success text-white" type="submit">Search</button>
      </form></div>
    <div className="carousel-item active" data-bs-interval="8000">
      <img src="https://source.unsplash.com/random/300×300/?burger" className="d-block w-100" alt="..." style={{filter:"brightness(50%)"}}/>
    </div>
    <div className="carousel-item" data-bs-interval="8000">
      <img src="https://source.unsplash.com/random/300×300/?momos" className="d-block w-100" alt="..." style={{filter:"brightness(50%)"}}/>
    </div>
    <div className="carousel-item" data-bs-interval="8000">
      <img src="https://source.unsplash.com/random/300×300/?biryani" className="d-block w-100" alt="..." style={{filter:"brightness(50%)"}}/>
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
</div>
    </div>
  )
}

export default Carousel
