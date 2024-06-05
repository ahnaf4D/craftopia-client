import { FaEnvelope, FaLocationDot, FaPhone } from 'react-icons/fa6';

const Contact = () => {
  return (
    <div>
      <section className='bg-white dark:bg-gray-900'>
        <div className='container px-6 py-12 mx-auto'>
          <div className='text-center'>
            <h1 className='mt-2 font-playfairDisplay  text-4xl font-semibold text-gray-800 md:text-3xl dark:text-white'>
              Get in touch
            </h1>
            <p className='mt-3 text-gray-500 dark:text-gray-400'>
              Our friendly team is always here to chat.
            </p>
          </div>
          <div className='grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3'>
            <div className=' font-montserrat flex flex-col items-center justify-center text-center'>
              <span className='p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800'>
                <FaEnvelope></FaEnvelope>
              </span>
              <h2 className='mt-4 text-lg font-medium text-gray-800 dark:text-white'>
                Email
              </h2>
              <p className='mt-2 text-gray-500 dark:text-gray-400'>
                Our friendly team is here to help.
              </p>
              <p className='mt-2 text-blue-500 dark:text-blue-400'>
                hello@merakiui.com
              </p>
            </div>
            <div className='flex flex-col items-center justify-center text-center'>
              <span className='p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800'>
                <FaLocationDot></FaLocationDot>
              </span>
              <h2 className='mt-4 text-lg font-medium text-gray-800 dark:text-white'>
                Office
              </h2>
              <p className='mt-2 text-gray-500 dark:text-gray-400'>
                Come say hello at our office HQ.
              </p>
              <p className='mt-2 text-blue-500 dark:text-blue-400'>
                San Francisco, CA, USA 94105
              </p>
            </div>
            <div className='flex flex-col items-center justify-center text-center'>
              <span className='p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800'>
                <FaPhone></FaPhone>
              </span>
              <h2 className='mt-4 text-lg font-medium text-gray-800 dark:text-white'>
                Phone
              </h2>
              <p className='mt-2 text-gray-500 dark:text-gray-400'>
                Mon-Fri from 8am to 5pm.
              </p>
              <p className='mt-2 text-blue-500 dark:text-blue-400'>
                +3656552456
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
