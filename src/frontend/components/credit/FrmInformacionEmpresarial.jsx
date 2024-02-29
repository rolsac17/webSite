/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const FrmInformacionEmpresarial = () => {
  return (
    <div className='container-strech'>
      <div className='grid'>
        <div className='grid-12'>
          <h2 className='form__title-group'>Información económico financiera (Empresarial)</h2>
          <hr className='line-separation' />
        </div>
        {/* Nombre de la empresa */}
        <div className='grid-12'>
          <div className='form-group'>
            <label htmlFor='empresa' className='form-group__label'>Nombre de la empresa</label>
            <input id='empresa' className='form-group__input' type='text' autoComplete='off' maxLength='45' />
            <p className='form-group__error'>Introduzca una nombre correcto</p>
          </div>
        </div>
        {/* Nombre de la comercial */}
        <div className='grid-12'>
          <div className='form-group'>
            <label htmlFor='ncomercial' className='form-group__label'>Nombre comercial</label>
            <input id='ncomercial' className='form-group__input' type='text' autoComplete='off' maxLength='45' />
            <p className='form-group__error'>Introduzca una nombre correcto</p>
          </div>
        </div>
        {/* Dirección de la empresa */}
        <div className='grid-12'>
          <div className='form-group'>
            <label htmlFor='dEmpres' className='form-group__label'>Dirección de la empresa</label>
            <input id='dEmpres' className='form-group__input' type='text' autoComplete='off' maxLength='255' />
            <p className='form-group__error'>Introduzca una direccion correcta</p>
          </div>
        </div>
        {/* Nombre del representante legal */}
        <div className='grid-12 grid-sm-6'>
          <div className='form-group'>
            <label htmlFor='Nrepresentante' className='form-group__label'>Nombre del representante legal</label>
            <input id='Nrepresentante' className='form-group__input' type='text' autoComplete='off' maxLength='75' />
            <p className='form-group__error'>Introduzca un nombre correcta</p>
          </div>
        </div>
        {/* Apellidos del representante legal */}
        <div className='grid-12 grid-sm-6'>
          <div className='form-group'>
            <label htmlFor='Arepresentante' className='form-group__label'>Apellidos del representante legal</label>
            <input id='Arepresentante' className='form-group__input' type='text' autoComplete='off' maxLength='75' />
            <p className='form-group__error'>Introduzca un apellido correcta</p>
          </div>
        </div>
        {/* DPI Representante legal */}
        <div className='grid-12 grid-sm-4'>
          <div className='form-group'>
            <label htmlFor='DPIR' className='form-group__label'>DPI Representante legal</label>
            <input id='DPIR' className='form-group__input' type='text' autoComplete='off' maxLength='20' />
            <p className='form-group__error'>Introduzca un DPI correcta</p>
          </div>
        </div>
        {/* NIT*/}
        <div className='grid-12 grid-sm-4'>
          <div className='form-group'>
            <label htmlFor='NITR' className='form-group__label'>NIT Representante legal</label>
            <input id='NITR' className='form-group__input' type='text' autoComplete='off' maxLength='20' />
            <p className='form-group__error'>Introduzca un NIT correcta</p>
          </div>
        </div>
        {/* Numero de patente */}
        <div className='grid-12 grid-sm-4'>
          <div className='form-group'>
            <label htmlFor='numPatente' className='form-group__label'>Numero de patente</label>
            <input id='numPatente' className='form-group__input' type='text' autoComplete='off' maxLength='25' />
            <p className='form-group__error'>Introduzca un numero correcta</p>
          </div>
        </div>
        {/* Teléfono */}
        <div className='grid-12 grid-sm-4'>
          <div className='form-group'>
            <label htmlFor='telR' className='form-group__label'>Teléfono </label>
            <input id='telR' className='form-group__input' type='text' autoComplete='off' maxLength='15' />
            <p className='form-group__error'>Introduzca una numero correcto</p>
          </div>
        </div>
        {/* Fecha de ingreso */}
        <div className='grid-12 grid-sm-4'>
          <div className='form-group'>
            <label htmlFor='dateR' className='form-group__label'>Fecha de inicio</label>
            <input id='dateR' className='form-group__input' type='date' autoComplete='off' />
            <p className='form-group__error'>Introduzca una fecha correcta</p>
          </div>
        </div>
        {/* Cantidad de empleados*/}
        <div className='grid-12 grid-sm-4'>
          <div className='form-group'>
            <label htmlFor='cantidad' className='form-group__label'>Cantidad de empleados</label>
            <input id='cantidad' className='form-group__input' type='text' autoComplete='off' maxLength='15' />
            <p className='form-group__error'>Introduzca una numero correcto</p>
          </div>
        </div>
        <div className='grid-12'>
          <h2 className='form__title-group'>Gastos de la empresa</h2>
          <hr className='line-separation' />
        </div>
        {/* Pago de mano de obra */}
        <div className='grid-12'>
          <div className='form-group grid-inline'>
            <label htmlFor='pagoMano' className='form-group__label'>Pago de mano de obra</label>
            <input id='pagoMano' className='form-group__input' type='text' autoComplete='off' maxLength='12' />
            <p className='form-group__error'>Introduzca una numero correcto</p>
          </div>
        </div>
        {/* Luz */}
        <div className='grid-12'>
          <div className='form-group grid-inline'>
            <label htmlFor='luz' className='form-group__label'>Luz</label>
            <input id='luz' className='form-group__input' type='text' autoComplete='off' maxLength='12' />
            <p className='form-group__error'>Introduzca una numero correcto</p>
          </div>
        </div>
        {/* Agua */}
        <div className='grid-12'>
          <div className='form-group grid-inline'>
            <label htmlFor='agua' className='form-group__label'>Agua</label>
            <input id='agua' className='form-group__input' type='text' autoComplete='off' maxLength='12' />
            <p className='form-group__error'>Introduzca una numero correcto</p>
          </div>
        </div>
        {/* Teléfono */}
        <div className='grid-12'>
          <div className='form-group grid-inline'>
            <label htmlFor='Tel' className='form-group__label'>Teléfono</label>
            <input id='Tel' className='form-group__input' type='text' autoComplete='off' maxLength='12' />
            <p className='form-group__error'>Introduzca una numero correcto</p>
          </div>
        </div>
        {/* Compras al contado */}
        <div className='grid-12'>
          <div className='form-group grid-inline'>
            <label htmlFor='Ccontacto' className='form-group__label'>Compras al contado</label>
            <input id='Ccontacto' className='form-group__input' type='text' autoComplete='off' maxLength='12' />
            <p className='form-group__error'>Introduzca una numero correcto</p>
          </div>
        </div>
        {/* Alquiler */}
        <div className='grid-12'>
          <div className='form-group grid-inline'>
            <label htmlFor='alquiler' className='form-group__label'>Alquiler</label>
            <input id='alquiler' className='form-group__input' type='text' autoComplete='off' maxLength='12' />
            <p className='form-group__error'>Introduzca una numero correcto</p>
          </div>
        </div>
        {/* Transporte */}
        <div className='grid-12'>
          <div className='form-group grid-inline'>
            <label htmlFor='transporte' className='form-group__label'>Trasnporte</label>
            <input id='transporte' className='form-group__input' type='text' autoComplete='off' maxLength='12' />
            <p className='form-group__error'>Introduzca una numero correcto</p>
          </div>
        </div>
        {/* Gastos financiero */}
        <div className='grid-12'>
          <div className='form-group grid-inline'>
            <label htmlFor='gf' className='form-group__label'>Gastos financiero</label>
            <input id='gf' className='form-group__input' type='text' autoComplete='off' maxLength='12' />
            <p className='form-group__error'>Introduzca una numero correcto</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrmInformacionEmpresarial;
