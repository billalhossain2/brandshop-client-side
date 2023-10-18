import React, { useState } from 'react';
import { RiDeleteBin2Line } from 'react-icons/ri';
import { FiEdit } from 'react-icons/fi';
const MyCart = () => {
  // Simulated cart items (you should replace this with your actual cart data)
  const [cartItems, setCartItems] = useState([
    { id: 1, image:"Image Here", name: 'Product 1', price: 99.99, brand:"Apple", rating: 4.5 },
    { id: 2, image:"Image Here", name: 'Product 1', price: 99.99, brand:"Apple", rating: 4.5 },
    { id: 3, image:"Image Here", name: 'Product 1', price: 99.99, brand:"Apple", rating: 4.5 },
    { id: 4, image:"Image Here", name: 'Product 1', price: 99.99, brand:"Apple", rating: 4.5 },
    { id: 5, image:"Image Here", name: 'Product 1', price: 99.99, brand:"Apple", rating: 4.5 },
  ]);

  const handleRemoveItem = (itemId) => {
    // Remove the specified item from the cart
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
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
              <tr key={item.id}>
                <td>{item.image}</td>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <td>{item.brand}</td>
                <td>{item.rating}</td>
                <td>
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="text-red-500 hover:text-red-700 me-5 text-3xl"
                  >
                    <RiDeleteBin2Line></RiDeleteBin2Line>
                  </button>
                  <button className="text-green-500 hover:text-green-700 text-3xl" onClick={() => console.log('Update', item.id)}><FiEdit></FiEdit></button>
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
