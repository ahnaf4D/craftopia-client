import { Rating } from '@smastrom/react-rating';
import { MdDeleteForever } from 'react-icons/md';
import { TiPencil } from 'react-icons/ti';
import { Link } from 'react-router-dom';

const MyArtCraftCard = ({ item }) => {
  const {
    itemPhotoUrl,
    itemName,
    customizationStatus,
    itemPrice,
    stockStatus,
    itemRating,
    _id,
  } = item;

  return (
    <Link to={`/crafts/${_id}`}>
      <div className='font-montserrat cursor-pointer card card-compact bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-xl rounded-lg overflow-hidden transform transition duration-500 hover:scale-105'>
        <figure className='relative'>
          <img
            src={itemPhotoUrl}
            alt={itemName}
            className='size-60  object-cover'
          />
          <figcaption className='absolute bottom-0 bg-black bg-opacity-80 text-white p-2 w-full text-center'>
            Customization Status -{customizationStatus}
          </figcaption>
        </figure>
        <div className='card-body p-4 text-center'>
          <h2 className='card-title text-center mx-auto text-2xl font-bold text-white'>
            {itemName}
          </h2>
          <p className='text-3xl text-center text-yellow-300 mb-2'>
            ${itemPrice.toFixed(2)}
          </p>
          <div className='flex justify-center mb-2'>
            <Rating value={itemRating} style={{ maxWidth: 150 }} readOnly />
          </div>
          <p className='text-white text-lg mb-2'>
            <span className='font-semibold'>Stock Status:</span> {stockStatus}
          </p>
          <div className='card-actions flex justify-between mt-4'>
            <button className='btn btn-primary bg-purple-700 hover:bg-purple-800 text-white flex items-center gap-2'>
              <TiPencil className='text-2xl' /> Edit
            </button>
            <button className='btn btn-primary bg-red-700 hover:bg-red-800 text-white flex items-center gap-2'>
              <MdDeleteForever className='text-2xl' /> Delete
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MyArtCraftCard;
