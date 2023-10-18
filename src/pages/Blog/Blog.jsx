import React from 'react';
import { useParams } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: 'Latest Mobile Phones in 2023',
    category: 'mobile',
    content: 'Detailed description of the latest mobile phones, including features, specifications, and reviews.',
  },
  {
    id: 2,
    title: 'Choosing the Right Laptop for Your Needs',
    category: 'laptop',
    content: 'Comprehensive guide to selecting the perfect laptop based on your requirements, performance, and budget.',
  },
  {
    id: 3,
    title: 'Best Headphones for Audiophiles',
    category: 'headphones',
    content: 'In-depth reviews of high-quality headphones designed for audiophiles, with superior sound quality and comfort.',
  },
  // Add more blog posts with different categories
];

const Blog = () => {
  const { category } = useParams();
  const filteredPosts = blogPosts.filter((post) => post.category === category);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white p-4 shadow-md rounded-lg">
              <h2 className="text-lg font-semibold">{post.title}</h2>
              <p className="text-gray-600">{post.content}</p>
            </div>
          ))}
        </div>
    </div>
  );
};

export default Blog;
