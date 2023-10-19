// ProductPage.js
import React, { useState } from 'react';
import ProductCard from './ProductCard';
import useTitle from '../../hooks/useTitle';

const products = [
  {
    id: 1,
    image: 'https://i.ibb.co/sKT0p7W/wireless-headphone.jpg',
    name: 'Here is the product name',
    brand: 'Apple',
    type: 'Smartphone',
    price: 29.56,
    Rating: 3.5,
  },
  {
    id: 2,
    image: 'https://i.ibb.co/sKT0p7W/wireless-headphone.jpg',
    name: 'Here is the product name',
    brand: 'Apple',
    type: 'Smartphone',
    price: 29.56,
    Rating: 3.5,
  },
  {
    id: 3,
    image: 'https://i.ibb.co/sKT0p7W/wireless-headphone.jpg',
    name: 'Here is the product name',
    brand: 'Apple',
    type: 'Smartphone',
    price: 29.56,
    Rating: 3.5,
  },
];

const BrandProducts = () => {
  useTitle("Brand Products - Tech Store")
  const [brandProducts, setBrandProducts] = useState([])
  fetch('./brandsProducts.json')
  .then(res => res.json())
  .then(data => setBrandProducts(data))
  .catch(error => console.log(error.message))
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 p-6">
      {brandProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default BrandProducts;
