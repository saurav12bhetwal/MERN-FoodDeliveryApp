import Home from "./screens/Home";
// import Navbar from "./components/Navbar";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Cart from "./components/Cart";
import { ContexReducer } from "./components/ContexReducer";
import Mycart from "./screens/Mycart";
function App() {
  return (
   <>
   <ContexReducer>
     <BrowserRouter>
     {/* <div><Navbar></Navbar></div> */}
     <div>

      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/signup" element={<Signup/>}/>
        <Route exact path="/mycart" element={<Cart/>}/>
        <Route exact path="/myorder" element={<Mycart/>}/>
      </Routes>
     </div>
     </BrowserRouter>
     </ContexReducer>
   </>
  );
}

export default App;
