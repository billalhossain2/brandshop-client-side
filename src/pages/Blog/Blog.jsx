import React from 'react';
import { useParams } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const blogPosts = [
  {
    id: 1,
    image:"https://i.ibb.co/N1QHWqF/mobile-phone.png",
    title: 'Latest Mobile Phones in 2023',
    category: 'mobile',
    content: 'Detailed description of the latest mobile phones, including features, specifications, and reviews.',
  },
  {
    id: 2,
     image:"https://i.ibb.co/B6L265n/laptop.jpg",
    title: 'Choosing the Right Laptop for Your Needs',
    category: 'laptop',
    content: 'Comprehensive guide to selecting the perfect laptop based on your requirements, performance, and budget.',
  },
  {
    id: 3,
     image:"https://i.ibb.co/6yzhD62/headphone.jpg",
    title: 'Best Headphones for Audiophiles',
    category: 'headphones',
    content: 'In-depth reviews of high-quality headphones designed for audiophiles, with superior sound quality and comfort.',
  },
  {
    id: 4,
    title: 'The Ultimate Guide to Mobile Photography',
    category: 'mobile',
    content: 'Explore the world of mobile photography, with tips on taking stunning photos with your smartphone.',
    image: 'https://i.ibb.co/7xc9V4j/photography.jpg',
  },
  {
    id: 5,
    title: 'Gaming Laptops for Gamers on a Budget',
    category: 'laptop',
    content: 'Discover affordable gaming laptops that offer great performance without breaking the bank.',
    image: 'https://i.ibb.co/vY86YxQ/gaming-laptop.jpg',
  },
  {
    id: 6,
    title: 'Wireless vs. Wired Headphones: Which Is Right for You?',
    category: 'headphones',
    content: 'An in-depth comparison of wireless and wired headphones to help you choose the right option for your needs.',
    image: 'https://i.ibb.co/sKT0p7W/wireless-headphone.jpg',
  },
  // Add more blog posts with different categories
];

const Blog = () => {
  useTitle("Blog - Tech Store")
  const { category } = useParams();
  const filteredPosts = blogPosts.filter((post) => post.category === category);

  return (
    <div className="container mx-auto p-4 mb-10">
      <h1 className="text-3xl font-semibold mb-4">Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {blogPosts.map((post) => (
            <div key={post.id} className="p-4 shadow-md rounded-lg flex flex-col justify-between border-2 border-gray-300  hover:border-2 hover:border-solid hover:border-[#F5921D]">
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
