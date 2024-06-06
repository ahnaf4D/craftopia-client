import { Link } from 'react-router-dom';

const CraftRow = ({ craft }) => {
  const {
    itemPhotoUrl,
    itemName,
    subCategoryName,
    email,
    itemPrice,
    name,
    _id,
  } = craft;
  return (
    <>
      <tr className='border-b  border-gray-200 hover:bg-gray-100 transition ease-in-out duration-150'>
        <td className='px-6 py-4'>
          <div className='flex items-center'>
            <div className='avatar'>
              <div className='mask mask-squircle w-12 h-12'>
                <img
                  src={itemPhotoUrl}
                  alt={itemName}
                  className='w-full h-full object-cover'
                />
              </div>
            </div>
            <div className='ml-4'>
              <div className='font-bold'>{itemName}</div>
              <div className='text-sm text-gray-500'>{subCategoryName}</div>
            </div>
          </div>
        </td>
        <td className='px-6 py-4 text-center'>
          <div>
            <p className='font-semibold'>{name}</p>
            <p className='text-gray-500'>{email}</p>
          </div>
        </td>
        <td className='px-6 py-4 text-center text-green-500 font-semibold'>
          ${itemPrice.toFixed(2)}
        </td>
        <td className='px-6 py-4 text-center'>
          <Link to={`/crafts/${_id}`}>
            <button className='btn btn-primary btn-xs'>View Details</button>
          </Link>
        </td>
      </tr>
    </>
  );
};

export default CraftRow;
