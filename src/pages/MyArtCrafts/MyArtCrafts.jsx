import axios from 'axios';
import { useContext, useEffect } from 'react';
import { useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import MyArtCraftCard from './MyArtCraftCard';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';

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
  const handleDeleteCraft = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${import.meta.env.VITE_API_BASE}/crafts/${id}`)
          .then(() => {
            const newCraftItems = crafts.filter((craft) => craft._id !== id);
            setCrafts(newCraftItems);
            toast.success('Successfully Deleted the Item');
          })
          .catch(() => {
            toast.error('Error in deleting craft items');
          });
      }
    });
  };
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
          <MyArtCraftCard
            key={item._id}
            item={item}
            handleDeleteCraft={handleDeleteCraft}
          ></MyArtCraftCard>
        ))}
      </div>
    </div>
  );
};

export default MyArtCrafts;
