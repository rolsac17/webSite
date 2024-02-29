import React from 'react';
import Icon from 'icomoon-react';
import iconSet from '../../assets/Icoom/selection.json';
import '../../assets/styles/components/landign/RecItem.scss';

const RecItem = ({ fileurl, icono, id, titulo, descripcion }) => {
  return (
    <div className='recItem'>
      <div className='recItem__icon'>
        <figure>
          <Icon iconSet={iconSet} color='#757575' size={14} icon='checkmark' />
        </figure>
      </div>
      <h3 className='recItem__title'>{titulo}</h3>
      <p className='recItem__description'>{descripcion}</p>
    </div>
  );
};

export default RecItem;
