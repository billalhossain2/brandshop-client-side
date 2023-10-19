import React, { useEffect, useState } from 'react';
import { RiDeleteBin2Line } from 'react-icons/ri';
import { FiEdit } from 'react-icons/fi';
import "./MyCart.css"
import {Link} from "react-router-dom"
import useTitle from '../../hooks/useTitle';
const MyCart = () => {
  useTitle("My Cart - Tech Store")
  // Simulated cart items (you should replace this with your actual cart data)

  const [cartItems, setCartItems] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:9000/cart')
    .then(res => res.json())
    .then(data => setCartItems(data))
    .catch(error => console.log(error))
  }, [])

  const handleRemoveItem = (itemId) => {
    // Remove the specified item from the cart
    const updatedCartItems = cartItems.filter((item) => item._id !== itemId);
    setCartItems(updatedCartItems);
  };

  return (
    <div className="container mx-auto p-4 my-10">
      <h1 className="text-3xl font-semibold mb-4">My Cart</h1>
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
                  <Link to={`/update-product/${item.id}`}>
                  <button className="text-[#f5b11d] hover:text-[#f5731d] text-3xl" onClick={() => console.log('Update', item.id)}><FiEdit></FiEdit></button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MyCart;
