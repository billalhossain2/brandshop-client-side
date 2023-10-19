// ProductPage.js
import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import useTitle from '../../hooks/useTitle';
import { useParams } from 'react-router-dom';
import Spinner from '../../components/Spinner';

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
  const [isLoading, setIsLoading] = useState(true)
  const [isAvailable, setIsAvailable] = useState(false)
  const {brandName} = useParams();
  useEffect(()=>{
  fetch(`http://localhost:9000/brand-products/${brandName}`)
  .then(res => res.json())
  .then(data => {
    setBrandProducts(data);
    setIsLoading(false);
    if(data.length === 0){
      setIsAvailable(true)
    }
  })
  .catch(error => console.log(error.message))
  }, [])
  return (
    <>
    {
      isLoading && <Spinner></Spinner>
    }
    {
      isAvailable && <h1 className='text-center font-bold text-2xl'>No Products Available</h1>
    }
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 p-6">
      {brandProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
    </>
  );
};

export default BrandProducts;
