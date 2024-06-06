import { useLoaderData } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

const CraftDetails = () => {
  const loadSpecificData = useLoaderData();
  const {
    itemPhotoUrl,
    itemName,
    itemShortDescription,
    name,
    email,
    itemRating,
    itemProcessingTime,
    itemPrice,
    subCategoryName,
    customizationStatus,
    stockStatus,
  } = loadSpecificData;

  return (
    <div className='bg-gray-100 pb-12'>
      <div className='container mx-auto py-12'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          {/* Left Section - Image */}
          <div className='lg:order-last'>
            <img
              src={itemPhotoUrl}
              alt={itemName}
              className='rounded-lg shadow-lg'
            />
          </div>

          {/* Right Section - Details */}
          <div className='flex flex-col'>
            <h1 className='text-3xl lg:text-4xl font-bold text-gray-800 mb-4'>
              {itemName}
            </h1>
            <p className='text-lg text-gray-600 mb-6'>{itemShortDescription}</p>

            {/* Additional Details */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
              <div className='mb-4 lg:mb-0'>
                <p className='text-gray-800 font-semibold'>Category:</p>
                <p className='text-gray-600'>{subCategoryName}</p>
              </div>
              <div className='mb-4 lg:mb-0'>
                <p className='text-gray-800 font-semibold'>Price:</p>
                <p className='text-green-600'>${itemPrice.toFixed(2)}</p>
              </div>
              <div className='mb-4 lg:mb-0'>
                <p className='text-gray-800 font-semibold'>Customization:</p>
                <p className='text-gray-600'>{customizationStatus}</p>
              </div>
              <div className='mb-4 lg:mb-0'>
                <p className='text-gray-800 font-semibold'>Stock Status:</p>
                <p className='text-gray-600'>{stockStatus}</p>
              </div>
              <div>
                <p className='text-gray-800 font-semibold'>Owner:</p>
                <p className='text-gray-600'>{name}</p>
                <p className='text-gray-800 font-semibold'>Email:</p>
                <p className='text-gray-600'>{email}</p>
                <p className='text-gray-800 font-semibold'>Processing Time:</p>
                <p className='text-gray-600'>{itemProcessingTime}</p>
                <p className='text-gray-800 font-semibold'>Rating:</p>
                <Rating value={itemRating} readOnly />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CraftDetails;
