import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import Spinner from '../../components/Spinner';

const Blog = () => {
  useTitle("Blog - Tech Store")
  const { category } = useParams();

  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(
      `https://tech-store-server-one.vercel.app/blogs`
    )
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <div className="container mx-auto p-4 mb-10">
      <h1 className="text-3xl font-semibold mb-4">Blog</h1>
      {isLoading && <Spinner></Spinner>}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {blogs.map((post) => (
            <div key={post._id} className="p-4 shadow-md rounded-lg flex flex-col justify-between border-2 border-gray-300  hover:border-2 hover:border-solid hover:border-[#F5921D]">
              <div>
              <img className='h-[200px]' src={post.image} alt="" />
              <h2 className="text-lg font-semibold">{post.title}</h2>
              <p className="text-gray-600">{post.content}</p>
              </div>
              <button className='text-[#F5921D] font-bold'>View Details</button>
            </div>
          ))}
        </div>
    </div>
  );
};

export default Blog;
