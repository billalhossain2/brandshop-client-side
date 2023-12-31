// ProductDetails.js
import React, { useContext, useEffect, useState } from "react";
import useTitle from "../../hooks/useTitle";
import { useParams } from "react-router-dom";
import Spinner from "../../components/Spinner";
import { toast } from "react-toastify";
import { UserContext } from "../../contexts/AuthContext";

const ProductDetails = () => {
  useTitle("Product Details - Tech Store");
  const { user } = useContext(UserContext);
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://tech-store-server-one.vercel.app/brand-products/details/${productId}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleAddToCart = () => {
    const { image, name, brand_name, type, price, rating, description } =
      product;
    const displayName = user?.displayName;
    fetch(`https://tech-store-server-one.vercel.app/cart`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        image,
        name,
        displayName,
        brand_name,
        type,
        price,
        rating,
        description,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.acknowledged) {
          toast("Successfully added to cart", { autoClose: 1000 });
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      {isLoading && <Spinner></Spinner>}
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
            <p className=" text-[#F5921D] text-2xl">
              <span className="font-bold">Price:</span>
              {product.price}
            </p>
            <p>
              <span className="font-bold">Brand:</span> {product.brand_name}
            </p>
            <p>
              <span className="font-bold">Product Type:</span> {product.type}
            </p>
            <p>
              <span className="font-bold">Rating:</span> {product.rating}
            </p>
            <p>
              <span className="font-bold">Availability:</span>{" "}
              {product.availability || "Not Available"}
            </p>
            <p>
              <span className="font-bold">Color:</span>{" "}
              {product.color || "Not Available"}
            </p>
            <p>
              <span className="font-bold">Warranty:</span>{" "}
              {product.warranty || "Not Available"}
            </p>
            <p>
              <span className="font-bold">Shipping:</span>{" "}
              {product.shipping || "Not Available"}
            </p>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <button
              onClick={handleAddToCart}
              className="hover:bg-[#F5921D] border-solid border-[1px] border-[#F5921D] text-[#F5921D] hover:text-white font-bold duration-300 px-4 py-2 rounded-md mt-4"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
