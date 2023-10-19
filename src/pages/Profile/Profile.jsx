// UserProfile.js

import React from 'react';

const Profile = () => {
  const user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    image: 'https://i.ibb.co/Kx3bp73/john-doe.jpg',
    bio:
      'I am a passionate software engineer with a strong background in web development. I enjoy building web applications and solving complex problems. In my free time, I love to explore new technologies, contribute to open-source projects, and share my knowledge with the community. Let\'s connect and create amazing things together!'
  };

  const truncatedBio = user.bio.split(' ').slice(0, 100).join(' ');

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">User Profile</h2>

        <div className="flex items-center space-x-4">
          <img src={user.image} alt="User Profile" className="w-32 h-32 rounded-full" />
          <div>
            <h3 className="text-xl font-semibold">{user.name}</h3>
            <p className="text-gray-600">{user.email}</p>
          </div>
        </div>

        <div className="mt-4">
          <h4 className="text-lg font-semibold">Bio:</h4>
          <p>{truncatedBio} {user.bio.length > 100 && '...'}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;