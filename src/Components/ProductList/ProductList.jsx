import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';

const ProductList = () => {
  const { products } = useContext(ShopContext);

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          OUR UNIQUE COLLECTION
        </h2>

        <div className="w-24 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => {
          const { id, image, name, price } = product;

          return (
            <div
              key={id}
              className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Product Image */}
              <div className="overflow-hidden p-4">
                <img
                  src={image}
                  alt={name}
                  className="w-full h-72 object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Product Info */}
              <div className="px-5 pb-5 text-center">
                <h4 className="text-lg font-semibold text-gray-800 line-clamp-2">
                  {name}
                </h4>

                <p className="text-2xl font-bold text-gray-600 mt-2">
                  ${price}
                </p>

                <button className="mt-5 w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 rounded-md transition duration-300">
                  Add To Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProductList;