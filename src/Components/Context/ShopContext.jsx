import React, { createContext, useEffect, useState } from 'react';
import './ShopContext.css';
import { productsData } from '../../assets/data';
import {toast} from "react-toastify"; 
import './ShopContext.css'

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const [products] = useState(productsData);


  const [cart, setCart] = useState([]); 

  const [quantity, setQuantity] = useState(0);

  const [total, setTotal] = useState(0);

  useEffect(() =>{
    const total = cart.reduce((accumulator, currentItem) => {
        const priceAsNumber = parseFloat(currentItem.price);
        if(isNaN(priceAsNumber)){
          return accumulator
        }
        return accumulator + priceAsNumber *  currentItem.amount
    }, 0 )
    setTotal(total)
  }, [cart])

 useEffect(() => {
  const amount = cart.reduce(
    (accumulator, currentItem) => accumulator + currentItem.amount,
    0
  );
  setQuantity(amount);
}, [cart]);


  const addToCart = (product, id) => {
    const newItem = {...product, amount: 1}
    const cartItem = cart.find((item) =>{
      return item.id === id
    })
    if(cartItem){
      const newCart = [...cart].map((item) => {
        if(item.id===id){
           return { ...item, amount: cartItem.amount + 1 }
        } else {
          return item
        } 
      })
      setCart(newCart)
    } else{
      setCart([...cart, newItem])
      toast.success("Product added to cart")
    }
  }


  const clearCart = () => {
    setCart([])
    toast.success("Cart Empty")
  }
    
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !==id;
    })
    setCart(newCart);
    toast.success("Product removed successfully")
  }

  const increaseQuantity = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    addToCart(cartItem, id)
  }



const decreaseQuantity = (id) => {
  const cartItem = cart.find((item) => item.id === id);

  if (!cartItem) return;

  if (cartItem.amount  <= 1) {
    removeFromCart(id);
    return;
  }

  const newCart = cart.map((item) =>
    item.id === id
      ? { ...item, amount: item.amount - 1 }
      : item
  );

  setCart(newCart);
};

  return (
    <ShopContext.Provider value={{ 
      products, 
      cart, 
      addToCart, 
      removeFromCart,
       clearCart, 
       increaseQuantity, 
      decreaseQuantity, 
      quantity, 
      total
     }}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;