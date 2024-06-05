import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import Slide from './Slide';
import PaperCraft from '../../../assets/paper-craft.jpg';
import Colloring from '../../../assets/colloring.jpg';
import ColorFull from '../../../assets/colorFull.jpg';
const Slider = () => {
  return (
    <div className='mt-6'>
      <Swiper
        navigation={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
        className='mySwiper'
      >
        <SwiperSlide>
          <Slide
            img={PaperCraft}
            headline={'Artistry in Paper & Glass: Unveil the Magic'}
            text={
              'Let our exquisite paper and glass masterpieces spark your creativity and enhance the beauty of your home. Discover the perfect blend of art and elegance to transform your living space into a haven of inspiration.'
            }
          ></Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            img={Colloring}
            headline={'Enchanting Expressions: Curated Paper & Glass Art'}
            text={
              'Discover our enchanting collection of paper and glass artworks, each piece a unique expression of creativity and craftsmanship. Transform your space with the beauty and elegance of handcrafted art.'
            }
          ></Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            img={ColorFull}
            headline={'Creative Fusion: Unique Paper & Glass Art'}
            text={
              'Experience the perfect fusion of creativity and craftsmanship in our art collections. Discover unique and exquisite pieces that elevate your space with the beauty of handcrafted paper and glass art.'
            }
          ></Slide>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
