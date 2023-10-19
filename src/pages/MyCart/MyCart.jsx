import React, { useEffect, useState } from 'react';
import { RiDeleteBin2Line } from 'react-icons/ri';
import { FiEdit } from 'react-icons/fi';
import "./MyCart.css"
import {Link} from "react-router-dom"
import useTitle from '../../hooks/useTitle';
import Spinner from '../../components/Spinner';
import { toast } from 'react-toastify';
const MyCart = () => {
  useTitle("My Cart - Tech Store")
  // Simulated cart items (you should replace this with your actual cart data)

  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=>{
    fetch('http://localhost:9000/cart')
    .then(res => res.json())
    .then(data => {
      setCartItems(data)
      setIsLoading(false)
    })
    .catch(error => console.log(error))
  }, [])

  const handleRemoveItem = (productId) => {
    //Remove product from cart
    fetch(`http://localhost:9000/cart/${productId}`, {method:"DELETE"})
    .then(res => res.json())
    .then(result => {
      //delete from UI
      const updatedCartItems = cartItems.filter((item) => item._id !== productId);
      setCartItems(updatedCartItems);

      console.log(result)
      toast("Successfully deleted from cart", {autoClose:1000})
    })
    .catch(error => console.log(error))
  };

  return (
    <>
    <div className="container mx-auto p-4 my-10">
      <h1 className="text-3xl font-semibold mb-4">My Cart</h1>
      {
        isLoading && <Spinner></Spinner>
      }
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="text-left">Image</th>
              <th className="text-left">Name</th>
              <th className="text-left">Price</th>
              <th className="text-left">Brand</th>
              <th className="text-left">Rating</th>
              <th className="text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr className='border-b-2 border-solid border-[#f5b11d46]' key={item.id}>
                <td>
                  <img className='w-12 h-12' src={item.image} alt="Product Image" />
                </td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.brand_name}</td>
                <td>{item.rating}</td>
                <td>
                  <button
                    onClick={() => handleRemoveItem(item._id)}
                    className="text-red-500 hover:text-red-700 me-5 text-3xl"
                  >
                    <RiDeleteBin2Line></RiDeleteBin2Line>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
    </>
  );
};

export default MyCart;
