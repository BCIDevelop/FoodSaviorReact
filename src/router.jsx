import { BrowserRouter,Route,Routes } from "react-router-dom"
import { Login,Register,FoodSavior,Category,Product,NotFound,Home ,DashboardTest} from "./pages/Index"
import Layout from "./Layout"
import Private from "./guard/Private"
import Public from "./guard/Public"
function Router(){
    
    return(
        <BrowserRouter>
        
          <Layout>

          <Routes>
          <Route element={<Public></Public>}>
            <Route path="/" element={<FoodSavior/>}>  </Route>         
            <Route path="/login/" element={<Login/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
          </Route>
          {/* Rutas privadas */}          
          <Route element={<Private></Private>}>
            <Route path="/home" element={<Home/>}></Route>
            <Route path="/category" element={<Category/>}></Route>
            <Route path="/product" element={<Product/>}></Route>
            <Route path="/product/:action" element={<Product/>}></Route>
            <Route path="/product/:action/:id" element={<Product/>}></Route>
            <Route path="/dashboard" element={<DashboardTest/>}></Route>
          </Route>

            <Route path="*" element={<NotFound/>}></Route>

          </Routes>
        
         </Layout>
      
        </BrowserRouter>
    )
}
export default Router