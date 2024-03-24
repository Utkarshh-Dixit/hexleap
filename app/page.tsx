'use client'

import React, { useState } from 'react';
import Card from '../components/Card';
import ThemeToggle from '@/components/ThemeToggle';
import SeeMoreButton from '../components/SeeMoreButton';
import Ad from '@/components/Ad';
import BotCard from '@/components/BotCard';



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

      <div className='text-black font-[900] text-[30px] dark:text-white'>
        <h2>Sports</h2>
      </div>

      <div className="flex justify-center flex-wrap max-w-8xl w-full gap-4 mt-16">
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
          imageUrl="second.svg"
          title="Las Vegas Aviators"
          heading1="Total events"
          value1="28 Events"
          heading2="Sport"
          value2="Baseball"
          show={true} // Always show the initial cards
        />
        <Card
          imageUrl="third.svg"
          title="New Jersey Devils"
          heading1="Total events"
          value1="15 Events"
          heading2="Sport"
          value2="Ice Hockey"
          show={true} // Always show the initial cards
        />
        <Card
          imageUrl="second.svg"
          title="Las Vegas Aviators"
          heading1="Total events"
          value1="28 Events"
          heading2="Sport"
          value2="Baseball"
          show={true} // Always show the initial cards
        />
        <Ad imageUrl="ad.svg" title="Advertisement title" value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />

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
            {/* Add more additional cards as needed */}
          </>
        )}
      </div>
      <div className='flex justify-center my-4 mt-10'>
        <SeeMoreButton onClick={handleToggleVisibility} showMore={showMore} />
      </div>

      <div className='mt-[90px] flex flex-col items-center justify-center text-black dark:text-white'>
        <h1 className=' text-[50px] font-[700]'>Collection Spotlight</h1>
        <p className=' mt-4 mb-10 max-w-[917px] text-[14px] font-[400] text-center'>Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!</p>
        
        <div className='flex flex-row gap-x-5'>

        <BotCard  imageUrl="botfirst.svg"
              title="Las Vegas Aviators"
              date="Oct 15 | SUN | 4:30 PM"
              paragraph="Las Vegas Ballpark, Las Vegas, Nevada"
              butname="Take Flight Collection" />
        <BotCard  imageUrl="botsec.svg"
              title="Sacramento River Cats"
              date="Oct 15 | SUN | 4:30 PM"
              paragraph="Sutter Health Park, Sacramento, California"
              butname="Orange Collection" />
        <BotCard  imageUrl="botfirst.svg"
              title="Las Vegas Aviators"
              date="Oct 15 | SUN | 4:30 PM"
              paragraph="Las Vegas Ballpark, Las Vegas, Nevada"
              butname="Take Flight Collection" />
              <div className='flex cursor-pointer text-[50px] justify-center items-center text-center'>➤</div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
