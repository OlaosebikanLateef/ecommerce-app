
import Navbar from './Components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Homepage from './Pages/Homepage/Homepage'
import ProductDetails from './pages/ProductDetails/ProductDetails'
import Cart from './Components/Cart/Cart'
import Footer from './Components/Footer/Footer' 
 

import './App.css'

function App() {
 

  return (
    <>
    <Navbar />

    <Routes>

    <Route path='/' element={<Homepage />} />
    <Route path='/cart' element={<Cart />} />
    <Route path='/product/:id' element={<ProductDetails />} />

    </Routes>

    <Footer/> 
    </>
  )
}

export default App
