// components/Card.tsx
import React from 'react';

interface AdProps {
  imageUrl: string;
  title: string;
  value: string;
}

const Ad: React.FC<AdProps> = ({ imageUrl, title, value }) => {
  return (
    <div className="bg-white dark:bg-gray-500 w-[300px] rounded-lg shadow-lg overflow-hidden">
      <img className="w-full object-cover object-center" src={imageUrl} alt={title} />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{title}</h2>
        <div className=" gap-2 mt-2 p-2 dark:bg-gray-700 dark:p-2">
          <div>
            <p className="text-sm text-gray-800 dark:text-white">{value}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ad;
