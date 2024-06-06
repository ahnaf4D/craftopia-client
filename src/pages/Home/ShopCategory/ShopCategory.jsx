import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ShopCategory = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_BASE}/categories`)
      .then((res) => setCategories(res.data));
  }, []);
  return (
    <div>
      <h1 className='text-4xl text-center  font-playfairDisplay font-bold my-2'>
        Shop by Category
      </h1>

      <div className='font-montserrat grid gap-4 m-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {categories.map((item) => (
          <Link key={item._id} to={`/sub-category/${item.category_name}`}>
            <div className=' overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800'>
              <img
                alt='NIKE AIR'
                className='object-cover w-full h-48 mt-2'
                src={item.cover}
              />
              <div className='px-4 py-2'>
                <h1 className='text-xl text-center font-bold text-gray-800 uppercase dark:text-white'>
                  {item.category_name}
                </h1>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ShopCategory;
