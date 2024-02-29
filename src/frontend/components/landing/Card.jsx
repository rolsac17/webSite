import React from 'react';
import '../../assets/styles/components/landign/Card.scss';

const Card = ({ fileurl, icon, titulo, items }) => {
  return (
    <div className='card'>
      <h2 className='card__title'>{titulo}</h2>
      <figure className='card__container--img'>
        <img src={`${fileurl}/${icon}`} alt=':)' />
      </figure>
      <ul className='list'>
        {items.map((item) => (
          <li key={item.id} className='list--items'>
            {item.descripcion}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
