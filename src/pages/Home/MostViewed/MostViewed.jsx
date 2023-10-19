// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import "./MostViewed.css"
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const MostViewed = () => {
  const mostViewedProducts = [
    {
      "id": 1,
      "image": "https://i.ibb.co/kK7GFHp/asus-laptop.jpg",
      "name": "Dell XPS 13 Laptop",
      "price": 1299.99,
      "category": "Laptops"
    },
    {
      "id": 2,
      "image": "https://i.ibb.co/dD2M78q/mobile-phone.png",
      "name": "iPhone 13 Pro",
      "price": 999.00,
      "category": "Smartphones"
    },
    {
      "id": 3,
      "image": "https://i.ibb.co/ScFqccW/headphone-2.jpg",
      "name": "Bose QuietComfort 35 II Headphones",
      "price": 299.00,
      "category": "Headphones"
    },
    {
      "id": 4,
      "image": "https://i.ibb.co/PjW45YB/samsung-tab.jpg",
      "name": "iPad Pro 12.9-inch",
      "price": 999.99,
      "category": "Tablets"
    },
    {
      "id": 5,
      "image": "https://i.ibb.co/2Wfxrvt/television-1.jpg",
      "name": "Dell Ultrasharp 27-inch Monitor",
      "price": 349.99,
      "category": "Monitors"
    },
    {
      "id": 6,
      "image": "https://i.ibb.co/3zkgMJ0/television-2.jpg",
      "name": "PlayStation 5",
      "price": 499.99,
      "category": "Gaming Consoles"
    },
    {
      "id": 7,
      "image": "https://i.ibb.co/yytDbbm/camera-microsoft.jpg",
      "name": "Canon EOS 5D Mark IV DSLR Camera",
      "price": 2499.00,
      "category": "Cameras"
    },
    {
      "id": 8,
      "image": "https://i.ibb.co/mFSHr8j/google-watch.png",
      "name": "Apple Watch Series 7",
      "price": 349.00,
      "category": "Smartwatches"
    },
    {
      "id": 9,
      "image": "https://i.ibb.co/YbWXNhn/router-sony.jpg",
      "name": "Netgear Nighthawk AX12 Router",
      "price": 299.99,
      "category": "Routers"
    },
    {
      "id": 10,
      "image": "https://i.ibb.co/CtrRXK7/external-driver-intel.jpg",
      "name": "Samsung T5 Portable SSD",
      "price": 129.99,
      "category": "Storage Drives"
    }
  ]
  
  return (
    <div className='my-20'>
    <h3 className='font-bold md:text-3xl text-2xl text-gray-600 mb-5'>Most Viewed Products</h3>
      <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5'>
      {
        mostViewedProducts?.map(product => (
             <div className='border-solid border-gray-300 border-2 hover:border-[#F5921D] h-[350px] p-5 rounded-lg flex flex-col justify-between '>
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
