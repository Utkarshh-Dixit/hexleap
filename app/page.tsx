'use client'

import React, { useState } from 'react';
import Card from '../components/Card';
import ThemeToggle from '@/components/ThemeToggle';
import SeeMoreButton from '../components/SeeMoreButton';

const HomePage: React.FC = () => {
  const [showMore, setShowMore] = useState<boolean>(false);

  const handleToggleVisibility = () => {
    setShowMore(!showMore);
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-900'>
      <div className='flex justify-center bg-white dark:bg-slate-900'>
        <ThemeToggle />
      </div>

      <div className="flex justify-center flex-wrap max-w-5xl w-full gap-4 mt-16">
        <Card
          imageUrl="first.svg"
          title="Sacramento River Cats"
          heading1="Total events"
          value1="48 Events"
          heading2="Sport"
          value2="Baseball"
          show={true} // Always show the initial cards
        />
        <Card
          imageUrl="first.svg"
          title="Las Vegas Aviators"
          heading1="Total events"
          value1="28 Events"
          heading2="Sport"
          value2="Baseball"
          show={true} // Always show the initial cards
        />
        <Card
          imageUrl="first.svg"
          title="Sacramento River Cats"
          heading1="Total events"
          value1="48 Events"
          heading2="Sport"
          value2="Baseball"
          show={true} // Always show the initial cards
        />

        {showMore && (
          <>
            {/* Additional Cards */}
            <Card
              imageUrl="first.svg"
              title="Additional Card 1"
              heading1="Total events"
              value1="48 Events"
              heading2="Sport"
              value2="Baseball"
              show={true} // Always show the additional cards when showMore is true
            />
            <Card
              imageUrl="first.svg"
              title="Additional Card 2"
              heading1="Total events"
              value1="48 Events"
              heading2="Sport"
              value2="Baseball"
              show={true} // Always show the additional cards when showMore is true
            />
            <Card
              imageUrl="first.svg"
              title="Additional Card 2"
              heading1="Total events"
              value1="48 Events"
              heading2="Sport"
              value2="Baseball"
              show={true} // Always show the additional cards when showMore is true
            />
            <Card
              imageUrl="first.svg"
              title="Additional Card 2"
              heading1="Total events"
              value1="48 Events"
              heading2="Sport"
              value2="Baseball"
              show={true} // Always show the additional cards when showMore is true
            />
            {/* Add more additional cards as needed */}
          </>
        )}
      </div>
      <div className='flex justify-center my-4 mt-4'>
        <SeeMoreButton onClick={handleToggleVisibility} showMore={showMore} />
      </div>
    </div>
  );
};

export default HomePage;
