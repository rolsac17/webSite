import React from 'react';
import '../../assets/styles/components/landign/Requisitos.scss';

const Requisitos = ({ children }) => {
  return (
    <section className='requisitos'>
      <div className='u-wrapper'>
        <div className='requisitos__cotainer'>
          <h1 className='requisitos__title'>Requisitos</h1>
          {children}
        </div>
      </div>
      <div className='u-curver text-lightGrayishBlue'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none' fill='currentColor'><polygon points='0,100 100,0 100,100' /></svg>
      </div>
    </section>
  );
};

export default Requisitos;
