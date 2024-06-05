const Slide = ({ img, headline, text }) => {
  return (
    <div>
      <div className='hero min-h-[405px] bg-base-200'>
        <div className='hero-content flex-col lg:flex-row-reverse'>
          <img src={img} className='max-w-xs rounded-lg shadow-2xl' />
          <div>
            <h1 className='text-4xl font-bold max-w-xl'>{headline}</h1>
            <p className='py-6 max-w-sm'>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
