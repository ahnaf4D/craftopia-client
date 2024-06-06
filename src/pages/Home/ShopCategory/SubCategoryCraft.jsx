import { Rating } from '@smastrom/react-rating';
import { Link, useLoaderData } from 'react-router-dom';

const SubCategoryCraft = () => {
  const loadedSubData = useLoaderData();
  console.log(loadedSubData); // successfully fetch data from server
  return (
    <div>
      <h1 className='text-4xl text-center my-4 font-playfairDisplay font-bold'>
        <span className='underline'>{loadedSubData.length}</span> Data Found
      </h1>
      <div className='grid m-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {loadedSubData.map((data) => (
          <div
            key={data._id}
            className=' overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800'
          >
            <img
              alt='NIKE AIR'
              className='object-cover w-full h-48 mt-2'
              src={data.itemPhotoUrl}
            />
            <div className='flex items-center justify-between px-4 py-2 bg-gray-900'>
              <h1 className='text-lg font-bold text-white'>
                ${data.itemPrice.toFixed(2)}
              </h1>
              <button className='px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none'>
                {data.subCategoryName}
              </button>
            </div>
            <div className='px-4 py-2 mx-auto text-center space-y-2'>
              <Rating
                value={data.itemRating}
                style={{ maxWidth: 150 }}
                readOnly
                className='mx-auto'
              />
              <h1 className='text-xl font-bold text-gray-800 uppercase dark:text-white'>
                {data.itemName}
              </h1>
              <p className='mt-1 text-lg  text-gray-600 dark:text-gray-400'>
                <span className='font-bold'>Description</span> :{' '}
                {data.itemShortDescription}
              </p>
              <p>
                {' '}
                <span className='font-bold'>Processing Time </span> :{' '}
                {data.itemProcessingTime}
              </p>
              <Link to={`/crafts/${data._id}`}>
                <button className='btn font-montserrat text-xl'>
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubCategoryCraft;
