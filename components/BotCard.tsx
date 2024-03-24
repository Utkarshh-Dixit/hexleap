// components/Card.tsx
import React from 'react';

interface BotCardProps {
  imageUrl: string;
  title: string;
  date: string;
  paragraph: string;
  butname: string;
}

const BotCard: React.FC<BotCardProps> = ({ imageUrl, title, date, paragraph, butname }) => {

  return (
    <div className="bg-white dark:bg-gray-500 w-[260px] rounded-lg shadow-lg overflow-hidden">
    <img className="w-full object-cover object-center" src={imageUrl} alt={title} />
    <div className="p-4 flex flex-col items-center">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{title}</h2>
      <div className="flex items-center mt-2">
        <p className="text-sm font-medium text-gray-400 dark:text-gray-300">{date}</p>
      </div>
      <p className="mt-2 max-w-[213px] text-center text-sm text-gray-800 dark:text-white">{paragraph}</p>
      <button className="mt-2 w-full py-2 bg-black text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">{butname}</button>
    </div>
  </div>
  
  );
};

export default BotCard;
