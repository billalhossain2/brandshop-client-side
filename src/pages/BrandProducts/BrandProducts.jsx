// ProductPage.js
import React from 'react';
import ProductCard from './ProductCard';

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
  return (
    <div className="grid grid-cols-3 gap-4 p-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default BrandProducts;
