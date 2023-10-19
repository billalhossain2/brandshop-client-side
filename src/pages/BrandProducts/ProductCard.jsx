// ProductCard.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {Link} from "react-router-dom"
const ProductCard = ({ product }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleHoverStart = () => {
      setIsHovered(true);
    };
  
    const handleHoverEnd = () => {
      setIsHovered(false);
    };
  return (
    <motion.div
      className={`bg-white shadow-lg rounded-md p-4 m-4 border-2 flex flex-col justify-between overflow-hidden ${isHovered && 'border-2 border-solid border-[#F5921D]'}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      whileHover={{
        scale: 1.2,
        transition: { duration: 0.5 },
      }}
      transition={{ duration: 0.5 }}
    >
      <img src={product.image} alt={product.name} className="w-full h-40 mx-auto rounded-lg" />
      <div className="text-center flex items-center justify-center gap-3 mt-5 text-gray-500 font-semibold">
        <span className='w-[25%] bg-slate-500 h-[1px]'></span>
        <span>{product.type}</span>
        <span className='w-[25%] bg-slate-500 h-[1px]'></span>
      </div>
      <div>
      <h2 className="text-2xl font-semibold mt-2">{product.name}</h2>
      <h2 className="text-xl font-semibold mt-2">{product.brand}</h2>
      <p className="text-xl font-bold text-[#F5921D] mt-2">{product.price}</p>
      <h2 className="text-xl mt-2"><span className='me-2 font-bold'>Rating:</span>{product.rating}</h2>
      <h2 className="text-xl mt-2"><span className='me-2 font-bold'>Brand:</span>{product.brand_name}</h2>
      </div>
      <div className={`flex gap-3 position overflow-hidden relative duration-300 ${isHovered ? 'bottom-0' : 'bottom-[-500px]'}`}>
      <button className="hover:bg-[#F5921D] border-[1px] border-solid border-[#F5921D] text-[#F5921D] hover:text-white font-bold duration-300 px-4 py-2 rounded-md mt-4">Details</button>
      <Link to={`/update-product/${product._id}`}>
      <button className="hover:bg-[#F5921D] border-[1px] border-solid border-[#F5921D] text-[#F5921D] hover:text-white font-bold duration-300 px-4 py-2 rounded-md mt-4">Update</button>
      </Link>
      </div>
    </motion.div>
  );
};

export default ProductCard;
