// components/SeeMoreButton.tsx
import React from 'react';

interface SeeMoreButtonProps {
  onClick: () => void;
  showMore: boolean;
}

const SeeMoreButton: React.FC<SeeMoreButtonProps> = ({ onClick, showMore }) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full"
      onClick={onClick}
    >
      {showMore ? 'See Less' : 'See More'}
    </button>
  );
};

export default SeeMoreButton;
