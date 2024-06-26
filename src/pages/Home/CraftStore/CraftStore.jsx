import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import Craft from './Craft';
import { Link } from 'react-router-dom';

const CraftStore = () => {
  const [crafts, setCrafts] = useState([]);
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_BASE}/crafts`).then((res) => {
      const firstSixCrafts = res.data.slice(0, 6);
      setCrafts(firstSixCrafts);
    });
  }, []);
  return (
    <div>
      <h1 className='text-4xl text-center  font-playfairDisplay font-bold my-2'>
        Craft Items
      </h1>
      <div className='grid grid-cols-1 gap-4 m-8 md:grid-cols-2 lg:grid-cols-3'>
        {crafts.map((craft) => (
          <Craft key={craft._id} craft={craft}></Craft>
        ))}
      </div>
      <div className='flex justify-center'>
        <Link to='/all-art-crafts'>
          <button className='btn btn-warning text-xl font-montserrat mb-4'>
            All Crafts
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CraftStore;
