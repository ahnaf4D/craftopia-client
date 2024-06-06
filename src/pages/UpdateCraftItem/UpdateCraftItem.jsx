import axios from 'axios';
import toast from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';

const UpdateCraftItem = () => {
  const loadExistingData = useLoaderData();
  const {
    itemPhotoUrl,
    itemName,
    customizationStatus,
    itemPrice,
    stockStatus,
    itemRating,
    itemProcessingTime,
    itemShortDescription,
    _id,
  } = loadExistingData;
  const navigate = useNavigate();
  const handleUpdateItem = (e) => {
    e.preventDefault();
    const itemName = e.target.item_name.value;
    const subCategoryName = e.target.sub_category.value;
    const itemPrice = parseFloat(e.target.item_price.value);
    const customizationStatus = e.target.customization.value;
    const itemRating = parseFloat(e.target.item_rating.value);
    const itemProcessingTime = e.target.item_processing_time.value;
    const stockStatus = e.target.stock_status.value;
    const itemShortDescription = e.target.item_short_description.value;
    const itemPhotoUrl = e.target.item_url.value;
    const updatedItemDetails = {
      itemName,
      itemPhotoUrl,
      subCategoryName,
      itemPrice,
      customizationStatus,
      itemRating,
      itemProcessingTime,
      stockStatus,
      itemShortDescription,
    };
    axios
      .put(`${import.meta.env.VITE_API_BASE}/crafts/${_id}`, updatedItemDetails)
      .then(() => {
        e.target.reset();
        toast.success('Craft Item Updated Successfully');
        navigate('/my-art-craft-list');
      });
    console.log(updatedItemDetails);
  };
  return (
    <div>
      <h1 className='text-3xl text-center font-playfairDisplay'>
        Update Craft Items
      </h1>
      <form
        className='font-montserrat p-8 bg-white rounded-lg shadow-lg'
        onSubmit={handleUpdateItem}
      >
        <div className='flex  gap-4 mb-4 flex-row'>
          <div className='form-control w-full md:w-1/2'>
            <label
              htmlFor='item_name'
              className='label-text font-semibold mb-2'
            >
              Craft Item
            </label>
            <input
              type='text'
              name='item_name'
              placeholder='Item Name'
              className='input input-bordered w-full rounded-lg p-4'
              required
              defaultValue={itemName}
            />
          </div>
          <div className='form-control w-full md:w-1/2'>
            <label
              htmlFor='sub_category'
              className='label-text font-semibold mb-2'
            >
              Select Craft Category
            </label>
            <select
              className='select select-bordered  rounded-lg '
              name='sub_category'
            >
              <option selected>Card Making</option>
              <option>Scrapbooking</option>
              <option>Paper Quilling & Origami</option>
              <option>Glass Painting</option>
              <option>Lampworking</option>
              <option>Glass Dying & Staining</option>
            </select>
          </div>
        </div>
        <div className='flex  gap-4 mb-4 flex-row'>
          <div className='form-control w-full md:w-1/2'>
            <label
              htmlFor='item_price'
              className='label-text font-semibold mb-2'
            >
              Item Price
            </label>
            <input
              type='number'
              name='item_price'
              placeholder='Item Price'
              defaultValue={itemPrice}
              className='input input-bordered w-full rounded-lg p-4'
              required
            />
          </div>
          <div className='form-control w-full md:w-1/2'>
            <label
              htmlFor='customization'
              className='label-text font-semibold mb-2'
            >
              Is Customization
            </label>
            <select
              className='select select-bordered w-full rounded-lg '
              name='customization'
              defaultValue={customizationStatus}
            >
              <option selected>Yes</option>
              <option>No</option>
            </select>
          </div>
        </div>
        <div className='flex  gap-4 mb-4 flex-row'>
          <div className='form-control w-full md:w-1/2'>
            <label
              htmlFor='item_rating'
              className='label-text font-semibold mb-2'
            >
              Item Rating
            </label>
            <input
              type='number'
              name='item_rating'
              placeholder='Item Rating'
              defaultValue={itemRating}
              required
              className='input input-bordered w-full rounded-lg p-4'
            />
          </div>
          <div className='form-control w-full md:w-1/2'>
            <label
              htmlFor='item_processing_time'
              className='label-text font-semibold mb-2'
            >
              Processing Time
            </label>
            <input
              type='text'
              name='item_processing_time'
              placeholder='Processing Time'
              defaultValue={itemProcessingTime}
              className='input input-bordered w-full rounded-lg p-4'
              required
            />
          </div>
        </div>
        <div className='flex  gap-4 mb-4 flex-row'>
          <div className='form-control w-full md:w-1/2'>
            <label
              htmlFor='stock_status'
              className='label-text font-semibold mb-2'
            >
              Stock Status
            </label>
            <select
              className='select select-bordered  rounded-lg'
              name='stock_status'
              defaultValue={stockStatus}
            >
              <option selected>In Stock</option>
              <option>Made To Order</option>
            </select>
          </div>
          <div className='form-control w-full md:w-1/2'>
            <label
              htmlFor='item_rating'
              className='label-text font-semibold mb-2'
            >
              Item Photo URL
            </label>
            <input
              type='url'
              name='item_url'
              placeholder='Item Photo URL'
              className='input input-bordered w-full rounded-lg p-4'
              required
              defaultValue={itemPhotoUrl}
            />
          </div>
        </div>
        <div className='flex flex-wrap gap-4 mb-4'>
          <div className='form-control w-full'>
            <label
              htmlFor='stock_status'
              className='label-text font-semibold mb-2'
            >
              Description About the Item
            </label>
            <textarea
              className='textarea textarea-accent'
              placeholder='Enter the Description Here'
              name='item_short_description'
              cols={8}
              defaultValue={itemShortDescription}
              required
            ></textarea>
          </div>
        </div>
        <input
          type='submit'
          className='btn btn-warning w-full rounded-lg  font-semibold text-lg'
          value='Update Item'
        />
      </form>
    </div>
  );
};

export default UpdateCraftItem;
