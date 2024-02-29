import React from 'react';
import '../../assets/styles/components/utils/LayoutBase.scss';
import Header from './Header';
import Footer from '../website/Footer';

const LayoutBase = ({ children }) => {
  return (
    <div className='layout-base'>
      <Header />
      <main className='main'>
        {children}
      </main>
      <Footer />
    </div>
  );
};
export default LayoutBase;
