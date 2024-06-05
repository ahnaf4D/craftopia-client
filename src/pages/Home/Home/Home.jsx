import Slider from '../Banner/Slider';
import CraftStore from '../CraftStore/CraftStore';
import Discount from '../Discount/Discount';
import ShopCategory from '../ShopCategory/ShopCategory';

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <ShopCategory></ShopCategory>
      <CraftStore></CraftStore>
      <Discount></Discount>
    </div>
  );
};

export default Home;
