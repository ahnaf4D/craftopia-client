import CardMaking from '../../../assets/card_making.jpg';
import Scrapbooking from '../../../assets/scrapbooking.jpeg';
import PaperQuiling from '../../../assets/paper-quiling.jpg';
import GlassPainting from '../../../assets/glass-painting.jpg';
import LampWorking from '../../../assets/lamp_working.jpg';
import GlassDaining from '../../../assets/glass-daining.jpg';

const ShopCategory = () => {
  return (
    <div>
      <h1 className='text-4xl text-center my-4 font-playfairDisplay font-bold my-2'>
        Shop by Category
      </h1>

      <div className='grid gap-4 m-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        <div className=' overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800'>
          <img
            alt='NIKE AIR'
            className='object-cover w-full h-48 mt-2'
            src={CardMaking}
          />
          <div className='px-4 py-2'>
            <h1 className='text-xl text-center font-bold text-gray-800 uppercase dark:text-white'>
              Card Making
            </h1>
          </div>
        </div>
        <div className=' overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800'>
          <img
            alt='NIKE AIR'
            className='object-cover w-full h-48 mt-2'
            src={Scrapbooking}
          />
          <div className='px-4 py-2'>
            <h1 className='text-xl text-center font-bold text-gray-800 uppercase dark:text-white'>
              Scrapbooking
            </h1>
          </div>
        </div>
        <div className=' overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800'>
          <img
            alt='NIKE AIR'
            className='object-cover w-full h-48 mt-2'
            src={PaperQuiling}
          />
          <div className='px-4 py-2'>
            <h1 className='text-xl text-center font-bold text-gray-800 uppercase dark:text-white'>
              Paper Quilling & origami
            </h1>
          </div>
        </div>
        <div className=' overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800'>
          <img
            alt='NIKE AIR'
            className='object-cover w-full h-48 mt-2'
            src={GlassPainting}
          />
          <div className='px-4 py-2'>
            <h1 className='text-xl text-center font-bold text-gray-800 uppercase dark:text-white'>
              Glass Painting
            </h1>
          </div>
        </div>
        <div className=' overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800'>
          <img
            alt='NIKE AIR'
            className='object-cover w-full h-48 mt-2'
            src={LampWorking}
          />
          <div className='px-4 py-2'>
            <h1 className='text-xl text-center font-bold text-gray-800 uppercase dark:text-white'>
              Lampworking
            </h1>
          </div>
        </div>
        <div className=' overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800'>
          <img
            alt='NIKE AIR'
            className='object-cover w-full h-48 mt-2'
            src={GlassDaining}
          />
          <div className='px-4 py-2'>
            <h1 className='text-xl text-center font-bold text-gray-800 uppercase dark:text-white'>
              Glass Dying & Staining
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCategory;
