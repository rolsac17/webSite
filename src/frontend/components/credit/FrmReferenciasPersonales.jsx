/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const FrmReferenciasPersonales = () => {
  return (
    <div className='grid'>
      {/* Agrupacion datos referencias personales */}
      <div className='grid-12'>
        <h2 className='form__title-group'>Referencias personales</h2>
        <hr className='line-separation' />
      </div>
      {/* Nombres */}
      <div className='grid-12 grid-sm-5'>
        <div className='two'>
          <div className='form-group'>
            <label htmlFor='primerNombre' className='form-group__label'>Primer nombre</label>
            <input id='primerNombre' className='form-group__input border-none-r' type='text' autoComplete='off' maxLength='45' />
            <p className='form-group__error'>Introduzca un nombre correcto</p>
          </div>
          <div className='form-group'>
            <label htmlFor='segundoNombre' className='form-group__label'>Segundo nombre</label>
            <input id='segundoNombre' className='form-group__input border-none-l' type='text' autoComplete='off' maxLength='45' />
            <p className='form-group__error'>Introduzca un nombre correcto</p>
          </div>
        </div>
      </div>
      {/* Apellidos */}
      <div className='grid-12 grid-sm-5'>
        <div className='two'>
          <div className='form-group'>
            <label htmlFor='primerApellido' className='form-group__label'>Primer apellido</label>
            <input id='primerApellido' className='form-group__input border-none-r' type='text' autoComplete='off' maxLength='45' />
            <p className='form-group__error'>Introduzca un apellido correcto</p>
          </div>
          <div className='form-group'>
            <label htmlFor='segundoApellido' className='form-group__label'>Segundo apellido</label>
            <input id='segundoApellido' className='form-group__input border-none-l' type='text' autoComplete='off' maxLength='45' />
            <p className='form-group__error'>Introduzca un apellido correcto</p>
          </div>
        </div>
      </div>
      {/* Direccion de residencia */}
      <div className='grid-12'>
        <div className='form-group'>
          <label htmlFor='direccion' className='form-group__label'>Dirección de residencia</label>
          <input id='direccion' className='form-group__input' type='text' autoComplete='off' maxLength='255' />
          <p className='form-group__error'>Introduzca una direccion correcta</p>
        </div>
      </div>
      {/* Telefono 1 */}
      <div className='grid-12'>
        <div className='form-group'>
          <label htmlFor='telefono' className='form-group__label'>Teléfono</label>
          <input id='telefono' className='form-group__input' type='text' autoComplete='off' maxLength='8' />
          <p className='form-group__error'>Introduzca un numero correcta</p>
        </div>
      </div>
    </div>
  );
};

export default FrmReferenciasPersonales;
