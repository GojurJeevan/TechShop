import './App.css'
import { MainLayout } from './layout/MainLayout'
import { Footer } from './footer/Footer'
import { Header } from './Pages/Header'
import { Services } from './services/Services'


export const App = () =>{
  return(
    <>
        <div className='bg-black text-white'>
          <MainLayout />
          <Header />
          <Services />
          <Footer />
        </div>
    </>
  )
}