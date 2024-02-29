import React from 'react';
import '../../assets/styles/components/website/BarSteps.scss';

const BarSteps = () => {
  return (
    // <div className='steps-bar'>
    //   <div className='steps-bar__circle is-full'>
    //     <span>1</span>
    //   </div>
    //   <div className='steps-bar__line is-full' />
    //   <div className='steps-bar__circle'>
    //     <span>2</span>
    //   </div>
    //   <div className='steps-bar__line' />
    //   <div className='steps-bar__circle'>
    //     <span>3</span>
    //   </div>
    //   <div className='steps-bar__line' />
    // </div>
    <div className='steps-bar'>
      <svg className='steps-bar__svg'>
        <circle className='steps-bar__circle-fixid' cx='50' cy='50' r='40' />
        <circle className='steps-bar__circle-progress' cx='50' cy='50' r='40' />
        <text className='steps-bar__text' x='50%' y='50%' alignmentBaseline='middle' textAnchor='middle'>1 of 3</text>
      </svg>
      <div>
        <p>Datos Personales</p>
        <span>Next:</span>
        <span>Formulario 2</span>
      </div>
    </div>
  );
};
export default BarSteps;
