import React from 'react';
import Hero from '../components/website/Hero';
// import RelevantIformation from '../components/website/RelevantInformation';
import FeaturedProducts from '../components/website/FeaturedProducts';
// import Layout from '../components/website/Layout';
import LayoutBase from '../components/utils/LayoutBase';

const Home = () => {
  return (
    <LayoutBase>
      <Hero />
      {/* <RelevantIformation /> */}
      <FeaturedProducts />
    </LayoutBase>
  );
};

export default Home;
