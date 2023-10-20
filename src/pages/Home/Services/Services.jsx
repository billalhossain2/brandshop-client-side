import React, { useEffect, useState } from 'react'
import {LiaShippingFastSolid} from "react-icons/lia"
import {MdPayment} from "react-icons/md"
import Spinner from '../../../components/Spinner';
const Services = () => {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    fetch(
      `https://tech-store-server-one.vercel.app/services`
    )
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error.message));
  }, []);
  return (
    <div className='mb-20'>
       {/* service container  */}
       <h3 className='text-3xl text-gray-500 font-bold mb-5'>Our Services</h3>
       {
        isLoading && <Spinner></Spinner>
       }
       <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5'>
        {
          services?.map(service => (
            <div key={service._id} className='border-solid border-gray-300 border-2 hover:border-[#F5921D] p-3 rounded-lg'>
               <img className='mb-3' src={service.image} alt={service.title} />
               <h3>{service.title}</h3>
           </div>
          ))
        }
       </div>
    </div>
  )
}

export default Services