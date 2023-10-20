// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import "./MostViewed.css"
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
import Spinner from '../../../components/Spinner';

const MostViewed = () => {

  const [viewedProducts, setViewedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(
      `https://tech-store-server-one.vercel.app/viewed-products`
    )
      .then((res) => res.json())
      .then((data) => {
        setViewedProducts(data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error.message));
  }, []);
  
  return (
    <div className='my-20'>
    <h3 className='font-bold md:text-3xl text-2xl text-gray-600 mb-5'>Most Viewed Products</h3>
    {isLoading && <Spinner></Spinner>}
      <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5'>
      {
        viewedProducts?.map(product => (
             <div key={product._id} className='border-solid border-gray-300 border-2 hover:border-[#F5921D] h-[350px] p-5 rounded-lg flex flex-col justify-between '>
             <img className='h-[150px] w-full mb-3' src={product.image} alt="" />
             <div className='space-y-2'>
             <p>{product.category}</p>
             <h3 className='text-xl text-gray-500'>{product.name}</h3>
             <p className='text-[#F5921D] text-2xl'>${product.price}</p>
             </div>
             </div>
        ))
      }
      </div>
  </div>
  )
}

export default MostViewed
