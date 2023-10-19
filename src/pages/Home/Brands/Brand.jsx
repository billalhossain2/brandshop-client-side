import React from "react";

const Brand = ({brand}) => {
    const {image, title} = brand || {};
  return (
    <div className="border-solid border-2 border-gray-300 hover:border-[#F5921D] cursor-pointer p-5 rounded-lg flex flex-col justify-between items-center h-[400px]">
      <img className="h-[200px] w-full" src={brand.image} alt={brand.title} />
      <h3 className="text-5xl text-gray-500">{brand.title}</h3>
    </div>
  );
};

export default Brand;
