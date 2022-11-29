import { BrowserRouter,Route,Routes } from "react-router-dom"
import { useLocation } from "react-router-dom"

import Login from "./pages/login/Login"
import Home from "./pages/home/Home"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import FoodSavior from "./pages/app/FoodSavior"
import Product from "./pages/product/Product"
import Layout from "./Layout"
function Router(){
    
    return(
        <BrowserRouter>
        
          <Layout>

          <Routes>
            <Route path="/" element={<FoodSavior/>}>  </Route>         
            <Route path="/login" element={<Login/>}></Route>
            
            {/* Rutas privadas */}          
            
            <Route path="/home" element={<Home/>}></Route>
            <Route path="/category" element={<Home/>}></Route>
            <Route path="/product" element={<Product/>}></Route>
            



          </Routes>
         </Layout>
      
        </BrowserRouter>
    )
}
export default Router