import React, { useContext } from "react";
import { ShopContext } from "../../Components/Context/ShopContext";
import { productsData } from "../../assets/data";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const {addToCart} = useContext(ShopContext)

  const {id} = useParams()
  const product = productsData.find(product => {
    return product.id === parseInt(id)
  })
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="product-detail max-w-5xl w-full bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
        <div className="details-left md:w-1/2 bg-gray-100 flex items-center justify-center p-6">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-auto max-h-[500px] object-contain rounded-lg shadow-md"
            />
        </div>
        <div className="details-right md:w-1/2 p-8 flex flex-col justify-center">
          <h3 className="text-3xl md:text-4xl font-serif font-light text-gray-800 mb-3">
            {product.title}
          </h3>
          <p className='p-price text-3xl font-semibold text-red-800 mb-4'>
            {product.price}
          </p>
          <p className='p-desc text-gray-600 leading-relaxed mb-8'>
            {product.description}
          </p>
          <button 
            onClick={() => addToCart(product, id)}
            className="bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-8 rounded-full transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 w-full md:w-auto text-center"
          >
            Add Cart
          </button>
        </div>
      </div>
    </div>
  )
};

export default ProductDetails;