/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const FrmInformacionAsalariado = () => {
  return (
    <div className='container-strech'>
      <div className='grid'>
        <div className='grid-12'>
          <h2 className='form__title-group'>Información económico financiera (Asalariado)</h2>
          <hr className='line-separation' />
        </div>
        {/* Nombre de la empresa */}
        <div className='grid-12 grid-sm-12'>
          <div className='form-group'>
            <label htmlFor='empresa' className='form-group__label'>Nombre de la empresa</label>
            <input id='empresa' className='form-group__input' type='text' autoComplete='off' maxLength='45' />
            <p className='form-group__error'>Introduzca una nombre correcto</p>
          </div>
        </div>
        {/* Dirección laboral */}
        <div className='grid-12 grid-sm-12'>
          <div className='form-group'>
            <label htmlFor='direccion' className='form-group__label'>Dirección laboral</label>
            <input id='direccion' className='form-group__input' type='text' autoComplete='off' maxLength='255' />
            <p className='form-group__error'>Introduzca una direccion correcta</p>
          </div>
        </div>
        {/* Teléfono de la empresa */}
        <div className='grid-12 grid-sm-4'>
          <div className='form-group'>
            <label htmlFor='tel' className='form-group__label'>Teléfono de la empresa</label>
            <input id='tel' className='form-group__input' type='text' autoComplete='off' maxLength='15' />
            <p className='form-group__error'>Introduzca una numero correcto</p>
          </div>
        </div>
        {/* Fecha de ingreso */}
        <div className='grid-12 grid-sm-4'>
          <div className='form-group'>
            <label htmlFor='date' className='form-group__label'>Fecha de Ingreso</label>
            <input id='date' className='form-group__input' type='date' autoComplete='off' />
            <p className='form-group__error'>Introduzca una fecha correcta</p>
          </div>
        </div>
        {/* Salario liquido mensual */}
        <div className='grid-12 grid-sm-4'>
          <div className='form-group'>
            <label htmlFor='salario' className='form-group__label'>Salario liquido mensual</label>
            <input id='salario' className='form-group__input' type='text' autoComplete='off' maxLength='12' />
            <p className='form-group__error'>Introduzca informacion correcta</p>
          </div>
        </div>
        {/* Comisiones */}
        <div className='grid-12 grid-sm-4'>
          <div className='form-group'>
            <label htmlFor='comisiones' className='form-group__label'>Comisiones</label>
            <input id='comisiones' className='form-group__input' type='text' autoComplete='off' maxLength='12' />
            <p className='form-group__error'>Introduzca informacion correcta</p>
          </div>
        </div>
        {/* Honorarios */}
        <div className='grid-12 grid-sm-4'>
          <div className='form-group'>
            <label htmlFor='horarios' className='form-group__label'>Honorarios</label>
            <input id='horarios' className='form-group__input' type='text' autoComplete='off' maxLength='12' />
            <p className='form-group__error'>Introduzca informacion correcta</p>
          </div>
        </div>
        {/* Alquileres */}
        <div className='grid-12 grid-sm-4'>
          <div className='form-group'>
            <label htmlFor='alquileres' className='form-group__label'>Alquileres</label>
            <input id='alquileres' className='form-group__input' type='text' autoComplete='off' maxLength='12' />
            <p className='form-group__error'>Introduzca informacion correcta</p>
          </div>
        </div>
        {/* Alquileres */}
        <div className='grid-12 grid-sm-4'>
          <div className='form-group'>
            <label htmlFor='alquileres' className='form-group__label'>Alquileres</label>
            <input id='alquileres' className='form-group__input' type='text' autoComplete='off' maxLength='12' />
            <p className='form-group__error'>Introduzca informacion correcta</p>
          </div>
        </div>
        {/* Remesas */}
        <div className='grid-12 grid-sm-4'>
          <div className='form-group'>
            <label htmlFor='remesas' className='form-group__label'>Remesas</label>
            <input id='remesas' className='form-group__input' type='text' autoComplete='off' maxLength='12' />
            <p className='form-group__error'>Introduzca informacion correcta</p>
          </div>
        </div>
        {/* Negocio propio */}
        <div className='grid-12 grid-sm-4'>
          <div className='form-group'>
            <label htmlFor='negocio' className='form-group__label'>Negocio propio</label>
            <input id='negocio' className='form-group__input' type='text' autoComplete='off' maxLength='12' />
            <p className='form-group__error'>Introduzca informacion correcta</p>
          </div>
        </div>
        {/* Otros ingresos */}
        <div className='grid-12 grid-sm-4'>
          <div className='form-group'>
            <label htmlFor='otros' className='form-group__label'>Otros ingresos</label>
            <input id='otros' className='form-group__input' type='text' autoComplete='off' maxLength='12' />
            <p className='form-group__error'>Introduzca informacion correcta</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrmInformacionAsalariado;
