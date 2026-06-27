import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';
import { FiTrash2 } from 'react-icons/fi';
import { IoMdAdd, IoMdRemove } from 'react-icons/io';

const CartDetails = ({item}) => {

    const {removeFromCart, increaseQuantity, decreaseQuantity} = useContext(ShopContext);
    
    const {id, name, image, price, amount} = item

  return (
    <div className='flex justify-between items-center mt-5 py-2.5 border-b border-gray-200'>
      <div className="flex justify-between items-center max-w-[50%]">
        <img src={image} alt='' className='w-[60px] h-[60px] mr-5' />
        <div className="flex items-center gap-3">
            <h3 className='m-0 text-lg'>{name}</h3>
            <FiTrash2 
                onClick={() => removeFromCart(id)} 
                className='text-xl text-red-500 cursor-pointer hover:text-red-700 transition-colors'
            />
        </div>
      </div>
      <div className="flex items-center">
        <button 
            onClick={() => decreaseQuantity(id)}
            className='w-[30px] h-[30px] bg-gray-100 border-none cursor-pointer flex items-center justify-center text-lg hover:bg-gray-200 transition-colors rounded'
        >
            <IoMdRemove/>
        </button>

        <span className='mx-2.5'>{amount}</span>

        <button 
            onClick={() => increaseQuantity(id)}
            className='w-[30px] h-[30px] bg-gray-100 border-none cursor-pointer flex items-center justify-center text-lg hover:bg-gray-200 transition-colors rounded'
        >
            <IoMdAdd />
        </button>

      </div>
      <div className="text-base text-gray-700">${price}</div>
      <div className="text-base text-gray-700 font-semibold">${(price * amount).toFixed(2)}</div>
    </div>
  )
}

export default CartDetails