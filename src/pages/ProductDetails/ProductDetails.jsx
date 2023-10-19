// ProductDetails.js
import React, { useEffect, useState } from "react";
import useTitle from "../../hooks/useTitle";
import { useParams } from "react-router-dom";
import Spinner from "../../components/Spinner";

const ProductDetails = () => {
  useTitle("Product Details - Tech Store")
  const {productId} = useParams();
  const [product, setProduct] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=>{
    fetch(`http://localhost:9000/brand-products/details/${productId}`)
    .then(res => res.json())
    .then(data => {
      setProduct(data)
      setIsLoading(false)
    })
    .catch(error => console.log(error))
  }, [])

  return (
    <>
    {
      isLoading && <Spinner></Spinner>
    }
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
          <p className=" text-[#F5921D] text-2xl"><span className="font-bold">Price:</span>{product.price}</p>
          <p><span className="font-bold">Brand:</span> {product.brand}</p>
          <p><span className="font-bold">Product Type:</span> {product.type}</p>
          <p><span className="font-bold">Rating:</span> {product.rating}</p>
          <p><span className="font-bold">Availability:</span> {product?.availability}</p>
          <p><span className="font-bold">Color:</span> {product?.color}</p>
          <p><span className="font-bold">Warranty:</span> {product?.warranty}</p>
          <p><span className="font-bold">Shipping:</span> {product?.shipping}</p>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <button className="bg-[#F5921D] text-white px-4 py-2 rounded-md mt-4">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default ProductDetails;
