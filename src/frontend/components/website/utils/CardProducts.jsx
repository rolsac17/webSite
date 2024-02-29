import React from 'react';
import { Link } from 'react-router-dom';
import '../../../assets/styles/components/website/CardProducts.scss';

const CardProducts = (props) => {
  const { id, nombre, descripcion, logo } = props;
  return (
    <article className='base-card card-items'>
      <div className='card-items__head'>
        <figure className='card-products__head--figure'>
          <img src={`https://fileserver.tonantel.com/${logo}`} alt='logo' />
        </figure>
        <div className='card-items__description'>
          <p>{descripcion}</p>
        </div>
      </div>
      <div className='card-items__body'>
        <h2 className='card-items__title'>{nombre}</h2>
        <div className='card-items__actions'>
          <Link to={`/producto?${id}`} className='btn btn-black'>Mas información</Link>
        </div>
      </div>
    </article>
  );
};

export default CardProducts;
