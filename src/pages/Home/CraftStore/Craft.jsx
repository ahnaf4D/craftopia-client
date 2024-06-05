import React from 'react';

const Craft = ({ craft }) => {
  const { image, item_name, short_description, price } = craft;
  return (
    <div className='font-montserrat'>
      <div className='card card-compact bg-base-100 shadow-xl rounded-lg overflow-hidden'>
        <figure className='relative'>
          <img src={image} alt={item_name} className='size-72' />
          <figcaption className='absolute bottom-0 left-0 w-full bg-black bg-opacity-80 text-white p-4'>
            <h2 className='text-lg font-bold'>{item_name}</h2>
            <p className='text-sm'>{short_description}</p>
            <div className='flex justify-between items-center'>
              <span className='text-xl font-bold'>${price.toFixed(2)}</span>
              <button className='btn btn-primary font-playfairDisplay text-xl text-white'>
                View Details
              </button>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default Craft;
