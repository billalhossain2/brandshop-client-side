import React, { useState } from 'react';

const AddProduct = () => {
  const [product, setProduct] = useState({
    image: '',
    name: '',
    brand: '',
    productType: '',
    price: '',
    description: '',
    rating: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to submit the product data
    console.log(product)
  };

  return (
    <div className="md:w-1/2 mx-auto p-4 bg-white shadow-md rounded-lg mb-5 border-solid border-[1px] border-[#f5941d7e]">
      <h2 className="text-2xl font-semibold mb-4">Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="image" className="block text-sm font-medium text-gray-600">
            Image:
          </label>
          <input
            type="text"
            id="image"
            name="image"
            value={product.image}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-indigo-300"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={product.name}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-indigo-300"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="brand" className="block text-sm font-medium text-gray-600">
            Select Brand:
          </label>
          <select
            id="brand"
            name="brand"
            value={product.brand}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-indigo-300"
          >
            <option disabled value="">Select Brand</option>
            <option value="Apple">Apple</option>
            <option value="Samsung">Samsung</option>
            <option value="Sony">Sony</option>
            <option value="Google">Google</option>
            <option value="Intel">Intel</option>
            <option value="Microsoft">Microsoft</option>
            {/* Add more options as needed */}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="productType" className="block text-sm font-medium text-gray-600">
            Product Type:
          </label>
          <select
            id="productType"
            name="productType"
            value={product.productType}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-indigo-300"
          >
            <option disabled value="">Select Product Type</option>
            <option value="Smartphone">Smartphone</option>
            <option value="Laptop">Laptop</option>
            <option value="Television">Television</option>
            <option value="Fridge">Fridge</option>
            <option value="Headphone">Headphone</option>
            <option value="Camera">Camera</option>
            <option value="Airbad">Airbad</option>
            <option value="Watch">Watch</option>
            <option value="Microphone">Microphone</option>
            <option value="Printer">Printer</option>
            {/* Add more options as needed */}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="price" className="block text-sm font-medium text-gray-600">
            Price:
          </label>
          <input
            type="text"
            id="price"
            name="price"
            value={product.price}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-indigo-300"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-600">
            Short Description:
          </label>
          <textarea
            id="description"
            name="description"
            value={product.description}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-indigo-300"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="rating" className="block text-sm font-medium text-gray-600">
            Rating:
          </label>
          <input
            type="text"
            id="rating"
            name="rating"
            value={product.rating}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-indigo-300"
          />
        </div>

        <button
          type="submit"
          className="border-[1px] border-solid border-[#F5921D] text-[#F5921D] font-bold hover:text-white duration-300 py-2 px-4 rounded-md hover:bg-[#F5921D] focus:ring focus:ring-indigo-300"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
