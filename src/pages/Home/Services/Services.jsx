import React from 'react'
import {LiaShippingFastSolid} from "react-icons/lia"
import {MdPayment} from "react-icons/md"
const Services = () => {
  const services = [
    {
      image:'https://i.ibb.co/YpkRkcz/shipping.png',
      title:'World Wide Shipping'
    },
    {
      image:'https://i.ibb.co/h7PdNNG/order-online.png',
      title:'Order Online Service'
    },
    {
      image:'https://i.ibb.co/SyW4Zrq/payment.png',
      title:'Payment'
    },
    {
      image:'https://i.ibb.co/2F77tk2/returrn.png',
      title:'Return 30 Days'
    },
  ]
  return (
    <div className='mb-20'>
       {/* service container  */}
       <h3 className='text-3xl text-gray-500 font-bold mb-5'>Our Services</h3>
       <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5'>
        {
          services?.map(service => (
            <div className='border-solid border-gray-300 border-2 hover:border-[#F5921D] p-3 rounded-lg'>
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