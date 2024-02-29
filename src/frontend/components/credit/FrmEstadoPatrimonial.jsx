/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const FrmEstadoPatrimonial = () => {
  return (
    <div className='container-strech'>

      <div className='grid'>
        <div className='grid-12'>
          {/* Agrupacion datos estado patrimonial*/}
          <h2 className='form__title-group'>Estado patrimonial</h2>
          <hr className='line-separation' />
          {/* Activos */}
          <h2 className='form__title-group'>Activos</h2>
        </div>
        {/* Caja y bancos */}
        <div className='grid-12'>
          <div className='form-group grid-inline'>
            <label htmlFor='caja' className='form-group__label'>Caja y bancos</label>
            <input id='caja' className='form-group__input' type='text' autoComplete='off' maxLength='12' />
            <p className='form-group__error'>Introduzca un valor</p>
          </div>
        </div>
        {/* Vehículos */}
        <div className='grid-12'>
          <div className='form-group grid-inline'>
            <label htmlFor='vehiculos' className='form-group__label'>Vehículos</label>
            <input id='vehiculos' className='form-group__input' type='text' autoComplete='off' maxLength='12' />
            <p className='form-group__error'>Introduzca un valor</p>
          </div>
        </div>
        {/* Inmuebles */}
        <div className='grid-12'>
          <div className='form-group grid-inline'>
            <label htmlFor='inmuebles' className='form-group__label'>Inmuebles</label>
            <input id='inmuebles' className='form-group__input' type='text' autoComplete='off' maxLength='12' />
            <p className='form-group__error'>Introduzca un valor</p>
          </div>
        </div>
        {/* Mercadería */}
        <div className='grid-12'>
          <div className='form-group grid-inline'>
            <label htmlFor='mercaderia' className='form-group__label'>Mercadería</label>
            <input id='mercaderia' className='form-group__input' type='text' autoComplete='off' maxLength='12' />
            <p className='form-group__error'>Introduzca un valor</p>
          </div>
        </div>
        {/* Menaje de casa */}
        <div className='grid-12'>
          <div className='form-group grid-inline'>
            <label htmlFor='menaje' className='form-group__label'>Menaje de casa</label>
            <input id='menaje' className='form-group__input' type='text' autoComplete='off' maxLength='12' />
            <p className='form-group__error'>Introduzca un valor</p>
          </div>
        </div>
        {/* Ganado */}
        <div className='grid-12'>
          <div className='form-group grid-inline'>
            <label htmlFor='ganado' className='form-group__label'>Ganado</label>
            <input id='ganado' className='form-group__input' type='text' autoComplete='off' maxLength='12' />
            <p className='form-group__error'>Introduzca un valor</p>
          </div>
        </div>
        {/* Maquinaria y Equipo */}
        <div className='grid-12'>
          <div className='form-group grid-inline'>
            <label htmlFor='maquina' className='form-group__label'>Maquinaria y Equipo</label>
            <input id='maquina' className='form-group__input' type='text' autoComplete='off' maxLength='12' />
            <p className='form-group__error'>Introduzca un valor</p>
          </div>
        </div>
        {/* Cuentas por cobrar */}
        <div className='grid-12'>
          <div className='form-group grid-inline'>
            <label htmlFor='cuentas' className='form-group__label'>Cuentas por cobrar</label>
            <input id='cuentas' className='form-group__input' type='text' autoComplete='off' maxLength='12' />
            <p className='form-group__error'>Introduzca un valor</p>
          </div>
        </div>
        {/* Otros activos */}
        <div className='grid-12'>
          <div className='form-group grid-inline'>
            <label htmlFor='otrosAc' className='form-group__label'>Otros activos</label>
            <input id='otrosAc' className='form-group__input' type='text' autoComplete='off' maxLength='12' />
            <p className='form-group__error'>Introduzca un valor</p>
          </div>
        </div>
        <div className='grid-12'>
          <h2 className='form__title-group'>Pasivo</h2>
        </div>
        {/* Créditos en la cooperativa */}
        <div className='grid-12'>
          <div className='form-group grid-inline'>
            <label htmlFor='creditos' className='form-group__label'>Créditos en la cooperativa</label>
            <input id='creditos' className='form-group__input' type='text' autoComplete='off' maxLength='12' />
            <p className='form-group__error'>Introduzca un valor</p>
          </div>
        </div>
        {/* Deudas en tarjetas de crédito */}
        <div className='grid-12'>
          <div className='form-group grid-inline'>
            <label htmlFor='deudastj' className='form-group__label'>Deudas en tarjetas de crédito</label>
            <input id='deudastj' className='form-group__input' type='text' autoComplete='off' maxLength='12' />
            <p className='form-group__error'>Introduzca un valor</p>
          </div>
        </div>
        {/* Deudas en bancos */}
        <div className='grid-12'>
          <div className='form-group grid-inline'>
            <label htmlFor='deudasb' className='form-group__label'>Deudas en bancos</label>
            <input id='deudasb' className='form-group__input' type='text' autoComplete='off' maxLength='12' />
            <p className='form-group__error'>Introduzca un valor</p>
          </div>
        </div>
        {/* Proveedores */}
        <div className='grid-12'>
          <div className='form-group grid-inline'>
            <label htmlFor='proveedores' className='form-group__label'>Proveedores</label>
            <input id='proveedores' className='form-group__input' type='text' autoComplete='off' maxLength='12' />
            <p className='form-group__error'>Introduzca un valor</p>
          </div>
        </div>
        {/* Deudas con particulares */}
        <div className='grid-12'>
          <div className='form-group grid-inline'>
            <label htmlFor='deudasp' className='form-group__label'>Deudas con particulares</label>
            <input id='deudasp' className='form-group__input' type='text' autoComplete='off' maxLength='12' />
            <p className='form-group__error'>Introduzca un valor</p>
          </div>
        </div>
        {/* Otros pasivos */}
        <div className='grid-12'>
          <div className='form-group grid-inline'>
            <label htmlFor='pasivos' className='form-group__label'>Otros pasivos</label>
            <input id='pasivos' className='form-group__input' type='text' autoComplete='off' maxLength='12' />
            <p className='form-group__error'>Introduzca un valor</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrmEstadoPatrimonial;
