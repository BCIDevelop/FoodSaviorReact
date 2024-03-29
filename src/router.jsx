import { BrowserRouter,Route,Routes } from "react-router-dom"
import { Login,Register,FoodSavior,Category,Product,Subscription, Inventory,NotFound,Home ,DashboardTest,AlertPage,Favorites,Error,ClaimAccount,Profile} from "./pages/Index"
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
            <Route path="/claim-account" element={<ClaimAccount/>}></Route>
          </Route>
          {/* Rutas privadas */}          
          <Route element={<Private></Private>}>
            <Route path="/home" element={<Home/>}></Route>
            <Route path="/category" element={<Category/>}></Route>
            <Route path="/category/:action" element={<Category/>}></Route>
            <Route path="/category/:action/:id" element={<Category/>}></Route>
            <Route path="/product" element={<Product/>}></Route>
            <Route path="/product/:action" element={<Product/>}></Route>
            <Route path="/product/:action/:id" element={<Product/>}></Route>
            <Route path="/inventory" element={<Inventory/>}></Route>
            <Route path="/inventory/:action" element={<Inventory/>}></Route>
            <Route path="/inventory/:action/:id" element={<Inventory/>}></Route>
            <Route path="/dashboard" element={<DashboardTest/>}></Route>
            <Route path="/alertas" element={<AlertPage/>}></Route>
            <Route path="/favorites" element={<Favorites/>}></Route>
            <Route path="/profile" element={<Profile/>}></Route>
            <Route path="/subscription" element={<Subscription/>}></Route>
          </Route>
          <Route path="/error" element={<Error/>}></Route>

          <Route path="*" element={<NotFound/>}></Route>

          </Routes>
        
         </Layout>
      
        </BrowserRouter>
    )
}
export default Router