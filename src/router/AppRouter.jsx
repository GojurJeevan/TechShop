import { Route, Routes } from "react-router-dom"
import { Home } from "../Pages/Home"
import { Cart } from "../cart/Cart"


export const AppRouter = () =>{
    return(
        <>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/cart" element={<Cart />}/>
            </Routes>
        </>
    )
}