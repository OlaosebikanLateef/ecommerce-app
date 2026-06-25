import React, { createContext, useEffect, useState } from 'react';
import './ShopContext.css';
import { productsData } from '../../assets/data';


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
    if(cart){
      const amount = cart.reduce((accumulator,  currentItem) =>{
        return accumulator + currentItem.amount;
      },0)
      setQuantity(amount)
    }
  }, [cart])

    
  return (
    <ShopContext.Provider value={{ products }}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;