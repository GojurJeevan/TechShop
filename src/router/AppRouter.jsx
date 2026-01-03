import { Route, Routes } from "react-router-dom"
import { Home } from "../Pages/Home"
import { Products } from "../Pages/Products"
import { ProductsList } from "../productsdata/ProductsList"
import { ProductData } from "../productsdata/ProductData"
import { SignUp } from "../forms/SignUp"


export const AppRouter = () =>{
    return(
        <>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/products" element={<Products/>} />
                <Route path="/productslist" element={<ProductsList/>} />
                <Route path="/product/:id" element={<ProductData/>}/>
                <Route path="/signup" element={<SignUp/>} />
            </Routes>
        </>
    )
}