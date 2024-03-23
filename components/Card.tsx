// components/Card.tsx
import React from 'react';

interface CardProps {
  imageUrl: string;
  title: string;
  heading1: string;
  value1: string;
  heading2: string;
  value2: string;
  show?: boolean; // Optional prop to control visibility
}

const Card: React.FC<CardProps> = ({
  imageUrl,
  title,
  heading1,
  value1,
  heading2,
  value2,
  show = true, // Default to true if not provided
}) => {
  if (!show) return null; // Return null if show is false

  return (
    <div className="bg-white dark:bg-gray-500 w-[300px] rounded-lg shadow-lg overflow-hidden">
      <img className="w-full object-cover object-center" src={imageUrl} alt={title} />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{title}</h2>
        <div className="grid grid-cols-2 gap-2 mt-2 dark:bg-gray-700 dark:p-2">
          <div>
            <h3 className="text-sm font-medium text-gray-400 dark:text-gray-300">{heading1}</h3>
            <p className="text-sm text-gray-800 dark:text-white">{value1}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-400 dark:text-gray-300">{heading2}</h3>
            <p className="text-sm text-gray-800 dark:text-white">{value2}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
