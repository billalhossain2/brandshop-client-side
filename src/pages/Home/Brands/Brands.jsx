import React from 'react'

const Brands = () => {
  const brands = [
    {
      "image": "https://i.ibb.co/DMVfWvJ/google-brand.png",
      "title": "Google"
    },
    {
      "image": "https://i.ibb.co/qnF3tJq/microsoft.png",
      "title": "Microsoft"
    },
    {
      "image": "https://i.ibb.co/pPjXC3m/intel-brand.jpg",
      "title": "Intel"
    },
    {
      "image": "https://i.ibb.co/xLD0qc5/samsung-final.jpg",
      "title": "Samsung"
    },
    {
      "image": "https://i.ibb.co/Db3wWrc/sony-last.png",
      "title": "Sony"
    },
    {
      "image": "https://i.ibb.co/wcPvzqX/apple-last.jpg",
      "title": "Apple"
    }
  ]
  
  return (
    <div>
      <h3 className='text-3xl font-bold text-gray-500 my-5'>Our Brands</h3>
      {/* brands container  */}
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
         {
          brands?.map(brand => (
            <div className='border-solid border-2 border-gray-300 p-5 rounded-lg flex flex-col justify-between items-center h-[400px]'>
              <img className='h-[200px] w-full' src={brand.image} alt={brand.title} />
              <h3 className='text-5xl text-gray-500'>{brand.title}</h3>
            </div>
          ))
         }
      </div>
    </div>
  )
}

export default Brands