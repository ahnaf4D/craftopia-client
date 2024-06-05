import ProductOne from '../../../assets/crane.avif';
import ProductTwo from '../../../assets/wall.avif';
import DiscountEmoji from '../../../assets/discount.png';
import OfferEmoji from '../../../assets/offer.png';
const Discount = () => {
  return (
    <div className='bg-gradient-to-b from-gray-200 to-gray-300 py-12'>
      <img src={DiscountEmoji} alt='' className='absolute' />
      <h1 className='text-4xl text-center mb-8 font-playfairDisplay font-bold text-gray-800'>
        <span className='text-red-600'>Discount</span> of the Day
      </h1>
      <div className='flex justify-center gap-8 items-center flex-col md:flex-row'>
        <div className='card bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform'>
          <figure className='relative'>
            <img
              src={ProductOne}
              alt='Origami Crane Mobile'
              className='size-60'
            />
            <figcaption className='absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4'>
              <h2 className='text-xl font-bold'>40% Discount</h2>
              <p className='text-base'>Origami Crane Mobile</p>
            </figcaption>
          </figure>
        </div>
        <div className='card bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform'>
          <figure className='relative'>
            <img
              src={ProductTwo}
              alt='Quilled Paper Wall Art'
              className='size-60'
            />
            <figcaption className='absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4'>
              <h2 className='text-xl font-bold'>60% Discount</h2>
              <p className='text-base'>Quilled Paper Wall Art</p>
            </figcaption>
          </figure>
        </div>
      </div>
      <div className='mx-auto flex justify-end pb-10'>
        <img src={OfferEmoji} className='absolute w-20' alt='' />
      </div>
    </div>
  );
};

export default Discount;
