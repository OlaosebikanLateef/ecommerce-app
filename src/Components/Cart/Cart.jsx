import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { FiTrash2 } from 'react-icons/fi'
import CartDetails from './CartDetails'

const Cart = () => {
  const { cart, clearCart, quantity, total} = useContext(ShopContext)
    

  return (
    <div className="p-5">
      <div className="flex gap-4 flex-col lg:flex-row">

         <div className="w-full lg:w-[65%] bg-amber-100 p-5">
            <div className="flex justify-between items-center mt-5 font-bold pb-4 border-b border-gray-300">
              <h1 className="text-2xl font-bold">Shopping Cart</h1>
              <h1 className="text-xl font-semibold">Item:({quantity})</h1>
              <FiTrash2 onClick={clearCart} className='text-2xl text-red-500 cursor-pointer hover:text-red-700 transition-colors'/>
            </div>

            {/* Header - matches CartDetails layout */}
            <div className="flex justify-between items-center mt-5 font-bold border-b border-gray-300 pb-3">
              <span className="max-w-[50%]">Product Description</span>
              <span>Quantity</span>
              <span>Price</span>
              <span>Total</span>
            </div>
            
            <div className="space-y-2">
              {
                cart.length > 0 ? (
                  cart.map((item) => (
                    <CartDetails item={item} key={item.id} />
                  ))
                ) : (
                  <p className="text-center text-gray-500 py-8">Your cart is empty</p>
                )
              }
            </div>
         </div>

        <div className="w-full lg:w-[30%] bg-[#f9f9f9] p-5 rounded-lg h-fit">
          <h2 className="text-xl font-bold mb-4">Cart Summary</h2>
          <div className="flex justify-between mt-2.5">
            <span>Items: </span>
            <span>{quantity}</span>
          </div>
          <div className="flex justify-between mt-2.5">
            <span>Subtotal</span> 
            <span>${total}</span>
          </div>
          <div className="flex justify-between mt-2.5">
            <span>Shipping Fee</span>
            <span className="text-green-600">Free</span>
          </div>
          <div className="flex justify-between mt-2.5 font-bold text-lg border-t border-gray-300 pt-2">
            <span>Total Cost</span>
            <span>${total}</span>
          </div>
          <button className="w-full bg-red-600 text-white p-3.5 border-none cursor-pointer mt-5 hover:bg-red-700 transition-colors rounded font-semibold">
            CHECKOUT
          </button>
        </div>


       
      </div>
    </div>
  )
}

export default Cart