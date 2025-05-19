import About from '@/components/homepageComponent/About';
import { Banner } from '@/components/homepageComponent/Banner';
import Donor from '@/components/homepageComponent/Donor';
import Events from '@/components/homepageComponent/Events';

import Why from '@/components/homepageComponent/Why';

import Apeals from '@/components/homepageComponent/Apeals';

const Home = () => {
  return (
    <div>
      <Banner />
      <Donor />
      <About />
      <Apeals />
      <Events />

      <Why />
      {/* <Why /> */}
      {/* <Causes /> */}
    </div>
  );
};

export default Home;

//dummy push
