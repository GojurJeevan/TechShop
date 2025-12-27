import { Route, Routes } from "react-router-dom"
import { Header } from "../Pages/Header"

export const AppRouter = () =>{
    return(
        <>
            <Routes>
                <Route path="/" element={<Header />}/>
            </Routes>
        </>
    )
}