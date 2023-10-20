// ProductPage.js
import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import useTitle from '../../hooks/useTitle';
import { useParams } from 'react-router-dom';
import Spinner from '../../components/Spinner';



// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import './BrandProducts.css'

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
    {/* Slider starts here  */}
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper mb-32"
      >
        {
          brandProducts?.map(item => (
            <SwiperSlide className='h-[800px]'>
              <div className='w-full h-full flex flex-col items-center justify-center'>
              <img className='w-[50%] h-[60%]' src={item.image} alt="Product Image" />
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>

      <h3 className='font-bold text-5xl my-5'>Explore {brandProducts[0]?.brand_name} Products</h3>
    {
      isLoading && <Spinner></Spinner>
    }
    {
      isAvailable && <h1 className='text-center font-bold text-2xl'>No Products Available</h1>
    }
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-1">
      {brandProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
    </>
  );
};

export default BrandProducts;
