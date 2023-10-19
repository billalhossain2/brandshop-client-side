// ProductDetails.js
import React from "react";
import useTitle from "../../hooks/useTitle";

const ProductDetails = () => {
  useTitle("Product Details - Tech Store")
  const product = {
    id: 1,
    name: "Smart Phone Makes You Cool",
    description:
      "This is a sample product description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.This is a sample product description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.This is a sample product description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.This is a sample product description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.This is a sample product description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 49.99,
    image: "https://i.ibb.co/nRH44Dn/product-details.jpg",
    brand: "Samsung",
    type: "Smartphone",
    rating: 4.5,
  };
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
        <div className="w-full md:w-1/2 lg:w-2/3 px-4 mb-8">
          <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
          <p className=" text-[#F5921D] text-2xl"><span className="font-bold">Price:</span> ${product.price}</p>
          <p><span className="font-bold">Brand:</span> {product.brand}</p>
          <p><span className="font-bold">Product Type:</span> {product.type}</p>
          <p><span className="font-bold">Rating:</span> {product.rating}</p>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <button className="bg-[#F5921D] text-white px-4 py-2 rounded-md mt-4">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
