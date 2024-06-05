const OurClients = () => {
  return (
    <section className='bg-white dark:bg-gray-900'>
      <div className='container px-6 py-10 mx-auto'>
        <h1 className='text-4xl text-center  font-playfairDisplay font-bold my-2'>
          What Our Client Say
        </h1>
        <p className='max-w-2xl mx-auto mt-6 text-center text-gray-500 dark:text-gray-300 font-montserrat'>
          Fantastic selection of art supplies. Knowledgeable staff and great
          prices. My go-to store for all my crafting needs!
        </p>
        <div className='grid grid-cols-1 gap-8 mx-auto mt-8 lg:grid-cols-2 xl:mt-10 max-w-7xl'>
          <div className='p-6 bg-gray-100 rounded-lg dark:bg-gray-800 md:p-8'>
            <p className='font-montserrat leading-loose text-gray-500 dark:text-gray-300'>
              “Craftiopia offers an extensive range of art supplies, coupled
              with user-friendly navigation and prompt delivery. A go-to
              destination for all crafting needs. Highly satisfied with their
              service!”.
            </p>
            <div className='flex items-center mt-6'>
              <img
                alt=''
                className='object-cover rounded-full w-14 h-14'
                src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
              />
              <div className='mx-4'>
                <h1 className='font-semibold text-blue-500'>Robbert Thak</h1>
                <span className='text-sm text-gray-500 dark:text-gray-300'>
                  CTO, amazon handmate
                </span>
              </div>
            </div>
          </div>
          <div className='p-6 bg-gray-100 rounded-lg dark:bg-gray-800 md:p-8'>
            <p className='font-montserrat leading-loose text-gray-500 dark:text-gray-300'>
              “Craftiopia exceeds expectations with its top-notch customer
              service and diverse product range. Navigating their website is a
              breeze, and their timely delivery ensures a seamless shopping
              experience. Highly recommended!”.
            </p>
            <div className='flex items-center mt-6'>
              <img
                alt=''
                className='object-cover rounded-full w-14 h-14'
                src='https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
              />
              <div className='mx-4'>
                <h1 className='font-semibold text-blue-500'>Mia Brown</h1>
                <span className='text-sm text-gray-500 dark:text-gray-300'>
                  Marketing Manager at Walmart
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurClients;
