import React from 'react';
import '../../../assets/styles/components/website/ListProductsContent.scss';

const ListProducts = ({ children }) => {
  return (
    <div className='list-products__content'>
      {children}
    </div>
  );
};

export default ListProducts;
