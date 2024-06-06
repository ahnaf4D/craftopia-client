import axios from 'axios';
import { useContext, useEffect } from 'react';
import { useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import MyArtCraftCard from './MyArtCraftCard';

const MyArtCrafts = () => {
  const [crafts, setCrafts] = useState([]);
  const { user } = useContext(AuthContext);
  const [filter, setFilter] = useState('');
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_BASE}/user-crafts`, {
        params: {
          email: user?.email,
          customizationStatus: filter,
        },
      })
      .then((res) => setCrafts(res.data));
  }, [user?.email, filter]);
  return (
    <div>
      <h1 className='text-4xl text-center  font-playfairDisplay font-bold my-2'>
        My Art and Crafts Items
      </h1>
      <div className='flex items-center gap-4 justify-center font-montserrat text-xl'>
        <p>
          Filter by <span className='underline'>Customization</span>
        </p>
        <select
          className='select select-bordered   mt-4 max-w-xs'
          onChange={(e) => setFilter(e.target.value)}
          value={filter}
        >
          <option value=''>All</option>
          <option value='Yes'>Yes</option>
          <option value='No'>No</option>
        </select>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 m-12 lg:grid-cols-3'>
        {crafts.map((item) => (
          <MyArtCraftCard key={item._id} item={item}></MyArtCraftCard>
        ))}
      </div>
    </div>
  );
};

export default MyArtCrafts;
