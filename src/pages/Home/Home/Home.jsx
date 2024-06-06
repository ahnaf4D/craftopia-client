import Slider from '../Banner/Slider';
import Contact from '../Contact/Contact';
import CraftStore from '../CraftStore/CraftStore';
import Discount from '../Discount/Discount';
import OurClients from '../OurClients/OurClients';
// import ShopCategory from '../ShopCategory/ShopCategory';

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      {/* <ShopCategory></ShopCategory> */}
      <CraftStore></CraftStore>
      <Discount></Discount>
      <OurClients></OurClients>
      <Contact></Contact>
    </div>
  );
};

export default Home;
