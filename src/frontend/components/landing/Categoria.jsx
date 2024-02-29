import React from 'react';
import { connect } from 'react-redux';
import '../../assets/styles/components/landign/Categoria.scss';

const Categoria = ({ children, categoria, productName }) => {
  return (
    <div>
      <h1 className='categoria__title'>
        {categoria}
        {' '}
        <span>{productName}</span>
      </h1>
      {children}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    categoria: state.producto.lp_categorium.nombre,
    productName: state.producto.nombre,
  };
};

export default connect(mapStateToProps, null)(Categoria);
