
import Navbar from './Components/NavBar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage/Homepage';
import ProductDetails from './Pages/ProductDetails/ProductDetails'
import Cart from './Components/Cart/Cart';
import Footer from './Components/Footer/Footer';
import { ToastContainer } from 'react-toastify';


function App() {
 

  return (
    <>
    <ToastContainer />
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
