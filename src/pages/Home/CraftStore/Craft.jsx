const Craft = ({ craft }) => {
  const { itemPhotoUrl, itemName, itemShortDescription, itemPrice } = craft;
  return (
    <div className='font-montserrat'>
      <div className='card card-compact bg-base-100 shadow-xl rounded-lg overflow-hidden'>
        <figure className='relative'>
          <img src={itemPhotoUrl} alt={itemName} className='size-72' />
          <figcaption className='absolute bottom-0 left-0 w-full bg-black bg-opacity-80 text-white p-4'>
            <h2 className='text-lg font-bold'>{itemName}</h2>
            <p className='text-sm'>{itemShortDescription}</p>
            <div className='flex justify-between items-center'>
              <span className='text-xl font-bold'>${itemPrice.toFixed(2)}</span>
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
