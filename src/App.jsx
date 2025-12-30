import './App.css'
import { MainLayout } from './layout/MainLayout'
import { Footer } from './footer/Footer'


export const App = () =>{
  return(
    <>
        <div className='bg-black text-white'>
          <MainLayout />
          <Footer />
        </div>
    </>
  )
}