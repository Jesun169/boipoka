import React from 'react';

const Banner = () => {
  return (
    <div className='flex justify-between items-center p-16 w-full'>
      <div>
        <h1 className='text-4xl font-bold mb-4'>Books to freshen up your bookshelf</h1>
        <button className='btn bg-green-500 rounded-l text-white'>View The List</button>
      </div>
      <div>
         <img  src="/src/assets/books.jpg" alt="" />
      </div>
    </div>
  );
};

export default Banner;