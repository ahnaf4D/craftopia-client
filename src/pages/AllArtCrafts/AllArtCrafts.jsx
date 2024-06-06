import { useEffect, useState } from 'react';
import CraftRow from './CraftRow';
import axios from 'axios';

const AllArtCrafts = () => {
  const [crafts, setCrafts] = useState([]); // Initialize with an empty array

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_BASE}/crafts`)
      .then((res) => setCrafts(res.data));
  }, []);

  console.log(crafts);

  return (
    <div className='container mx-auto my-8'>
      <h1 className='text-4xl text-center font-playfairDisplay mb-6'>
        All Art&Craft Items
      </h1>
      <div className='overflow-x-auto'>
        <table className='table-auto w-full'>
          <thead>
            <tr>
              <th className='px-6 py-4'>Item</th>
              <th className='px-6 py-4'>Owner</th>
              <th className='px-6 py-4'>Price</th>
              <th className='px-6 py-4'>Action</th>
            </tr>
          </thead>
          <tbody>
            {crafts.map((craft, index) => (
              <CraftRow key={index} craft={craft} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllArtCrafts;
