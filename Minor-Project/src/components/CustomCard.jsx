import React, { useState } from 'react';

const CustomCard = ({ imageUrl, hoverImageUrl, title, description, technologies }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      className="bg-white rounded-lg shadow-lg md:p-8 transform hover:scale-105 transition-transform duration-300"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative overflow-hidden">
        <img
          className="object-cover w-full h-full rounded-t-lg transition-opacity duration-300"
          src={hovered ? hoverImageUrl : imageUrl}
          alt="Product"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>
      <div className="bg-gradient-to-t from-transparent to-black opacity-0 hover:opacity-50 absolute inset-0 rounded-t-lg"></div>
      <h3 className="text-xl font-bold text-gray-900 mt-4">{title}</h3>
      <p className="text-gray-500 text-sm mt-2">{description}</p>
      <div className="flex items-center justify-between mt-4">
        <ul className='list-disc ml-4 text-base'>
          {technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CustomCard;
