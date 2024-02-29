import React from 'react';
import { connect } from 'react-redux';
import '../../assets/styles/components/landign/LogoNav.scss';

const LogoNav = ({ fileurl }) => {
  return (
    <figure className='logo--container'>
      <img src={`${fileurl}/798165d3353a4a7769c1cf197d443fdafbcda69d899a0000bc4fc46fbe9994a1logo-nav.png`} alt='Logo-Cooperativa-Tonantel' />
    </figure>
  );
};

const mapStateToProps = (state) => {
  return {
    fileurl: state.producto.fileurl,
  };
};

export default connect(mapStateToProps, null)(LogoNav);
